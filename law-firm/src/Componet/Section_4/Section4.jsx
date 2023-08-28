import React, { useState } from "react";
import styles from "./section4.module.css";
import Jane_Cooper from "../../Assets/Jane_Cooper.png";
import Devon_Lane from "../../Assets/Devon_Lane.png";
import Robert_Fox from "../../Assets/Robert_Fox.png";
import Carousel from "../Carousel/Carousel";
import { Card, formLabelClasses } from "@mui/material";
import { ReactComponent as LeftArrow } from '../../Assets/LeftArrow.svg';
import CarouselLeftNavigation from "../Carousel/CarouselLeftNavigation ";
import CarouselRightNavigation from "../Carousel/CarouselRightNavigation ";
import Crad from "../Card/Crad";
const Section4 = () => {
  const clientData = [
    {
      image: Jane_Cooper,
      title: "Jane Cooper",
      subTitle: "Ceo of Hunt",
      description:
        "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequatduis enim velit mollit Exer. sit aliqua dolor do amet sint. Velit officia",
    },
    {
      image: Devon_Lane,
      title: "Devon Lane",
      subTitle: "Ceo of Hunt",
      description:
        "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequatduis enim velit mollit Exer. sit aliqua dolor do amet sint. Velit officia",
    },
    {
      image: Robert_Fox,
      title: "Robert Fox",
      subTitle: "Ceo of Hunt",
      description:
        "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequatduis enim velit mollit Exer. sit aliqua dolor do amet sint. Velit officia",
    },
    {
      image: Devon_Lane,
      title: "Devon Lane",
      subTitle: "Ceo of Hunt",
      description:
        "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequatduis enim velit mollit Exer. sit aliqua dolor do amet sint. Velit officia",
    },
    {
      image: Devon_Lane,
      title: "Devon Lane",
      subTitle: "Ceo of Hunt",
      description:
        "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequatduis enim velit mollit Exer. sit aliqua dolor do amet sint. Velit officia",
    },
    {
      image: Devon_Lane,
      title: "Devon Lane",
      subTitle: "Ceo of Hunt",
      description:
        "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequatduis enim velit mollit Exer. sit aliqua dolor do amet sint. Velit officia",
    },
    {
      image: Devon_Lane,
      title: "Devon Lane",
      subTitle: "Ceo of Hunt",
      description:
        "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequatduis enim velit mollit Exer. sit aliqua dolor do amet sint. Velit officia",
    },
  ];
  const [currentSlide, setCurrentSlide] = useState(1);

  const handleSlideChange = (newSlide) => {
    setCurrentSlide(newSlide);
  };
  return (
    <div className={styles.wrapper}>
      <div className={styles.heading}>
        <h2>What says our happy Clients</h2>
        <div className={styles.navigation}>
          <CarouselLeftNavigation onClick={() => handleSlideChange(currentSlide - 1)}/>
          <CarouselRightNavigation onClick={() => handleSlideChange(currentSlide + 1)}/>
        </div>
      </div>
      <div style={{display:"flex", justifyContent:"space-between",width:"100%"}}>
        <Carousel
          data={clientData}
          initialSlide={currentSlide}
          renderCardComponent={(ele) => (
            
         <Crad
         client={false}
         title={ele.title}
         img={ele.image}
         subTitle={ele.subTitle}
         description={ele.description}
         />
          )}
        />
      </div>
    </div>
  );
};

export default Section4;
