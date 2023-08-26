import React from 'react'
import styles from './navbar.module.css'
import { ReactComponent as Logo } from '../../Assets/Logo.svg'


const Navbar = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.logowrapper}><Logo/></div>
      <div className={styles.navbarContent}>
  <p>Home</p>
  <p>Attorneys</p>
  <p>Practice Areas</p>
  <p>About Us</p>
      </div>
      <div className={styles.contact}><button >Contact</button></div>
    </div>
  )
}

export default Navbar
