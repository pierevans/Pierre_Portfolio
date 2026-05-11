import { useForm, type SubmitHandler } from "react-hook-form";
import { RiMailSendLine } from "react-icons/ri";
import "./Form.scss";

interface FormData {
  name: string;
  email: string;
}

const Form = () => {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<FormData>();

  const onSubmit: SubmitHandler<FormData> = (data) => console.log(data);

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
        id="name"
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
      <button type="submit" className="btn-mail">
        <p>Submit</p>
        <span>
          <RiMailSendLine />
        </span>
      </button>
    </form>
  );
};

export default Form;
