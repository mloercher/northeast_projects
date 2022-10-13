import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import './ContactForm.css';
// email validation
import { useForm } from 'react-hook-form';
import * as yup from 'yup'
import { yupResolver } from '@hookform/resolvers/yup'


export const ContactForm = () => {




    // email validation

    const schema = yup.object().shape({
        name: yup.string().required().min(1),
        email: yup.string().required().email(),
        message: yup.string().required()
    });

    const { register, handleSubmit } = useForm({
        resolver: yupResolver(schema)
    });



    // email.js setup 
    const form = useRef();

    const sendEmail = (e) => {
    // e.preventDefault();

        emailjs.sendForm('service_qnqavv9', 'template_xs82bgl', form.current, 'dTiaTbtT44HNitmOd')
            .then((result) => {
                console.log(result.text);
                alert("Email sent successfully!");
            
            }, (error) => {
                console.log(error.text);
            });
        console.log(e)
        // e.target.reset();
    };



    return (
        <div className='outside-form'>
            <form ref={form} onSubmit={handleSubmit(sendEmail)}>
                <label >Your Name:</label>
                <input type="text" placeholder='Your Name...' name="user_name" {...register("name")} />
                <label>Your Email Address:</label>
                <input type="email" placeholder='client@email.com' name="user_email" {...register("email")} />
                <label>Message:</label>
                <textarea placeholder='Hello...' name="message" />
                <input type="submit" value="Send" {...register("message")} />
            </form>
        </div>
    );
};




export default ContactForm; 