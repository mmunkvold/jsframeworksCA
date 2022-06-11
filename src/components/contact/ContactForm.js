import { useState } from "react";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import FormError from "../common/FormError";

const schema = yup.object().shape({
  firstname: yup.string().required("Please enter your first name").min(3, "Name must consist of min 3 letters"),
  lastname: yup.string().required("Please enter your last name").min(4, "Name must consist of min 4 letters"),
  email: yup.string().email("Please enter a valid email").required("Please enter your email"),
  subject: yup.string().required("Please make a selection"),
  message: yup.string().required("Please write something").min(10, "Message must consist of min 10 letters"),
});

const ContactForm = () => {
  const [submitted, setSubmitted] = useState(false);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({ resolver: yupResolver(schema) });

  function onSubmit(data) {
    console.log(data);
    setSubmitted(true);
    reset();
  }

  console.log(errors);

  return (
    <>
      <form className="form" onSubmit={handleSubmit(onSubmit)}>
        <div>{submitted && <span className="success">Your message was sent!</span>}</div>

        <label htmlFor="firstname">First name:</label>
        {errors.firstname && <FormError>{errors.firstname.message}</FormError>}
        <input id="firstname" type="text" name="firstname" {...register("firstname", { required: true })} />

        <label htmlFor="lastname">Last name:</label>
        {errors.lastname && <FormError>{errors.lastname.message}</FormError>}
        <input id="lastname" type="text" name="lastname" {...register("lastname", { required: true })} />

        <label htmlFor="email">Your email:</label>
        {errors.email && <FormError>{errors.email.message}</FormError>}
        <input id="email" type="email" name="email" {...register("email", { required: true })} />

        <label htmlFor="subject">Choose:</label>
        {errors.subject && <FormError>{errors.subject.message}</FormError>}
        <select id="subject" name="subject" {...register("subject", { required: true })}>
          <option value="">Select</option>
          <option value="fan">star wars fan</option>
          <option value="notafan">not a fan</option>
        </select>

        <div>
          <label htmlFor="message">Your message:</label>
          {errors.message && <FormError>{errors.message.message}</FormError>}
          <textarea id="message" cols="10" rows="8" type="text" name="message" {...register("message", { required: true })}></textarea>
        </div>

        <button className="btn">Send</button>
      </form>
    </>
  );
};

export default ContactForm;
