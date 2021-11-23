import React, { useEffect, useState } from 'react';
import { Container, Row } from 'react-bootstrap';
import ShowServis from '../ShowServis/ShowServis';
import "./Servis.css";

const Servis = () => {
    const [servis,setServis] = useState([]);

    useEffect(()=>{
        fetch("./servis.json")
        .then(res => res.json())
        .then(data =>setServis(data))
    },[])
    
    return (
        <>
            <Container>
                <div className="servis">
                    <div className="servis__center">
                        <h1 className="servis__title">Our Serves</h1>
                    </div>
                   <Row className="g-5">
                   {
                        servis.map(item => <ShowServis key={item.id} item={item}/>)
                    }
                   </Row>
                </div>
            </Container>
        </>
    )
}

export default Servis
