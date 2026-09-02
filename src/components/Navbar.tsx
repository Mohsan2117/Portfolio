"use client";

import { useCallback, useEffect, useState } from "react";
import { site } from "@/data/site";

const NAV_SCROLL_OFFSET = 140;

/** Map nav href to DOM section id */
function hrefToSectionId(href: string): string {
  return href === "#top" ? "hero" : href.replace("#", "");
}

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeHash, setActiveHash] = useState("#top");

  const updateActiveSection = useCallback(() => {
    const scrollY = window.scrollY;

    if (scrollY < 80) {
      setActiveHash("#top");
      return;
    }

    const scrollPos = scrollY + NAV_SCROLL_OFFSET;
    let current = "#top";

    for (const item of site.nav) {
      const sectionId = hrefToSectionId(item.href);
      const el = document.getElementById(sectionId);
      if (!el) continue;

      const top = el.getBoundingClientRect().top + scrollY;
      if (top <= scrollPos) {
        current = item.href;
      }
    }

    setActiveHash(current);
  }, []);

  useEffect(() => {
    const navbar = document.getElementById("navbar");

    const onScroll = () => {
      if (navbar) {
        const scrollTop = window.scrollY;
        const docHeight = document.documentElement.scrollHeight - window.innerHeight;
        const progress = docHeight > 0 ? (scrollTop / docHeight) * 100 : 0;
        navbar.style.setProperty("--scroll-progress", `${progress}%`);
        navbar.classList.toggle("scrolled", scrollTop > 50);
      }
      updateActiveSection();
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", updateActiveSection, { passive: true });
    onScroll();

    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", updateActiveSection);
    };
  }, [updateActiveSection]);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setActiveHash(href);
    setMenuOpen(false);

    const sectionId = hrefToSectionId(href);
    const el = document.getElementById(sectionId);
    if (el) {
      const top = el.getBoundingClientRect().top + window.scrollY - NAV_SCROLL_OFFSET + 20;
      window.scrollTo({ top: Math.max(0, top), behavior: "smooth" });
    } else if (href === "#top") {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  return (
    <>
      <nav className="navbar" id="navbar" role="navigation" aria-label="Main navigation">
        <div className="container">
          <div className="navbar__content">
            <ul
              className={`navbar__menu${menuOpen ? " active" : ""}`}
              id="navbar-menu"
              role="menubar"
            >
              {site.nav.map((item) => (
                <li className="navbar__item" role="none" key={item.href}>
                  <a
                    href={item.href}
                    className={`navbar__link${activeHash === item.href ? " active" : ""}`}
                    role="menuitem"
                    aria-current={activeHash === item.href ? "page" : undefined}
                    onClick={(e) => handleNavClick(e, item.href)}
                  >
                    {item.label}
                    {"badge" in item && item.badge ? (
                      <span className="navbar__badge">{item.badge}</span>
                    ) : null}
                  </a>
                </li>
              ))}
            </ul>
            <button
              className={`navbar__toggle${menuOpen ? " active" : ""}`}
              id="navbar-toggle"
              aria-label="Toggle navigation"
              aria-expanded={menuOpen}
              aria-controls="navbar-menu"
              type="button"
              onClick={() => setMenuOpen((o) => !o)}
            >
              <span />
              <span />
              <span />
            </button>
          </div>
        </div>
      </nav>
      <div
        className={`navbar__backdrop${menuOpen ? " active" : ""}`}
        id="navbar-backdrop"
        aria-hidden={!menuOpen}
        onClick={() => setMenuOpen(false)}
      />
    </>
  );
}
