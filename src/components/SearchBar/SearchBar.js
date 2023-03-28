import React, { useState } from 'react'
import styles from "./SearchBar.module.css";
import {Button} from "react-bootstrap";
import icon from "src/public/Vector.svg";
import Image from 'next/image';
import InputGroup from 'react-bootstrap/InputGroup';
import Form from 'react-bootstrap/Form';

function SearchBar() {
  
  return (
    <InputGroup className={styles.searchButton}>

      <Form.Control
        placeholder="search groups"
        aria-label="search groups"
        aria-describedby="image"
      />

      <InputGroup.Text id="image" className={styles.buttonBackground}>
        <Button variant="primary" type="submit" className={styles.button} > 
            <Image src={icon}/> 
        </Button>
      </InputGroup.Text>

    </InputGroup>
      
    )
}

export default SearchBar;