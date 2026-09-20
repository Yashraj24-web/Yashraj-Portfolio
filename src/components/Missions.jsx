import { useState } from "react";
import "./Missions.css";

function Missions() {
  const [selectedMission, setSelectedMission] = useState(null);

  const missions = [
    {
      number: "01",
      title: "NEXORA",
      category: "AI + GIS + LOGISTICS",
      status: "ACTIVE",
      statusClass: "active",
      description:
        "AI-powered logistics and accessibility intelligence platform designed to monitor routes, predict disruptions and improve transportation across difficult terrains.",
      technologies: ["React", "AI/ML", "GIS", "Weather API"],
      progress: "85%",
      live:
        "https://capable-sorbet-af0280.netlify.app/",
      github: "",
    },

    {
      number: "02",
      title: "AI CHATBOT",
      category: "AI + JAVASCRIPT",
      status: "BUILDING",
      statusClass: "building",
      description:
        "Interactive AI chatbot interface built to communicate with users, maintain conversations and connect with generative AI services through APIs.",
      technologies: [
        "JavaScript",
        "AI API",
        "REST API",
        "LocalStorage",
      ],
      progress: "75%",
      live: "",
      github: "",
    },

    {
      number: "03",
      title: "AI AUTOMATION",
      category: "AI + WORKFLOW AUTOMATION",
      status: "EXPLORING",
      statusClass: "exploring",
      description:
        "AI automation workflows designed to connect applications, process information and automate repetitive real-world tasks using intelligent agents and workflow automation.",
      technologies: [
        "n8n",
        "AI Agents",
        "APIs",
        "Automation",
      ],
      progress: "60%",
      live: "",
      github: "",
    },

    {
      number: "04",
      title: "WEATHER APP",
      category: "REACT + API",
      status: "COMPLETED",
      statusClass: "completed",
      description:
        "Responsive weather application that fetches real-time weather information through an external API and presents it through a clean React interface.",
      technologies: [
        "React",
        "MUI",
        "API",
        "JavaScript",
      ],
      progress: "100%",
      live: "",
      github: "",
    },

    {
      number: "05",
      title: "SIMON SAYS",
      category: "JAVASCRIPT GAME",
      status: "COMPLETED",
      statusClass: "completed",
      description:
        "Interactive memory game built with JavaScript featuring levels, score tracking, animations and local storage for high scores.",
      technologies: [
        "HTML",
        "CSS",
        "JavaScript",
        "LocalStorage",
      ],
      progress: "100%",
      live: "",
      github: "",
    },
  ];

  return (
    <>
      <section className="missions-section" id="missions">

        <div className="missions-heading">

          <div className="heading-left">
            <span className="section-number">
              03 / 06
            </span>

            <h2>
              ACTIVE
              <span>MISSIONS</span>
            </h2>
          </div>

          <div className="heading-right">
            <span>PROJECT DATABASE</span>

            <p>
              Real-world problems.
              <br />
              Experimental solutions.
            </p>
          </div>

        </div>

        <div className="mission-grid">

          {missions.map((mission) => (
            <article
              className="mission-card"
              key={mission.number}
            >

              <div className="card-glow"></div>

              <div className="mission-header">

                <div className="mission-id">
                  MISSION
                  <strong>{mission.number}</strong>
                </div>

                <div
                  className={`mission-status ${mission.statusClass}`}
                >
                  <span></span>
                  {mission.status}
                </div>

              </div>

              <div className="mission-main">

                <p className="mission-category">
                  {mission.category}
                </p>

                <h3>{mission.title}</h3>

                <p className="mission-description">
                  {mission.description}
                </p>

              </div>

              <div className="technology-list">

                {mission.technologies.map(
                  (technology) => (
                    <span key={technology}>
                      {technology}
                    </span>
                  )
                )}

              </div>

              <div className="mission-footer">

                <div className="progress-container">

                  <div className="progress-label">
                    <span>DEVELOPMENT</span>
                    <span>{mission.progress}</span>
                  </div>

                  <div className="progress-bar">
                    <div
                      className="progress-fill"
                      style={{
                        width: mission.progress,
                      }}
                    ></div>
                  </div>

                </div>

                <button
                  className="mission-button"
                  onClick={() =>
                    setSelectedMission(mission)
                  }
                >
                  <span>VIEW</span>
                  <span>→</span>
                </button>

              </div>

            </article>
          ))}

        </div>

        <div className="missions-footer">

          <span>
            05 PROJECTS REGISTERED
          </span>

          <span>
            SYSTEM STATUS: OPERATIONAL
          </span>

        </div>

      </section>

      {selectedMission && (
        <div
          className="mission-modal"
          onClick={() => setSelectedMission(null)}
        >

          <div
            className="modal-content"
            onClick={(event) =>
              event.stopPropagation()
            }
          >

            <button
              className="modal-close"
              onClick={() =>
                setSelectedMission(null)
              }
            >
              ×
            </button>

            <span className="modal-number">
              MISSION {selectedMission.number}
            </span>

            <h2>{selectedMission.title}</h2>

            <p className="modal-category">
              {selectedMission.category}
            </p>

            <p className="modal-description">
              {selectedMission.description}
            </p>

            <div className="modal-tech">

              {selectedMission.technologies.map(
                (technology) => (
                  <span key={technology}>
                    {technology}
                  </span>
                )
              )}

            </div>

            <div className="modal-status">
              STATUS:
              <strong>
                {selectedMission.status}
              </strong>
            </div>

            <div className="modal-links">

              {selectedMission.live && (
                <a
                  href={selectedMission.live}
                  target="_blank"
                  rel="noreferrer"
                  className="project-link primary"
                >
                  LIVE DEMO
                  <span>↗</span>
                </a>
              )}

              {selectedMission.github && (
                <a
                  href={selectedMission.github}
                  target="_blank"
                  rel="noreferrer"
                  className="project-link"
                >
                  GITHUB
                  <span>↗</span>
                </a>
              )}

              {!selectedMission.live &&
                !selectedMission.github && (
                  <span className="coming-soon">
                    LINKS COMING SOON
                  </span>
                )}

            </div>

          </div>

        </div>
      )}
    </>
  );
}

export default Missions;