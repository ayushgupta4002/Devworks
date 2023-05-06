import React from "react";
import { useState } from 'react';
import { motion } from "framer-motion";
import css from "./Portfolio.module.scss";
import { fadeIn, staggerChildren, textVariant, textVariant2 } from "../../utils/motion";
const Portfolio = () => {



  return (
    <motion.section
    variants={staggerChildren}
    initial="hidden"
    whileInView="show"
    viewport={{ once: false, amount: 0.25 }}
    className={`paddings ${css.wrapper}`}>

      <a className="anchor" id="portfolio"></a>

      <div className={`innerWidth flexCenter ${css.container}`}>


        <motion.div variants={textVariant(.4)} className={`flexCenter ${css.heading}`}>
          <div>
            <span className="primaryText">Some Cool Works</span>
            <p style={{marginTop: "10px"}}>Perfect solution for digital experience</p>
          </div>
         
        </motion.div>


        <div className={`flexCenter ${css.showCase}`}>
            <motion.img variants={fadeIn("up", "tween", .5, .6)} src="./devfeed.jpg" alt="project" />
            <motion.img variants={fadeIn("up", "tween", .7, .6)} src="./gym.jpg" alt="project" />
            <motion.img variants={fadeIn("up", "tween", .9, .6)} src="./image3.jpg" alt="project" />
        </div>
      </div>
    </motion.section>
  );
};

export default Portfolio;
