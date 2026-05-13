import "./DevScroll.scss";
import { motion } from "framer-motion";
const DevScroll = () => {
  const icons1: any[] = [
    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/vscode/vscode-original.svg" />,
    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/sass/sass-original.svg" />,
    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/python/python-original.svg" />,
    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/postman/postman-original.svg" />,
    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mysql/mysql-original.svg" />,
    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/framermotion/framermotion-original.svg" />,
    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/cplusplus/cplusplus-original.svg" />,
  ];
  const icons2: any[] = [
    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg" />,
    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mongodb/mongodb-original.svg" />,
    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/css3/css3-original.svg" />,
    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg" />,
    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/github/github-original.svg" />,
    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/html5/html5-original.svg" />,
    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/typescript/typescript-original.svg" />,
  ];

  const repeated1 = [...icons1, ...icons1, ...icons1];
  const repeated2 = [...icons2, ...icons2, ...icons2];
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ delay: 0.3 }}
      className="devScroll-container"
    >
      <motion.div
        animate={{ x: ["0", "-840px"], opacity: 1 }}
        transition={{
          duration: 20,
          ease: "linear",
          repeat: Infinity,
        }}
        className="dev-img"
      >
        {repeated1.map((icon, index) => (
          <div className="icon-container" key={index}>
            {icon}
          </div>
        ))}
      </motion.div>
      <motion.div
        className="dev-img"
        animate={{ x: ["-840px", "0"], opacity: 1 }}
        transition={{
          duration: 20,
          ease: "linear",
          repeat: Infinity,
        }}
      >
        {repeated2.map((icon, index) => (
          <div className="icon-container" key={index}>
            {icon}
          </div>
        ))}
      </motion.div>
    </motion.div>
  );
};

export default DevScroll;
