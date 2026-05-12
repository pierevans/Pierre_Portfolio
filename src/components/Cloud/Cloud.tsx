import "../../index.scss";
import "./Cloud.scss";

import { FaArrowRight } from "react-icons/fa6";

import HeaderAnimation from "../Animation/HeaderAnimation";
import TitleAnimation from "../Animation/TitleAnimation";

import clf from "../../assets/cert-badge/CLF-C02.png";
import dop from "../../assets/cert-badge/DOP-C02.png";
import hcta from "../../assets/cert-badge/HCTA0-004.png";
import knca from "../../assets/cert-badge/KCNA.webp";
import saa from "../../assets/cert-badge/SAA-C03.png";
import sap from "../../assets/cert-badge/SAP-C02.png";
const Cloud = () => {
  return (
    <div className="cloud-container">
      <h2>
        <HeaderAnimation headline="Cloud Skills" />
      </h2>
      <h3>
        <TitleAnimation title="Cloud Certificates" />
      </h3>
      <div className="cert-container">
        <div className="aws-cert">
          <h4>AWS Certifications</h4>
          <div className="aws-cert-list">
            <a href="">
              <img src={clf} alt="" />
              <div className="cert-title">
                <p>Cloud Practitioner</p>
                <FaArrowRight />
              </div>
            </a>
            <a href="">
              <img src={saa} alt="" />
              <div className="cert-title">
                <p>Solutions Architect Associate</p>
                <FaArrowRight />
              </div>
            </a>
            <a href="">
              <img src={dop} alt="" />
              <div className="cert-title">
                <p>
                  DevOps Engineer Professional
                  <br />
                  Not yet obtained
                </p>
                <FaArrowRight />
              </div>
            </a>
            <a href="">
              <img src={sap} alt="" />
              <div className="cert-title">
                <p>Solutions Architect Professional    <br />
                  Not yet obtained</p>
                <FaArrowRight />
              </div>
            </a>
          </div>
        </div>
        <div className="hash-cert">
            <h4>Terraform Certifications</h4>
          <div className="terraform-cert-list">
            <a href="">
              <img src={hcta} alt="" />
              <div className="cert-title">
                <p>Terraform Associate (004)</p>
                <FaArrowRight />
              </div>
            </a>
          </div>
        </div>
        <div className="kub-cert">
            <h4>Kubernetes Certifications</h4>
          <div className="kubernetes-cert-list">
            <a href="">
              <img src={knca} alt="" />
              <div className="cert-title">
                <p>Kubernetes and Cloud Native<br/> Associate</p>
                <FaArrowRight />
              </div>
            </a>
          </div>
        </div>
      </div>
      <h3>
        <TitleAnimation title="Cloud projects" />
      </h3>
    </div>
  );
};

export default Cloud;
