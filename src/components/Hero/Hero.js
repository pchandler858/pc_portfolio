import React from "react";
import "./Hero.module.css"; // Assuming you have a CSS file for styling the Hero component

const Hero = () => {
  return (
    <section className="hero">
      <h1 className="hero-title">
        Hi, My name is Preston Chandler. I'm the Developer you've been looking
        for.
      </h1>
      <a href="#contact" className="hero-button">
        Contact Me
      </a>{" "}
    </section>
  );
};

export default Hero;
