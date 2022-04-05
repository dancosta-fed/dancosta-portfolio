import React, { useState, useRef } from "react";
import { useForm } from "react-hook-form";
import emailjs from '@emailjs/browser';
import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'
import{ init } from '@emailjs/browser';
init("user_YQvXLKM5TcwtDkm2myErF");

const ContactForm = () => {
  // === Alerts === //
  const MySwal = withReactContent(Swal)
  const success = () => {
    MySwal.fire({
      title: "Thank you!",
      text: "Your message has been sent!",
      icon: "success",
    });
  }

  function invalid() {
    MySwal.fire({
        title: "Oops!",
        text: "Looks like you forgot to fill in your details.",
        icon: "error",
      });
  }

  function error () {
    MySwal.fire({
        title: "Sorry",
        text: "We couldn't send your message! Please, try again.",
        icon: "error",
      });
}

// === END Alerts === //
  const form = useRef(null);
  // const { register, handleSubmit, formState: { errors } } = useForm();
  // const onSubmit = data => console.log(data);
  
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_1sx9p8k', 'portfolio_contact', form.current, 'user_YQvXLKM5TcwtDkm2myErF')
      .then((result) => {
        success();
        console.log(result.text);
      }, (error) => {
          error();
          console.log(error.text);
      },);

      e.target.reset();
  };

    return(
      <div className="container contact-container">
  
        <div className="contact-call-to-action mx-auto text-center">
          <h1>Get in Touch</h1>
          <h3>Let's talk about opportunities!</h3>
          <p>Don't like forms? Send me an <a href="mailto:dancosta.id@gmail.com">email</a></p>
        </div>
  
        <div className=" contact-form mx-auto">
          <form 
            action="submit" 
            ref={form} 
            className="form" 
            onSubmit={sendEmail}
          >

            <h1 className="text-center mb-3">Contact Form</h1>
            <div className="input-area">

              <div className="info-form">
                <div className="name-form">
    
                <input 
                  placeholder="What's your name?" 
                  name="name"
                  required
                  minLength={3}
                />

                </div>
    
                <div className="email-form">
                  <input 
                    placeholder="your@email.com" 
                    name="email"  
                    // pattern={/(.+)@(.+){2,}\.(.+){2,}/}
                    required
                  />
                </div>
              </div>
    
              <div className="subject">
                <input 
                  placeholder="Subject" 
                  name="subject" 
                  required
                />
              </div>

              <div className="textarea">
                <textarea 
                  placeholder="Let's chat..." 
                  name="message" 
                  required
                />
              </div>
              <div className="btn-area">
                <input 
                  className="sendBtn" 
                  type="submit" 
                  value="send" />
              </div>
            </div>
          
          </form>
        </div>
  
          <div className="push"></div>
      </div>
    );
}

export default ContactForm

