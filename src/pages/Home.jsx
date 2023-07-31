import React from "react";
import {Link} from "react-router-dom";

export default function Home() {
    return (
        <div className="Home">
         
           <img src="logo192.png"  alt=""  className="home--logo" />

            <div className="home--landing text">
            <h1>Stalwartness!</h1>
            <p> Old age may have its limitations and challenges, but the second half of one’s life is best to spend time with family and to guide and support your loved one.  Life isn't about your age life is about living so when you reach a certain age you want to be more around family and friends. Make your life beutiful with <b>ChooseLyf.</b>

</p>

            <Link to="/about" className="nav--link"><button className="home--more">I want the long story!</button></Link>
            </div>
        </div>
    )
}
