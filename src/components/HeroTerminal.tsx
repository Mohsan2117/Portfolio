"use client";

import { useEffect, useRef, useState } from "react";
import { site } from "@/data/site";

const { terminal } = site;

export default function HeroTerminal() {
  const [history, setHistory] = useState<string[]>([]);
  const [currentText, setCurrentText] = useState("");
  const [commandIndex, setCommandIndex] = useState(0);
  const [phase, setPhase] = useState<"typing" | "pause">("typing");

  const charIndex = useRef(0);
  const historyRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (phase === "pause") return;

    const command = terminal.commands[commandIndex];

    const timer = setTimeout(() => {
      if (charIndex.current < command.length) {
        setCurrentText(command.slice(0, charIndex.current + 1));
        charIndex.current++;
      } else {
        setPhase("pause");
      }
    }, 50);

    return () => clearTimeout(timer);
  }, [currentText, phase, commandIndex]);

  useEffect(() => {
    if (phase !== "pause") return;

    const timer = setTimeout(() => {
      const command = terminal.commands[commandIndex];

      setHistory((h) => [...h, command]);
      setCurrentText("");
      charIndex.current = 0;

      setCommandIndex((i) => (i + 1) % terminal.commands.length);

      setPhase("typing");

      if (historyRef.current) {
        const body = historyRef.current.closest(".terminal__body");
        if (body) body.scrollTop = body.scrollHeight;
      }
    }, 1500);

    return () => clearTimeout(timer);
  }, [phase, commandIndex]);

  return (
    <div className="hero__terminal">
      <div className="terminal__header">
        <span className="terminal__dot terminal__dot--red" />
        <span className="terminal__dot terminal__dot--yellow" />
        <span className="terminal__dot terminal__dot--green" />
        <span className="terminal__tab">{terminal.tab}</span>
      </div>

      <div className="terminal__body">
        <div className="terminal__line">
          <span className="terminal__prompt">{terminal.prompt}</span>{" "}
          <span className="terminal__static">{terminal.staticCommand}</span>
        </div>

        <div id="terminal-history" ref={historyRef}>
          {history.map((line, idx) => (
            <div className="terminal__line" key={`${line}-${idx}`}>
              <span className="terminal__prompt">{terminal.prompt}</span>{" "}
              <span className="terminal__history-line">{line}</span>
            </div>
          ))}
        </div>

        <div className="terminal__line">
          <span className="terminal__prompt">{terminal.prompt}</span>{" "}
          <span className="multiText">
            {currentText}
            <span className="terminal__cursor">|</span>
          </span>
        </div>
      </div>
    </div>
  );
}
