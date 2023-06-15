import React from "react";
import profileImage from "../assets/profile.png";
// import resumePDF from "../assets/resume.pdf";

function About() {
  return (
    <section id="about" className="">
      <div className="container mx-auto">
        <h2 className="section-title mb-10">About me</h2>
        <div className="flex flex-col items-center">
          <div className="">
            <div>
              <img
                alt="Profile Image"
                className="rounded shadow-lg mb-10"
                height="auto"
                width="300px"
                src={profileImage}
              />
            </div>
          </div>
          <div className="w-full md:w-4/5 pb-10">
            <div>
              <p className="text-left px-10">
                {" "}
                I'm a jack-of-all-trades kind of person, into all sorts of stuff
                - from sports and firing up the grill, to cooking up a storm,
                and geeking out over the latest tech. Yep, I'm a bit of a gadget
                freak, but I'm all about keeping things chill and having a
                laugh. People often say I'm pretty easy-going and thoughtful.
                I'm super tight with my family and wouldn't trade them for
                anything. Born and raised in San Diego, I studied at San Diego
                State University, then packed up my life and moved to Oregon in
                2015. I've been in the mortgage loan processing game for over a
                decade now, so I know a thing or two about finance and the value
                of a hard day's work. But it's not all work, I love hitting the
                gym, catching a movie, or digging into something tasty. Life's
                for living, right?
              </p>
              {/* <span className="flex mt-8">
                <a target="_blank" rel="noreferrer" href={resumePDF}>
                  <button className="btn btn-blue px-4 py-2">
                    View Resume
                  </button>
                </a>
              </span> */}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
