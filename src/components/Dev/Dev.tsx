import { useState } from "react";
import "./dev.scss";
import HeaderAnimation from "../Animation/HeaderAnimation";
import TitleAnimation from "../Animation/TitleAnimation";
import DevScroll from "../Animation/DevScroll/DevScroll";
import DevTechStack from "../DevTechstack/DevTechStack";
import DevCard from "../Card/DevCard/DevCard";
import { motion } from "framer-motion";
import { CiCirclePlus } from "react-icons/ci";



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
        <CiCirclePlus className="more-details"/>
      </motion.div>
      {techStack && <DevTechStack handleClose={() => setTechStack(false)} />}

      <h3>
        <TitleAnimation title="Dev projects" />
      </h3>
      
      <DevCard/>
    </section>
  );
};

export default Dev;
