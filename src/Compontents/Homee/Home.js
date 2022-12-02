import React, { Fragment } from "react";
import playButton from '../../image/play.png';
import classes from './Home.module.css'

const Home = () => {
    return (
        <Fragment>
            <header className={classes.divheader}>
                <button className={classes.button}> Get Out Lastest Album</button>
                <img className={classes.img} src = {playButton} alt= "Play Button"></img>
            </header>

            <h2 className={classes.h2}> Tours </h2>

            <section>
                <div>
                    <p> JUL16 DETROIT, MIDTE ENERGY MUSIC THEATRE </p>
                    <p> JUL19 TORONTO, ON BUDWEISER STAGE</p>
                </div>
            </section>
        </Fragment>
    )

}

export default Home;