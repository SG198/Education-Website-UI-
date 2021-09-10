import React from 'react'
import './style.css'
const Home = () => {
    return (
        <>
        <section id="home">
        <div className="container">
            <div className="leftContainer">
                <h4 className="headText">the right choice</h4>
                <h2 className="subText">Learn <span>365 Days Per Year</span> Here</h2>
                <p className="pText">You will learn the easiest way from various tutors who are experienced in their fields.
                </p>
                <div className="button" id="group">
                    <button className="btn">Get Started</button>
                    <button className="btn" id="vButton"><i className="fas fa-play"></i> Watch Video</button>
                </div>
            </div>
            <div className="rightContainer">
                <figure className="mainImage">
                    <img src="./images/banner1.jpg" alt="banner1"/>
                </figure>
            </div>
        </div>
    </section>  
        </>
    )
}

export default Home
