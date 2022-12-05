import React from "react";
import classes from "./Footer.module.css";
import playButton from '../Image/play.jpg';


const Footer = (props) => {
  return (
    <div className={classes.wraper}>
    <footer className={classes.container}>
    <button > Get Out Lastest Album</button>
    <img src = {playButton} alt= "Play Button"></img>
</footer>
</div>
  );
};

export default Footer;