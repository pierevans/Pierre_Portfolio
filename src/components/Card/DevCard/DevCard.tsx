import "./DevCard.scss";
import { FaExternalLinkAlt } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";


// import {motion} from "framer-motion";

interface Props {
  img: any;
  title: string;
  description: string;
  hrefOne: string;
  hrefTwo: string;
}

const DevCard = ({ img, title, description, hrefOne, hrefTwo }: Props) => {
  return (
    <div className="dev-card">
      <img src={img} alt={title} />
      <div className="dev-project">
        <h4>{title}</h4>
        <p>{description}</p>
        <div className="dev-btns">
          <a href={hrefOne}>
            <button>Live Demo <FaExternalLinkAlt /></button>
          </a>
          <a href={hrefTwo}>
            <button>Github Link <FaGithub /></button>
          </a>
        </div>
      </div>
    </div>
  );
};

export default DevCard;
