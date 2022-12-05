
import React, { Fragment } from "react";
import classes from './Home.module.css'

const Home = () => {
    return (
        <Fragment>
            

            <h2 className={classes.h2}> Tours </h2>

            <section>
                <div className={classes.para}>
                    <p> JUL16 DETROIT, MIDTE ENERGY MUSIC THEATRE </p>
                    <p> JUL19 TORONTO, ON BUDWEISER STAGE</p>
                </div>
            </section>
        </Fragment>
    )

}

export default Home;