import React,{useRef} from 'react';

import emailjs from '@emailjs/browser';

import './contact.css';

const Contact = () => {
    const form = useRef();

    const sendEmail = (e) => {
      e.preventDefault();
  
      emailjs.sendForm('service_6gurbo8', 'template_ldp19u6', form.current, '0U2WIm6HUmlFCjtZv')
        .then((result) => {
            console.log(result.text);
            console.log("message Sent");
        }, (error) => {
            console.log(error.text);
        });
    };
    return (
        <div className='contact'>
            <div className='contact-form'>
                <div className='con-title'>
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
                            <div className="left">
                                <div className="location-icon">
                                    <img src="https://www.kemiadeleke.com/media/contact-address.svg" className="image-explore" alt="icon" />
                                </div>
                                <div className="left-title">
                                    Surat, Gujarat, India.
                                </div>
                            </div>
                            <div className="left">
                                <div className="email-icon">
                                    <img src="https://www.kemiadeleke.com/media/contact-email.svg" className="image-explore" alt="icon" />
                                </div>
                                <div className="left-title">
                                    avin12.tcs@gmail.com
                                </div>
                            </div>
                        </div>
                        <form className='contact-form'  ref={form} onSubmit={sendEmail}>
                            <input type="text" placeholder="Full Name" name="user_name" required />

                            <div className='abc'>
                                <input type="email" placeholder="Email" name="uesr_email" required />
                                <input type="number" placeholder="Phone Number" name="user_number" required />
                            </div>

                            <textarea name="message" cols="25" row="10" placeholder="Enter Your Message" />

                            <button>Submit</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Contact;