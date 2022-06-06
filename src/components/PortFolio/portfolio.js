import React from "react";

import './portfolio.css';

const Portfolio = () => {
    return (
        <div className="portfolio">
            <div className="portfolio-main">
                <div className="port-title">
                    <div className="port-inner">
                        <span className="text">
                            My Project
                        </span>
                        <span className="line">
                        </span>
                    </div>
                    <h2 className="sevices-name">
                        My PortFolio
                    </h2>
                </div>
                <div className="portfolio-body">
                    <div className="project">
                        <div className="image">
                            <img src="https://res.cloudinary.com/dhpvia1ae/image/upload/v1654509557/derick-mckinney-2I0e38YkR1A-unsplash_ffwt7b.png" alt="icon" />
                        </div>
                        <div className="image-button">
                            <a href="https://avin1208.github.io/React-animation" target="_blank" >
                                View Project
                            </a>
                        </div>
                    </div>
                    <div className="project">
                        <div className="image">
                            <img src="https://res.cloudinary.com/dhpvia1ae/image/upload/v1654509557/derick-mckinney-2I0e38YkR1A-unsplash_ffwt7b.png" alt="icon" />
                        </div>
                        <div className="image-button">
                            <a href="https://avin1208.github.io/React-animation" target="_blank" >
                                View Project
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Portfolio;