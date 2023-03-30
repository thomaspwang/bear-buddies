import React from "react";
import Modal from 'react-bootstrap/Modal';
import CloseButton from 'react-bootstrap/CloseButton';

import styles from './ViewModal.module.css';

function ViewModal({ show, onClose, image, title, time, location, description, mem_limit, mem_array}) {
  const List = () => {
    const listItems = mem_array.map(person =>
      <div className={styles.iconText}>
        <img className={styles.pfp} src="tommy.jpg"/>
        <div className = {styles.listText}>{person}</div>
      </div>
    );
    return <ul className = {styles.list}>{listItems}</ul>;
  }
  
return (
  <Modal
    dialogClassName={styles.width}     
    contentClassName={styles.height} 
    show={show}
    onHide={onClose}
    animation={false}
    centered
    >
        <Modal.Body>
          <div>
              <CloseButton className = {styles.closeButton} onClick={onClose}/>
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
        </Modal.Body>
  </Modal>
);
}

export default ViewModal;