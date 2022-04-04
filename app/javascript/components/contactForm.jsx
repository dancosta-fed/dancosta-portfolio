import React, { useState, useRef } from "react";
import { useForm } from "react-hook-form";
import emailjs from '@emailjs/browser';
import{ init } from '@emailjs/browser';
init("user_YQvXLKM5TcwtDkm2myErF");

const ContactForm = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_1sx9p8k', 'portfolio_contact', form.current, 'user_YQvXLKM5TcwtDkm2myErF')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });

      e.target.reset();
  };
 
      const { register, handleSubmit, formState: { errors } } = useForm();
      const onSubmit = data => console.log(data);

    return(
      <div className="container contact-container">
  
        <div className="contact-call-to-action mx-auto text-center">
          <h1>Get in Touch</h1>
          <h3>Let's talk about opportunities!</h3>
          <p>Don't like forms? Send me an <a href="mailto:dancosta.id@gmail.com">email</a></p>
        </div>
  
        <div className=" contact-form mx-auto">
          <form action="submit" ref={form} className="form" onSubmit={sendEmail}>
            <h1 className="text-center mb-3">Contact Form</h1>
            <div className="input-area">

              <div className="info-form">
                <div className="name-form">
    
                <input placeholder="What's your name?" name="name" {...register("name", { required: true, maxLength: 20 })} />
                {errors.name?.type === 'required' && "Name is required"}
                </div>
    
                <div className="email-form">
                  <input placeholder="your@email.com" name="email" {...register("email", { pattern: /.+@.+\.[A-Za-z]+$/})} />
                  {errors.email?.type === 'required' && "Use a valid email"}
                </div>
              </div>
    
              <div className="subject">
                <input placeholder="Subject" name="subject" {...register("subject", { required: true, maxLength: 20 })} />
                {errors.subjecy?.type === 'required' && "Max 20 caracters"}
              </div>
              <div className="textarea">
                <textarea placeholder="Let's chat..." name="message" {...register("message", { required: true, minLength: 20 })} />
                {errors.text?.type === 'required' && "Min of 20 caracters"}
              </div>
              <div class="btn-area">
                <input className="sendBtn" type="submit" value="send" />
              </div>
            </div>
          
          </form>
        </div>
  
          <div className="push"></div>
      </div>
    );
}

export default ContactForm

