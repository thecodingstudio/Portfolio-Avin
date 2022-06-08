import React, { useRef, useState } from 'react';

import emailjs from '@emailjs/browser';

import './contact.css';

import Aos from 'aos';

import "aos/dist/aos.css";

import { useEffect } from 'react';

const Contact = () => {

    const [num, setNum] = useState('');

    const handleNumChange = event => {
      const limit = 10;
      setNum(event.target.value.slice(0, limit));
    };

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
                                    Surat, Gujarat, India.
                                </div>
                            </div>
                            <div data-aos="fade-up" data-aos-delay="200" className="left">
                                <div className="email-icon">
                                    <img src="https://www.kemiadeleke.com/media/contact-email.svg" className="image-explore" alt="icon" />
                                </div>
                                <div className="left-title">
                                    avin12.tcs@gmail.com
                                </div>
                            </div>
                        </div>
                        <div>
                            <form className='contact-form' ref={form} onSubmit={sendEmail}>
                                <input  data-aos="fade-up" type="text" placeholder="Full Name" name="user_name" required />

                                <div className='abc'>
                                    <input data-aos="fade-up" data-aos-delay="100" type="email" placeholder="Email" name="uesr_email" required />
                                    <input data-aos="fade-up" data-aos-delay="200" type="number" placeholder="Phone Number" name="user_number" value={num}
                                    onChange={handleNumChange} required />
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