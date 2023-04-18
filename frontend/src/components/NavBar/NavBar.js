import React from "react";
import styles from './NavBar.module.css';
import { useState } from "react";
import Container from 'react-bootstrap/Container';
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";


function NavBar({page}) {

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
                            href="../../HomePage/HomePage" 
                            className={page === 0 ? styles.active : styles.nav_bar_pages}
                            >
                            Home
                        </Nav.Link>
                        <p className={styles.split_nav_pages}>●</p>
                        <Nav.Link 
                            href="../../GroupManagementPage/GroupManagementPage" 
                            className={page === 1 ? styles.active : styles.nav_bar_pages}
                            >
                            My Groups
                        </Nav.Link>
                        <p className={styles.split_nav_pages}>●</p>
                        <Nav.Link 
                            href="../../ProfilePage/ProfilePage" 
                            className={page === 2 ? styles.active : styles.nav_bar_pages}
                            >
                            My Profile
                        </Nav.Link>      
                    </Nav>
                </Navbar.Collapse>

        </Navbar>
    )
}

export default NavBar;