import React from "react";
import styles from './NavBar.module.css';
import { useState } from "react";
import Container from 'react-bootstrap/Container';
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";


function NavBar() {
    return (
        <Navbar className={styles.bar_container} collapseOnSelect expand="lg" bg="light" variant="light">
            <Container className={styles.navbar_container}>
                <Navbar.Brand href="#home">
                    <img src="../../logo.png" alt="" className={styles.logo_img}></img>
                    Bear Buddies
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link href="#features">Page 1</Nav.Link>
                        <Nav.Link href="#pricing">Page 2</Nav.Link>
                        
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}

export default NavBar;