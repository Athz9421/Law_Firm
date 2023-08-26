import React from 'react'
import styles from './emailAddress.module.css'
const EmailAddress = () => {
  return (
    <div className={styles.wrapper}>
      <input type="text" placeholder='Enter your eamil address' className={styles.input}/>
      <button className={styles.btn}>Let's Talk</button>
    </div>
  )
}

export default EmailAddress
