import React from "react";

import "./Navbar.css";

import { Link } from "react-scroll";

import Port from '../../img/Port.png';

const Navbar = () => {

    return (
        <div className="n-wrapper" >
            <div className="n-left" id="Navbar">
                <a href="/">
                    <img src={Port} alt="" />
                </a>
                <div className="n-name">Avin Mangukiya</div>
            </div>
            <div className="n-right">
                <div className="n-list">
                    <ul style={{ listStyleType: "none" }}>
                        <li>
                            <Link activeClass="active" to="Intro" spy={true} offset={-95} smooth={true}>
                                Home
                            </Link>
                        </li>
                        <li>
                            <Link to="about" spy={true} offset={-95} smooth={true}>
                                About
                            </Link>
                        </li>
                        <li>
                            <Link to="services" spy={true} offset={-95} smooth={true}>
                                Services
                            </Link>
                        </li>
                        <li>
                            <Link to="portfolio" spy={true} offset={-95} smooth={true}>
                                Portfolio
                            </Link>
                        </li>
                        <li>
                            <Link to="contact" spy={true} offset={-95} smooth={true}>
                                Contact
                            </Link>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Navbar;