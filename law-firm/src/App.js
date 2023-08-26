import Navbar from "./Componet/Navbar/Navbar";
import Hero from "./Componet/hero/Hero";

import styles from "./app.module.css"

function App() {
  return (
    <div className={styles.LandingPagewrapper}>
       <Navbar/>
<Hero/>


    </div>
  );
}

export default App;
