import React, { useState } from 'react';
import styles from './section2.module.css';
import Crad from '../Card/Crad';
import img from "../../Assets/Giftimg.png";

const Section2 = () => {
  const [selectedCardIndex, setSelectedCardIndex] = useState(null);

  const handleCardClick = (index) => {
    setSelectedCardIndex(index);
  };

  const cardData = [
    {
      img,
      title: "98% Success Rate",
      description: "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequatduis enim velit mollit Exer."
    },
    {
      img,
      title: "100% Success Rate",
      description: "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequatduis enim velit mollit Exer."
    },
    {
      img,
      title: "100% Success Rate",
      description: "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequatduis enim velit mollit Exer."
    }
  ];

  return (
    <div className={styles.section2Wrapper}>
      <div className={styles.heading}>Why Choose us?</div>
      <div className={styles.cardWrapper}>
        {cardData.map((data, index) => (
          <Crad
            key={index}
            client={true}
            isSelected={selectedCardIndex === index}
            onClick={() => handleCardClick(index)}
       
            img={data.img}
            title={data.title}
            description={data.description}
          />
        ))}
      </div>
    </div>
  );
}

export default Section2;
