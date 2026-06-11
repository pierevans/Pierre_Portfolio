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



import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "./DevCard.scss";
// import "swiper/css";
import "swiper/css/effect-flip";
import "swiper/css/pagination";
import "swiper/css/navigation";

import "./styles.css";

// import required modules
import { EffectFlip, Pagination, Navigation } from "swiper/modules";

export default function DevCard() {
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
        <SwiperSlide>
          <img src="https://swiperjs.com/demos/images/abstract-1.jpg" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://swiperjs.com/demos/images/abstract-2.jpg" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://swiperjs.com/demos/images/abstract-3.jpg" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://swiperjs.com/demos/images/abstract-4.jpg" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://swiperjs.com/demos/images/abstract-5.jpg" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://swiperjs.com/demos/images/abstract-6.jpg" />
        </SwiperSlide>
      </Swiper>
    </>
  );
}

export default DevCard;
