import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import "./Footer.css"

const Footer = () => {
    return (
        <div>
            <footer className="footer">
                <Container>
                    <Row>
                        <Col md={6}>
                            <h4 className="footer__title">About Us</h4>
                            <p className="footer__text">
                                Respite could take the form of enlisting friends and family to watch your loved one so you can take a break to visit others, go to the gym, or handle chores, for example. Or respite care can mean find
                        </p>
                            <div className="footer__icon">
                                <img src="https://img.icons8.com/fluency/48/000000/facebook.png" style={{cursor:"pointer"}} />
                                <img src="https://img.icons8.com/color/50/000000/twitter.png" className="mx-3" style={{cursor:"pointer"}}/>
                                <img src="https://img.icons8.com/fluency/50/000000/instagram-new.png" style={{cursor:"pointer"}}/>
                            </div>

                        </Col>
                        <Col md={3}>
                            <h4 className="footer__title">Service</h4>
                            <h6 className="footer__text">Emergency</h6>
                            <h6 className="footer__text">Psychotherapy</h6>
                            <h6 className="footer__text">Hourly Care</h6>
                            <h6 className="footer__text">Respite Home</h6>
                            <h6 className="footer__text">Laboratory</h6>
                        </Col>
                        <Col md={3}>
                            <h4 className="footer__title mb-3">Mediguss Gallery</h4>
                            <Row className="g-1">
                                <Col md={4} sm={4} xs={6}>
                                    <img src="https://wp.quomodosoft.com/mediguss/wp-content/uploads/2020/04/inta9.png" alt="" className="img-fluid" style={{width:"100%"}} />
                                </Col>
                                <Col md={4} sm={4} xs={6}>
                                    <img src="https://wp.quomodosoft.com/mediguss/wp-content/uploads/2020/04/inta8.png" alt="" className="img-fluid" style={{width:"100%"}} />
                                </Col>
                                <Col md={4} sm={4} xs={6}>
                                    <img src="https://wp.quomodosoft.com/mediguss/wp-content/uploads/2020/04/inta7.png" alt="" className="img-fluid" style={{width:"100%"}} />
                                </Col>
                                <Col md={4} sm={4} xs={6}>
                                    <img src="https://wp.quomodosoft.com/mediguss/wp-content/uploads/2020/04/inta6.png" alt="" className="img-fluid" style={{width:"100%"}} />
                                </Col>
                                <Col md={4} sm={4} xs={6}>
                                    <img src="https://wp.quomodosoft.com/mediguss/wp-content/uploads/2020/04/inta5.png" alt="" className="img-fluid" style={{width:"100%"}} />
                                </Col>
                                <Col md={4} sm={4} xs={6}>
                                    <img src="https://wp.quomodosoft.com/mediguss/wp-content/uploads/2020/04/inta4.png" alt="" className="img-fluid" style={{width:"100%"}} />
                                </Col>
                                
                            </Row>
                        </Col>
                    </Row>
                </Container>
            </footer>
        </div>
    )
}

export default Footer
