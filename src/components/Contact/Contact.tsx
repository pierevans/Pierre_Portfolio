import { IoMdContacts } from "react-icons/io";
import Image from "../../assets/cloud_pic1.png";
import Form from "../Form/Form"
import "./Contact.scss";

const Contact = () => {
  return (
    <div className="contact-card">
      <div className="background-pattern"></div>
      <h2>Get In Touch</h2>
      <div className="contact-container">
        <div className="contact-mail">
          <h3 className="contact-title">
            <IoMdContacts />
            Let's Connect
          </h3>
          <Form/>
        </div>
        <div className="contact-img">
          <img src={Image} alt="cloud" />
        </div>
      </div>
    </div>
  );
};

export default Contact;
