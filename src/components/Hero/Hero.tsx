import "./Hero.scss";
import { BsCode } from "react-icons/bs";
import { BsCodeSlash } from "react-icons/bs";
import myPicture from "../../assets/—Pngtree—man in shirt smiles and_13146336.png";
const Hero = () => {
  return (
    <div className="hero-container">
      {/* <div className="hero-icon">
        <div className="icon">
          <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg" />
        </div>
      </div> */}
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
      <div className="hero-content">
        <h4>Hi, I'm Pierre</h4>
        <h1>
          <BsCode />
          Code. Cloud. Creativity.
          <BsCodeSlash />
        </h1>
        <p>
          Passionate about software development and cloud computing, I’m focused
          on growing into a Cloud Engineer role by combining my full stack
          development background with hands-on experience in AWS, cloud
          architecture, and modern DevOps practices.
        </p>
        <div className="hero-btn">
          <button>Contact Me</button>
          <button>Download CV</button>
        </div>
      </div>
      <div className="hero-img">
        <svg
          viewBox="0 0 100 100"
          xmlns="http://www.w3.org/2000/svg"
          className="shadow-md dark:border-slate-700"
          // style={{ width: "649.44px", height: "649.44px" }}
        >
          <path
            d="M85.5,64.5Q73,79,56,88.5Q39,98,23.5,84Q8,70,12,52Q16,34,29,24Q42,14,57.5,17.5Q73,21,85.5,35.5Q98,50,85.5,64.5Z"
            stroke="none"
            stroke-width="0"
            fill="#f2eafe"
          ></path>
          <path
            d="M80.5,65Q74,80,58,83.5Q42,87,23.5,79.5Q5,72,9,52Q13,32,27.5,23.5Q42,15,57,18.5Q72,22,79.5,36Q87,50,80.5,65Z"
            stroke="none"
            stroke-width="0"
            fill="#e5d5fd"
          ></path>
          <path
            d="M85.5,67Q77,84,58.5,88.5Q40,93,24,81.5Q8,70,8,50Q8,30,24.5,19.5Q41,9,57,15.5Q73,22,83.5,36Q94,50,85.5,67Z"
            stroke="none"
            stroke-width="0"
            fill="#d7c1fd"
          ></path>
          <path
            d="M89,68.5Q80,87,59.5,92Q39,97,26,82.5Q13,68,9.5,48.5Q6,29,23,18.5Q40,8,60.5,9.5Q81,11,89.5,30.5Q98,50,89,68.5Z"
            stroke="none"
            stroke-width="0"
            fill="#caacfc"
          ></path>
          <path
            d="M89,69Q80,88,61,86.5Q42,85,24,78Q6,71,7.5,50.5Q9,30,24,16.5Q39,3,60,7Q81,11,89.5,30.5Q98,50,89,69Z"
            stroke="none"
            stroke-width="0"
            fill="#bd97fb"
          ></path>
          <path
            d="M81,66Q76,82,58.5,86Q41,90,28,78.5Q15,67,12,48.5Q9,30,24,16.5Q39,3,60,7Q81,11,83.5,30.5Q86,50,81,66Z"
            stroke="none"
            stroke-width="0"
            fill="#b082fa"
          ></path>
          <path
            d="M87,69Q80,88,60,91.5Q40,95,28,80.5Q16,66,11,47.5Q6,29,24,22Q42,15,61,13.5Q80,12,87,31Q94,50,87,69Z"
            stroke="none"
            stroke-width="0"
            fill="#a36df9"
          ></path>
          <path
            d="M85,68.5Q79,87,59,93Q39,99,26,83.5Q13,68,10,48.5Q7,29,24,19Q41,9,59.5,12Q78,15,84.5,32.5Q91,50,85,68.5Z"
            stroke="none"
            stroke-width="0"
            fill="#9559f9"
          ></path>
          <path
            d="M86.5,69Q80,88,60,91Q40,94,25,81.5Q10,69,11.5,50.5Q13,32,26,17Q39,2,55.5,12Q72,22,82.5,36Q93,50,86.5,69Z"
            stroke="none"
            stroke-width="0"
            fill="#8844f8"
          ></path>
        </svg>
        <img src={myPicture} alt="My Picture" />
      </div>
    </div>
  );
};

export default Hero;
