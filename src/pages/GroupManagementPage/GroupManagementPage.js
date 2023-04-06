import 'bootstrap/dist/css/bootstrap.min.css';
import React from "react";
import Image from 'next/image'
import Button from 'react-bootstrap/Button';
import Badge from '../../../public/badge';
import Clock from '../../../public/clock';
import Location from '../../../public/location';
import Paragraph from '../../../public/paragraph';
import Person from '../../../public/person';
import styles from './EventCard.module.css';


function OwnerBadge() {
    return (
        <div className={styles.iconText}>
            <Badge />
            <p id={styles.badgeText}>Your Group</p>
        </div>
    )
}

function EventCard( {event} ) {
    EventCard.propTypes = {
        event: PropTypes.shape({
            title: PropTypes.string,
            image: PropTypes.string,
            author: PropTypes.string,
            authorPic: PropTypes.string,
            maxCap: PropTypes.number,
            currCap: PropTypes.number,
            location: PropTypes.string,
            time: PropTypes.string,
            description: PropTypes.string,
            joined: PropTypes.bool,
            owner: PropTypes.bool,
        }).isRequired,
    }

    let buttonText;
    if (event.joined) {
        buttonText = "Happening Soon!";
    } else {
        buttonText = "Join!"
    }

    let badge;
    if (event.owner) {
        badge = <OwnerBadge />
    } else {
        badge = <div />
    }

    return (
        <div>
            <div className={styles.active}>
                <div className={styles.top}>
                    <h1 className='head' id={styles.title}>{event.title}</h1>
                    <div className={styles.iconText}>
                        <Person />
                        <p>{event.currCap}/{event.maxCap}</p>
                    </div>
                </div>
                <div className={styles.body}>
                    <Image className={styles.mainImage} src={event.image} alt="lib" width="134" height="134"/>
                    <div className={styles.info}>
                        <div className={styles.iconText}>
                            <Image className={styles.pfp} src={event.authorPic} alt="face" width="21" height="21" />
                            <p id={styles.para}>{event.author}</p>
                        </div>
                        <div className={styles.iconText}>
                            <Clock />
                            <p id={styles.para}>{event.time}</p>
                        </div>
                        <div className={styles.iconText}>
                            <Location />
                            <p id={styles.para}>{event.location}</p>
                        </div>
                        <div className={styles.iconText}>
                            <Paragraph />
                            <p id={styles.para}>{event.description}</p>
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