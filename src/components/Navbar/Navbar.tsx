import "./Navbar.scss";
import { MdConnectWithoutContact } from "react-icons/md";
import { MdDescription } from "react-icons/md";
import { TbCloudComputing } from "react-icons/tb";
import { SiDevbox } from "react-icons/si";
import { FaHome } from "react-icons/fa";
import { useState } from "react";


const Navbar = () => {
  const [move, setMove] = useState(false);
  const toggle = ()=> setMove(!move)

  return (
    <div>
      <nav className="navbar">
        <div className="nav-logo">
          <h3>
            <a href="">PK</a>
          </h3>
        </div>
        <ul className="nav-links">
          <li>
            <a href=""><FaHome/>Home</a>
          </li>
          <li>
            <a href=""><TbCloudComputing/>Cloud</a>
          </li>
          <li>
            <a href=""><SiDevbox/> Dev</a>
          </li>
          <li>
            <a href=""><MdDescription/> About</a>
          </li>
          <li>
            <a href=""><MdConnectWithoutContact/>Reach Out</a>
          </li>
         
        </ul>
        <div className="theme" onClick={toggle}>
          <div className={move? "btn-theme active":"btn-theme"}></div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
