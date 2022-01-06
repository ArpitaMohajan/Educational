import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import { Button, Modal } from 'react-bootstrap';
import Footer from '../Footer/Footer';
import MenuBar from '../MenuBar/MenuBar';
import './Services.css'

const Services = () => {

    const [services, setServices] = useState([]);
    const [allServices, setAllServices] = useState([]);
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    useEffect(() => {
        fetch(
            './service.JSON'
        )
            .then((res) => res.json())
            .then((data) => setAllServices(data));
    }, [services]);
    return (
        <div>
            <MenuBar></MenuBar>

            <div className="container all-teams">

                <div className="all-team">
                    <h1>Our Services</h1>
                </div>

                <div className="bodys">
                    <div className="row">
                        {allServices?.map((pd) => (
                            <div className="col-md-3">
                                <div className="cart text-light">
                                    <div className="cart-details">
                                        <img className="w-75" src={pd.img} alt="" />
                                    </div>
                                    <div className="text-area">
                                        <h4>Name :{pd.name}</h4>
                                        <p>Price: ${pd.price}</p>
                                        <p className="marcuric">Description:{pd.description}</p>
                                        <Button className="btn submit-btn" onClick={handleShow}>
                                            Join
                                        </Button>

                                        <Modal className="g" show={show} onHide={handleClose}>

                                            <Modal.Header closeButton>
                                                <Modal.Title>Modal heading</Modal.Title>
                                            </Modal.Header>
                                            <Modal.Body >Woohoo, you're reading this text in a modal!</Modal.Body>
                                            <Modal.Footer>
                                                <Button variant="secondary" onClick={handleClose}>
                                                    Yes
                                                </Button>
                                                <Button variant="primary" onClick={handleClose}>
                                                    No
                                                </Button>
                                            </Modal.Footer>
                                        </Modal>

                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default Services;