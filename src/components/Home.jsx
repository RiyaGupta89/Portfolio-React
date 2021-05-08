import React from "react";
import img from "./images/side.png";
import { NavLink } from "react-router-dom";


const Home = () => {
  return (
    <>
    <section className="home-container mt-5">
        <div className="left" >
            <h1 className="home-heading">Hi, I am<span> Riya Gupta.</span></h1>
            <p>A Front End Web Developer</p>
            <div className="button">
            <NavLink className="btn-email-me" to="/contact" target="_blank">CONNECT WITH ME!</NavLink>
            </div>
        </div>
        <div className="right-img animation">
            <img src={img} alt="dev" />
        </div>
    </section>
</>
  )

};

export default Home;
