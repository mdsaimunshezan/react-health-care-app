import React, { useEffect, useState } from 'react'
import { Container, Row } from 'react-bootstrap';
import ShowDoctor from '../ShowDoctor/ShowDoctor';
import "./OurDoctor.css"

const OurDoctor = () => {
    const [doctor, setDoctor] = useState([]);

    useEffect(() => {
        fetch("/doctor.json")
            .then(res => res.json())
            .then(data => setDoctor(data))
    }, [])
    return (
        <div>
            <Container>
                <h1 className="doctor__title">Our Doctor</h1>
                <Row className="g-3">
                    {
                        doctor.map(item => <ShowDoctor key={item.id} item={item} />)
                    }
                </Row>
            </Container>
        </div>
    )
}

export default OurDoctor
