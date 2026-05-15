import { motion } from "framer-motion";
import "../../index.scss";
import "./Cloud.scss";
import CloudCard from "../../components/Card/CloudCard/CloudCard";

import AwsScroll from "../Animation/AwsScroll/AwsScroll";
import { FaArrowRight } from "react-icons/fa6";
import { CiCirclePlus } from "react-icons/ci";
import { IoIosArrowDown } from "react-icons/io";

import HeaderAnimation from "../Animation/HeaderAnimation";
import TitleAnimation from "../Animation/TitleAnimation";

import clf from "../../assets/cert-badge/CLF-C02.png";
import dop from "../../assets/cert-badge/DOP-C02.png";
import hcta from "../../assets/cert-badge/HCTA0-004.png";
import knca from "../../assets/cert-badge/KCNA.webp";
import saa from "../../assets/cert-badge/SAA-C03.png";
import sap from "../../assets/cert-badge/SAP-C02.png";


const Cloud = () => {

  // const cloudProjects: any[] = ["</>", "</>", "</>", "</>", "</>"];
  return (
    <div className="cloud-container">
      <h2>
        <HeaderAnimation headline="Cloud Skills" />
      </h2>
      <AwsScroll />
      <h3>
        <TitleAnimation title="Cloud Certificates" />
      </h3>
      <div className="cert-container">
        <div className="aws-cert">
          <h4>AWS Certifications</h4>
          <motion.div
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            variants={{
              hidden: {},
              show: {
                transition: {
                  staggerChildren: 0.15,
                },
              },
            }}
            className="aws-cert-list"
          >
            <motion.a
              variants={{
                hidden: { opacity: 0, x: -40 },
                show: { opacity: 1, x: 0 },
              }}
              transition={{ duration: 0.5 }}
              href=""
            >
              <img src={clf} alt="" />
              <div className="cert-title">
                <p>Cloud Practitioner</p>
                <FaArrowRight />
              </div>
            </motion.a>
            <motion.a
              variants={{
                hidden: { opacity: 0, x: -40 },
                show: { opacity: 1, x: 0 },
              }}
              transition={{ duration: 0.5 }}
              href=""
            >
              <img src={saa} alt="" />
              <div className="cert-title">
                <p>Solutions Architect Associate</p>
                <FaArrowRight />
              </div>
            </motion.a>
            <motion.a
              variants={{
                hidden: { opacity: 0, x: -40 },
                show: { opacity: 1, x: 0 },
              }}
              transition={{ duration: 0.5 }}
              href=""
            >
              <img src={dop} alt="" />
              <div className="cert-title">
                <p>
                  DevOps Engineer Professional
                  <br />
                  Not yet obtained
                </p>
                <FaArrowRight />
              </div>
            </motion.a>
            <motion.a
              variants={{
                hidden: { opacity: 0, x: -40 },
                show: { opacity: 1, x: 0 },
              }}
              transition={{ duration: 0.5 }}
              href=""
            >
              <img src={sap} alt="" />
              <div className="cert-title">
                <p>
                  Solutions Architect Professional <br />
                  Not yet obtained
                </p>
                <FaArrowRight />
              </div>
            </motion.a>
          </motion.div>
        </div>
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="hash-cert"
        >
          <h4>Terraform Certifications</h4>
          <div className="terraform-cert-list">
            <motion.a
              variants={{
                hidden: { opacity: 0, x: -40 },
                show: { opacity: 1, x: 0 },
              }}
              transition={{ duration: 0.5 }}
              href=""
            >
              <img src={hcta} alt="" />
              <div className="cert-title">
                <p>Terraform Associate (004)</p>
                <FaArrowRight />
              </div>
            </motion.a>
          </div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="kub-cert"
        >
          <h4>Kubernetes Certifications</h4>
          <div className="kubernetes-cert-list">
            <a href="">
              <img src={knca} alt="" />
              <div className="cert-title">
                <p>
                  Kubernetes and Cloud Native
                  <br /> Associate
                </p>
                <FaArrowRight />
              </div>
            </a>
          </div>
        </motion.div>
      </div>
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
        className="more-details"
      >
        <CiCirclePlus className="more-details" />
      </motion.div>
      <h3>
        <TitleAnimation title="Cloud projects" />
      </h3>
      <div className="project-container">
        <div className="project-card-container">
          
          <CloudCard
            title="Vghtgyhh"
            description="lorem 10ffffffffffffffffffff"
            img={clf}
          />
          <CloudCard
            title="Vghtgyhh"
            description="lorem 10ffffffffffffffffffff"
            img={clf} 
          />
          <CloudCard
            title="Vghtgyhh"
            description="lorem 10ffffffffffffffffffff"
            img={clf}
          />
        </div>
        <button className="show-card">
          Show more
          <IoIosArrowDown className="show-card-icon" />
        </button>
      </div>
    </div>
  );
};

export default Cloud;
