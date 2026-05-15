import { useState } from "react";
import { FaRegFaceTired } from "react-icons/fa6";
import { FaRegFaceFrown } from "react-icons/fa6";
import { FaRegFaceMeh } from "react-icons/fa6";
import { FaRegFaceSmileBeam } from "react-icons/fa6";
import { FaRegFaceLaughSquint } from "react-icons/fa6";
import "./FeedbackCard.scss";


const FeedbackCard = () => {
  const [step, setStep] = useState(1);

  return (
    <div className="feedback-box">
      {step === 1 && (
        <div className="box-one">
          <p>Your feedback matters — How do you like my portfolio?</p>
          <div className="ratings">
            <button onClick={() => setStep(2)}>
              <FaRegFaceTired />
            </button>
            <button onClick={() => setStep(2)}>
              <FaRegFaceFrown />
            </button>
            <button onClick={() => setStep(2)}>
              <FaRegFaceMeh />
            </button>
            <button onClick={() => setStep(2)}>
              <FaRegFaceSmileBeam />
            </button>
            <button onClick={() => setStep(2)}>
              <FaRegFaceLaughSquint />
            </button>
          </div>
          <div className="labels">
            <p>Very bad</p>
            <p>Very good</p>
          </div>
        </div>
      )}
      {step === 2 && (
        <div className="box-two">
          <p>Please share any comments or feedback</p>

          <textarea placeholder="Write here"></textarea>

          <div className="buttons">
            <button onClick={() => setStep(1)}>Back</button>
            <button onClick={() => setStep(3)}>Submit</button>
          </div>
        </div>
      )}

      {step === 3 && (
        <div className="box-three">
          <p>Thank You!</p>
          <p>Your feedback was submitted.</p>
        </div>
      )}
    </div>
  );
};

export default FeedbackCard;
