import React from "react";
import profileImage from "../assets/profile.png";

function About() {
  return (
    <section id="about">
      <div className="container mx-auto">
        <h2 className="section-title">About me</h2>
        <div className="flex flex-wrap">
          <div className="w-full md:w-1/2">
            <div>
              <img
                alt="Profile Image"
                className="rounded shadow-lg mb-5"
                height="auto"
                width="300px"
                src={profileImage}
              />
            </div>
          </div>
          <div className="w-full md:w-1/2">
            <div>
              <p className="text-left">
                {" "}
                I am a well-rounded individual with a diverse range of
                interests, including sports, smoking meats, cooking, and keeping
                up with new technology. As a nerd at heart, I enjoy learning
                about the latest gadgets and innovations. Despite this, I
                maintain a light-hearted approach to life and am known for my
                considerate and easy-going personality. I come from a close-knit
                family and value my relationships with them greatly. Originally
                from San Diego, I graduated from San Diego State University
                before moving to Oregon in 2015. With over a decade of
                experience as a mortgage loan processor, I have a solid
                background in finance and a strong work ethic. Whether working
                out, watching movies, or trying new foods, I approach each
                experience with enthusiasm and a desire to make the most of
                life.
              </p>
              <span className="flex mt-8">
                <a target="_blank" rel="noreferrer" href="assets/resume.pdf">
                  <button className="btn btn-blue px-4 py-2">
                    View Resume
                  </button>
                </a>
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
