import React, { useContext } from "react";

import "./intro.css";

import Vector1 from '../../img/Vector1.png';

import styled, { keyframes } from "styled-components";

import Vector2 from "../../img/Vector2.png";

import boy from "../../img/boy.png";

// import glassesimoji from "../../img/glassesimoji.png";

import thumbup from "../../img/thumbup.png";

import crown from "../../img/crown.png";

import FloatinDiv from "../FloatingDiv/Floatingdiv";

import Github from "../../img/github.png";

import LinkedIn from "../../img/linkedin.png";

import Instagram from "../../img/instagram.png";

import { themeContext } from "../../Context";

import { motion } from "framer-motion";

import { Link } from "react-scroll";

import fadeInUp from "react-animations/lib/fade-in-up";

const Intro = () => {
    // Transition
    const transition = { duration: 2, type: "spring" };

    // context
    const theme = useContext(themeContext);
    const darkMode = theme.state.darkMode;

    return (
        <div className="Intro" id="Intro">

            <div className="i-left">
                <Fade className="i-name">

                    <span style={{ color: darkMode ? "white" : "" }}>Hy! I Am</span>
                    <span>Avin Mangukiya</span>
                    <span>
                        Frontend Developer with Beginner level in web designing
                        and development, producting the Quality work
                    </span>
                </Fade>
                <Fade>
                    <Link to="contact" smooth={true} spy={true}>
                        <button className="button i-button">Hire me</button>
                    </Link>
                </Fade>

                <div className="i-icons">
                    <a href="https://github.com/avin1208" target="_blank">
                        <img src={Github} alt="" />
                    </a>
                    <img src={LinkedIn} alt="" />
                    <img src={Instagram} alt="" />
                </div>
            </div>

            <div className="i-right">
                <img src={Vector1} alt="" />
                <img src={Vector2} alt="" />
                <img src={boy} alt="" />


                <motion.div
                    initial={{ top: "-4%", left: "74%" }}
                    whileInView={{ left: "68%" }}
                    transition={transition}
                    className="floating-div"
                >
                    <FloatinDiv img={crown} text1="React Js" text2="Developer" />
                </motion.div>




                <motion.div
                    initial={{ left: "9rem", top: "18rem" }}
                    whileInView={{ left: "0rem" }}
                    transition={transition}
                    className="floating-div"

                >

                    <FloatinDiv img={thumbup} text1="Great" text2="Learner" />
                </motion.div>

                <div className="blur" style={{ background: "rgb(238 210 255)" }}></div>
                <div
                    className="blur"
                    style={{
                        background: "#C1F5FF",
                        top: "17rem",
                        width: "21rem",
                        height: "11rem",
                        left: "-9rem",
                    }}
                ></div>
            </div>
        </div>
    );
};

export default Intro;

const Fade = styled.div`animation: 2s ${keyframes`${fadeInUp}`} ease`;