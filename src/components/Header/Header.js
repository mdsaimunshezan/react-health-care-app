
import React from 'react'
import { Button, Container, Nav, Navbar } from 'react-bootstrap'
import { NavLink } from 'react-router-dom'
import useAuth from '../../hooks/useAuth'
import logo from "../../images/logo.png"
import "./Header.css"

const Header = () => {
    const { user ,logOut} = useAuth()
    return (
        <div>
            <Navbar bg="light" expand="lg">
                <Container>
                    <Navbar.Brand href="#home" className="d-flex justify-content-center align-items-center">
                        <img src={logo} alt="" />
                        <h4 className="mx-2" style={{ color: "palevioletred" }}>MediCair</h4>
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="ms-auto">
                            <Nav.Link as={NavLink} activeClassName="active" to="/home">Home</Nav.Link>
                            <Nav.Link as={NavLink} activeClassName="active" to="/about">About</Nav.Link>
                            <Nav.Link as={NavLink} activeClassName="active" to="/doctor">Doctor</Nav.Link>
                            {
                                user.email ? <Button variant="danger" style={{border:"none"}} onClick={logOut}> {user.displayName}LogOut</Button> : <span className="d-flex justify-content-center">

                                    <Nav.Link as={NavLink} activeClassName="active" to="/registion">Regustion</Nav.Link>
                                    <Nav.Link as={NavLink} activeClassName="active" to="/login">Login</Nav.Link>
                                </span>
                            }


                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    )
}

export default Header
