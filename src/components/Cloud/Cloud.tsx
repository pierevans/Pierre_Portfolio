import { motion } from "framer-motion";
import "../../index.scss";
import "./Cloud.scss";

import CloudCard from "../../components/Card/CloudCard/CloudCard";
import cloudProjects from "./ProjectLists";

import { FaCheck } from "react-icons/fa";
import { FaArrowRight } from "react-icons/fa6";
import { IoIosArrowUp, IoIosArrowDown } from "react-icons/io";

import AwsScroll from "../Animation/AwsScroll/AwsScroll";
import HeaderAnimation from "../Animation/HeaderAnimation";
import TitleAnimation from "../Animation/TitleAnimation";

import clf from "../../assets/cert-badge/CLF-C02.png";
import dop from "../../assets/cert-badge/DOP-C02.png";
import hcta from "../../assets/cert-badge/HCTA0-004.png";
import cka from "../../assets/cert-badge/CKA.png";
import saa from "../../assets/cert-badge/SAA-C03.png";
import sap from "../../assets/cert-badge/SAP-C02.png";

import { useEffect, useState } from "react";

const Cloud = () => {
  const [cardsPerPage, setCardsPerPage] = useState(3);
  const [visibleCount, setVisibleCount] = useState(3);
  const [activeTab, setActiveTab] = useState("all");

  // Detect screen size
  useEffect(() => {
    const updateCardsPerPage = () => {
      const newCardsPerPage =
        window.innerWidth >= 1500 ? 4 : 3;

      setCardsPerPage((previousCardsPerPage) => {
        // If the user has not clicked "Show more",
        // update the initial visible count too.
        setVisibleCount((previousVisibleCount) => {
          if (previousVisibleCount <= previousCardsPerPage) {
            return newCardsPerPage;
          }

          return previousVisibleCount;
        });

        return newCardsPerPage;
      });
    };

    updateCardsPerPage();

    window.addEventListener("resize", updateCardsPerPage);

    return () => {
      window.removeEventListener(
        "resize",
        updateCardsPerPage
      );
    };
  }, []);

  const showMoreCards = () => {
    setVisibleCount(
      (previousCount) => previousCount + cardsPerPage
    );
  };

  const showLessCards = () => {
    setVisibleCount(cardsPerPage);
  };

  const changeTab = (tab: string) => {
    setActiveTab(tab);
    setVisibleCount(cardsPerPage);
  };

  const filteredCloudProjects =
    activeTab === "all"
      ? cloudProjects
      : cloudProjects.filter(
          (project) => project.level === activeTab
        );

  const visibleCloudProjects =
    filteredCloudProjects.slice(0, visibleCount);

  const moreCards =
    visibleCount < filteredCloudProjects.length;

  return (
    <section className="cloud-container" id="cloud">
      {/* ================= CLOUD SKILLS ================= */}

      <h2>
        <HeaderAnimation headline="Cloud Skills" />
      </h2>

      <div className="aws-scroll">
        <AwsScroll />
      </div>

      {/* ================= CLOUD STACK ================= */}

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
          {/* CLOUD */}

          <motion.div
            className="cloud-stack"
            variants={{
              hidden: {
                opacity: 0,
                x: -40,
              },

              show: {
                opacity: 1,
                x: 0,
              },
            }}
            transition={{
              duration: 0.5,
            }}
          >
            <span>Cloud</span>

            <div className="stack-img">
              <img
                src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/amazonwebservices/amazonwebservices-original-wordmark.svg"
                alt="AWS"
              />
            </div>

            <p>
              EC2 S3 RDS VPC ECS EKS CloudFront IAM
              CloudWatch etc..
            </p>
          </motion.div>

          {/* INFRASTRUCTURE AS CODE */}

          <motion.div
            className="cloud-stack"
            variants={{
              hidden: {
                opacity: 0,
                x: -40,
              },

              show: {
                opacity: 1,
                x: 0,
              },
            }}
            transition={{
              duration: 0.5,
            }}
          >
            <span>Infrastructure as Code</span>

            <div className="stack-img">
              <img
                src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/terraform/terraform-original.svg"
                alt="Terraform"
              />
            </div>

            <p>
              Terraform
              <br />
              HCP Terraform
            </p>
          </motion.div>

          {/* CONTAINERS */}

          <motion.div
            className="cloud-stack"
            variants={{
              hidden: {
                opacity: 0,
                x: -40,
              },

              show: {
                opacity: 1,
                x: 0,
              },
            }}
            transition={{
              duration: 0.5,
            }}
          >
            <span>Container & Orchestration</span>

            <div className="stack-img">
              <img
                src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/docker/docker-original.svg"
                alt="Docker"
              />

              <img
                src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/kubernetes/kubernetes-original.svg"
                alt="Kubernetes"
              />
            </div>

            <p>
              Docker
              <br />
              Kubernetes
              <br />
              ECR
            </p>
          </motion.div>

          {/* CICD */}

          <motion.div
            className="cloud-stack"
            variants={{
              hidden: {
                opacity: 0,
                x: -40,
              },

              show: {
                opacity: 1,
                x: 0,
              },
            }}
            transition={{
              duration: 0.5,
            }}
          >
            <span>CI/CD</span>

            <div className="stack-img">
              <img
                src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/githubactions/githubactions-original.svg"
                alt="GitHub Actions"
              />

              <img
                src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/jenkins/jenkins-original.svg"
                alt="Jenkins"
              />
            </div>

            <p>
              GitHub Actions
              <br />
              Jenkins
              <br />
              CI/CD Pipelines
            </p>
          </motion.div>

          {/* TOOLS */}

          <motion.div
            className="cloud-stack"
            variants={{
              hidden: {
                opacity: 0,
                x: -40,
              },

              show: {
                opacity: 1,
                x: 0,
              },
            }}
            transition={{
              duration: 0.5,
            }}
          >
            <span>Tools & Others</span>

            <div className="stack-img">
              <img
                src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/linux/linux-original.svg"
                alt="Linux"
              />

              <img
                src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/bash/bash-original.svg"
                alt="Bash"
              />
            </div>

            <p>
              Linux
              <br />
              Bash
            </p>
          </motion.div>
        </motion.div>
      </div>

      {/* ================= CLOUD PROJECTS ================= */}

      <h3>
        <TitleAnimation title="Cloud projects" />
      </h3>

      <div className="project-container">
        {/* FILTER TABS */}

        <div className="project-tab-container">
          <button
            className={`project-tab ${
              activeTab === "all" ? "active" : ""
            }`}
            onClick={() => changeTab("all")}
          >
            All
          </button>

          <button
            className={`project-tab ${
              activeTab === "easy" ? "active" : ""
            }`}
            onClick={() => changeTab("easy")}
          >
            Beginner
          </button>

          <button
            className={`project-tab ${
              activeTab === "medium" ? "active" : ""
            }`}
            onClick={() => changeTab("medium")}
          >
            Intermediate
          </button>

          <button
            className={`project-tab ${
              activeTab === "hard" ? "active" : ""
            }`}
            onClick={() => changeTab("hard")}
          >
            Hard
          </button>
        </div>

        {/* PROJECT CARDS */}

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
          {visibleCloudProjects.map(
            (cloudProject, index) => (
              <CloudCard
                key={index}
                title={cloudProject.title}
                description={cloudProject.description}
                img={cloudProject.src}
                href={cloudProject.href}
              />
            )
          )}
        </motion.div>

        {/* SHOW MORE / SHOW LESS */}

        {moreCards ? (
          <button
            className="show-card"
            onClick={showMoreCards}
          >
            Show more

            <IoIosArrowDown className="show-card-icon" />
          </button>
        ) : (
          filteredCloudProjects.length > cardsPerPage &&
          visibleCount > cardsPerPage && (
            <button
              className="show-card"
              onClick={showLessCards}
            >
              Show less

              <IoIosArrowUp className="show-card-icon rotate" />
            </button>
          )
        )}
      </div>

      {/* ================= CERTIFICATES ================= */}

      <h3>
        <TitleAnimation title="Cloud Certificates" />
      </h3>

      <div className="cert-container">
        {/* AWS CERTIFICATIONS */}

        <div className="aws-cert">
          <h4>AWS Certifications</h4>

          <motion.div
            className="aws-cert-list"
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
            {/* CLOUD PRACTITIONER */}

            <motion.a
              variants={{
                hidden: {
                  opacity: 0,
                  x: -40,
                },

                show: {
                  opacity: 1,
                  x: 0,
                },
              }}
              transition={{
                duration: 0.5,
              }}
              href=""
            >
              <img src={clf} alt="Cloud Practitioner" />

              <div
                className="result"
                style={{
                  color: "#63AC9D",
                  backgroundColor: "#DCF0E8",
                  border: "1px solid #63AC9D",
                }}
              >
                <FaCheck />
                Earned
              </div>

              <div className="cert-title">
                <p>Cloud Practitioner</p>
                <FaArrowRight />
              </div>
            </motion.a>

            {/* SOLUTIONS ARCHITECT ASSOCIATE */}

            <motion.a
              variants={{
                hidden: {
                  opacity: 0,
                  x: -40,
                },

                show: {
                  opacity: 1,
                  x: 0,
                },
              }}
              transition={{
                duration: 0.5,
              }}
              href=""
            >
              <img
                src={saa}
                alt="Solutions Architect Associate"
              />

              <div
                className="result"
                style={{
                  color: "#8A97AB",
                  backgroundColor: "#EEF2F6",
                  border: "1px solid #8A97AB",
                }}
              >
                <FaCheck />
                In Progress
              </div>

              <div className="cert-title">
                <p>Solutions Architect Associate</p>
                <FaArrowRight />
              </div>
            </motion.a>

            {/* DEVOPS */}

            <motion.a
              variants={{
                hidden: {
                  opacity: 0,
                  x: -40,
                },

                show: {
                  opacity: 1,
                  x: 0,
                },
              }}
              transition={{
                duration: 0.5,
              }}
              href=""
            >
              <img
                src={dop}
                alt="DevOps Engineer Professional"
              />

              <div
                className="result"
                style={{
                  color: "#8A97AB",
                  backgroundColor: "#EEF2F6",
                  border: "1px solid #8A97AB",
                }}
              >
                <FaCheck />
                Planned
              </div>

              <div className="cert-title">
                <p>DevOps Engineer Professional</p>
                <FaArrowRight />
              </div>
            </motion.a>

            {/* SOLUTIONS ARCHITECT PROFESSIONAL */}

            <motion.a
              variants={{
                hidden: {
                  opacity: 0,
                  x: -40,
                },

                show: {
                  opacity: 1,
                  x: 0,
                },
              }}
              transition={{
                duration: 0.5,
              }}
              href=""
            >
              <img
                src={sap}
                alt="Solutions Architect Professional"
              />

              <div
                className="result"
                style={{
                  color: "#8A97AB",
                  backgroundColor: "#EEF2F6",
                  border: "1px solid #8A97AB",
                }}
              >
                <FaCheck />
                Planned
              </div>

              <div className="cert-title">
                <p>
                  Solutions Architect Professional
                </p>

                <FaArrowRight />
              </div>
            </motion.a>
          </motion.div>
        </div>

        {/* TERRAFORM CERTIFICATION */}

        <div className="hash-cert">
          <h4>Terraform Certifications</h4>

          <motion.div
            className="terraform-cert-list"
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
            <motion.a
              variants={{
                hidden: {
                  opacity: 0,
                  x: -40,
                },

                show: {
                  opacity: 1,
                  x: 0,
                },
              }}
              transition={{
                duration: 0.5,
              }}
              href=""
            >
              <img
                src={hcta}
                alt="Terraform Associate"
              />

              <div
                className="result"
                style={{
                  color: "#63AC9D",
                  backgroundColor: "#DCF0E8",
                  border: "1px solid #63AC9D",
                }}
              >
                <FaCheck />
                Earned
              </div>

              <div className="cert-title">
                <p>Terraform Associate (004)</p>

                <FaArrowRight />
              </div>
            </motion.a>
          </motion.div>
        </div>

        {/* KUBERNETES CERTIFICATION */}

        <div className="kub-cert">
          <h4>Kubernetes Certifications</h4>

          <motion.div
            className="kubernetes-cert-list"
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
            <motion.a
              variants={{
                hidden: {
                  opacity: 0,
                  x: -40,
                },

                show: {
                  opacity: 1,
                  x: 0,
                },
              }}
              transition={{
                duration: 0.5,
              }}
              href=""
            >
              <img
                src={cka}
                alt="Certified Kubernetes Administrator"
              />

              <div
                className="result"
                style={{
                  color: "#8A97AB",
                  backgroundColor: "#EEF2F6",
                  border: "1px solid #8A97AB",
                }}
              >
                <FaCheck />
                In Progress
              </div>

              <div className="cert-title">
                <p>
                  Certified Kubernetes
                  <br />
                  Administrator
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