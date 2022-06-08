import React from 'react';

import './aboutus.css';

import avin from '../../img/avin.png';

import Resume from './Resume.pdf';

import Aos from 'aos';

import "aos/dist/aos.css";

import { useEffect } from 'react';


const AboutUs = () => {

    useEffect(() => {
        Aos.init({
            duration: 3000
        });
    }, []);

    return (
        <div className='about'>
            <div data-aos="fade-right" className='img-section'>
                <img src={avin} alt='icon' className='avin-image' />
            </div>
            <div className='about-text'>
                <div data-aos="fade-up" className='about-header'>
                    <div className='about-inner'>
                        <div className='about-inner-text'>
                            <span className='text'>
                                WHO AM I
                            </span>
                            <span className='line'>
                            </span>
                        </div>
                        <h3 className='aboutme'>
                            ABOUT ME
                        </h3>
                    </div>
                    <div className='text-right'>
                        <p className='text-title'>
                        I’m Avin Mangukiya, a Professional Product Developer and Designer with front end development skills.
                        </p>
                        <p className='text-title'>
                        I am passionate about leveraging my diverse backgrounds to decipher challenging problems and create delightful experiences. I honed my skills at web development, technical writing, product design.
                        </p>
                        <p className='text-title'>
                        I develop websites with HTML, CSS and JavaScript. I have top skills in using design sass and css and also top skills in React js.
                        </p>
                        <p className='text-title'>
                        Being a diligent, hardworking and result oriented developer, I always work towards achieving best result on each project I lay my hands on.
                        </p>
                    </div>
                </div>
                <div data-aos="fade-up" className='button-cv'>
                    <a href={Resume} target="_blank" rel="noreferrer">
                        <button className="button s-button">Download CV</button>
                    </a>
                </div>
            </div>
        </div>

    );
};

export default AboutUs;





