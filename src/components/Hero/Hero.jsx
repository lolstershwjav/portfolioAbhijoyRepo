import React from "react";

import styles from "./Hero.module.css";
import { getImageUrl } from "../../utils";

export const Hero = () => {
  return (
    <section className={styles.container}>
      <div className={styles.content}>
        <h1 className={styles.title}>Abhijoy Sarkar</h1>
        <p className={styles.description}>
          I'm a front end highschool developer with 3 years of experience using React and
          NodeJS. I also have experience in using Tesnsorflow, Keras, and physics engine.
        </p>
        <a href="mailto:abhijoysarkar7@gmail.com" className={styles.contactBtn}>
          Contact Me
        </a>
      </div>
      <img
        src={getImageUrl("hero/abhijoy.jpg")}
        alt="Hero image of me"
        className={styles.heroImg}
      />
      <div className={styles.topBlur} />
      <div className={styles.bottomBlur} />
    </section>
  );
};
