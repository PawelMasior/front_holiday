"use client";
import React from "react";
import styles from '../../styles/Spinner.module.css';
function Spinner({spinning, size}) {
  return spinning ? <div className={styles.ldsRipple} style={{width: size, height: size}}>
    <div></div>
    <div></div>
  </div> : null;
}

export default Spinner;
