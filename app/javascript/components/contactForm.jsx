import React from "react";
import { useForm } from "react-hook-form";

const ContactForm = () => {
  const { register, handleSubmit, formState: { errors } } = useForm();
  const onSubmit = data => console.log(data);

  return(
    <div className="container contact-form">
      <form action="submit" className="form" onSubmit={handleSubmit(onSubmit)}>
        <h1 className="text-center mb-3">Contact Form</h1>
        <div className="info-form">
          <div className="name-form">
          <label className="label-form">Your Name</label>
          <input {...register("name", { required: true, maxLength: 20 })} />
          </div>

          <div className="email-form">
            <label className="label-form">Your Email</label>
            <input {...register("email", { pattern: /.+@.+\.[A-Za-z]+$/})} />
          </div>
        </div>

        <div className="subject">
        <label className="label-form">subject</label>
          <input {...register("subject", { required: true, maxLength: 20 })} />
        </div>
        <div className="textarea">
          <label className="label-form">Let's chat</label>
          <input {...register("text", { required: true, minLength: 20 })} />
        </div>

        
          <input className="btn sendBtn" type="submit" value="send" />
       
      </form>
      <div className="push"></div>
    </div>
  );
}

export default ContactForm

