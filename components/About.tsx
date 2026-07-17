import FadeIn from "@/components/FadeIn";

const highlights = [
  "🐍 Learning Python & building small projects",
  "🏏 Cricket player — batsman & part-time bowler",
  "📚 Always curious, always learning",
  "🎯 Team player on and off the field",
];

const playerInfo = [
  { label: "Name", value: "Veer Malhotra" },
  { label: "Role", value: "Python Dev + Cricketer" },
  { label: "Style", value: "Aggressive Coder" },
  { label: "Favorite Shot", value: "Cover Drive 💫" },
  { label: "Go-to Library", value: "requests, tkinter" },
];

export default function About() {
  return (
    <section className="section" id="about">
      <div className="container">
        <FadeIn className="section-header">
          <span className="section-tag">{"// about_me"}</span>
          <h2>Who Am I?</h2>
        </FadeIn>
        <FadeIn className="about-grid">
          <div className="about-text">
            <p>
              I&apos;m <strong>Veer Malhotra</strong> — a curious mind who finds
              joy in two worlds: the elegance of Python and the thrill of
              cricket.
            </p>
            <p>
              Whether I&apos;m debugging a script or facing a fast bowler, I
              love the challenge of solving problems and pushing my limits. My
              dream? To build apps that make a difference — and maybe score a
              century along the way.
            </p>
            <ul className="about-highlights">
              {highlights.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
          <div className="about-card scorecard">
            <div className="scorecard-header">
              <span>PLAYER CARD</span>
              <span className="scorecard-badge">ALL-ROUNDER</span>
            </div>
            <div className="scorecard-body">
              {playerInfo.map((row) => (
                <div className="player-row" key={row.label}>
                  <span>{row.label}</span>
                  <strong>{row.value}</strong>
                </div>
              ))}
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
