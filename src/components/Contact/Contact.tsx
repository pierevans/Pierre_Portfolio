import { IoMdContacts } from "react-icons/io";
import Image from "../../assets/cloud_pic1.png";
import { IoIosSend } from "react-icons/io";

import "./Contact.scss";

const Contact = () => {
  return (
    <div className="Contact">
      <div className="background-pattern"></div>

      <div className="contact-container">
        <div className="contact-mail">
          <h3 className="contact-title">
            <IoMdContacts />
            LET'S CONNECT
          </h3>
          <button className="btn-mail">
            <p>Submit</p>
            <span>
              <IoIosSend />
            </span>
          </button>
        </div>
        <div className="contact-img">
          <img src={Image} alt="cloud" />
        </div>
      </div>
    </div>
  );
};

export default Contact;
