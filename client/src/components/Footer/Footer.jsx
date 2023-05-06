import React from "react";
import { footerVariants, staggerChildren } from "../../utils/motion";
import css from "./Footer.module.scss";
import { useState } from 'react';
import { motion } from 'framer-motion'
import axios from 'axios';
import "../Footer/footer.css"
const Footer = () => {

  const baseurl = "http://localhost:5000/send";//baseurl for posting
  const [name, setname] = useState("");
  const [email, setemail] = useState("");
  const [requirement, setrequirement] = useState("");

  const send = () => {
    axios.post(baseurl, {
      name: name,
      email: email,
      requirement: requirement
    }).then((Response) => {

      if (Response.status = 200) {
        alert(Response.data.message);

        console.log("success");
      }


      // window.location(baseurl);
    })

  }





  return (
    <motion.section
      variants={staggerChildren}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.25 }}
      className={`paddings ${css.wrapper}`}>


      <motion.div
        variants={footerVariants}
        className={`innerWidth yPaddings flexCenter ${css.container}`}>
        <div className={css.left}>
          <span className="primaryText">
            Let's make something <br />
            amazing together.
          </span>
          <span className="primaryText">
            Start by <a href="mailto:devwork.co@gmail.com">saying hi</a>
          </span>
        </div>

        <div className={css.right}>
          <div className={css.info}>
            <form className="subscribe-form ">
              <h3 id="person-name-heading">Full name</h3>
              <input type="text" name="person-name" id="person-name" className='text-white' placeholder='Enter your full name' onChange={(e) => {

                setname(e.target.value);

              }} />

              <h3 id="person-email-heading">Email</h3>
              <input type="email" name="person-email" id="person-email" className='text-white' placeholder='Enter your email' onChange={(e) => {

                setemail(e.target.value);

              }} />

              <h3 id="person-org-heading">Requirement</h3>
              <textarea type="text" name="person-org" id="person-org" className='text-white' placeholder='Enter your requirement' onChange={(e) => {

                setrequirement(e.target.value);

              }} />

              <button type="submit" id='subscribe-btn' onClick={send} ><p className="cursor">Send</p></button>
            </form>
          </div>

        </div>
      </motion.div>
    </motion.section>
  );
};

export default Footer;
