import React from 'react'
import { Card, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import "./ShowDoctor.css"

const ShowDoctor = (props) => {
    const { id,name, position, dec, src } = props.item;
    return (
        <Col md={4} sm={4} xs={12} className="doctor">
            <Card>
                <img src={src} alt="" />
                <Card.Body>
                    <Card.Title className="doctor__name">{name}</Card.Title>
                    <Card.Title className="doctor__position">{position}</Card.Title>
                    <Card.Text>{dec}</Card.Text>
                    <Link to={`/detalsedoctor/${id}`}>
                        <button className="doctor__btn w-100">Show Detalse</button>
                    </Link>

                </Card.Body>
            </Card>
        </Col>
    )
}

export default ShowDoctor
