import { useState } from "react";
import "./SkillTree.css";

function SkillTree() {
  const [selectedSkill, setSelectedSkill] = useState(null);

  const skills = [
    {
      id: "01",
      name: "HTML / CSS",
      level: "ADVANCED",
      progress: "85%",
      category: "FOUNDATION",
      description:
        "The foundation layer of my web development journey. Used for building responsive, structured and visually clean interfaces.",
      technologies: ["HTML5", "CSS3", "Responsive Design"],
    },

    {
      id: "02",
      name: "JAVASCRIPT",
      level: "INTERMEDIATE",
      progress: "75%",
      category: "CORE",
      description:
        "Core programming language for my frontend projects, interactive interfaces, APIs and browser-based applications.",
      technologies: ["ES6+", "DOM", "APIs", "LocalStorage"],
    },

    {
      id: "03",
      name: "REACT",
      level: "LEARNING",
      progress: "65%",
      category: "FRONTEND",
      description:
        "Currently developing React skills through component-based projects, state management and reusable UI architecture.",
      technologies: ["React", "Components", "State", "Vite"],
    },

    {
      id: "04",
      name: "C++",
      level: "LEARNING",
      progress: "45%",
      category: "PROGRAMMING",
      description:
        "Programming language being used for building a strong foundation in problem solving and Data Structures & Algorithms.",
      technologies: ["C++", "STL", "OOP"],
    },

    {
      id: "05",
      name: "DSA",
      level: "STARTING",
      progress: "35%",
      category: "PROBLEM SOLVING",
      description:
        "Focused on developing algorithmic thinking and solving structured programming problems through Data Structures and Algorithms.",
      technologies: ["Arrays", "Strings", "STL", "Algorithms"],
    },

    {
      id: "06",
      name: "AI / ML",
      level: "EXPLORING",
      progress: "55%",
      category: "INTELLIGENCE",
      description:
        "Exploring artificial intelligence, machine learning concepts and practical AI-powered applications.",
      technologies: ["AI APIs", "ML", "LLMs", "Prediction"],
    },

    {
      id: "07",
      name: "AI AUTOMATION",
      level: "EXPLORING",
      progress: "60%",
      category: "AUTOMATION",
      description:
        "Learning to connect AI models, APIs and workflows to automate repetitive real-world tasks and build intelligent systems.",
      technologies: ["n8n", "AI Agents", "APIs", "Workflows"],
    },

    {
      id: "08",
      name: "GIT / GITHUB",
      level: "INTERMEDIATE",
      progress: "65%",
      category: "DEVELOPMENT",
      description:
        "Version control and project collaboration skills used for maintaining and publishing development projects.",
      technologies: ["Git", "GitHub", "Repositories", "Deployment"],
    },
  ];

  return (
    <>
      <section className="skill-tree-section" id="skills">

        <div className="skill-heading">

          <div>
            <span className="skill-section-number">
              04 / 05
            </span>

            <h2>
              SKILL
              <span>TREE</span>
            </h2>
          </div>

          <div className="skill-heading-info">
            <span>CHARACTER DEVELOPMENT</span>

            <p>
              Every skill is a node.
              <br />
              Every project unlocks the next level.
            </p>
          </div>

        </div>

        <div className="skill-tree">

          <div className="tree-line"></div>

          {skills.map((skill, index) => (
            <button
              className={`skill-node node-${index + 1}`}
              key={skill.id}
              onClick={() => setSelectedSkill(skill)}
            >

              <span className="node-number">
                {skill.id}
              </span>

              <span className="node-core"></span>

              <span className="node-name">
                {skill.name}
              </span>

              <span className="node-level">
                {skill.level}
              </span>

            </button>
          ))}

        </div>

        <div className="skill-instruction">
          <span>◎</span>
          SELECT A SKILL NODE TO VIEW DETAILS
        </div>

      </section>

      {selectedSkill && (
        <div
          className="skill-modal"
          onClick={() => setSelectedSkill(null)}
        >

          <div
            className="skill-modal-content"
            onClick={(event) => event.stopPropagation()}
          >

            <button
              className="skill-modal-close"
              onClick={() => setSelectedSkill(null)}
            >
              ×
            </button>

            <span className="skill-modal-category">
              {selectedSkill.category}
            </span>

            <h2>{selectedSkill.name}</h2>

            <div className="skill-progress-info">

              <span>
                CURRENT LEVEL
              </span>

              <strong>
                {selectedSkill.progress}
              </strong>

            </div>

            <div className="skill-big-bar">
              <div
                style={{
                  width: selectedSkill.progress,
                }}
              ></div>
            </div>

            <p className="skill-modal-description">
              {selectedSkill.description}
            </p>

            <div className="skill-technologies">

              {selectedSkill.technologies.map(
                (technology) => (
                  <span key={technology}>
                    {technology}
                  </span>
                )
              )}

            </div>

            <div className="skill-modal-status">
              STATUS:
              <strong>{selectedSkill.level}</strong>
            </div>

          </div>

        </div>
      )}
    </>
  );
}

export default SkillTree;