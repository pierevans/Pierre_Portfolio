import faqData from "./faqData";
import "./Accordion.scss";
import { IoIosArrowUp } from "react-icons/io";
import { IoIosArrowDown } from "react-icons/io";
import { useState } from "react";

const Accordion = () => {
  const [clicked, setClicked] = useState<number | null>(null);

  const toggle = (i: number) => {
    if (clicked === i) {
      return setClicked(null);
    }
    setClicked(i);
  };
  return (
    <div className="accordion-container">
      <h2>
        <p>More About Me</p>
      </h2>
      <div className="accordion">
        {faqData.map((data, i) => (
          <div className="data">
            <div className="question" onClick={() => toggle(i)}>
              <h4>{data.question}</h4>
              <span>
                {clicked === i ? <IoIosArrowUp /> : <IoIosArrowDown />}
              </span>
            </div>
            <div className={clicked === i? "answer show": "answer"}>{data.answer}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Accordion;
