import React, { useRef } from 'react';

import emailjs from '@emailjs/browser';

import './contact.css';

import Aos from 'aos';

import "aos/dist/aos.css";

import { useEffect } from 'react';

const Contact = () => {

    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_6gurbo8', 'template_ldp19u6', form.current, '0U2WIm6HUmlFCjtZv') 
            .then((result) => {
                console.log(result.text);
                alert("Your message has been submitted👍");
                form.current.reset();
            }, (error) => {
                console.log(error.text);
                alert("Please Try Again");
            });
    };

    useEffect(() => {
        Aos.init({
            duration: 2000
        });
    }, []);

    return (

        <div className='contact' id='contact'>
            <div className='contact-form'>
                <div data-aos="fade-right" className='con-title'>
                    <div className='con-inner'>
                        <span className='text'>
                            Contact Me
                        </span>
                        <span className='line'>
                        </span>
                    </div>
                    <h2 className='services-name'>
                        Get In Touch
                    </h2>
                </div>
                <div className='contact-body'>
                    <div className='contact-left'>
                        <div className='left-icons'>
                            <div data-aos="fade-up" className="left">
                                <div className="location-icon">
                                    <img src="https://www.kemiadeleke.com/media/contact-address.svg" className="image-explore" alt="icon" />
                                </div>
                                <div className="left-title">
                                    <span className='studio'>The Coding Studio</span> <br /> 
                                    Surat, Gujarat, India.
                                </div>
                            </div>
                            <div data-aos="fade-up" data-aos-delay="200" className="left">
                                <div className="email-icon">
                                    <img src="https://www.kemiadeleke.com/media/contact-email.svg" className="image-explore" alt="icon" />
                                </div>
                                <div className="left-title">
                                    hello@thecodingstudio.in
                                </div>
                            </div>
                        </div>
                        <div>
                            <form className='contact-form' ref={form} onSubmit={sendEmail}>
                                <input data-aos="fade-up" type="text" placeholder="Full Name" name="user_name" required />

                                <div className='abc'>
                                    <input data-aos="fade-up" data-aos-delay="100" type="email" placeholder="Email" name="uesr_email" required />
                                    <input data-aos="fade-up" data-aos-delay="200" type="text" placeholder="Phone Number" name="user_number" pattern="\d{10}" maxlength="10" required />
                                </div>

                                <textarea data-aos="fade-up" data-aos-delay="300" name="message" cols="25" row="10" placeholder="Enter Your Message" required />

                                <button data-aos="fade-up" data-aos-delay="400" >Submit</button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Contact;
