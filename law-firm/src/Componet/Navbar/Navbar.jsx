import React from 'react';
import styles from './navbar.module.css';
import { ReactComponent as Logo } from '../../Assets/Logo.svg';
import { ReactComponent as SocialMedia } from '../../Assets/insta.svg';
import { Link } from 'react-router-dom';
import { Link as ScrollLink } from 'react-scroll';

const Navbar = ({ islogo }) => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.logowrapper}>
        <Logo />
      </div>
      <div className={styles.navbarContent}>
        <ScrollLink to="home" smooth={true} duration={500}>Home</ScrollLink>
        <ScrollLink to="section2" smooth={true} duration={500}>Attorneys</ScrollLink>
        <ScrollLink to="section3" smooth={true} duration={500}>Practice Areas</ScrollLink>
        <ScrollLink to="section5" smooth={true} duration={500}>About Us</ScrollLink>
        {/* Add more ScrollLink components for other sections */}
      </div>
      {islogo === true ? (
        <div className={styles.contact}>
          <button>Contact</button>
        </div>
      ) : (
        <SocialMedia />
      )}
    </div>
  );
};

export default Navbar;
