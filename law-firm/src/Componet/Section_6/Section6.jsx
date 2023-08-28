import React from "react";
import styles from "./section6.module.css";
import BasicAccordion from "./Accordien/Accordien";
const Section6 = () => {
    const data = [
        {
          title: "Do I need a personal injury report?",
          content:
            "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequatduis enim velit mollit Exer. Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequatduis enim velit mollit Exer.",
        },
        {
          title: "How much is my case worth?",
          content:
            "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequatduis enim velit mollit Exer. Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequatduis enim velit mollit Exer.",
        },
        {
          title: "What should I do right after car accidect",
          content:
            "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequatduis enim velit mollit Exer. Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequatduis enim velit mollit Exer.",
        },
        {
          title: "How much is my case worth?",
          content:
            "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequatduis enim velit mollit Exer. Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequatduis enim velit mollit Exer.",
        },
      ];
  return (
    <div className={styles.wrapper}>
      <h2 className={styles.heading}>FAQ</h2>
      <div className={styles.innerWrapper}>
        <div className={styles.text1}>
          {" "}
          Amet minim mollit non deserunt ullamco est sit <br /> aliqua dolor do amet
          sint.{" "}
        </div>
        <div className={styles.accordien}>
            <BasicAccordion faqQuestions ={data}/>
        </div>
      </div>
    </div>
  );
};

export default Section6;
