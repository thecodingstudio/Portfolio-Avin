import React, { useState } from "react";

import "./Footer.css";

// import Wave from '../../img/Wave.png';

import Insta from "@iconscout/react-unicons/icons/uil-instagram";

import Facebook from "@iconscout/react-unicons/icons/uil-facebook";

import Gitub from "@iconscout/react-unicons/icons/uil-github";

const Footer = () => {
    const [footer, setFooter] = useState(false);

    const changeBg = () => {
        if (window.scrollY >= 3500) {
            setFooter(true);
        } else {
            setFooter(false)
        };
    }
    window.addEventListener("scroll", changeBg);
    return (
        <div>
            {
                footer &&
                (
                    <div className="footer">
                        <div className="f-content">
                            <span>avin12.tcs@gmail.com</span>
                            <div className="f-icons">
                                <a href="https://instagram.com/_.mangukiya_.12?igshid=YmMyMTA2M2Y=" target="_blank" rel="noreferrer">
                                    <Insta color="white" size={"3rem"} />
                                </a>
                                <a href="https://www.facebook.com/avin.mangukiya" target="_blank" rel="noreferrer">
                                    <Facebook color="white" size={"3rem"} />
                                </a>
                                <a href="https://github.com/avin1208" target="_blank" rel="noreferrer">
                                    <Gitub color="white" size={"3rem"} />
                                </a>
                            </div>
                        </div>
                    </div>
                )}
        </div>
    );
};

export default Footer;