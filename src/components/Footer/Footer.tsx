import "./Footer.scss";
import { IoLogoLinkedin } from "react-icons/io5";
import { FaGithub } from "react-icons/fa";
import { FaDiscord } from "react-icons/fa";
import { FaArrowUp  } from "react-icons/fa6";

const Footer = () => {
  return (
    <div className="Footer">
      <div className="footer-links">
        <a href="" target="_blank">
          <IoLogoLinkedin />
        </a>
        <a href="" target="_blank">
          <FaGithub />
        </a>
        <a href="" target="_blank">
          <FaDiscord />
        </a>
      </div>
      <span className="footer-heading">Pierre Konan</span>
      <a className="back-top" href="">Back to top <FaArrowUp /></a>
    </div>
  );
};

export default Footer;
