import React from "react";
import { Link as ScrollLink, Element } from "react-scroll";
import Footer from "./Componet/FooterSection/Footer";
import IntroSection from "./Componet/Intro/IntroSection";
import Navbar from "./Componet/Navbar/Navbar";
import Section2 from "./Componet/Section_2/Section2";
import Section3 from "./Componet/Section_3/Section3";
import Section4 from "./Componet/Section_4/Section4";
import Section5 from "./Componet/Section_5/Section5";
import Section6 from "./Componet/Section_6/Section6";
import Section7 from "./Componet/Section_7/Section7";
import Hero from "./Componet/hero/Hero";

import styles from "./app.module.css";

function App() {
  return (
    <>
      <div className={styles.LandingPagewrapper}>
        <Navbar islogo={true} />
        <Element name="home">
        <Hero />
        </Element>
        
      </div>
      <div className={styles.bodyWrapper}>
        <Element name="intro">
          <IntroSection />
        </Element>
        <Element name="section2">
          <Section2 />
        </Element>
        <Element name="section3">
          <Section3 />
        </Element>
        <Element name="section4">
          <Section4 />
        </Element>
        <Element name="section5">
          <Section5 />
        </Element>
        <Element name="section6">
          <Section6 />
        </Element>
        <Element name="section7">
        <Section7 />
        </Element>
       
      </div>
      <Footer />
    </>
  );
}

export default App;
