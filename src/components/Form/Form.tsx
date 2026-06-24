import { useForm, type SubmitHandler } from "react-hook-form";
import { RiMailSendLine } from "react-icons/ri";
import emailjs from "@emailjs/browser";
import "./Form.scss";

interface FormData {
  name: string;
  email: string;
  textarea: string;
}

const Form = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<FormData>();

  const onSubmit: SubmitHandler<FormData> = async (data) => {
    try {
      await emailjs.send(
        import.meta.env.EMAILJS_SERVICE_ID,
        import.meta.env.EMAILJS_TEMPLATE_ID,
        {
          name: data.name,
          email: data.email,
          message: data.textarea,
        },
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY,
      );

      alert("Message sent successfully!");
      reset();
    } catch (error) {
      console.log(error);
      alert("Message failed to send.");
    }
  };

  return (
    <form className="form" onSubmit={handleSubmit(onSubmit)}>
      <input
        type="text"
        id="name"
        placeholder="Full Name *"
        {...register("name", { required: "Please enter a name." })}
      />
      {errors.name && <p className="error-message">{errors.name.message}</p>}

      <input
        type="email"
        id="email"
        placeholder="Email Address *"
        {...register("email", {
          required: "Please enter a Email.",
          pattern: {
            value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
            message: "Please enter a valid email address.",
          },
        })}
      />
      {errors.email && <p className="error-message">{errors.email.message}</p>}

      <textarea
        id="textarea"
        placeholder="Type your message here..."
        {...register("textarea", {
          required: "Please write a message.",
        })}
      />
      {errors.textarea && (
        <p className="error-message">{errors.textarea.message}</p>
      )}

      <button type="submit" className="btn-mail" disabled={isSubmitting}>
        <p>{isSubmitting ? "Sending..." : "Submit"}</p>
        <span>
          <RiMailSendLine />
        </span>
      </button>
    </form>
  );
};

export default Form;
