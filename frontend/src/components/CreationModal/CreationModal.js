import React from "react";
import Modal from 'react-bootstrap/Modal';
import CloseButton from 'react-bootstrap/CloseButton';
import Button from 'react-bootstrap/Button';
import {useState} from 'react';
import DropdownButton from 'react-bootstrap/DropdownButton';
import Dropdown from 'react-bootstrap/Dropdown';

import styles from './CreationModal.module.css';

function CreationModal({ show, onClose}) {
  const [privacy, setPrivacy] = useState("Public / Private ");
    const handleSelectPrivacy = (y) => {
        setPrivacy(y);
    }

    const [category, setCategory] = useState("Select Category ");
    const handleSelectCategory = (g) => {
        setCategory(g);
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
          </div>
          <div className={styles.container}>
            <div className={styles.title}>
                <h1>Create a Group</h1>
            </div>
            <div className={styles.body}>
                <form>
                    <div className={styles.single_box}>
                        <label>Group Name</label>
                        <input type="text" className="form-control"></input>
                    </div>
                    <div className={styles.double_box}>
                        <div className={styles.flex}>
                            <label>Date</label>
                            <input type="text" className="form-control"></input>
                        </div>
                        <div className={styles.flex}>
                            <label>Time</label>
                            <input type="text" className="form-control"></input>
                        </div>
                    </div>
                    <div className={styles.single_box}>
                        <label>Location</label>
                        <input type="text" className="form-control"></input>
                    </div>
                    <div className={styles.double_box}>
                        <div className={styles.flex}>
                            <label>Category</label>
                            <div className="form-control">
                                <DropdownButton
                                    className={styles.dropdown_container_button}
                                    menuVariant="light"
                                    title={category}
                                    id="dropdown-menu-align-right"
                                    size="sm"
                                    flip="true"
                                    bsPrefix={styles.dropdown_button2}
                                    onSelect={handleSelectCategory}
                                >
                                    <Dropdown.Item eventKey="female">Food</Dropdown.Item>
                                    <Dropdown.Item eventKey="male">Hike</Dropdown.Item>
                                    <Dropdown.Item eventKey="other">Games</Dropdown.Item>
                                    <Dropdown.Item eventKey="female">Drinks</Dropdown.Item>
                                    <Dropdown.Item eventKey="male">Virtual</Dropdown.Item>
                                    <Dropdown.Item eventKey="other">sports</Dropdown.Item>
                                </DropdownButton>
                            </div>
                        </div>
                        <div className={styles.flex}>
                            <label>Group Type</label>
                            <div className="form-control">
                                <DropdownButton
                                    className={styles.dropdown_container_button}
                                    menuVariant="light"
                                    title={privacy}
                                    id="dropdown-menu-align-right"
                                    size="sm"
                                    flip="true"
                                    bsPrefix={styles.dropdown_button2}
                                    onSelect={handleSelectPrivacy}
                                >
                                    <Dropdown.Item eventKey="public">Public</Dropdown.Item>
                                    <Dropdown.Item eventKey="private">Private</Dropdown.Item>
                                </DropdownButton>
                            </div>
                        </div>
                    </div>
                    <div className={styles.single_box}>
                        <label>Requirements</label>
                        <input type="text" className="form-control"></input>
                    </div>
                    <label>Description</label>
                    <div className={styles.expanding_box}>
                        <span className={styles.span} contentEditable="true"></span>
                    </div>
                    <label>Upload Image</label>
                    <div>
                      <input type="file" id="myFile" name="filename"/>
                    </div>
                    <div>
                        <Button type="submit" className={styles.create_button}> Create Group</Button>
                    </div> 
                </form>
            </div>
        </div>
          </Modal.Body>
    </Modal>
  );
}

export default CreationModal;