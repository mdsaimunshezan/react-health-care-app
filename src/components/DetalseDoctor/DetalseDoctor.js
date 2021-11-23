import React, { useEffect, useState } from 'react'
import { Col, Container, Row } from 'react-bootstrap';
import { useParams } from 'react-router'
import { Link } from 'react-router-dom';

const DetalseDoctor = () => {
    const [detalseDoctor, setDetalseDoctor] = useState([]);
    const { id } = useParams();

    useEffect(() => {
        fetch("/doctor.json")
            .then(res => res.json())
            .then(data => setDetalseDoctor(data))
    }, [id])

    const findItem = detalseDoctor.find(item => item.id === parseInt(id));

    return (
        <div>
            <Container>
                <Row className="mt-5">
                    <Col md={6} sm={6} xs={12}>
                        <img src={findItem?.src} alt="" style={{ width: "100%" }} />
                    </Col>
                    <Col md={6} sm={6} xs={12}>
                        <h1 className="detalse__tilte"> {findItem?.name}</h1>
                        <h2 style={{fontSize:"25px"}}>{findItem?.position}</h2>
                        <p>
                            {findItem?.dec}
                        </p>
                        <Link to="/doctor">
                            <button className="detalse__sercis">Back To Home</button>
                        </Link>


                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default DetalseDoctor
