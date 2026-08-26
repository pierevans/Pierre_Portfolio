// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "./DevCard.scss";
import "swiper/css";
import "swiper/css/effect-flip";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import required modules
import { EffectFlip, Pagination, Navigation } from "swiper/modules";

const DevCard = () => {
  const projects = [
    {
      img: "https://swiperjs.com/demos/images/abstract-1.jpg",
      title: "VitalPilot",
      description:
        "VitalPilot is a full-stack software architecture combining a TypeScript frontend, a Python backend engine, and a relational database for personalized health monitoring.",
      hrefOne: "#",
      hrefTwo: "https://github.com/RaymondTian12/vital-pilot-senior-design",
    },
    {
      img: "txuml.png",
      title: "Texas Underground Mine Locator",
      description:
        "TXUML (Texas Underground Mine Locator) is a modern web application designed to help users explore underground and surface mine data across Texas..",
      hrefOne: "https://txuml-saad-khairullahs-projects.vercel.app/",
      hrefTwo: "https://github.com/pierevans/TXUML",
    },
    {
      img: "movie-app.png",
      title: "Movie App",
      description:
        "A React movie application that uses the API to display popular movies, search for movies, and manage a list of favorite movies.",
      hrefOne: "#",
      hrefTwo: "https://github.com/pierevans/React_Movie_API_Website",
    },
    // {
    //   img: "https://swiperjs.com/demos/images/abstract-4.jpg",
    //   title: "Project 4",
    //   description: "Description of project 4.",
    //   hrefOne: "#",
    //   hrefTwo: "#",
    // },
    // {
    //   img: "https://swiperjs.com/demos/images/abstract-5.jpg",
    //   title: "Project 5",
    //   description: "Description of project 5.",
    //   hrefOne: "#",
    //   hrefTwo: "#",
    // },
  ];

  return (
    <>
      <Swiper
        effect={"flip"}
        grabCursor={true}
        pagination={true}
        navigation={true}
        modules={[EffectFlip, Pagination, Navigation]}
        className="mySwiper"
      >
        {projects.map((project, index) => (
          <SwiperSlide>
            <div className="dev-card" key={index}>
              <img src={project.img} alt={project.title} />
              <div className="dev-project">
                <h4>{project.title}</h4>
                <p>{project.description}</p>
                <div className="dev-btns">
                  <a href={project.hrefOne} target="_blank">
                    Live Demo
                  </a>
                  <a href={project.hrefTwo} target="_blank">
                    Github Link
                  </a>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
};

export default DevCard;
