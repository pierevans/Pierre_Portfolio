import "./Navbar.scss";
import { MdConnectWithoutContact, MdDescription } from "react-icons/md";
import { TbCloudComputing } from "react-icons/tb";
import { SiDevbox } from "react-icons/si";
import { FaHome } from "react-icons/fa";
import { CgMenuRound } from "react-icons/cg";

import { useEffect, useState } from "react";

const Navbar = () => {
  // const [move, setMove] = useState<boolean>(false);
  const [navbar, setNavbar] = useState<boolean>(false);
  const [links, setLinks] = useState<boolean>(false);
  // const [theme, setTheme] = useState<string>("light");
  const [activeSection, setActiveSection] = useState<string>("home");

  // const toggle = () => setMove((prev) => !prev);

  useEffect(() => {
    const sectionIds = ["home", "cloud", "dev", "about", "contact"];

    const handleScroll = () => {
      const currentYScroll = window.scrollY;

      if (currentYScroll >= 80) {
        setNavbar(true);
        setLinks(true);
      } else {
        setNavbar(false);
        setLinks(false);
      }

      sectionIds.forEach((id) => {
        const section = document.getElementById(id);
        if (!section) return;

        const sectionTop = section.offsetTop - 120;
        const sectionHeight = section.offsetHeight;

        if (
          currentYScroll >= sectionTop &&
          currentYScroll < sectionTop + sectionHeight
        ) {
          setActiveSection(id);
        }
      });
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className="header">
      <nav className={navbar ? "navbar active" : "navbar"}>
        <div className="nav-logo">
          <h3>
            <a href="#home">PK</a>
          </h3>
        </div>

        <ul className={links ? "nav-links active" : "nav-links"}>
          <li>
            <a
              href="#home"
              className={activeSection === "home" ? "active" : ""}
            >
              <FaHome />
              <span>Home</span>
            </a>
          </li>

          <li>
            <a
              href="#cloud"
              className={activeSection === "cloud" ? "active" : ""}
            >
              <TbCloudComputing />
              <span>Cloud</span>
            </a>
          </li>

          <li>
            <a href="#dev" className={activeSection === "dev" ? "active" : ""}>
              <SiDevbox />
              <span>Dev</span>
            </a>
          </li>

          <li>
            <a 
              href="#about"
              className={activeSection === "about" ? "active" : ""}
            >
              <MdDescription />
              <span>About</span>
            </a>
          </li>

          <li>
            <a 
              href="#contact"
              className={activeSection === "contact" ? "active" : ""}
            >
              <MdConnectWithoutContact />
              <span>Reach Out</span>
            </a>
          </li>
        </ul>

        {/* <div className="theme" onClick={toggle}>
          <div
            className={move ? "btn-theme active" : "btn-theme"}
            onClick={() => setTheme(theme === "light" ? "dark" : "light")}
          ></div>
        </div> */}
      </nav>
    </div>
  );
};

export default Navbar;
