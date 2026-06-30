import { useState } from "react";
import emailjs from "@emailjs/browser";
import toast from "react-hot-toast";
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
  const [rating, setRating] = useState("");
  const [comment, setComment] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleRating = (value: string) => {
    setRating(value);
    setStep(2);
  };

  const handleSubmitFeedback = async () => {
    if (!comment.trim()) {
      toast.error("Please write your feedback.");
      return;
    }

    setIsSubmitting(true);

    try {
      await emailjs.send(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        {
          rating,
          comment,
        },
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY,
      );

      toast.success("Feedback sent successfully!");
      setStep(3);
    } catch (error) {
      console.error("EMAILJS ERROR:", error);
      toast.error("Feedback failed to send.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="feedback-overlay" onClick={handleClose}>
      <div className="feedback-box" onClick={(e) => e.stopPropagation()}>
        <IoCloseOutline className="close-btn" onClick={handleClose} />

        {step === 1 && (
          <div className="box-one">
            <p>Your feedback matters — How do you like my portfolio?</p>
      
            <div className="ratings">
              <button onClick={() => handleRating("Very bad")}>
                <FaRegFaceTired />
              </button>
              <button onClick={() => handleRating("Bad")}>
                <FaRegFaceFrown />
              </button>
              <button onClick={() => handleRating("Okay")}>
                <FaRegFaceMeh />
              </button>
              <button onClick={() => handleRating("Good")}>
                <FaRegFaceSmileBeam />
              </button>
              <button onClick={() => handleRating("Very good")}>
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

            <textarea
              placeholder="Write here"
              value={comment}
              onChange={(e) => setComment(e.target.value)}
            ></textarea>

            <div className="buttons">
              <button onClick={() => setStep(1)}>Back</button>
              <button onClick={handleSubmitFeedback} disabled={isSubmitting}>
                {isSubmitting ? "Sending..." : "Submit"}
              </button>
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
