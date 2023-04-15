import CardGrid from "@/components/CardGrid/CardGrid";
import EventButton from "@/components/EventButton/EventButton";
import NavBar from "@/components/NavBar/NavBar";
import React from "react";
import styles from './GroupManagementPage.module.css';

function GroupManagementPage( {data} ) {
    return (
        <>
            <NavBar />
            <div className={styles.container}>
                <EventButton text={"Create"}/>
            </div>
            <CardGrid cardData={data}/>
        </>
    )
}

export default GroupManagementPage;