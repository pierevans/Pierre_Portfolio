import { IoMdContacts } from "react-icons/io";
import Form from "../Form/Form";
import "./Contact.scss";
import HeaderAnimation from "../Animation/HeaderAnimation";
import TitleAnimation from "../Animation/TitleAnimation";
import { motion } from "framer-motion";

const Contact = () => {
  return (
    <section className="contact-section ">
        <img src="/cloud-design.png" alt="contact" className="cloud-design" />
      <div className="background-pattern"></div>
      <div className="contact-card" id="contact">
        <h2>
          <HeaderAnimation headline="Get In Touch" />
        </h2>
        <div className="contact-container">
          <motion.div
            className="contact-mail"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{
              delay: 0.3,
              duration: 0.5,
            }}
          >
            <h3 className="contact-title">
              <IoMdContacts />
              <TitleAnimation title=" Let's Connect" />
            </h3>
            <Form />
          </motion.div>
          <motion.div
            className="contact-img"
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{
              delay: 0.3,
              duration: 0.5,
            }}
          >
            <img src="/cloud-contact-pic.png" alt="cloud" />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
