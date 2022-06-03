import React from 'react';

import './aboutus.css';

import avin from '../../img/avin.png';

import Resume from './resume.pdf';

const AboutUs = () => {
    return (
        <div className='aboutus-section'>
            <div className='img-section'>
                <img src={avin} alt='icon' className='avin-image' />
            </div>
            <div className='about-text'>
                <div className='about-header'>
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
                            I’m Avin Mangukiya, a professional and talented Product Designer with front end development skills
                        </p>
                        <p className='text-title'>
                            I am passionate about leveraging my diverse backgrounds to decipher challenging problems and create delightful experiences. I honed my skills at web development, technical writing, product design and SEO analytics.
                        </p>
                        <p className='text-title'>
                            I develop websites with HTML, CSS and JavaScript. I have top skills in using design softwares like Figma, Adobe XD, Invision and PhotoShop; with prototype tools like Framer and Protopie.
                        </p>
                        <p className='text-title'>
                            Being a diligent, hardworking and result oriented lady, I always work towards achieving best result on each project I lay my hands on.
                        </p>
                    </div>
                </div>
                <a href={Resume} target="_blank">
                    <button className="button s-button">Download CV</button>
                </a>
                <div className="blur s-blur1" style={{ background: "#ABF1FF94" }}></div>
            </div>
        </div>
    );
};

export default AboutUs;