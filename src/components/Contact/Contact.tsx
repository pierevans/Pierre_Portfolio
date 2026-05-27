import { IoMdContacts } from "react-icons/io";
import Image from "../../assets/cloud_pic1.png";
import Form from "../Form/Form";
import "./Contact.scss";
import HeaderAnimation from "../Animation/HeaderAnimation";
import TitleAnimation from "../Animation/TitleAnimation";

const Contact = () => {
  return (
    <section className="contact-card" id="contact">
      <h2>
        <HeaderAnimation headline="Get In Touch" />
      </h2>
      <div className="background-pattern"></div>
      <div className="contact-container">
        <div className="contact-mail">
          <h3 className="contact-title">
            <IoMdContacts />
          <TitleAnimation title= " Let's Connect"/>
          </h3>
          <Form />
        </div>
        <div className="contact-img">
          <img src={Image} alt="cloud" />
        </div>
      </div>
    </section>
  );
};

export default Contact;
