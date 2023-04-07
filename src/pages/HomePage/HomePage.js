import CardGrid from "@/components/CardGrid/CardGrid";
import EventButton from "@/components/EventButton/EventButton";
import SearchBar from "@/components/SearchBar/SearchBar";
import React, { Component } from "react";
import { Row } from "react-bootstrap";
import styles from "src/pages/HomePage/HomePage.module.css";
import moffitpic from "public/moffitt.jpeg"; 
import dylanPic from "public/dylan.jpeg";

function HomePage() {
    return (
        <div> 
            <div> 
                <Row className={styles.buttons}> 
                    <EventButton text="Create" className= {styles.createButton}> </EventButton>
                    <SearchBar className= {styles.searchBar}> </SearchBar>
                </Row>
                <div> <CardGrid cardData={[
                        {title: "Study for CS 70", image: moffitpic, author: "Dylan Hopkins", authorPic: dylanPic, maxCap: 8, currCap: 7, location: "350 Moffitt Library, Berkeley, 94720", time: "7:00", description: "Study for CS. Yayy!!", joined: true, owner: false},
                        {title: "Study for CS 70", image: moffitpic, author: "Dylan Hopkins", authorPic: dylanPic, maxCap: 8, currCap: 7, location: "350 Moffitt Library, Berkeley, 94720", time: "7:00", description: "Study for CS. Yayy!!", joined: true, owner: false},
                        {title: "Study for CS 70", image: moffitpic, author: "Dylan Hopkins", authorPic: dylanPic, maxCap: 8, currCap: 7, location: "350 Moffitt Library, Berkeley, 94720", time: "7:00", description: "Study for CS. Yayy!!", joined: true, owner: false},
                        {title: "Study for CS 70", image: moffitpic, author: "Dylan Hopkins", authorPic: dylanPic, maxCap: 8, currCap: 7, location: "350 Moffitt Library, Berkeley, 94720", time: "7:00", description: "Study for CS. Yayy!!", joined: true, owner: false},
                        {title: "Study for CS 70", image: moffitpic, author: "Dylan Hopkins", authorPic: dylanPic, maxCap: 8, currCap: 7, location: "350 Moffitt Library, Berkeley, 94720", time: "7:00", description: "Study for CS. Yayy!!", joined: true, owner: false},
                        {title: "Study for CS 70", image: moffitpic, author: "Dylan Hopkins", authorPic: dylanPic, maxCap: 8, currCap: 7, location: "350 Moffitt Library, Berkeley, 94720", time: "7:00", description: "Study for CS. Yayy!!", joined: true, owner: false},
                        {title: "Study for CS 70", image: moffitpic, author: "Dylan Hopkins", authorPic: dylanPic, maxCap: 8, currCap: 7, location: "350 Moffitt Library, Berkeley, 94720", time: "7:00", description: "Study for CS. Yayy!!", joined: true, owner: false},
                        {title: "Study for CS 70", image: moffitpic, author: "Dylan Hopkins", authorPic: dylanPic, maxCap: 8, currCap: 7, location: "350 Moffitt Library, Berkeley, 94720", time: "7:00", description: "Study for CS. Yayy!!", joined: true, owner: false},
                        {title: "Study for CS 70", image: moffitpic, author: "Dylan Hopkins", authorPic: dylanPic, maxCap: 8, currCap: 7, location: "350 Moffitt Library, Berkeley, 94720", time: "7:00", description: "Study for CS. Yayy!!", joined: true, owner: false},
                    ]}> </CardGrid> 
                </div>
            </div>
        </div>
    )
}

export default HomePage;