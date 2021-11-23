
import React from 'react'
import { Button, Carousel } from 'react-bootstrap'
import img1 from "../../images/1.jpg"
import img2 from "../../images/2.jpg"
import img3 from "../../images/3.jpg"
import img4 from "../../images/4.jpg"
import "./Banner.css"

const Banner = () => {
    return (
        <div>
            <Carousel>
                <Carousel.Item>
                    <img
                        className="d-block w-100 h-75"
                        src={img1}
                        alt="First slide"
                    />
                    <div className="carousel-text">
                        <h1 className="carousel-text__title">Welcome To MediCare</h1>
                        <h2 className="carousel-text__sub-title">Good Health For Batter Life</h2>
                        <p className="carousel-text__des d-none d-md-block">
                            this is MediCare.you privide all health related servise.we have lot of skilled doctor in this hospital.we bleve this health is everay thing of life.
                        </p>
                       <button className="carousel-text__btn">Visit Servises</button>
                    </div>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={img2}
                        alt="Second slide"
                    />
                  <div className="carousel-text">
                  <h1 className="carousel-text__title">Your Smile Our Smile</h1>
                        <h2 className="carousel-text__sub-title">Good Health For Batter Life</h2>
                        <p className="carousel-text__des d-none d-md-block">
                            this is MediCare.you privide all health related servise.we have lot of skilled doctor in this hospital.we bleve this health is everay thing of life.
                        </p>
                       <button className="carousel-text__btn">Visit Servises</button>

                    </div>
                  
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={img4}
                        alt="Third slide"
                    />
                      <div className="carousel-text">
                      <h1 className="carousel-text__title">Welcome To MediCare</h1>
                        <h2 className="carousel-text__sub-title text-white">Good Health For Batter Life</h2>
                        <p className="carousel-text__des text-white d-none d-md-block">
                            this is MediCare.you privide all health related servise.we have lot of skilled doctor in this hospital.we bleve this health is everay thing of life.
                        </p>
                       <button className="carousel-text__btn">Visit Servises</button>

                    </div>

                   
                </Carousel.Item>
            </Carousel>
        </div>
    )
}

export default Banner
