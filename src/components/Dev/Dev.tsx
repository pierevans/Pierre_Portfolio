import "./dev.scss";
import HeaderAnimation from "../Animation/HeaderAnimation";
import TitleAnimation from "../Animation/TitleAnimation";
import DevScroll from "../Animation/DevScroll/DevScroll";
import { motion } from "framer-motion";
import { CiCirclePlus } from "react-icons/ci";
const Dev = () => {
  return (
    <div className="dev-container">
      <h2>
        <HeaderAnimation headline="Software Development" />
      </h2>
      <DevScroll/>
      <motion.div
              initial={{ opacity: 0, y: -20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="more-details"
            >
              <CiCirclePlus className="more-details" />
            </motion.div>
      <h3>
        <TitleAnimation title="Dev projects" />
      </h3>
    </div>
  );
};

export default Dev;
