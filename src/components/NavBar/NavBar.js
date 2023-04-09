import React from "react";
import styles from './NavBar.module.css';
import { useState } from "react";
import Container from 'react-bootstrap/Container';
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";


function NavBar() {

    const [activePage, setActivePage] = useState(0);

    const changePage = (index) => {
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
                            href="../../pages/HomePage/HomePage.js" 
                            className={activePage === 0 ? styles.active : styles.nav_bar_pages}
                            onClick={() => changePage(0)}
                            >
                            Home
                        </Nav.Link>
                        <p className={styles.split_nav_pages}>●</p>
                        <Nav.Link 
                            href="../../pages/GroupMangementPage/GroupManagementPage.js" 
                            className={activePage === 1 ? styles.active : styles.nav_bar_pages}
                            onClick={() => changePage(1)}
                            >
                            My Groups
                        </Nav.Link>
                        <p className={styles.split_nav_pages}>●</p>
                        <Nav.Link 
                            href="../../pages/ProfilePage/ProfilePage.js" 
                            className={activePage === 2 ? styles.active : styles.nav_bar_pages}
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