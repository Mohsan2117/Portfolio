"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { agenticProjects } from "@/data/site";

const autoSequences = [
  { thought: "Analyzing health signatures for CareerLab AI...", activeStep: 0, completedSteps: [] as number[] },
  { thought: "Recalibrating Resume Reviewer NLP core...", activeStep: 2, completedSteps: [0, 1] },
  { thought: "Executing test suite for Math IQ Engine...", activeStep: 3, completedSteps: [0, 1, 2] },
];

export default function AIAgentic() {
  const [agentThought, setAgentThought] = useState("Monitoring active ecosystems...");
  const [activeStep, setActiveStep] = useState(0);
  const [completedSteps, setCompletedSteps] = useState<number[]>([]);
  const [autoPlay, setAutoPlay] = useState(true);

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
    "1. Scanning Requirements",
    "2. Engineering Logic",
    "3. Neural Optimization",
    "4. Testing Protocols",
    "5. Production Release",
  ];

  const onProjectClick = (name: string, status: string) => {
    setAutoPlay(false);
    setAgentThought(`Establishing secure handoff for ${name} [${status.toUpperCase()}]...`);
    setActiveStep(4);
    setCompletedSteps([0, 1, 2, 3]);
  };

  return (
    <section id="ai-deployment">
      <div className="container">
        <div className="project-wrapper">
          <h2 className="section-title">
            AI Agentic Development <span className="section-badge pulse">TRENDING</span>
          </h2>
          <p className="section-description">
            Welcome to the era of <strong>Autonomous Engineering</strong>. These production-grade
            applications were architected and deployed using an <strong>AI-First</strong> approach,
            leveraging <strong>Cursor</strong> and <strong>Google Antigravity</strong> to achieve
            unprecedented speed-to-market with zero manual syntax—proving that the future of dev is
            here.
          </p>
          <div className="cursor-editor">
            <div className="cursor-editor__sidebar">
              <div className="sidebar-icon active">
                <i className="fa-regular fa-file" />
              </div>
              <div className="sidebar-icon">
                <i className="fa-solid fa-magnifying-glass" />
              </div>
              <div className="sidebar-icon">
                <i className="fa-solid fa-code-branch" />
              </div>
              <div className="sidebar-icon">
                <i className="fa-solid fa-layer-group" />
              </div>
              <div className="sidebar-icon bottom">
                <i className="fa-solid fa-gear" />
              </div>
            </div>
            <div className="cursor-editor__main">
              <div className="cursor-editor__body">
                <div className="cursor-editor__view active" id="view-dashboard">
                  <div className="cursor-editor__dashboard">
                    <div className="dashboard-header">
                      <div className="dashboard-title">
                        <i className="fa-solid fa-layer-group" /> <span>Managed AI Stacks</span>
                      </div>
                      <div className="dashboard-stats">
                        <span className="stat">
                          <i className="fa-solid fa-circle-check" /> 6 Ready
                        </span>
                        <span className="stat">
                          <i className="fa-solid fa-microchip" /> Monitoring Active
                        </span>
                      </div>
                    </div>
                    <div className="cursor-projects-grid">
                      {agenticProjects.map((project) => (
                        <a
                          key={project.name}
                          href={project.href}
                          target="_blank"
                          rel="noreferrer"
                          className="cursor-project-card"
                          onClick={() => onProjectClick(project.name, "live")}
                        >
                          <div className="card-status live">
                            <span className="dot pulse" /> LIVE
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
                  <span className="sparkle-icon">✨</span> Cursor Agent
                </div>
                <div className="agent-mode">AGENT MODE</div>
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
                  <span>Orchestrating multi-platform AI ecosystems...</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
