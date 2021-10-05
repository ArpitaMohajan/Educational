import { faMapMarkedAlt, faPhoneVolume } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import './Footer.css'

const Footer = () => {
    return (
        <div>
            <div className="footer-container">
                <div className="container">
                    <div className="row">
                        <div className="col-md-5">
                            <div className="left-container text-start">
                                <h1>Musical Accademy</h1>
                                <div className="icons-container d-flex text-center ">
                                    <div className="icon">
                                        <i class="fab fa-youtube"></i>
                                    </div>
                                    <div className="icon">
                                        <i class="fab fa-facebook-square"></i>
                                    </div>
                                    <div className="icon">
                                        <i class="fab fa-instagram-square"></i>
                                    </div>
                                    <div className="icon">
                                        <i class="fab fa-twitter"></i>
                                    </div>
                                </div>
                                <p className="mt-4 ">
                                    <small>
                                        Here is our Musical Accademy to learn music and to establish oneself and present oneself to the world.
                                    </small>
                                </p>

                                <p className="mt-5">
                                    <small>Zemez © . All rights reserved.</small>
                                </p>
                            </div>
                        </div>
                        <div className="col-md-2">
                            <div className="footer-menu-container">
                                <ul>
                                    <li className="footer-menu">Home</li>
                                    <li className="footer-menu">Services</li>
                                    <li className="footer-menu">About us</li>
                                    <li className="footer-menu">Classes</li>
                                    <li className="footer-menu">Contact us</li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-md-5">
                            <div className="right-footer-container">
                                <h3>Sign up for the newsletter</h3>
                                <input
                                    className="footer-input"
                                    type="text"
                                    placeholder="Enter Email"
                                />
                                <div className="phone d-flex align-items-center justify-content-center mt-4">
                                    <div className="foter-phone-icon">
                                        <FontAwesomeIcon icon={faPhoneVolume} />
                                    </div>
                                    <div>
                                        <h5>+1 8 800 555 35 35</h5>
                                    </div>
                                </div>
                                <div className="map d-flex align-items-center justify-content-center">
                                    <div className="foter-phone-icon">
                                        <FontAwesomeIcon icon={faMapMarkedAlt} />
                                    </div>
                                    <div>
                                        <p>
                                            20 Broadway, California, U.S.A 038,
                                            <br /> 104 2nd Avenue, California, U.S.A 100
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Footer;
