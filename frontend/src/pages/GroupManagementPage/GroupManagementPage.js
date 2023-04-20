import CardGrid from "@/components/CardGrid/CardGrid";
import EventButton from "@/components/EventButton/EventButton";
import NavBar from "@/components/NavBar/NavBar";
import React from "react";
import styles from './GroupManagementPage.module.css';
import moffitpic from "public/moffitt.jpeg"; 
import dylanPic from "public/dylan.jpeg";

function GroupManagementPage() {
    const cardData= [
        {title: "Study for CS 70", image: moffitpic, author: "Dylan Hopkins", authorPic: dylanPic, maxCap: 8, currCap: 7, location: "350 Moffitt Library, Berkeley, 94720", time: "7:00", description: "Study for CS. Yayy!!", joined: true, owner: false},
        {title: "Study for CS 70", image: moffitpic, author: "Dylan Hopkins", authorPic: dylanPic, maxCap: 8, currCap: 7, location: "350 Moffitt Library, Berkeley, 94720", time: "7:00", description: "Study for CS. Yayy!!", joined: true, owner: false},
        {title: "Study for CS 70", image: moffitpic, author: "Dylan Hopkins", authorPic: dylanPic, maxCap: 8, currCap: 7, location: "350 Moffitt Library, Berkeley, 94720", time: "7:00", description: "Study for CS. Yayy!!", joined: true, owner: false},
        {title: "Study for CS 70", image: moffitpic, author: "Dylan Hopkins", authorPic: dylanPic, maxCap: 8, currCap: 7, location: "350 Moffitt Library, Berkeley, 94720", time: "7:00", description: "Study for CS. Yayy!!", joined: true, owner: false},
        {title: "Study for CS 70", image: moffitpic, author: "Dylan Hopkins", authorPic: dylanPic, maxCap: 8, currCap: 7, location: "350 Moffitt Library, Berkeley, 94720", time: "7:00", description: "Study for CS. Yayy!!", joined: true, owner: false},
        {title: "Study for CS 70", image: moffitpic, author: "Dylan Hopkins", authorPic: dylanPic, maxCap: 8, currCap: 7, location: "350 Moffitt Library, Berkeley, 94720", time: "7:00", description: "Study for CS. Yayy!!", joined: true, owner: false},
        {title: "Study for CS 70", image: moffitpic, author: "Dylan Hopkins", authorPic: dylanPic, maxCap: 8, currCap: 7, location: "350 Moffitt Library, Berkeley, 94720", time: "7:00", description: "Study for CS. Yayy!!", joined: true, owner: false},
        {title: "Study for CS 70", image: moffitpic, author: "Dylan Hopkins", authorPic: dylanPic, maxCap: 8, currCap: 7, location: "350 Moffitt Library, Berkeley, 94720", time: "7:00", description: "Study for CS. Yayy!!", joined: true, owner: false},
        {title: "Study for CS 70", image: moffitpic, author: "Dylan Hopkins", authorPic: dylanPic, maxCap: 8, currCap: 7, location: "350 Moffitt Library, Berkeley, 94720", time: "7:00", description: "Study for CS. Yayy!!", joined: true, owner: false},
    ]

    return (
        <>
            <NavBar page={1}/>
            <div className={styles.container}>
                <EventButton text={"Create"}/>
            </div>
            <CardGrid cardData={cardData}/>
        </>
    )
}

export default GroupManagementPage;