import IntroSection from "./Componet/Intro/IntroSection";
import Navbar from "./Componet/Navbar/Navbar";
import Section2 from "./Componet/Section_2/Section2";
import Hero from "./Componet/hero/Hero";

import styles from "./app.module.css";

function App() {
  return (
    <>
  
        <div className={styles.LandingPagewrapper}>
          <Navbar />
          <Hero />
        </div>
        <div className={styles.bodyWrapper}>
        <IntroSection />
        <Section2/>
        </div>
    
    </>
  );
}

export default App;
