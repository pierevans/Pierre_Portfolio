import "./CloudCard.scss";
import { FaArrowRight } from "react-icons/fa6";

interface Props {
  img: any;
  title: string;
  description: string;
  href: string;
}

const CloudCard = ({ img, title, description, href }: Props) => {
  return (
    <div className="cloud-card">
        <div className="cloud-image">
          <img src={img} alt={title} />
        </div>
      <div className="cloud-project">
        <h4>{title}</h4>
        <p>{description}</p>
        <a href={href} className="arrow-icon">
          <h4>View</h4>
          <FaArrowRight />
        </a>
      </div>
    </div>
  );
};

export default CloudCard;
