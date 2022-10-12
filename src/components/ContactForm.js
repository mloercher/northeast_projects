import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import './ContactForm.css'

export const ContactForm = () => {
    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_qnqavv9', 'template_xs82bgl', form.current, 'dTiaTbtT44HNitmOd')
            .then((result) => {
                console.log(result.text);
                alert("Email sent successfully!");
            }, (error) => {
                console.log(error.text);
            });
    };

    return (
        <div className='outside-form'>
            <form ref={form} onSubmit={sendEmail}>
                <label>Your Name:</label>
                <input type="text" name="user_name" />
                <label>Your Email Address:</label>
                <input type="email" name="user_email" />
                <label>Message:</label>
                <textarea name="message" />
                <input type="submit" value="Send" />
            </form>
        </div>
    );
};




export default ContactForm; 