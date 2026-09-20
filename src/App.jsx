import Navbar from "./components/navbar";
import Hero from "./components/Hero";
import CharacterStats from "./components/CharacterStats";
import Missions from "./components/Missions";
import SkillTree from "./components/SkillTree";
import Journey from "./components/Journey";
import Transmission from "./components/Transmission";
import ScrollReveal from "./components/ScrollReveal";

import "./App.css";

function App() {
  return (
    <div className="portfolio">


      <Navbar />

      <Hero />

       <ScrollReveal>
        <CharacterStats />
      </ScrollReveal>

      <ScrollReveal>
        <Missions />
      </ScrollReveal>

      <ScrollReveal>
        <SkillTree />
      </ScrollReveal>

      <ScrollReveal>
        <Journey />
      </ScrollReveal>

      <ScrollReveal>
        <Transmission />
      </ScrollReveal>

       <div className="portfolio-end">
        <span>END OF TRANSMISSION</span>
        <span>YASHRAJ // THE BUILDER</span>
      </div>

    </div>
  );
}

export default App;