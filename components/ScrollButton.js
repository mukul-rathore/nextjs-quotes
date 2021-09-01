import React, {useState} from 'react';
import {FaArrowCircleUp} from 'react-icons/fa';
import styles from '../styles/Quotes.module.css';
  
const ScrollButton = () =>{
  
  const scrollToTop = () =>{
    window.scrollTo({
      top: 0, 
      behavior: 'smooth'
      /* you can also use 'auto' behaviour
         in place of 'smooth' */
    });
  };
  
  return (
    <div className={styles.scrollbutton}>
     <FaArrowCircleUp onClick={scrollToTop}  />
    </div>
  );
}
  
export default ScrollButton;