// import { useState } from "react";
// import { MdFeedback } from "react-icons/md";
// import "./Feedback.scss";
// import FeedbackCard from "../Card/FeedbackCard/FeedbackCard";

// const Feedback = () => {
//   const [feedback, setFeedback] = useState(false);
//   const [feedbackCard, setFeedbackCard] = useState(false);

//   const showFeedback = () => {
//     if (window.scrollY >= 800) {
//       setFeedback(true);
//     } else {
//       setFeedback(false);
//     }
//   };

//   const showFeedbackCard = () => {
//     setFeedbackCard((prev) => !prev);
//   };

//   window.addEventListener("scroll", showFeedback);
//   return (
//     <>
//       <div
//         className={
//           feedback ? "feedback-container active" : "feedback-container"
//         }
//         onClick={() => showFeedbackCard()}
//       >
//         <MdFeedback className="feedback-btn" />
//       </div>
//       {feedbackCard && <FeedbackCard />}
//     </>
//   );
// };

// export default Feedback;

import { useEffect, useState } from "react";
import { MdFeedback } from "react-icons/md";
import "./Feedback.scss";
import FeedbackCard from "../Card/FeedbackCard/FeedbackCard";

const Feedback = () => {
  const [feedback, setFeedback] = useState(false);
  const [feedbackCard, setFeedbackCard] = useState(false);

  useEffect(() => {
    const showFeedback = () => {
      setFeedback(window.scrollY >= 800);
    };

    window.addEventListener("scroll", showFeedback);
    showFeedback();

    return () => window.removeEventListener("scroll", showFeedback);
  }, []);

  return (
    <>
      <div
        className={feedback ? "feedback-container active" : "feedback-container"}
        onClick={() => setFeedbackCard((prev) => !prev)}
      >
        <MdFeedback className="feedback-btn" />
      </div>

      {feedbackCard && <FeedbackCard />}
    </>
  );
};

export default Feedback;
