import "./CharacterStats.css";

function CharacterStats() {
  return (
    <section className="character-section" id="world">
      
      <div className="section-header">
        <span>02 / 05</span>
        <p>CHARACTER PROFILE</p>
      </div>

      <div className="character-card">

        <div className="profile-side">
          <p className="small-label">IDENTITY</p>

          <h2>YASHRAJ</h2>

          <p className="character-title">
            THE BUILDER
          </p>

          <div className="profile-details">
            <div>
              <span>CLASS</span>
              <strong>COMPUTER SCIENCE</strong>
            </div>

            <div>
              <span>ROLE</span>
              <strong>PROBLEM SOLVER</strong>
            </div>

            <div>
              <span>STATUS</span>
              <strong>LEVELING UP</strong>
            </div>
          </div>
        </div>

        <div className="stats-side">

          <div className="objective">
            <span>CURRENT OBJECTIVE</span>
            <p>
              Build real-world solutions through
              technology, creativity and continuous learning.
            </p>
          </div>

          <div className="skills">

            <Skill name="PROBLEM SOLVING" level="75%" />

            <Skill name="WEB DEVELOPMENT" level="80%" />

            <Skill name="AI / ML" level="55%" />

            <Skill name="DSA" level="45%" />

          </div>

        </div>

      </div>

    </section>
  );
}

function Skill({ name, level }) {
  return (
    <div className="skill">

      <div className="skill-info">
        <span>{name}</span>
        <span>{level}</span>
      </div>

      <div className="skill-bar">
        <div
          className="skill-progress"
          style={{ width: level }}
        ></div>
      </div>

    </div>
  );
}

export default CharacterStats;