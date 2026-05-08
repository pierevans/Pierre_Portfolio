import "./Navbar.scss";
import { MdConnectWithoutContact } from "react-icons/md";
import { MdDescription } from "react-icons/md";
import { TbCloudComputing } from "react-icons/tb";
import { SiDevbox } from "react-icons/si";
import { useState } from "react";


const Navbar = () => {
  // const [move, setMove] = useState()
  // const toggle = ()=>

  return (
    <div>
      <nav className="navbar">
        <div className="nav-logo">
          <h3>
            PK
          </h3>
        </div>
        <ul className="nav-links">
          <li>
            <a href=""><TbCloudComputing/> Cloud</a>
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
        <div className="theme" onClick={()=> toggle()}>
          <div className="btn-theme"></div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
