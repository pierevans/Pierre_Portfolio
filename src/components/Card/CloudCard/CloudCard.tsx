import "./CloudCard.scss";
import { FaArrowRight } from "react-icons/fa6";
import { motion } from "framer-motion";

interface Props {
  img: any;
  title: string;
  description: string;
  href: string;
}

const CloudCard = ({ img, title, description, href }: Props) => {
  return (
    <motion.div
      className="cloud-card"
      initial={{ opacity: 0, x: -40 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
    >
      <div className="cloud-image">
        <img src={img} alt={title} />
      </div>
      <div className="cloud-project">
        <h4>{title}</h4>
        <p>{description}</p>
        <a
          href={href}
          className="arrow-icon"
          target="_blank"
          rel="noopener noreferrer"
        >
          <span>GitHub Link</span>
          <FaArrowRight />
        </a>
      </div>
    </motion.div>
  );
};

export default CloudCard;
