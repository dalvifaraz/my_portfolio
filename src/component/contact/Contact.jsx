import React, { useRef } from 'react';
import './contact.css';
import { MdOutlineEmail } from 'react-icons/md';
import { ImLinkedin } from 'react-icons/im';
import { FaWhatsapp } from 'react-icons/fa';
import emailjs from '@emailjs/browser';
const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm(
      'service_w01akor',
      'template_t1ikc7w',
      form.current,
      'YXVZOCCWYYbD7dgoQ'
    );

    e.target.reset();
  };

  return (
    <section id='contact'>
      <h5>Get In Touch</h5>
      <h2>Contact Me</h2>
      <div className='container contact__container'>
        <div className='contact__options'>
          <article className='contact__option'>
            <MdOutlineEmail className='contact__option-icon' />
            <h4>Email</h4>
            <h5>dalvifaraz@gmail.com</h5>
            <a href='mailto:dalvifaraz@gmail.com' target='__blank'>
              Send a message
            </a>
          </article>
          <article className='contact__option'>
            <ImLinkedin className='contact__option-icon' />
            <h4>LinkedIn</h4>
            <h5>Dalvi Faraz</h5>
            <a href='https://in.linkedin.com/in/dalvifaraz' target='__blank'>
              Send a message
            </a>
          </article>
          <article className='contact__option'>
            <FaWhatsapp className='contact__option-icon' />
            <h4>WhatsApp</h4>
            <h5>+0123456789</h5>
            <a href='https://wa.me/+919892876715' target='__blank'>
              Send a message
            </a>
          </article>
        </div>
        <form ref={form} onSubmit={sendEmail}>
          <input
            type='text'
            name='name'
            placeholder='Enter your name'
            required
          />
          <input
            type='email'
            name='email'
            placeholder='Enter your email'
            required
          />
          <textarea
            name='message'
            rows='7'
            placeholder='Enter your message'
            required
          />
          <button type='submit' className='btn btn-primary'>
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
