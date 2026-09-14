import { motion } from "framer-motion";
import "../../index.scss";
import "./Cloud.scss";
import CloudCard from "../../components/Card/CloudCard/CloudCard";
import cloudProjects from "./ProjectLists";
// import CloudTechStack from "../CloudTechstack/CloudTechStack";
import { FaCheck } from "react-icons/fa";

import AwsScroll from "../Animation/AwsScroll/AwsScroll";
import { FaArrowRight } from "react-icons/fa6";
// import { CiCirclePlus } from "react-icons/ci";
import { IoIosArrowUp } from "react-icons/io";
import { IoIosArrowDown } from "react-icons/io";

import HeaderAnimation from "../Animation/HeaderAnimation";
import TitleAnimation from "../Animation/TitleAnimation";

import clf from "../../assets/cert-badge/CLF-C02.png";
import dop from "../../assets/cert-badge/DOP-C02.png";
import hcta from "../../assets/cert-badge/HCTA0-004.png";
import cka from "../../assets/cert-badge/CKA.png";
import saa from "../../assets/cert-badge/SAA-C03.png";
import sap from "../../assets/cert-badge/SAP-C02.png";
import { useState } from "react";

const Cloud = () => {
  const initialCards: number = 3;
  const [visibleCount, setVisibleCount] = useState(initialCards);
  const [activeTab, setActiveTab] = useState("all");
  // const [techStack, setTechStack] = useState(false);

  const showMoreCards = () => {
    setVisibleCount((prev) => prev + 3);
  };
  const showLessCards = () => {
    setVisibleCount(initialCards);
  };

  const filteredCloudProjects =
    activeTab === "all"
      ? cloudProjects
      : cloudProjects.filter((project) => project.level === activeTab);

  const visibleCloudProjects = filteredCloudProjects.slice(0, visibleCount);

  const moreCards = visibleCount < filteredCloudProjects.length;

  return (
    <section className="cloud-container" id="cloud">
      <h2>
        <HeaderAnimation headline="Cloud Skills" />
      </h2>
      <div className="aws-scroll">
        <AwsScroll />
      </div>

      <h3>
        <TitleAnimation title="Cloud Stack" />
      </h3>

      <div className="cloud-stack-container">
        <motion.div
          className="stack-container"
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
        >
          <motion.div
            className="cloud-stack"
            variants={{
              hidden: { opacity: 0, x: -40 },
              show: { opacity: 1, x: 0 },
            }}
            transition={{ duration: 0.5 }}
          >
            <span>Cloud</span>
            <div className="stack-img">
              <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/amazonwebservices/amazonwebservices-original-wordmark.svg" />
            </div>
            <p>EC2 S3 RDS VPC ECS EKS CloudFront IAM CloudWatch etc..</p>
          </motion.div>
          <motion.div
            className="cloud-stack"
            variants={{
              hidden: { opacity: 0, x: -40 },
              show: { opacity: 1, x: 0 },
            }}
            transition={{ duration: 0.5 }}
          >
            <span>Infrastructure as Code</span>
            <div className="stack-img">
              <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/terraform/terraform-original.svg" />
            </div>
            <p>
              Terraform
              <br /> HCP Terraform
            </p>
          </motion.div>
          <motion.div
            className="cloud-stack"
            variants={{
              hidden: { opacity: 0, x: -40 },
              show: { opacity: 1, x: 0 },
            }}
            transition={{ duration: 0.5 }}
          >
            <span>Container & Orchestration</span>
            <div className="stack-img">
              <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/docker/docker-original.svg" />
              <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/kubernetes/kubernetes-original.svg" />
            </div>
            <p>
              Docker
              <br />
              Kubernetes
              <br /> ECR
            </p>
          </motion.div>
          <motion.div
            className="cloud-stack"
            variants={{
              hidden: { opacity: 0, x: -40 },
              show: { opacity: 1, x: 0 },
            }}
            transition={{ duration: 0.5 }}
          >
            <span>CI/CD</span>
            <div className="stack-img">
              <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/githubactions/githubactions-original.svg" />
              <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/jenkins/jenkins-original.svg" />
            </div>
            <p>
              GitHub Actions
              <br /> Jenkins
              <br /> CICD Pipelines
            </p>
          </motion.div>
          <motion.div
            className="cloud-stack"
            variants={{
              hidden: { opacity: 0, x: -40 },
              show: { opacity: 1, x: 0 },
            }}
            transition={{ duration: 0.5 }}
          >
            <span>Tools & Others</span>
            <div className="stack-img">
              <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/linux/linux-original.svg" />
              <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/bash/bash-original.svg" />
            </div>
            <p>
              Linux
              <br /> Bash
            </p>
          </motion.div>
        </motion.div>
      </div>

      <h3>
        <TitleAnimation title="Cloud projects" />
      </h3>

      <div className="project-container">
        <div className="project-tab-container">
          <button
            className={`project-tab ${activeTab === "all" ? "active" : ""}`}
            onClick={() => setActiveTab("all")}
          >
            All
          </button>
          <button
            className={`project-tab ${activeTab === "easy" ? "active" : ""}`}
            onClick={() => setActiveTab("easy")}
          >
            Beginner
          </button>
          <button
            className={`project-tab ${activeTab === "medium" ? "active" : ""}`}
            onClick={() => setActiveTab("medium")}
          >
            Intermediate
          </button>
          <button
            className={`project-tab ${activeTab === "hard" ? "active" : ""}`}
            onClick={() => setActiveTab("hard")}
          >
            Hard
          </button>
        </div>
        <motion.div
          className="project-card-container"
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
        >
          {visibleCloudProjects.map((cloudProject, index) => (
            <CloudCard
              key={index}
              title={cloudProject.title}
              description={cloudProject.description}
              img={cloudProject.src}
              href={cloudProject.href}
            />
          ))}
        </motion.div>
        {moreCards ? (
          <button className="show-card" onClick={showMoreCards}>
            Show more
            <IoIosArrowDown className="show-card-icon" />
          </button>
        ) : (
          filteredCloudProjects.length > initialCards &&
          visibleCount > initialCards && (
            <button className="show-card" onClick={showLessCards}>
              Show less
              <IoIosArrowUp className="show-card-icon rotate" />
            </button>
          )
        )}
      </div>

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
              <div
                className="result"
                style={{
                  color: "#63AC9D",
                  backgroundColor: "#DCF0E8",
                  border: "1px solid #63AC9D",
                }}
              >
                {" "}
                <FaCheck /> Earned
              </div>
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
              <div className="result" style={{
                  color: "#8A97AB",
                  backgroundColor: "#EEF2F6",
                  border: "1px solid #8A97AB",
                }}>
                {" "}
                <FaCheck /> In Progress
              </div>

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
              <div className="result" style={{
                  color: "#8A97AB",
                  backgroundColor: "#EEF2F6",
                  border: "1px solid #8A97AB",
                }}>
                {" "}
                <FaCheck /> Planned
              </div>

              <div className="cert-title">
                <p>DevOps Engineer Professional</p>
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
              <div className="result" style={{
                  color: "#8A97AB",
                  backgroundColor: "#EEF2F6",
                  border: "1px solid #8A97AB",
                }}>
                {" "}
                <FaCheck /> Planned
              </div>

              <div className="cert-title">
                <p>Solutions Architect Professional</p>
                <FaArrowRight />
              </div>
            </motion.a>
          </motion.div>
        </div>
        <div
          className="hash-cert"
        >
          <h4>Terraform Certifications</h4>
          <motion.div className="terraform-cert-list"  
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
            }}>
            <motion.a
              variants={{
                hidden: { opacity: 0, x: -40 },
                show: { opacity: 1, x: 0 },
              }}
              transition={{ duration: 0.5 }}
              href=""
            >
              <img src={hcta} alt="" />
              <div
                className="result"
                style={{
                  color: "#63AC9D",
                  backgroundColor: "#DCF0E8",
                  border: "1px solid #63AC9D",
                }}
              >
                {" "}
                <FaCheck /> Earned
              </div>
              <div className="cert-title">
                <p>Terraform Associate (004)</p>
                <FaArrowRight />
              </div>
            </motion.a>
          </motion.div>
        </div>
        <div
          className="kub-cert"
        >
          <h4>Kubernetes Certifications</h4>
          <motion.div className="kubernetes-cert-list"  
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
            }}>
            <motion.a
              variants={{
                hidden: { opacity: 0, x: -40 },
                show: { opacity: 1, x: 0 },
              }}
              transition={{ duration: 0.5 }}
              href=""
            >
              <img src={cka} alt="" />
              <div
                className="result"
                style={{
                  color: "#8A97AB",
                  backgroundColor: "#EEF2F6",
                  border: "1px solid #8A97AB",
                }}
              >
                {" "}
                <FaCheck /> In Progress
              </div>

              <div className="cert-title">
                <p>
                  Certified Kubernetes <br />Administrator
                </p>
                <FaArrowRight />
              </div>
            </motion.a>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Cloud;
