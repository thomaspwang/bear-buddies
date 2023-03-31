import React from "react";
import styles from './NavBar.module.css';
import { useState } from "react";
import Container from 'react-bootstrap/Container';
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";


function NavBar() {

    const [activePage, setActivePage] = useState(0);

    const changePage = (e, index) => {
        setActivePage(index);
    }

    return (
        <Navbar className={styles.bar_container} collapseOnSelect expand="lg" bg="light" variant="light">
                <Navbar.Brand href="#home" className={styles.brand_name}>
                    <img src="../../logo.png" alt="" className={styles.logo_img}></img>
                    Bear Buddies
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav"/>
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className={styles.pages_container}>
                        <Nav.Link 
                            href="#features" 
                            className={`${styles.nav_bar_pages} ${activePage === 0 ? styles.active : ''}`}
                            onClick={() => changePage(0)}
                            >
                            Home
                        </Nav.Link>
                        <Nav.Link 
                            href="#pricing" 
                            className={`${styles.nav_bar_pages} ${activePage === 1 ? styles.active : ''}`}
                            onClick={() => changePage(1)}
                            >
                            My Groups
                        </Nav.Link>
                        <Nav.Link 
                            href="#features" 
                            className={`${styles.nav_bar_pages} ${activePage === 2 ? styles.active : ''}`}
                            onClick={() => changePage(2)}
                            >
                            My Profile
                        </Nav.Link>      
                    </Nav>
                </Navbar.Collapse>

        </Navbar>
    )
}

export default NavBar;