import { FaCode } from "react-icons/fa";
import framer from "../../assets/Framer-Motion.webp";
import { IoCloseOutline } from "react-icons/io5";
import "./DevTechStack.scss";
const DevTechStack = ({handleClose}: {handleClose: () => void}) => {

  
  return (
    <div className="dev-stack-overlay" onClick={handleClose}>
      <div className="dev-stack-container" onClick={(e) => e.stopPropagation()}>
        <IoCloseOutline className="close-btn" onClick={handleClose} />

        <h3>
          <FaCode /> Languages and Tools:
        </h3>

        <div className="dev-stack-categories">
          <h4>Frontend</h4>
          <div className="dev-stack-logo-container">
            <div className="dev-stack-logo">
              <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg" />
              <p>React</p>
            </div>
            <div className="dev-stack-logo">
              <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg" />
              <p>JavaScript</p>
            </div>
            <div className="dev-stack-logo">
              <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/typescript/typescript-original.svg" />
              <p>TypeScript</p>
            </div>
            <div className="dev-stack-logo">
              <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/redux/redux-original.svg" />
              <p>Redux</p>
            </div>
            <div className="dev-stack-logo">
              <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/html5/html5-original.svg" />
              <p>Html5</p>
            </div>
            <div className="dev-stack-logo">
              <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/css3/css3-original.svg" />
              <p>CSS3</p>
            </div>
            <div className="dev-stack-logo">
              <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/sass/sass-original.svg" />
              <p>Sass</p>
            </div>
            <div className="dev-stack-logo">
              <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg" />
              <p>Tailwind CSS</p>
            </div>
            <div className="dev-stack-logo">
              <img src={framer} />
              <p>Motion</p>
            </div>
            <div className="dev-stack-logo">
              <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/chartjs/chartjs-original.svg" />
              <p>Chart.js</p>
            </div>
            <div className="dev-stack-logo">
              <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/reactrouter/reactrouter-original.svg" />
              <p>React Router</p>
            </div>
          </div>
        </div>

        <div className="dev-stack-categories">
          <h4>Backend</h4>
          <div className="dev-stack-logo-container">
            <div className="dev-stack-logo">
              <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nodejs/nodejs-original.svg" />
              <p>Node.js</p>
            </div>
            <div className="dev-stack-logo">
              <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/express/express-original.svg" />
              <p>Express.js</p>
            </div>
            <div className="dev-stack-logo">
              <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mongodb/mongodb-original.svg" />
              <p>MongoDB</p>
            </div>
            <div className="dev-stack-logo">
              <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/postgresql/postgresql-original.svg" />
              <p>PostgreSQL</p>
            </div>
          </div>
        </div>

        <div className="dev-stack-categories">
          <h4>Tools</h4>
          <div className="dev-stack-logo-container">
            <div className="dev-stack-logo">
              <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/git/git-original.svg" />
              <p>Git</p>
            </div>
            <div className="dev-stack-logo">
              <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/github/github-original.svg" />
              <p>GitHub</p>
            </div>
            <div className="dev-stack-logo">
              <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/vscode/vscode-original.svg" />
              <p>VS Code</p>
            </div>
            <div className="dev-stack-logo">
              <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/postman/postman-original.svg" />
              <p>Postman</p>
            </div>
            <div className="dev-stack-logo">
              <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/eslint/eslint-original.svg" />
              <p>ESLint</p>
            </div>
          </div>
        </div>

        <div className="dev-stack-categories">
          <h4>Other</h4>
          <div className="dev-stack-logo-container">
            <div className="dev-stack-logo">
              <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/vitejs/vitejs-original.svg" />
              <p>ViteJs</p>
            </div>
            <div className="dev-stack-logo">
              <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/npm/npm-original.svg" />
              <p>npm</p>
            </div>
            <div className="dev-stack-logo">
              <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/linux/linux-original.svg" />
              <p>Linux</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DevTechStack;
