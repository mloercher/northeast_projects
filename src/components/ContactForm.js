import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import './ContactForm.css';
// email validation
import { useForm } from 'react-hook-form';
import * as yup from 'yup'
import { yupResolver } from '@hookform/resolvers/yup'
import { Modal, Button } from 'react-bootstrap/'


export const ContactForm = () => {

    // email validation

    const schema = yup.object().shape({
        name: yup.string().required('Name is required').min(1),
        email: yup.string().required('Email is required').email('Valid address is required'),
        message: yup.string()
    });

    const { register, handleSubmit, formState: { errors } } = useForm({
        resolver: yupResolver(schema)
    });


    // email.js setup 
    const form = useRef('');


    const sendEmail = (e) => {
        // ****already called in react-hook-form vvv
        // e.preventDefault();

        emailjs.sendForm('service_qnqavv9', 'template_xs82bgl', form.current, 'C8SHKhuKTEZwN9gg9')
            .then((result) => {
                console.log(result.text);
                form.current.reset();

            }, (error) => {
                console.log(error.text);
            });

        console.log(e)
        form.current.reset();
        setShow(true)
    };

    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);





    return (
        // <div className='outside-form'>
        <>
            <form id='form' ref={form} onSubmit={handleSubmit(sendEmail)}>
                <label >Name:</label>
                <input type="text" placeholder='Your Name...' name="name" {...register("name")} />
                <p className='errors'>{errors.name?.message}</p>
                <label>Email Address:</label>
                <input type="email" placeholder='client@email.com' name="email" {...register("email")} />
                <p className='errors'>{errors.email?.message}</p>
                <label>Message:</label>
                <textarea placeholder='Hello...' name="message" />
                <p className='errors'>{errors.message?.message}</p>
                <Button id='contact-submit' type="submit" value="Send" {...register("message")}>SEND</Button>
            </form>
            {/* modal */}
            <Modal className="modal-outer" show={show} onHide={handleClose}>
                <Modal.Title id='modal-title'>Message Sent Successfully!</Modal.Title>
                <Button id='modal-btn' variant="dark" onClick={handleClose}>
                    Close
                </Button>

            </Modal>
        </>
        // </div>
    );
};




export default ContactForm; 