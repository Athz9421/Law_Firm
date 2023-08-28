import React, { useState } from "react";
import styles from "./Section5.module.css";
import img1 from "../../Assets/Danial.png";
import img2 from "../../Assets/Sanfole.png";
import img3 from "../../Assets/Cesforila.png";
import img4 from "../../Assets/Colleen.png";
import img5 from "../../Assets/Haldone.png";
import img6 from "../../Assets/Nik_jeo.png";

const Section5 = () => {
    const [selectedCardIndex, setSelectedCardIndex] = useState(null);

    const handleCardClick = (index) => {
      setSelectedCardIndex(index);
    };
  const data = [
    { id:1,
      img: img1,
      name: "Danial Def",
      cases: 301,
    },
    {id:2,
      img: img2,
      name: "Sanfole",
      cases: 850,
    },
    {id:3,
      img: img3,
      name: "Cesforila",
      cases: 470,
    },
    {id:4,
      img: img4,
      name: "Colleen",
      cases: 180,
    },
    {id:5,
      img: img5,
      name: "Haldone",
      cases: 200,
    },
    {id:6,
      img: img6,
      name: "Nik Jeo",
      cases: 0, // Please provide the correct value for Nik Jeo
    },
    // You can continue adding more objects here
  ];
  
  return (
    <div className={styles.wrapper}>
      <div className={styles.heading}>Our Team</div>

      <div className={styles.cardSection}>
       {
        data.map((ele,index)=>{
return(
    <div className={`${styles.card} ${index===selectedCardIndex ? styles.selectedCard : ""}`}  key={ele.id} onClick={()=>handleCardClick(index)}>
    <img src={ele.img} alt="img" />
    <div className={styles.name}>
      <h2>{ele.name}</h2>
      <p>{ele.cases}cases</p>
    </div>
  </div>
)

        })
       }
      </div>
    </div>
  );
};

export default Section5;
