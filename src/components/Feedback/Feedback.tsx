import { useState } from "react";
import "./Feedback.scss";
import { MdFeedback } from "react-icons/md";
const Feedback = () => {
  const [feedback, setFeedback] = useState(false);

  const showFeedback = () => {
    if (window.scrollY >= 800) {
      setFeedback(true);
    } else {
      setFeedback(false);
    }
  };

  window.addEventListener("scroll", showFeedback);
  return (
    <div
      className={feedback ? "feedback-container active" : "feedback-container"}
    >
      <MdFeedback className="feedback-btn" />
    </div>
  );
};

export default Feedback;
