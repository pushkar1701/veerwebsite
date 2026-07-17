import FadeIn from "@/components/FadeIn";

const projects = [
  {
    tag: "Python",
    title: "Cricket Score Tracker",
    description:
      "A Python CLI app that tracks runs, wickets, and overs during a match. Built with dictionaries and file I/O to save match history.",
    tech: ["Python", "JSON", "CLI"],
    featured: false,
  },
  {
    tag: "Python",
    title: "Quiz Game",
    description:
      "An interactive quiz with cricket and general knowledge questions. Uses random module and score tracking with fun emoji feedback.",
    tech: ["Python", "Random", "Input/Output"],
    featured: false,
  },
  {
    tag: "Python",
    title: "Number Guessing Game",
    description:
      "My first Python project! The computer picks a number and you guess. Includes hints, attempt counter, and a victory message.",
    tech: ["Python", "Loops", "Conditionals"],
    featured: false,
  },
  {
    tag: "Coming Soon",
    title: "Cricket Stats Dashboard",
    description:
      "A web dashboard to visualize batting averages, strike rates, and bowling figures — combining my two favorite things!",
    tech: ["Python", "Flask", "Charts"],
    featured: true,
  },
];

export default function Projects() {
  return (
    <section className="section" id="projects">
      <div className="container">
        <FadeIn className="section-header">
          <span className="section-tag">{"// projects"}</span>
          <h2>Things I&apos;ve Built</h2>
        </FadeIn>
        <div className="projects-grid">
          {projects.map((project) => (
            <FadeIn
              key={project.title}
              className={`project-card ${project.featured ? "featured" : ""}`}
            >
              <div className="project-tag">{project.tag}</div>
              <h3>{project.title}</h3>
              <p>{project.description}</p>
              <div className="project-tech">
                {project.tech.map((item) => (
                  <span key={item}>{item}</span>
                ))}
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
