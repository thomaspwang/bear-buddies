import 'bootstrap/dist/css/bootstrap.min.css';
import Badge from '../../../public/badge';
import Clock from '../../../public/clock';
import Location from '../../../public/location';
import Paragraph from '../../../public/paragraph';
import Person from '../../../public/person';
import styles from './EventCard.module.css';
import { Button } from 'react-bootstrap';
import React from "react";
import Image from 'next/image'

function OwnerBadge() {
    return (
        <div className={styles.iconText}>
            <Badge />
            <p id={styles.badgeText}>Your Group</p>
        </div>
    )
}

function EventCard( {title, image, author, authorPic, maxCap, currCap, location, time, description, joined, owner} ) {
    EventCard.propTypes = {
        title: String,
        image: String,
        author: String,
        authorPic: String,
        maxCap: Number,
        currCap: Number,
        location: String,
        time: String,
        description: String,
        joined: Boolean,
        owner: Boolean,
    }

    let buttonText;
    if (joined) {
        buttonText = "Happening Soon!";
    } else {
        buttonText = "Join!"
    }

    let badge;
    if (owner) {
        badge = <OwnerBadge />
    } else {
        badge = <div />
    }
    
    return (
        <div>
            <div className={styles.active}>
                <div className={styles.top}>
                    <h1 className='head' id={styles.title}>{title}</h1>
                    <div className={styles.iconText}>
                        <Person />
                        <p>{currCap}/{maxCap}</p>
                    </div>
                </div>
                <div className={styles.body}>
                    <Image className={styles.mainImage} src={image} alt="lib" width="134" height="134"/>
                    <div className={styles.info}>
                        <div className={styles.iconText}>
                            <Image className={styles.pfp} src={authorPic} alt="face" width="21" height="21" />
                            <p id={styles.para}>{author}</p>
                        </div>
                        <div className={styles.iconText}>
                            <Clock />
                            <p id={styles.para}>{time}</p>
                        </div>
                        <div className={styles.iconText}>
                            <Location />
                            <p id={styles.para}>{location}</p>
                        </div>
                        <div className={styles.iconText}>
                            <Paragraph />
                            <p id={styles.para}>{description}</p>
                        </div>
                    </div>
                </div>
                <div className={styles.bottom}>
                    {badge}
                    <Button className={styles.button}>
                        <p id={styles.buttonText}>{buttonText}</p>
                    </Button>
                </div>
            </div>
        </div>
        
    )
}

export default EventCard;