import React from "react";
import { Link } from "react-scroll";

const Hero = () => {
  return (
    <section
      id="hero"
      className=" hero jumbotron min-h-screen flex items-center"
    >
      <div className="container mx-auto text-center py-4">
        <h1 className="hero-title text-4xl font-bold leading-tight">
          Hi, My name is{""}
          <span className="bg-clip-text gradient-text"> Preston Chandler.</span>
          <br />
          I'm the Developer you've been looking for.
        </h1>
        <Link to="about" smooth={true} duration={500} className="btn btn-white">
          <span className="gradient-text" id="btn-white">
            Learn Why
          </span>
        </Link>
      </div>
    </section>
  );
};

export default Hero;
