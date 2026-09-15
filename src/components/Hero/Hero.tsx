import "./Hero.scss";
import { BsCode } from "react-icons/bs";
import { BsCodeSlash } from "react-icons/bs";
import { GrDownload } from "react-icons/gr";
import { motion } from "framer-motion";
const Hero = () => {
  const iconVariants = [
    {
      name: "JavaScript",
      img: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg",
      color: "#F7DF1E",
      top: "15%",
      left: "35%",
      width: "50px",
    },
    {
      name: "TypeScript",
      img: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/typescript/typescript-original.svg",
      color: "#3178C6",
      top: "88%",
      left: "8%",
      width: "50px",
    },
    {
      name: "AWS",
      img: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/amazonwebservices/amazonwebservices-original-wordmark.svg",
      color: "#FF9900",
      top: "20%",
      left: "18%",
      width: "60px",
    },
    {
      name: "Terraform",
      img: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/terraform/terraform-original.svg",
      color: "#844FBA",
      top: "10%",
      left: "60%",
      width: "60px",
    },
    {
      name: "Kubernetes",
      img: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/kubernetes/kubernetes-original.svg",
      color: "#326CE5",
      top: "80%",
      left: "95%",
      width: "50px",
    },
    {
      name: "Docker",
      img: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/docker/docker-original.svg",
      color: "#2496ED",
      top: "90%",
      left: "28%",
      width: "60px",
    },
    {
      name: "Python",
      img: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/python/python-original.svg",
      color: "#3776AB",
      top: "40%",
      left: "50%",
      width: "55px",
    },
    {
      name: "Jenkins",
      img: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/jenkins/jenkins-original.svg",
      color: "#EF7B4D",
      top: "15%",
      left: "86%",
      width: "50px",
    },
  ];

  return (
    <section className="hero">
      <div className="hero-container" id="home">
        <div className="hero-icon">
          {iconVariants.map((icon, index) => (
            <motion.div
              key={index}
              className="floating-icon"
              style={{
                top: icon.top,
                left: icon.left,
                width: icon.width,
                backgroundColor: `${icon.color}40`,
              }}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              animate={{
                y: [0, -10, 0],
                x: [0, 10, 0],
              }}
              transition={{
                delay: 0.8,
                x: {
                  duration: 5,
                  repeat: Infinity,
                  repeatType: "loop",
                  delay: index * 0.5,
                },
                y: {
                  duration: 5,
                  repeat: Infinity,
                  repeatType: "loop",
                  delay: index * 0.5,
                },
              }}
            >
              <img src={icon.img} alt={icon.name} />
            </motion.div>
          ))}{" "}
        </div>
        <div className="blob1">
          <svg
            id="10015.io"
            viewBox="0 0 480 480"
            xmlns="http://www.w3.org/2000/svg"
            xmlnsXlink="http://www.w3.org/1999/xlink"
          >
            <path
              fill="#7b2ff7"
              d="M390.5,304.5Q314,369,227,391.5Q140,414,80.5,327Q21,240,71.5,138Q122,36,221,69Q320,102,393.5,171Q467,240,390.5,304.5Z"
            />
          </svg>
        </div>
        <div className="blob2">
          <svg
            id="10015.io"
            viewBox="0 0 480 480"
            xmlns="http://www.w3.org/2000/svg"
            xmlnsXlink="http://www.w3.org/1999/xlink"
          >
            <path
              fill="#bf00ff"
              d="M374,305Q315,370,229,389Q143,408,91.5,324Q40,240,89.5,152.5Q139,65,244,58Q349,51,391,145.5Q433,240,374,305Z"
            />
          </svg>
        </div>
        <div className="blob3">
          <svg
            id="10015.io"
            viewBox="0 0 480 480"
            xmlns="http://www.w3.org/2000/svg"
            xmlnsXlink="http://www.w3.org/1999/xlink"
          >
            <path
              fill="#fffd37"
              d="M384,338.5Q354,437,237.5,441.5Q121,446,103.5,343Q86,240,123,171Q160,102,254.5,76.5Q349,51,381.5,145.5Q414,240,384,338.5Z"
            />
          </svg>
        </div>
        <motion.div
          className="hero-content"
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{
            delay: 0.3,
            duration: 0.5,
          }}
        >
          <h4>Hi, I'm Pierre</h4>
          <h1>
            <BsCode />
            Code. Cloud. Creativity.
            <BsCodeSlash />
          </h1>
          <p>
            Passionate about software development and cloud computing, I’m
            focused on growing into a Cloud Engineer role by combining my full
            stack development background with hands-on experience in AWS, cloud
            architecture, and modern DevOps practices.
          </p>
          <div className="icon-content">
            <div className="icon-content-item">
              <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/amazonwebservices/amazonwebservices-original-wordmark.svg" />
              Cloud
            </div>
            <div className="icon-content-item">
              <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/terraform/terraform-original.svg" />
              Terraform
            </div>
            <div className="icon-content-item">
              <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/docker/docker-original.svg" />
              Docker
            </div>
            <div className="icon-content-item">
              <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/kubernetes/kubernetes-original.svg" />
              Kubernetes
            </div>
            <div className="icon-content-item">
              <img src="cicd.png" alt="" />
              CI/CD
            </div>
          </div>
          <div className="hero-btn">
            <a href="#contact">
              <button>Contact Me</button>
            </a>
            <a href="path/to/your/cv.pdf" download="Pierre_CV.pdf">
              <button>
                Download CV <GrDownload />
              </button>
            </a>
          </div>
        </motion.div>
        <motion.div
          className="hero-img"
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{
            delay: 0.3,
            duration: 0.5,
          }}
        >
        
          <img src="/blob-img.png" alt="My Picture" className="blob-img" />
          <img src="/hero-sd-img.png" alt="" className="hero-sd"/>
          <motion.img
            src="hero.png"
            alt="My Picture"
            drag
            dragConstraints={{ left: 0, right: 0, top: 0, bottom: 0 }}
            dragElastic={0.2}
            dragSnapToOrigin
          />
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
