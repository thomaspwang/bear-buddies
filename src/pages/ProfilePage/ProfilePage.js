import React from "react";
import styles from './ProfilePage.module.css';
import Image from "next/image";

function ProfilePage() {
    return (
        <div className="container">
            <Image src="/tommy.jpeg" alt="tommy" width="450" height="450" className={styles.circularImage}/>
            <div className={styles.profileR}>
                <div className={styles.first}>
                    <span>
                        <span className={styles.bold}>First Name</span>
                    </span>
                    <span className={styles.fn}> Tommy</span>
                </div>
                <div className={styles.last}>
                    <span>
                        <span className={styles.bold}>Last Name</span>
                    </span>
                    <span className={styles.ln}> Wang</span>
                </div>
                <div className={styles.gender}>
                    <span>
                        <span className={styles.bold}>Gender</span>
                    </span>
                    <span className={styles.gn}> Male</span>
                </div>
                <div className={styles.graduation}>
                    <span>
                        <span className={styles.bold}>Graduation Year</span>
                    </span>
                    <span className={styles.gradn}> 2024</span>
                </div>
                <div className={styles.major}>
                    <span>
                        <span className={styles.bold}>Major</span>
                    </span>
                    <span className={styles.mn}> Computer Science</span>
                </div>
                <div className={styles.email}>
                    <span>
                        <span className={styles.bold}>Email</span>
                    </span>
                    <span className={styles.en}> thomaswang@berkeley.edu</span>
                </div>
                <div className={styles.number}>
                    <span>
                        <span className={styles.bold}>Phone Number</span>
                    </span>
                    <span className={styles.nn}> (510) 701-3797</span>
                </div>
            </div>
        </div>
    )
}
export default ProfilePage;
