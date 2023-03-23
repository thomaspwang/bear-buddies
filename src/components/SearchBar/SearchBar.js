import React, { useState } from 'react'
import { useRouter } from 'next/router'
import styles from "./SearchBar.module.css";
import {Button} from "react-bootstrap";
import img from "./Vector.svg";
import Image from 'next/image';

  
  function SearchBar() {
    const [query, setQuery] = useState('search groups');

    return (
        <form>
            <div>
            <InputGroup className={styles.inputArea} >
                    <Button variant="primary" type="submit" className={styles.searchButton} > 
                        <Image src={img}/>
                    </Button>
            </InputGroup>
                    <input type="text" value={query} onChange={(event) => setQuery(event.target.value)} />
                    
            </div>
        </form>
      )
  }

export default SearchBar;

