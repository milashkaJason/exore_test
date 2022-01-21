import React from "react";
import {Container, Nav, Navbar} from "react-bootstrap";
import {NavLink} from "react-router-dom";

export function Header() {
    return (
        <>
            <Navbar sticky="top" bg="primary" variant="dark">
                <Container>
                    <Navbar.Brand>
                        <Nav.Link style={{color: '#fff'}} as={NavLink} to="/products">Expo-test</Nav.Link>
                    </Navbar.Brand>
                    <Nav className="me-auto">
                        <Nav.Link as={NavLink} to="/products">Products</Nav.Link>
                        <Nav.Link as={NavLink} to="/create_product">Create Products</Nav.Link>
                    </Nav>
                </Container>
            </Navbar>
        </>
    )
}