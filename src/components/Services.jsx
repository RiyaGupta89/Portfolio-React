import React from "react";
import ServiceCard from "./ServiceCard";
import web from "./images/web.png";
import portfolio from "./images/portfolio.png";
import design from "./images/design.png";

const Services = () => {
    return (
        <>
            <section className="services-container mb-5">
                <div className="services-heading">
                    <h1>Our Services</h1>
                </div>
                <div className="services-card">
                    <ServiceCard 
                    imgsrc={web}
                    title="Web Development"
                    text="High performance websites that bring impatient clients to grow your startup."
                    />
                    <ServiceCard 
                    imgsrc={portfolio}
                    title="Get your portfolio ready!"
                    text="Power up your reputation by showcasing perfect portfolio to the recruiters."
                    />
                    <ServiceCard 
                    imgsrc={design}
                    title="Web Designing" 
                    text="A pixel-perfect web design is an online persona of every startup and we can craft it for you."
                    />
                </div>
            </section>
        </>
    )
}

export default Services;