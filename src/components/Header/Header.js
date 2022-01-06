import React from 'react';
import MenuBar from '../MenuBar/MenuBar';
import './Header.css'
import Typical from 'react-typical'
import { Link } from 'react-router-dom';
const Header = () => {
    return (
        <div className="header-container ">
            <div className="">
                <div className="row d-flex header align-items-center justify-content-center">

                    <div className="col-md-6">
                        <h3 className="title ">
                            MUSICAL ACCADEMY  <br /> TEACHING ABOUT MUSIC
                        </h3>

                        <div className="profile-details-role">
                            <span className="primary-text title ">
                                {""}
                                <h4>
                                    {""}
                                    <Typical
                                        loop={Infinity}
                                        steps={[
                                            "  YOU CAN ALSO LEARN MUSICAL & MUSICAL INSTRUMENT", 1200,
                                            "TEACHING MUSIC ABOUT 25 YEARS", 1200,


                                        ]}

                                    >

                                    </Typical>


                                </h4>


                            </span>
                        </div>

                        <div className='profile-options'>



                            <Link to="/about"> <button className="btn highlighted-btn  btn-info ">


                                About  </button></Link>

                        </div>
                    </div>
                    <div className="col-md-6"></div>
                </div>
            </div>
        </div>
    );
};

export default Header;