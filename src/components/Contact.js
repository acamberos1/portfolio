import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';

export const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_0b1vtep', 'template_ucjg9r9', form.current, 'ojmwU5UrX0-E-ibmd')
      .then((result) => {
        console.log(result.text);
      }, (error) => {
        console.log(error.text);
      });
    e.target.reset()
  };

  return (

    <>
      <h1 class="text-center text-white text-5xl mb-10">Send me a message</h1>
      <div className="space-y-2 flex justify-center">
        <form ref={form} onSubmit={sendEmail}>

          <div>
            <label class="block text-white mb-2 text-md font-medium">Name</label>
            <input class="w-96" type="text" placeholder='What is your name?' name="user_name" />
          </div>


          <div>
            <label className="block text-white mb-2 text-md font-medium">Email</label>
            <input class="w-96" type="email" placeholder='Enter email' name="user_email" />
          </div>
          <div>
            <label className="block text-white mb-2 text-md font-medium">Message</label>
            <textarea class="w-96 h-52" name="message" placeholder="Enter message here" />
          </div>

          <div>
            <button htmlFor="my-modal" className="btn btn-accent mt-9" type="submit" value="send" class="btn btn-accent">Send message</button>
          </div>


        </form>
      </div>
    </>
  );
};

export default Contact