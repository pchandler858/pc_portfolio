import React from "react";
import resumePDF from "../assets/resume.pdf";

function Resume() {
  return (
    <section id="resume" className="about">
      <div className="container mx-auto">
        <div className="flex flex-wrap justify-center">
          <div className="w-full md:w-3/4 text-center">
            <h2 className="section-title mb-10">Technical Skills</h2>
            <p className="mt-4">
              JavaScript ES6+, CSS3, HTML5, SQL, NoSQL, GitHub, MongoDB, MySQL,
              Express, React, Node, Handlebars, jQuery, Bootstrap, Tailwind CSS
            </p>
          </div>
        </div>
        <div className="flex justify-center mt-8">
          <a target="_blank" rel="noreferrer" href={resumePDF}>
            <button className="btn btn-blue px-4 py-2">View Resume</button>
          </a>
        </div>
      </div>
    </section>
  );
}

export default Resume;
