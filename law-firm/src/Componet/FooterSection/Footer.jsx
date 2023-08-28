import React from 'react'
import Navbar from '../Navbar/Navbar'
import styles from './footer.module.css'

const Footer = () => {
  return (
    <div className={styles.wrapper}>
        <div className={styles.navDiv}>
      <Navbar islogo={false}/>
      </div>
      <div className={styles.footerText}>
        <p>© 2020 Acme. All right reserved.</p>
        <p>Privacy Policy</p>
        <p>Terms of Service</p>
      </div>
    </div>
  )
}

export default Footer
