import React, { useState } from "react";
import styles from "./card.module.css";


const Crad = ({client,isSelected, onClick,img,title,description,subTitle}) => {
    
    const cardWrapperClasses = `${styles.cardwrapper} ${isSelected ? styles.selectedCard : ""}`;
if(client) { return (

    <div className={cardWrapperClasses} onClick={onClick}>
      <div className={styles.cardimg}>
        <img src={img} alt="img" />
      </div>
      <div className={styles.cardHeading}> {title}</div>
      <div className={styles.cardText}>
        {" "}
       {description}.
      </div>
      <div className={styles.btn}>
        {" "}
        <button>Read More</button>
      </div>
    </div>
  );
}
else{

    return (

        <div className={styles.cardwrapper}>
          <div className={styles.cardimg}>
            <img src={img} alt="img" />
          </div>
          <div className={styles.cardHeading}> {title}</div>
          <p className={styles.subtitle}>{subTitle}</p>
          <div className={styles.cardText}>
            {" "}
          {description}.
          </div>
        
        </div>
      );

}
};

export default Crad;
