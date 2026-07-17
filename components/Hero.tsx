"use client";

import { useCounter, useInView } from "@/hooks/useAnimations";

const stats = [
  { target: 3, label: "Python Projects" },
  { target: 150, label: "Cricket Runs" },
  { target: 12, label: "Wickets Taken" },
];

function StatCard({ target, label }: { target: number; label: string }) {
  const { ref, inView } = useInView(0.5);
  const value = useCounter(target, inView);

  return (
    <div className="stat-card" ref={ref as React.RefObject<HTMLDivElement>}>
      <span className="stat-value">{value}</span>
      <span className="stat-label">{label}</span>
    </div>
  );
}

export default function Hero() {
  return (
    <header className="hero" id="hero">
      <div className="hero-content">
        <p className="hero-badge">
          <span className="badge-dot"></span>
          Open to new projects & cricket matches
        </p>
        <h1 className="hero-title">
          Hi, I&apos;m <span className="highlight">Veer</span>
          <span className="hero-subtitle">Malhotra</span>
        </h1>
        <p className="hero-tagline">
          I write <code>Python</code> by day and chase boundaries by evening.
          Building cool stuff with code — one over at a time.
        </p>
        <div className="hero-actions">
          <a href="#projects" className="btn btn-primary">
            See My Projects
          </a>
          <a href="#contact" className="btn btn-secondary">
            Get In Touch
          </a>
        </div>
        <div className="hero-stats">
          {stats.map((stat) => (
            <StatCard key={stat.label} {...stat} />
          ))}
        </div>
      </div>
      <div className="hero-visual">
        <div className="code-window">
          <div className="code-header">
            <span className="dot red"></span>
            <span className="dot yellow"></span>
            <span className="dot green"></span>
            <span className="filename">veer.py</span>
          </div>
          <pre className="code-body">
            <code>
              <span className="kw">class</span>{" "}
              <span className="cls">VeerMalhotra</span>:{"\n"}
              {"    "}
              <span className="kw">def</span> <span className="fn">__init__</span>
              (<span className="self">self</span>):{"\n"}
              {"        "}
              <span className="self">self</span>.passion = [
              <span className="str">&quot;Python&quot;</span>,{" "}
              <span className="str">&quot;Cricket&quot;</span>]{"\n"}
              {"        "}
              <span className="self">self</span>.motto ={" "}
              <span className="str">&quot;Code. Play. Repeat.&quot;</span>
              {"\n\n"}
              {"    "}
              <span className="kw">def</span>{" "}
              <span className="fn">play_cricket</span>(
              <span className="self">self</span>):{"\n"}
              {"        "}
              <span className="kw">return</span>{" "}
              <span className="str">&quot;🏏 Boundary!&quot;</span>
              {"\n\n"}
              {"    "}
              <span className="kw">def</span> <span className="fn">write_code</span>
              (<span className="self">self</span>):{"\n"}
              {"        "}
              <span className="kw">return</span>{" "}
              <span className="str">&quot;🐍 Hello, World!&quot;</span>
              {"\n\n"}
              <span className="var">veer</span> ={" "}
              <span className="cls">VeerMalhotra</span>(){"\n"}
              <span className="fn">print</span>(
              <span className="var">veer</span>.motto)
            </code>
          </pre>
        </div>
      </div>
    </header>
  );
}
