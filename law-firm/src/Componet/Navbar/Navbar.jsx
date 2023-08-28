import React from 'react'
import styles from './navbar.module.css'
import { ReactComponent as Logo } from '../../Assets/Logo.svg'
import { ReactComponent as SocialMedia } from '../../Assets/insta.svg'


const Navbar = ({islogo}) => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.logowrapper}><Logo/></div>
      <div className={styles.navbarContent}>
  <p>Home</p>
  <p>Attorneys</p>
  <p>Practice Areas</p>
  <p>About Us</p>
      </div>
 
    {islogo===true?(<div className={styles.contact}><button >Contact</button></div>):(<SocialMedia/>) }
    </div>
  )
}

export default Navbar
