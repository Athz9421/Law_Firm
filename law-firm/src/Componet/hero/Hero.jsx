import React from "react";
import styles from "./hero.module.css";
import { ReactComponent as HeroImg } from "../../Assets/heroImage.svg";
import EmailAddress from "../EmailAdress/EmailAddress";
const Hero = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.heroText}>
        <h2> You don’t have to Fight them Alone.</h2>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium
          fugit perferendis saepe numquam deserunt tempora. Dolorum, consequatur
          placeat assumenda doloribus itaque quia, quod facilis voluptatem neque
          veritatis, alias sed. Accusamus!
        </p>
        <EmailAddress />
      </div>
     
      <HeroImg />
    </div>
  );
};

export default Hero;
