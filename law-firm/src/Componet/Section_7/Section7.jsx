import React from 'react';
import styles from './section7.module.css';
const Section7 = () => {
  return (
    <div className={styles.wrapper}>
     <div className={styles.heading}>Subscribe Our Newsletter</div> 
     <div className={styles.Info}>
        <input className={styles.text} type="text" placeholder="Name"/>
        <input className={styles.email}type="email" placeholder="Email" />
        <button className={styles.btn}>SEND</button>
     </div>
    </div>
  )
}

export default Section7

