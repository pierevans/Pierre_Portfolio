import { Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import { GiBookPile } from "react-icons/gi";
import { FiExternalLink } from "react-icons/fi";

import "swiper/css";
import "swiper/css/pagination";
import "./DevCard.scss";

interface Project {
  img: string;
  title: string;
  subtitle: string;
  description: string;
  icons: string[];
  hrefOne: string;
  hrefTwo: string;
}

const DevCard = () => {
  const projects: Project[] = [
    {
      img: "vitalp.png",
      title: "VitalPilot",
      subtitle: "Full-Stack Health Monitoring Application",
      description:
        "VitalPilot is a full-stack software architecture combining a TypeScript frontend, a Python backend engine, and a relational database for personalized health monitoring.",
      icons: [
        "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nextjs/nextjs-original.svg",
        "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/typescript/typescript-original.svg",
        "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg",
        "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nodejs/nodejs-original.svg",
        "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/fastapi/fastapi-original.svg",
        "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mysql/mysql-original.svg",
        "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg",
      ],
      hrefOne: "#",
      hrefTwo: "https://github.com/RaymondTian12/vital-pilot-senior-design",
    },
    {
      img: "/txuml.png",
      title: "TXUML",
      subtitle: "Texas Underground Mine Locator",
      description:
        "Interactive web application to explore underground and surface mine data across Texas. Users can view mine locations, drop pins, and calculate proximity risk scores with an intuitive Mapbox map interface.",
      icons: [
        "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/typescript/typescript-original.svg",
        "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg",
        "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/css3/css3-original.svg",
        "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg",
        "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nodejs/nodejs-original.svg",
        "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mapbox/mapbox-original.svg",
      ],
      hrefOne: "https://txuml-saad-khairullahs-projects.vercel.app/",
      hrefTwo: "https://github.com/pierevans/TXUML",
    },
    {
      img: "/movie-app.png",
      title: "Movie App",
      subtitle: "React Movie Application with API Integration",
      description:
        "A React movie application that uses an API to display popular movies, search for movies, and manage a list of favorite movies.",
      icons: [
        "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg",
        "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg",
        "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/css3/css3-original.svg",
        "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/reactrouter/reactrouter-original.svg",
        "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nodejs/nodejs-original.svg",
      ],
      hrefOne: "#",
      hrefTwo: "https://github.com/pierevans/React_Movie_API_Website",
    },
  ];

  return (
    <Swiper
      modules={[Pagination]}
      pagination={{
        clickable: true,
      }}
      spaceBetween={30}
      slidesPerView={1}
      className="dev-swiper"
    >
      {projects.map((project, index) => (
        <SwiperSlide key={index} className="dev-card">
          <div className="project-container">
            <span>
              <div className="project-logo">
                <GiBookPile />
              </div>
              Featured Project
            </span>
            <h1>{project.title}</h1>
            <h4>{project.subtitle}</h4>
            <p>{project.description}</p>
            <div className="dev-icons">
              {project.icons.map((icon, index) => (
                <img key={index} src={icon} />
              ))}
            </div>
            <div className="dev-btns">
              {project.hrefOne !== "#" && (
                <a
                  href={project.hrefOne}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FiExternalLink/>
                  Live Demo
                </a>
              )}

              <a
                href={project.hrefTwo}
                target="_blank"
                rel="noopener noreferrer"
              >
                GitHub
              </a>
            </div>
          </div>
          <div className="web-img">
            <img
              src={project.img}
              alt={project.title}
              className="dev-project-img"
            />
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default DevCard;
