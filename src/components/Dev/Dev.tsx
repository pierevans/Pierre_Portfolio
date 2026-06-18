// import { useState } from "react";
// import "./dev.scss";
// import HeaderAnimation from "../Animation/HeaderAnimation";
// import TitleAnimation from "../Animation/TitleAnimation";
// import DevScroll from "../Animation/DevScroll/DevScroll";
// import DevTechStack from "../DevTechstack/DevTechStack";
// import DevCard from "../Card/DevCard/DevCard";
// import { motion } from "framer-motion";
// import { CiCirclePlus } from "react-icons/ci";
// import { IoIosArrowBack } from "react-icons/io";
// import { IoIosArrowForward } from "react-icons/io";
// const Dev = () => {
//   const [techStack, setTechStack] = useState(false);

//   const toggleTechStack = () => {
//     setTechStack((prev) => !prev);
//   };

const projects = [
  {
    title: "Project 1",
    description: "Description of the project.",
    hrefOne: "#",
    hrefTwo: "#",
  },
  {
    title: "Project 2",
    description: "Description of the project.",
    hrefOne: "#",
    hrefTwo: "#",
  },
  {
    title: "Project 3",
    description: "Description of the project.",
    hrefOne: "#",
    hrefTwo: "#",
  },
  {
    title: "Project 4",
    description: "Description of the project.",
    hrefOne: "#",
    hrefTwo: "#",
  },
  {
    title: "Project 5",
    description: "Description of the project.",
    hrefOne: "#",
    hrefTwo: "#",
  },
  {
    title: "Project 6",
    description: "Description of the project.",
    hrefOne: "#",
    hrefTwo: "#",
  },
];

//   const projectsPerPage = 3;
//   const totalPages = Math.ceil(projects.length / projectsPerPage);

//   const visibleProjects = projects.slice(
//     currentPage * projectsPerPage,
//     currentPage * projectsPerPage + projectsPerPage,
//   );
//   const [currentPage, setCurrentPage] = useState(0);

//   const handleNext = () => {
//     setCurrentPage((prev) => (prev + 1) % totalPages);
//   };

//   const handlePrev = () => {
//     setCurrentPage((prev) => (prev - 1 + totalPages) % totalPages);
//   };

//   return (
//     <section className="dev-container" id="dev">
//       <h2>
//         <HeaderAnimation headline="Software Development" />
//       </h2>
//       <DevScroll />
//       <motion.div
//         initial={{ opacity: 0, y: -20 }}
//         whileInView={{ opacity: 1, y: 0 }}
//         transition={{ duration: 0.5 }}
//         viewport={{ once: true }}
//         className="more-details"
//         onClick={toggleTechStack}
//       >
//         <CiCirclePlus className="more-details" />
//       </motion.div>
//       {techStack && <DevTechStack handleClose={() => setTechStack(false)} />}
//       <h3>
//         <TitleAnimation title="Dev projects" />
//       </h3>
//       <div className="dev-card-container">
//         {visibleProjects.map((project, index) => (
//           <DevCard
//             key={index}
//             title={project.title}
//             description={project.description}
//             hrefOne={project.hrefOne}
//             hrefTwo={project.hrefTwo}
//           />
//         ))}

//         <div className="change-btn">
//           <button type="button" onClick={handlePrev}>
//             <IoIosArrowBack className="prev" />
//           </button>

//           <button type="button" onClick={handleNext}>
//             <IoIosArrowForward className="next" />
//           </button>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Dev;

import { useState } from "react";
import "./dev.scss";
import HeaderAnimation from "../Animation/HeaderAnimation";
import TitleAnimation from "../Animation/TitleAnimation";
import DevScroll from "../Animation/DevScroll/DevScroll";
import DevTechStack from "../DevTechstack/DevTechStack";
import DevCard from "../Card/DevCard/DevCard";
import { motion } from "framer-motion";
import { CiCirclePlus } from "react-icons/ci";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";

const Dev = () => {
  const [techStack, setTechStack] = useState(false);

  return (
    <section className="dev-container" id="dev">
      <h2>
        <HeaderAnimation headline="Software Development" />
      </h2>

      <DevScroll />

      <motion.div
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
        className="more-details"
        onClick={() => setTechStack((prev) => !prev)}
      >
        <CiCirclePlus />
      </motion.div>

      {techStack && <DevTechStack handleClose={() => setTechStack(false)} />}

      <h3>
        <TitleAnimation title="Dev projects" />
      </h3>

      {/* <div className="dev-card-container">
        <DevCard
        // img={project.img }
        // key={project.title}
        // title={project.title}
        // description={project.description}
        // hrefOne={project.hrefOne}
        // hrefTwo={project.hrefTwo}
        // // className={`card-position-${index + 1}`}
        />

        <div className="change-btn">
            <IoIosArrowBack className="prev" onClick={handlePrev}/>
            <IoIosArrowForward className="next" onClick={handleNext}/>
        </div>
      </div> */}
      <DevCard/>
    </section>
  );
};

export default Dev;
