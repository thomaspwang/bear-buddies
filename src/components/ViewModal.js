import React, { useEffect, useState } from "react";
import ReactDOM from "react-dom";
import Modal from 'react-bootstrap/Modal';

import styles from './ViewModal.module.css';
import Button from 'react-bootstrap/Button';

function ViewModal(props) {
  const List = () => {
    const listItems = props.mem_array.map(person =>
      <div className={styles.iconText}>
        <img className={styles.pfp} src="tommy.jpg"/>
        <div className = {styles.listText}>{person}</div>
      </div>
    );
    return <ul className = {styles.list}>{listItems}</ul>;
  }
  
  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <div className = {styles.active}>
        <div>
            <div className = {styles.closeButton}>
                <a href="#" onClick={props.onClose}>
                X
                </a>
            </div>
            <img className={styles.mainImage} src={props.image}/>
            <h1 className = {styles.title}>{props.title}</h1>      
        </div>
        <div className = {styles.bodyLeft}>
            <div className = {styles.normalText}><b>When:</b> {props.time}</div>
            <div className = {styles.normalText}><b>Where:</b> {props.location}</div>
            <div className = {styles.normalText}><b>Description:</b> {props.description}</div>
            <div className = {styles.normalText}><b>Activity Requirements:</b></div> 
            <div className = {styles.normalText}>Check Allergy Info!</div>
        </div>
        <div className = {styles.bodyRight}>
          <div className = {styles.memberText}>
            <div className = {styles.normalText}><b>Current Members ({props.mem_array.length}/{props.mem_limit})</b></div>
          </div> 
          <List/>
          <div>
            <button className = {styles.joinButton}>Join!</button>
          </div>
        </div>
      </div>
    </Modal>
  );
}

export default ViewModal;

/*const notViewModal = ({ show, onClose, image, title, time, location, description, mem_limit, mem_array}) => {
  const [isBrowser, setIsBrowser] = useState(false);

  const List = () => {
    const listItems = mem_array.map(person =>
      <div className={styles.iconText}>
        <img className={styles.pfp} src="tommy.jpg"/>
        <div className = {styles.listText}>{person}</div>
      </div>
    );
    return <ul className = {styles.list}>{listItems}</ul>;
  }

  useEffect(() => {
    setIsBrowser(true);
  }, []);

  const handleCloseClick = (e) => {
    e.preventDefault();
    onClose();
  };

  const modalContent = show ? (
    <div className = {styles.active}>
        <div>
            <div className = {styles.closeButton}>
                <a href="#" onClick={handleCloseClick}>
                X
                </a>
            </div>
            <img className={styles.mainImage} src={image}/>
            <h1 className = {styles.title}>{title}</h1>      
        </div>
        <div className = {styles.bodyLeft}>
            <div className = {styles.normalText}><b>When:</b> {time}</div>
            <div className = {styles.normalText}><b>Where:</b> {location}</div>
            <div className = {styles.normalText}><b>Description:</b> {description}</div>
            <div className = {styles.normalText}><b>Activity Requirements:</b></div> 
            <div className = {styles.normalText}>Check Allergy Info!</div>
        </div>
        <div className = {styles.bodyRight}>
          <div className = {styles.memberText}>
            <div className = {styles.normalText}><b>Current Members ({mem_array.length}/{mem_limit})</b></div>
          </div> 
          <List/>
          <div>
            <button className = {styles.joinButton}>Join!</button>
          </div>
        </div>
        
    </div>
    
    
  ) : null;

  if (isBrowser) {
    return ReactDOM.createPortal(
      modalContent,
      document.getElementById("modal-root")
    );
  } else {
    return null;
  }
};*/