import React from 'react';
import { Card, CardGroup, Col, Container, Row } from 'react-bootstrap';
import Typical from 'react-typical'
import './Cart.css'
const Cart = () => {
    return (
        <div className='product-banner'>
            <Container>
                <Row>
                    <Col lg={6}>
                        <div className="single-product-banner music1 ">

                            <div className="phone-thumb cart-details  ">
                                <img style={{ width: "100%" }} src="https://www.oregonlive.com/resizer/4vz8MN-vQSop3i4KERCBSQJvArk=/1280x0/smart/advancelocal-adapter-image-uploads.s3.amazonaws.com/image.oregonlive.com/home/olive-media/width2048/img/ent_impact_performance/photo/jasperjpg-350c6906fe7fa74d.jpg" alt="music-img" />
                                {/* <img style={{ width: "100%" }} src="https://www.onlinembareport.com/files/styles/large/public/images/Music-Business-Social.jpg" alt="music-img" /> */}
                            </div>
                        </div>
                    </Col>
                    <Col lg={6}>
                        <div className="single-product-banner music2">

                            <div className="phone-thumb cart-details ">
                                <img style={{ width: "100%" }} src="https://www.eugeneweekly.com/wp-content/uploads/2020/11/20201112best-classical-Eug-Symphony-by-Amanda-L-Smith.jpg" alt="music-img" />
                            </div>
                        </div>
                    </Col>

                </Row>
            </Container>
        </div>
    );
};

export default Cart;