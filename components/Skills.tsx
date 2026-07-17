"use client";

import FadeIn from "@/components/FadeIn";
import { useInView } from "@/hooks/useAnimations";

const skills = [
  {
    icon: "🐍",
    title: "Python",
    description:
      "Variables, loops, functions, OOP basics, and building fun CLI apps.",
    width: 75,
  },
  {
    icon: "🌐",
    title: "Web Basics",
    description:
      "HTML, CSS, and getting started with making things look good on the web.",
    width: 60,
  },
  {
    icon: "🏏",
    title: "Cricket",
    description:
      "Batting technique, fielding, reading the game, and staying calm under pressure.",
    width: 85,
  },
  {
    icon: "🧠",
    title: "Problem Solving",
    description:
      "Breaking big problems into smaller ones — on the pitch and in the editor.",
    width: 80,
  },
  {
    icon: "📊",
    title: "Data & Logic",
    description:
      "Lists, dictionaries, basic data handling — the building blocks of coding.",
    width: 70,
  },
  {
    icon: "🤝",
    title: "Teamwork",
    description:
      "Collaborating in group projects and on the cricket field with teammates.",
    width: 90,
  },
];

function SkillBar({ width }: { width: number }) {
  const { ref, inView } = useInView(0.5);

  return (
    <div className="skill-bar">
      <div
        ref={ref as React.RefObject<HTMLDivElement>}
        className="skill-fill"
        style={{ width: inView ? `${width}%` : "0%" }}
      />
    </div>
  );
}

export default function Skills() {
  return (
    <section className="section section-alt" id="skills">
      <div className="container">
        <FadeIn className="section-header">
          <span className="section-tag">{"// skills"}</span>
          <h2>My Toolkit</h2>
        </FadeIn>
        <div className="skills-grid">
          {skills.map((skill) => (
            <FadeIn key={skill.title} className="skill-card">
              <div className="skill-icon">{skill.icon}</div>
              <h3>{skill.title}</h3>
              <p>{skill.description}</p>
              <SkillBar width={skill.width} />
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
