"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { site, unityGames } from "@/data/site";

interface GameItem {
  id: string;
  name: string;
  tagline: string;
  href: string;
  image: string;
  status?: string;
}

const autoSequences = [
  { thought: "Optimizing 3D mesh & shader pipeline in Unity...", activeStep: 0, completedSteps: [] as number[] },
  { thought: "Profiling C# physics engine and frame rates...", activeStep: 1, completedSteps: [0] },
  { thought: "Compiling Google Play Android App Bundle (AAB)...", activeStep: 3, completedSteps: [0, 1, 2] },
  { thought: "Live sync connected with Google Play Developer Console...", activeStep: 4, completedSteps: [0, 1, 2, 3] },
];

export default function UnityGames() {
  const [games, setGames] = useState<GameItem[]>(unityGames as unknown as GameItem[]);
  const [loading, setLoading] = useState(true);
  const [agentThought, setAgentThought] = useState("Synchronizing with Google Play Developer Console...");
  const [activeStep, setActiveStep] = useState(0);
  const [completedSteps, setCompletedSteps] = useState<number[]>([]);
  const [autoPlay, setAutoPlay] = useState(true);

  // Auto-fetch games dynamically from Google Play on mount
  useEffect(() => {
    let isMounted = true;

    async function fetchGames() {
      try {
        const res = await fetch("/api/games");
        if (res.ok) {
          const data = await res.json();
          if (isMounted && data.games && data.games.length > 0) {
            setGames(data.games);
          }
        }
      } catch (err) {
        console.error("Failed to fetch Play Store games dynamically:", err);
      } finally {
        if (isMounted) setLoading(false);
      }
    }

    fetchGames();

    return () => {
      isMounted = false;
    };
  }, []);

  useEffect(() => {
    if (!autoPlay || typeof window === "undefined" || window.innerWidth <= 992) return;

    let index = 0;

    const start = setTimeout(() => {
      const seq = autoSequences[0];
      setAgentThought(seq.thought);
      setActiveStep(seq.activeStep);
      setCompletedSteps(seq.completedSteps);
    }, 1500);

    const interval = setInterval(() => {
      index = (index + 1) % autoSequences.length;
      const seq = autoSequences[index];
      setAgentThought(seq.thought);
      setActiveStep(seq.activeStep);
      setCompletedSteps(seq.completedSteps);
    }, 5000);

    return () => {
      clearTimeout(start);
      clearInterval(interval);
    };
  }, [autoPlay]);

  const planSteps = [
    "1. 3D Game Architecture (C#)",
    "2. Physics & Core Game Loop",
    "3. Shader & Asset Optimization",
    "4. Google Play AAB Build",
    "5. Production Live Release",
  ];

  const onProjectClick = (name: string, status: string) => {
    setAutoPlay(false);
    setAgentThought(`Launching Play Store listing for ${name} [${status.toUpperCase()}]...`);
    setActiveStep(4);
    setCompletedSteps([0, 1, 2, 3]);
  };

  return (
    <section id="ai-deployment">
      <div id="games-development" />
      <div className="container">
        <div className="project-wrapper">
          <h2 className="section-title">
            Unity Game Development <span className="section-badge pulse">PLAY STORE</span>
          </h2>
          <p className="section-description">
            Crafting immersive <strong>3D & 2D mobile games</strong> powered by the{" "}
            <strong>Unity Engine</strong> and <strong>C#</strong>. From responsive physics, custom
            mechanics, and optimized asset pipelines to publishing and maintaining live production
            titles on the <strong>Google Play Console</strong>.
          </p>
          <div className="cursor-editor">
            <div className="cursor-editor__sidebar">
              <div className="sidebar-icon active" title="Project Explorer">
                <i className="fa-solid fa-gamepad" />
              </div>
              <div className="sidebar-icon" title="C# Scripts">
                <i className="fa-solid fa-code" />
              </div>
              <div className="sidebar-icon" title="Physics & Shaders">
                <i className="fa-solid fa-cubes" />
              </div>
              <div className="sidebar-icon" title="Google Play Console">
                <i className="fa-brands fa-google-play" />
              </div>
              <div className="sidebar-icon bottom" title="Build Settings">
                <i className="fa-solid fa-gear" />
              </div>
            </div>
            <div className="cursor-editor__main">
              <div className="cursor-editor__body">
                <div className="cursor-editor__view active" id="view-dashboard">
                  <div className="cursor-editor__dashboard">
                    <div className="dashboard-header">
                      <div className="dashboard-title">
                        <i className="fa-brands fa-unity" /> <span>Unity Studio Console</span>
                      </div>
                      <div className="dashboard-stats">
                        <span className="stat">
                          <i className="fa-solid fa-circle-check" /> {games.length} Published Game{games.length === 1 ? "" : "s"}
                        </span>
                        <span className="stat">
                          <i className="fa-solid fa-cloud-arrow-up" /> {loading ? "Syncing..." : "Auto-Sync Active"}
                        </span>
                        <a
                          href={site.playStoreDevUrl}
                          target="_blank"
                          rel="noreferrer"
                          className="stat stat--link"
                          style={{
                            color: "#38ef7d",
                            textDecoration: "none",
                            display: "inline-flex",
                            alignItems: "center",
                            gap: "6px",
                            fontWeight: 600,
                          }}
                        >
                          <i className="fa-brands fa-google-play" /> View Dev Console
                        </a>
                      </div>
                    </div>
                    <div className="cursor-projects-grid">
                      {games.map((project) => (
                        <a
                          key={project.id || project.name}
                          href={project.href}
                          target="_blank"
                          rel="noreferrer"
                          className="cursor-project-card"
                          onClick={() => onProjectClick(project.name, project.status || "live")}
                        >
                          <div className="card-status live">
                            <span className="dot pulse" /> {project.status || "LIVE"}
                          </div>
                          <Image
                            src={project.image}
                            alt={project.name}
                            width={64}
                            height={64}
                            unoptimized
                          />
                          <div className="card-content">
                            <h4>{project.name}</h4>
                            <p>{project.tagline}</p>
                            <span className="play-link">
                              <i className="fa-brands fa-google-play" /> PlayStore
                            </span>
                          </div>
                        </a>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="cursor-editor__agent">
              <div className="agent-header">
                <div className="agent-title">
                  <span className="sparkle-icon">🎮</span> Unity Engine Pipeline
                </div>
                <div className="agent-mode">BUILD MODE</div>
              </div>
              <div className="agent-content">
                <div className="agent-message">
                  <div className="agent-thought" id="cursor-agent-thought">
                    {agentThought}
                  </div>
                  <div className="agent-plan">
                    {planSteps.map((step, idx) => (
                      <div
                        key={step}
                        className={`plan-step${idx === activeStep ? " active" : ""}${completedSteps.includes(idx) ? " complete" : ""}`}
                        id={`step-${idx + 1}`}
                      >
                        {step}
                      </div>
                    ))}
                  </div>
                </div>
                <div className="agent-input-view">
                  <span>Connected to Google Play Dev ID: 4676958373919906847</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
