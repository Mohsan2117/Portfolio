import { NextResponse } from "next/server";

export interface GameItem {
  id: string;
  name: string;
  tagline: string;
  href: string;
  image: string;
  status?: string;
}

// Fallback games in case Google Play blocks or network fails
const FALLBACK_GAMES: GameItem[] = [
  {
    id: "lcs.grow.sell.market.simulator",
    name: "Grow & Sell: Market Simulator",
    tagline: "3D Farm & Market Simulation",
    href: "https://play.google.com/store/apps/details?id=lcs.grow.sell.market.simulator",
    image:
      "https://play-lh.googleusercontent.com/PGvNrmOQ56MiaHiFRXHuRx-1jHIyxACf1RVRqm5ahpvSDGMgTvqfnhBruT5n2hIccLcy8x1RuebQaZJVlS8YMd4=s256",
    status: "LIVE",
  },
];

const DEV_ID = "4676958373919906847";
const PLAY_DEV_URL = `https://play.google.com/store/apps/dev?id=${DEV_ID}&hl=en&gl=US`;

export const dynamic = "force-dynamic";

function cleanImageUrl(url: string): string {
  if (!url) return "/file.svg";
  // Remove existing size params like =s256, =w240, =s0-br30, etc.
  const base = url.split("=")[0];
  return `${base}=s256-rw`;
}

export async function GET() {
  try {
    const res = await fetch(PLAY_DEV_URL, {
      headers: {
        "User-Agent":
          "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36",
        Accept: "text/html,application/xhtml+xml,application/xml;q=0.9,*/*;q=0.8",
        "Accept-Language": "en-US,en;q=0.9",
      },
      next: { revalidate: 300 },
    });

    if (!res.ok) {
      return NextResponse.json({
        source: "fallback",
        developerId: DEV_ID,
        developerUrl: `https://play.google.com/store/apps/dev?id=${DEV_ID}`,
        games: FALLBACK_GAMES,
      });
    }

    const html = await res.text();

    // Match all unique app package IDs from developer page
    const appRegex = /\/store\/apps\/details\?id=([a-zA-Z0-9._]+)/g;
    const foundIds = new Set<string>();
    let match: RegExpExecArray | null;

    while ((match = appRegex.exec(html)) !== null) {
      const appId = match[1];
      if (appId && !appId.includes("com.google") && !appId.includes("android")) {
        foundIds.add(appId);
      }
    }

    if (foundIds.size === 0) {
      return NextResponse.json({
        source: "fallback",
        developerId: DEV_ID,
        developerUrl: `https://play.google.com/store/apps/dev?id=${DEV_ID}`,
        games: FALLBACK_GAMES,
      });
    }

    // Parse details for each app
    const games: GameItem[] = [];

    for (const appId of foundIds) {
      const idIdx = html.indexOf(`/store/apps/details?id=${appId}`);
      let name = "";
      let image = "";

      if (idIdx !== -1) {
        const start = Math.max(0, idIdx - 600);
        const end = Math.min(html.length, idIdx + 1200);
        const chunk = html.substring(start, end);

        // Extract title
        const titleMatch =
          chunk.match(/<span[^>]*title="([^"]+)"/) ||
          chunk.match(/title="([^"]+)"/) ||
          chunk.match(/<div class="[a-zA-Z0-9 ]*">([^<]+)<\/div>/);
        if (titleMatch && titleMatch[1]) {
          name = titleMatch[1].replace(/&amp;/g, "&").replace(/&#39;/g, "'");
        }

        // Extract icon
        const imgMatch = chunk.match(
          /https:\/\/play-lh\.googleusercontent\.com\/[a-zA-Z0-9_\-=]+/
        );
        if (imgMatch) {
          image = cleanImageUrl(imgMatch[0]);
        }
      }

      // If we couldn't get title or image from dev page, fetch individual app page
      if (!name || !image) {
        try {
          const appRes = await fetch(
            `https://play.google.com/store/apps/details?id=${appId}&hl=en&gl=US`,
            {
              headers: {
                "User-Agent":
                  "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36",
              },
            }
          );
          if (appRes.ok) {
            const appHtml = await appRes.text();
            const ogTitle = appHtml.match(/<meta property="og:title" content="([^"]+)"/);
            if (ogTitle && ogTitle[1]) {
              name = ogTitle[1]
                .replace(" - Apps on Google Play", "")
                .replace(/&amp;/g, "&")
                .replace(/&#39;/g, "'");
            }

            const ogImage = appHtml.match(/<meta property="og:image" content="([^"]+)"/);
            if (ogImage && ogImage[1]) {
              image = cleanImageUrl(ogImage[1]);
            }
          }
        } catch {
          // ignore error and proceed
        }
      }

      // Check fallback if still missing
      const fallback = FALLBACK_GAMES.find((g) => g.id === appId);
      if (!name && fallback) name = fallback.name;
      if (!image && fallback) image = fallback.image;

      if (name) {
        games.push({
          id: appId,
          name: name || "Unity Game",
          tagline: fallback ? fallback.tagline : "Unity 3D Mobile Game",
          href: `https://play.google.com/store/apps/details?id=${appId}`,
          image: image || "/file.svg",
          status: "LIVE",
        });
      }
    }

    return NextResponse.json({
      source: "live",
      developerId: DEV_ID,
      developerUrl: `https://play.google.com/store/apps/dev?id=${DEV_ID}`,
      count: games.length,
      games: games.length > 0 ? games : FALLBACK_GAMES,
    });
  } catch (error) {
    return NextResponse.json({
      source: "error_fallback",
      error: error instanceof Error ? error.message : "Unknown error",
      developerId: DEV_ID,
      developerUrl: `https://play.google.com/store/apps/dev?id=${DEV_ID}`,
      games: FALLBACK_GAMES,
    });
  }
}
