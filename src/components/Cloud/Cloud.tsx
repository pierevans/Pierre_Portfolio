import "../../index.scss"
import "./Cloud.scss";
import HeaderAnimation from "../Animation/HeaderAnimation";
import TitleAnimation from "../Animation/TitleAnimation";
const Cloud = () => {
  return (
    
    <div className="cloud-container">
      <h2>

      <HeaderAnimation headline="Cloud Skills" />
      </h2>
      <h3><TitleAnimation title="Cloud Certificates" /></h3>
      <div className="cert-container">
        <div className="aws-cert">
          <a href="">
            {} <p></p>
          </a>
          <a href=""></a>
          <a href=""></a>
          <a href=""></a>
        </div>
      </div>
      <h3><TitleAnimation title="Cloud projects" /></h3>
    </div>
  );
};

export default Cloud;
