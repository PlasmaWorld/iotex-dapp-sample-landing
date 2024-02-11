import React, { useState, useRef } from 'react';
import emailjs from '@emailjs/browser';
import {
  TextInput,
  Textarea,
  Button,
} from '@mantine/core';
import classes from './ContactUs.module.css';

export function ContactUs({ onClose }) {
  const [status, setStatus] = useState(null);
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm('service_1jiz9i6', 'template_r4u347l', form.current, 'VsLVOvhz5fGcJloza') // Replace placeholders with actual values
      .then(
        (response) => {
          setStatus('success');
          console.log('SUCCESS!', response.status, response.text);
          setTimeout(() => {
            onClose();
          }, 2000); // Close modal after 2 seconds
        },
        (error) => {
          setStatus('error');
          console.log('FAILED...', error);
        }
      );
  };

  return (
    <form ref={form} onSubmit={sendEmail} className={classes.form}>
      <TextInput
        label="Name"
        name="user_name"
        placeholder="Your Name"
        required
      />
      <TextInput
        label="Email"
        type="email"
        name="user_email"
        placeholder="Your Email"
        required
      />
      <Textarea
        label="Message"
        name="message"
        placeholder="Your Message"
        required
      />
      <div style={{ position: 'relative' }}>
      <Button type="submit" variant="filled" disabled={status === 'pending'} style={{ backgroundColor: '#007bff', color: '#fff' }}>
  {status === 'pending' ? 'Sending...' : 'Send'}
</Button>




</div>


      {status === 'success' && <p className="text-green-500">Message sent successfully!</p>}
      {status === 'error' && <p className="text-red-500">Failed to send message. Please try again later.</p>}
    </form>
  );
}

function Part() {
  const [showModal, setShowModal] = useState(false);

  const toggleModal = () => {
    setShowModal(!showModal);
  };

  return (
    <div id="meet" data-aos="fade-up" data-aos-duration="2000" className='pt-14 pb-36 bg-center'>
      <div className='max-w-7xl mx-auto px-7 2xl:px-0'>
        <h1 className={`text-sky-500 text-2xl font-semibold text-center pt-20`}>Be a part of the team</h1>
        <p className='mt-5 px-5 lg:text-xl pt-3 lg:pt-5 lg:w-2/3 mx-auto text-center'>Join the community and be a part of the team. Get the latest updates and news about the project.</p>
        <div className='lg:mt-12 mt-16 flex flex-col lg:flex-row gap-2 lg:gap-5 justify-center items-center px-5 lg:px-0'>
          <button onClick={toggleModal} className='bg-sky-500 hover:bg-gray-300 hover:text-gray-800 transition duration-200 text-white py-4 px-10 rounded-full'>Join our team</button>
          {showModal && (
            <div className="fixed inset-0 z-50 flex items-center justify-center bg-gray-900 bg-opacity-50">
              <div className="bg-white p-8 max-w-md mx-auto rounded-lg flex flex-col items-center">
                {/* Render ContactUs component inside the modal */}
                <ContactUs onClose={toggleModal} />
                <button onClick={toggleModal} className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-semibold py-2 px-4 rounded inline-flex items-center mt-4">Close</button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default Part;
