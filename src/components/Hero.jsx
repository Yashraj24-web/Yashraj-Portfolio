import "./Hero.css";

function Hero() {
  return (
    <main className="hero" id="home">

      <div className="hero-scan-line"></div>

      <div className="hero-corner hero-corner-top">
        <span>SYS.01</span>
        <span>BUILD_MODE</span>
      </div>

      <div className="hero-corner hero-corner-bottom">
        <span>COORDINATES: 26.8°N</span>
        <span>SESSION // 2026</span>
      </div>

      <div className="hero-content">

        <div className="system-status">
          <span className="system-dot"></span>
          SYSTEM ONLINE
          <span className="system-line"></span>
          2026
        </div>

        <p className="hero-index">
          CHARACTER PROFILE // 001
        </p>

        <h1>
          YASHRAJ
          <span>THE BUILDER</span>
        </h1>

        <div className="hero-divider"></div>

        <p className="tagline">
          Still leveling up. Already building.
        </p>

        <button
          className="enter-button"
          onClick={() => {
            document
              .getElementById("world")
              ?.scrollIntoView({
                behavior: "smooth",
              });
          }}
        >
          <span>ENTER THE WORLD</span>
          <strong>→</strong>
        </button>

      </div>

      <div className="character-info">

        <div className="character-info-item">
          <span>CLASS</span>
          <strong>COMPUTER SCIENCE</strong>
        </div>

        <div className="character-info-item">
          <span>ROLE</span>
          <strong>PROBLEM SOLVER</strong>
        </div>

        <div className="character-info-item">
          <span>STATUS</span>
          <strong>LEVELING UP</strong>
        </div>

        <div className="character-info-item">
          <span>MISSION</span>
          <strong>BUILD REAL THINGS</strong>
        </div>

      </div>

      <div className="hero-scroll">
        <span></span>
        SCROLL TO EXPLORE
      </div>

    </main>
  );
}

export default Hero;