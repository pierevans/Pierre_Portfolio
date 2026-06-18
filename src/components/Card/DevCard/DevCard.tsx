// import { FaExternalLinkAlt } from "react-icons/fa";
// import { FaGithub } from "react-icons/fa";


// import {motion} from "framer-motion";

// interface Props {
  //   img: any;
  //   title: string;
  //   description: string;
  //   hrefOne: string;
  //   hrefTwo: string;
// }

// const DevCard = ({ img, title, description, hrefOne, hrefTwo }: Props) => {
  //   return (
    //     <motion.div className="dev-card">
//       <img src={img} alt={title} />
//       <div className="dev-project">
//         <h4>{title}</h4>
//         <p>{description}</p>
//         <div className="dev-btns">
//           <a href={hrefOne}>
//             <button>Live Demo <FaExternalLinkAlt /></button>
//           </a>
//           <a href={hrefTwo}>
//             <button>Github Link <FaGithub /></button>
//           </a>
//         </div>
//       </div>
//     </motion.div>
//   );
// };



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
    img: <img src="https://swiperjs.com/demos/images/abstract-1.jpg" />,
    title: "Project 1",
    description: "Description of project 1.",
    hrefOne: "#",
    hrefTwo: "#",
  },
  {
    img: <img src="https://swiperjs.com/demos/images/abstract-2.jpg" />,
    title: "Project 2",
    description: "Description of project 2.",
    hrefOne: "#",
    hrefTwo: "#",
  },
  {
    img: <img src="https://swiperjs.com/demos/images/abstract-3.jpg" />,
    title: "Project 3",
    description: "Description of project 3.",
    hrefOne: "#",
    hrefTwo: "#",
  },
  {
    img: <img src="https://swiperjs.com/demos/images/abstract-4.jpg" />,
    title: "Project 4",
    description: "Description of project 4.",
    hrefOne: "#",
    hrefTwo: "#",
  },
  {
    img: <img src="https://swiperjs.com/demos/images/abstract-5.jpg" />,
    title: "Project 5",
    description: "Description of project 5.",
    hrefOne: "#",
    hrefTwo: "#",
  },
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
            {project.img}
            <div className="dev-project">
              <h4>{project.title}</h4>
              <p>{project.description}</p>
              <div className="dev-btns">
                <a href={project.hrefOne}>
                  <button>Live Demo</button>
                </a>
                <a href={project.hrefTwo}>
                  <button>Github Link</button>
                </a>
              </div>
            </div>
          </div>
        </SwiperSlide>
          ))}
      </Swiper>
    </>
  );
}

export default DevCard;


