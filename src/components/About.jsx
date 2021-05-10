import React from "react";
import img from "./images/about.png";

const About = () => {
  return (
    <>
      <section className="home-container margin-top">
        <div className="left about-left">
          <h1 className="about-h1">
            Welcome to the about page
          </h1>
          <p> Hi, I am a Frontend Developer. I am currently pursuing my Btech from SRMGPC, Lucknow. I am passionate about coding because coding gives us the previlege to code our dream project into reality. Currently, my skills are <span className="para-span">HTML, CSS, JAVASCRIPT, REACT, JQUERY, MATERIALUI, NPM, NODEJS.</span></p>
          <div className="button">
            <a className="btn-email-me" href="https://github.com/RiyaGupta89" target="_blank">
              Visit Github
            </a>
          </div>
        </div>
        <div className="right-img animation about-img">
          <img src={img} alt="dev" />
        </div>
      </section>
    </>
  );
};

export default About;
