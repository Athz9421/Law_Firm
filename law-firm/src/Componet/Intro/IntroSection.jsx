import React from 'react'
import styles from './introSection.module.css'
const IntroSection = () => {
  return (
    <div className={styles.wrapper}>
    
<p className={styles.text1}>Let’s Introduce
Ourself</p>
   
      <div className={styles.line}></div>
      <div className={styles.text2}> 
        <h3>Criminal Lawyer</h3>
        <p>Amet minim mollit non deserunt ullamco est
sit aliqua dolor do amet sint. Velit officia consequatduis
enim velit mollit Exercitation.</p>
      </div>
    </div>
  )
}

export default IntroSection
