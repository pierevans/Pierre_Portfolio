import { useState } from "react";
import {
  FaRegFaceTired,
  FaRegFaceFrown,
  FaRegFaceMeh,
  FaRegFaceSmileBeam,
  FaRegFaceLaughSquint,
} from "react-icons/fa6";
import { IoCloseOutline } from "react-icons/io5";
import "./FeedbackCard.scss";

const FeedbackCard = ({ handleClose }: { handleClose: () => void }) => {
  const [step, setStep] = useState(1);

  return (
    <div className="feedback-overlay" onClick={handleClose}>
      <div className="feedback-box" onClick={(e) => e.stopPropagation()}>
        <IoCloseOutline className="close-btn" onClick={handleClose} />
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
    </div>
  );
};

export default FeedbackCard;
