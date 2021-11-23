import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import img from "../../images/doctor2.png"
import img1 from "../../images/servis.jpg"
import "./About.css"
const About = () => {
    return (
        <div className="about">
            <div className="about__image">
                <img src="https://wp.quomodosoft.com/mediguss/wp-content/uploads/2020/03/inner.jpg" className="img-fluid about__img" alt="" />
                <div className="about__text">
                    <h1 className="about__title">About us</h1>
                </div>
            </div>

            <div className="about-content">
                <Container>
                    <Row>
                        <Col md={4} sm={12} xs={12}>
                            <img src={img} alt="" className="img-fluid" />
                        </Col>
                        <Col md={8} sm={12} xs={12}>
                            <h3 className="about-content__title">About us</h3>
                            <h1 className="about-content__sub-title">The Best Medics, Doctors & Physicians</h1>
                            <p>
                                Having an in-house team of expert medical writers and editors makes all the difference in terms of getting your message, the way you want it, out into the marketplace. Our medical content team knows what it takes to craft the right messages to the right audiences. They are experts at securing accurate.
                            </p>

                        </Col>
                    </Row>
                </Container>
            </div>

            <div className="about-servis">
                <Container>
                    <Row>
                        <Col md={6}>
                        <img src={img1} alt="" className="img-fluid"/>
                        </Col>
                        <Col md={6} className="mt-5">
                        <h4 className="about-content__title">SERVICES</h4>
                        <h1 className="about-content__sub-title">Get Amazing Support With Us</h1>
                        <p>
                        Having an in-house team of expert medical writers and editors makes all the difference in terms of getting your message, the way you want it, out into the marketplace. Our medical content team knows what it takes to craft the right messages to the right audiences. They are experts at securing accurate.
                        </p>
                        <h1 className="about-content__email">
                        sai@Webmail.Com
                        </h1>

                        </Col>
                    </Row>
                </Container>
            </div>
        </div>
    )
}

export default About
