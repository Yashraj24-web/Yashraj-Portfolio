import { useState } from "react";
import "./Journey.css";

function Journey() {
  const [selectedLevel, setSelectedLevel] = useState(null);

  const journey = [
    {
      level: "01",
      title: "THE BEGINNING",
      year: "2025",
      subtitle: "BTECH CSE",
      description:
        "Started the Computer Science journey with a curiosity for technology, programming and building things from scratch.",
      tags: ["CSE", "Programming", "Problem Solving"],
    },
    {
      level: "02",
      title: "FIRST BUILD",
      year: "2025",
      subtitle: "WEB DEVELOPMENT",
      description:
        "Built a foundation in HTML, CSS and JavaScript and started creating interactive web experiences.",
      tags: ["HTML", "CSS", "JavaScript"],
    },
    {
      level: "03",
      title: "LEVEL UP",
      year: "2026",
      subtitle: "REACT",
      description:
        "Moved into component-based development and started building modern applications with React.",
      tags: ["React", "Vite", "Components", "State"],
    },
    {
      level: "04",
      title: "INTELLIGENCE",
      year: "2026",
      subtitle: "AI / AUTOMATION",
      description:
        "Started exploring AI, LLMs, APIs and automation to build systems that solve practical problems.",
      tags: ["AI", "LLMs", "APIs", "n8n"],
    },
    {
      level: "05",
      title: "THE CHALLENGE",
      year: "2026",
      subtitle: "NEXORA / HACKATHONS",
      description:
        "Started working on real-world problem statements and collaborative hackathon projects focused on practical technology solutions.",
      tags: ["Nexora", "SIH", "Teamwork", "Innovation"],
    },
    {
      level: "06",
      title: "CURRENT QUEST",
      year: "NOW",
      subtitle: "KEEP BUILDING",
      description:
        "The journey is still in progress. The next objectives are stronger DSA, deeper development skills, real projects and continuous experimentation.",
      tags: ["DSA", "Full Stack", "AI", "Projects"],
    },
  ];

  return (
    <>
      <section className="journey-section" id="journey">

        <div className="journey-heading">
          <div>
            <span>05 / 06</span>

            <h2>
              CHARACTER
              <span>JOURNEY</span>
            </h2>
          </div>

          <div className="journey-intro">
            <span>PROGRESSION LOG</span>

            <p>
              Every level started with curiosity.
              <br />
              Every project unlocked something new.
            </p>
          </div>
        </div>

        <div className="journey-track">

          <div className="journey-line"></div>

          {journey.map((item, index) => (
            <button
              className={`journey-item ${
                index % 2 === 0 ? "left" : "right"
              }`}
              key={item.level}
              onClick={() => setSelectedLevel(item)}
            >

              <div className="journey-node">
                {item.level}
              </div>

              <div className="journey-card">

                <div className="journey-card-top">
                  <span>LEVEL {item.level}</span>
                  <span>{item.year}</span>
                </div>

                <h3>{item.title}</h3>

                <p className="journey-subtitle">
                  {item.subtitle}
                </p>

                <p className="journey-description">
                  {item.description}
                </p>

                <div className="journey-tags">
                  {item.tags.map((tag) => (
                    <span key={tag}>{tag}</span>
                  ))}
                </div>

              </div>

            </button>
          ))}

        </div>

        <div className="journey-footer">
          <span>QUEST STATUS</span>
          <strong>IN PROGRESS</strong>
        </div>

      </section>

      {selectedLevel && (
        <div
          className="journey-modal"
          onClick={() => setSelectedLevel(null)}
        >
          <div
            className="journey-modal-content"
            onClick={(event) => event.stopPropagation()}
          >
            <button
              className="journey-close"
              onClick={() => setSelectedLevel(null)}
            >
              ×
            </button>

            <span>LEVEL {selectedLevel.level}</span>

            <h2>{selectedLevel.title}</h2>

            <h3>{selectedLevel.subtitle}</h3>

            <p>{selectedLevel.description}</p>

            <div>
              {selectedLevel.tags.map((tag) => (
                <span className="modal-tag" key={tag}>
                  {tag}
                </span>
              ))}
            </div>

            <strong className="modal-year">
              {selectedLevel.year}
            </strong>
          </div>
        </div>
      )}
    </>
  );
}

export default Journey;