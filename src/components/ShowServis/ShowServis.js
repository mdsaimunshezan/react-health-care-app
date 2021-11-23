import React from 'react'
import { Card, Col, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import "./ShowServis.css"

const ShowServis = (props) => {
    const { id, name, src, dec, icon } = props.item;
    return (
        <Col  md={4} sm={6} xs={12}>
            <Card>
                <img src={src} alt="" />
                <Card.Body>
                    <div className="d-flex">
                        <img src={icon} alt="" className="img-fluid" />
                        <Card.Title className="servis__header mx-2 justify-content-center align-items-center">{name}</Card.Title>
                    </div>
                    <Card.Text className="py-3 servis__text">{dec.slice(0, 200)}</Card.Text>
                    <Link to={`/detalseservis/${id}`}>
                    <Button variant="warning" className="servis__btn w-100">Read Detalse</Button>
                    </Link>
                    
                </Card.Body>
            </Card>
        </Col>
    )
}

export default ShowServis
