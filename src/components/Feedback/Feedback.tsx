import { useState } from "react";
import { MdFeedback } from "react-icons/md";
import "./Feedback.scss";
import FeedbackCard from "../Card/FeedbackCard/FeedbackCard";

const Feedback = () => {
  const [feedback, setFeedback] = useState(false);
  const [feedbackCard, setFeedbackCard] = useState(false);

  const showFeedback = () => {
    if (window.scrollY >= 800) {
      setFeedback(true);
    } else {
      setFeedback(false);
    }
  };

  const showFeedbackCard = () => {
    setFeedbackCard(true);
  };

  window.addEventListener("scroll", showFeedback);

  return (
    <>
      <div
        className={
          feedback ? "feedback-container active" : "feedback-container"
        }
        onClick={() => showFeedbackCard()}
      >
        <MdFeedback className="feedback-btn" />
        <div className="feedback-text">Feedback</div>
      </div>
      {feedbackCard && <FeedbackCard handleClose={() => setFeedbackCard(false)}/>}
    </>
  );
};

export default Feedback;
