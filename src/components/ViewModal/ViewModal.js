import React from "react";
import Modal from 'react-bootstrap/Modal';
import CloseButton from 'react-bootstrap/CloseButton';

import styles from './ViewModal.module.css';

function ViewModal({ show, onClose, image, title, time, location, description, mem_limit, mem_array}) {
  const List = () => {
    const listItems = mem_array.map(person =>
      <div className={styles.icon_text}>
        <img className={styles.pfp} src="tommy.jpg"/>
        <div className = {styles.list_text}>{person}</div>
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
              <CloseButton className = {styles.close_button} onClick={onClose}/>
              <img className={styles.main_image} src={image}/>
              <h1 className = {styles.title}>{title}</h1>      
          </div>
          <div className = {styles.body_left}>
              <div className = {styles.normal_text}><b>When:</b> {time}</div>
              <div className = {styles.normal_text}><b>Where:</b> {location}</div>
              <div className = {styles.normal_text}><b>Description:</b> {description}</div>
              <div className = {styles.normal_text}><b>Activity Requirements:</b></div> 
              <div className = {styles.normal_text}>Check Allergy Info!</div>
          </div>
          <div className = {styles.body_right}>
            <div className = {styles.member_text}>
              <div className = {styles.normal_text}><b>Current Members ({mem_array.length}/{mem_limit})</b></div>
            </div> 
            <List/>
            <div>
              <button className = {styles.join_button}>Join!</button>
            </div>
          </div>
        </Modal.Body>
  </Modal>
);
}

export default ViewModal;