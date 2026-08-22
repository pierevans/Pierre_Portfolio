import "./Footer.scss";
import { IoLogoLinkedin } from "react-icons/io5";
import { FaGithub } from "react-icons/fa";
import { FaDiscord } from "react-icons/fa";
import { FaArrowUp  } from "react-icons/fa6";
import ScrambleText from "./ScrambleText";

const Footer = () => {
  return (
    <div className="footer">
      <img className="footer-logo-1" src="/aws_logo_footer.png" alt="aws-logo" />
      <img className="footer-logo-2" src="/aws_logo_footer.png" alt="aws-logo" />
      <div className="footer-links">
        <a href="" target="_blank">
          <span>LinkedIn</span>
          <IoLogoLinkedin />
        </a>
        <a href="" target="_blank">
          <span>GitHub</span>
          <FaGithub />
        </a>
        <a href="" target="_blank">
          <span>Discord</span>
          <FaDiscord />
        </a>
      </div>
      <span className="footer-heading"><ScrambleText text="Pierre Konan"/></span>
      <a className="back-top" href="#home">Back to top <FaArrowUp /></a>
    </div>
  );
};

export default Footer;
