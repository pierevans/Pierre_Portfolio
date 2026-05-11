import "./dev.scss";
import HeaderAnimation from "../Animation/HeaderAnimation";
import TitleAnimation from "../Animation/TitleAnimation";
const Dev = () => {
  return (
    <div className="dev-container">
      <h2>

      <HeaderAnimation headline="Software Development" /> 
      </h2>
     <div>

     </div>

      <h3><TitleAnimation title="Dev projects" /></h3>
    </div>
  );
};

export default Dev;
