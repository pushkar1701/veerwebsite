"use client";

import FadeIn from "@/components/FadeIn";
import { useCounter, useInView } from "@/hooks/useAnimations";

const boardStats = [
  { target: 150, label: "Total Runs" },
  { target: 42, label: "Highest Score" },
  { target: 12, label: "Wickets" },
  { target: 8, label: "Matches Played" },
];

function BoardStat({ target, label }: { target: number; label: string }) {
  const { ref, inView } = useInView(0.5);
  const value = useCounter(target, inView);

  return (
    <div className="board-stat">
      <span
        className="board-num"
        ref={ref as React.RefObject<HTMLSpanElement>}
      >
        {value}
      </span>
      <span className="board-label">{label}</span>
    </div>
  );
}

export default function Cricket() {
  return (
    <section className="section section-alt" id="cricket">
      <div className="container">
        <FadeIn className="section-header">
          <span className="section-tag">{"// cricket_stats"}</span>
          <h2>On the Pitch</h2>
        </FadeIn>
        <FadeIn className="cricket-board">
          <div className="board-header">
            <span>LIVE SCORECARD</span>
            <span className="live-dot">● LIVE</span>
          </div>
          <div className="board-stats">
            {boardStats.map((stat) => (
              <BoardStat key={stat.label} {...stat} />
            ))}
          </div>
          <blockquote className="cricket-quote">
            &quot;Cricket teaches you patience. Coding teaches you persistence.
            Together, they make you unstoppable.&quot;
            <cite>— Veer Malhotra</cite>
          </blockquote>
        </FadeIn>
      </div>
    </section>
  );
}
