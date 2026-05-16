import { useState } from "react";
import "./dev.scss";
import HeaderAnimation from "../Animation/HeaderAnimation";
import TitleAnimation from "../Animation/TitleAnimation";
import DevScroll from "../Animation/DevScroll/DevScroll";
import DevTechStack from "../DevTechstack/DevTechStack";
import { motion } from "framer-motion";
import { CiCirclePlus } from "react-icons/ci";

const Dev = () => {
  const [techStack, setTechStack] = useState(false);

  const toggleTechStack = () => {
    setTechStack((prev) => !prev);
  };

  return (
    <div className="dev-container">
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
        onClick={toggleTechStack}
      >
        <CiCirclePlus className="more-details" />
      </motion.div>
      {techStack && <DevTechStack handleClose={() => setTechStack(false)} />}
      <h3>
        <TitleAnimation title="Dev projects" />
      </h3>
    </div>
  );
};

export default Dev;
