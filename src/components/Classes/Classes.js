import React from 'react';
import { Modal } from 'react-bootstrap';
import MenuBar from '../MenuBar/MenuBar';
import './Classes.css'

const Classes = () => {
    return (
        <div>
            <MenuBar></MenuBar>
            <div className="col-md-3 border-3 m-3 two">
                <div className="cart">

                    <div className="text-area">
                        <h2>Name </h2>
                        <p>Price</p>
                        <button className="btn btn-success">Details</button>

                    </div>
                </div>
                <div className="cart">

                    <div className="text-area">
                        <h2>Name </h2>
                        <p>Price</p>
                        <button className="btn btn-success">Details</button>

                    </div>
                </div>
            </div>

        </div>

    );
};

export default Classes;