import React, { useEffect, useState } from 'react'
import { Col, Container, Row } from 'react-bootstrap';
import { useParams } from 'react-router'
import { Link } from 'react-router-dom';
import "./DetalseServis.css"

const DetalseServis = () => {
    const [servisDetalse, setServisDetalse] = useState([]);
    const { id } = useParams();

    useEffect(() => {
        fetch("/servis.json")
            .then(res => res.json())
            .then(data => setServisDetalse(data))
    }, [id])

    const findItem = servisDetalse.find(item => item.id === parseInt(id))

    return (
        <div>
            <Container>
                <Row className="mt-5">
                    <Col md={6} sm={6} xs={12}>
                        <img src={findItem?.src} alt="" style={{ width: "100%" }} />
                    </Col>
                    <Col md={6} sm={6} xs={12}>
                        <h1 className="detalse__tilte"> {findItem?.name}</h1>
                        <p>
                            {findItem?.dec}
                        </p>
                        <Link to="/home">
                            <button className="detalse__sercis">Back To Home</button>
                        </Link>


                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default DetalseServis
