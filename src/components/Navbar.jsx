import { useEffect, useState } from "react";
import "./Navbar.css";

function Navbar() {
  const [activeSection, setActiveSection] = useState("world");
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const sections = [
      "world",
      "missions",
      "skills",
      "journey",
      "contact",
    ];

    const handleScroll = () => {
      const scrollTop = window.scrollY;

      const documentHeight =
        document.documentElement.scrollHeight -
        window.innerHeight;

      const progress =
        documentHeight > 0
          ? (scrollTop / documentHeight) * 100
          : 0;

      setScrollProgress(progress);

      let currentSection = "world";

      sections.forEach((sectionId) => {
        const section = document.getElementById(sectionId);

        if (!section) return;

        const sectionTop = section.offsetTop - 180;

        if (scrollTop >= sectionTop) {
          currentSection = sectionId;
        }
      });

      setActiveSection(currentSection);
    };

    handleScroll();

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const navItems = [
    {
      label: "WORLD",
      id: "world",
    },
    {
      label: "MISSIONS",
      id: "missions",
    },
    {
      label: "SKILLS",
      id: "skills",
    },
    {
      label: "JOURNEY",
      id: "journey",
    },
    {
      label: "TRANSMISSION",
      id: "contact",
    },
  ];

  return (
    <>
      <div
        className="scroll-progress"
        style={{
          width: `${scrollProgress}%`,
        }}
      ></div>

      <nav className="navbar">

        <a
          href="#world"
          className="navbar-logo"
        >
          Y.
        </a>

        <div className="nav-links">

          {navItems.map((item) => (
            <a
              key={item.id}
              href={`#${item.id}`}
              className={
                activeSection === item.id
                  ? "active"
                  : ""
              }
            >
              <span className="nav-number">
                0{navItems.indexOf(item) + 1}
              </span>

              {item.label}
            </a>
          ))}

        </div>

        <div className="nav-status">
          <span></span>
          ONLINE
        </div>

      </nav>
    </>
  );
}

export default Navbar;