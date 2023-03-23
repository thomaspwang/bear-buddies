import React from "react";
import {Button} from "react-bootstrap";
import styles from "./EventButton.module.css";
import icon from "../../public/ph_note-pencil-bold.svg";
import Image from 'next/image';

function EventButton({text}) {
    return (
        <Button variant="primary" type="submit" className={styles.textEdit} > 
             <Image src={icon}/> 
             
            {text}
         </Button>
    )
}

export default EventButton;




