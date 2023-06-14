import React from "react";
import concertCompassImage from "../assets/concert-compass.png";
import tacodImage from "../assets/TACOD.png";
import roboFriendsImage from "../assets/robo-friends.png";
import choreDoorImage from "../assets/chore-door.png";
import movieLookupImage from "../assets/movie-lookup.png";
import devDiveImage from "../assets/dev-dive.png";

function Projects() {
  return (
    <section id="projects">
      <div className="container mx-auto">
        <div className="project-wrapper">
          <h2 className="section-title dark-blue-text">Projects</h2>

          {/* START Project Dev Dive */}
          <div className="flex flex-wrap pb-5 mb-3">
            <div className="w-full lg:w-1/3 sm:w-12/12">
              <h3 className="project-title">Dev Dive</h3>
              <div>
                <p className="mb-4 text-left">
                  This project focuses on building a CMS-style blog site where
                  developers can publish their blog posts and interact with
                  other developers through comments. The site follows the MVC
                  paradigm, utilizing Handlebars.js as the templating language,
                  Sequelize as the ORM, and the express-session npm package for
                  authentication. The application allows users to sign up, log
                  in, create blog posts, comment on posts, and perform various
                  other actions.
                </p>
              </div>
              <a
                rel="noreferrer"
                target="_blank"
                href="https://devdive.herokuapp.com/"
              >
                <button className="btn btn-white">
                  <span className="gradient-text" id="btn-white">
                    See Live
                  </span>
                </button>
              </a>
              <a
                rel="noreferrer"
                target="_blank"
                className="gradient-text source-code"
                href="https://github.com/pchandler858/DevDive"
              >
                Source Code
              </a>
            </div>
            <div className="w-full lg:w-2/3 sm:w-12/12">
              <div className="image-project-1">
                <a
                  rel="noreferrer"
                  href="https://devdive.herokuapp.com/"
                  target="_blank"
                >
                  <img
                    alt="Project Image"
                    // ! update this line for each project
                    className="img-fluid img-project-1 image-animation object-cover w-full h-full"
                    src={devDiveImage}
                  />
                </a>
              </div>
            </div>
          </div>
          {/* /END Project Dev Dive  */}

          {/* START Project Concert Compass */}
          <div className="flex flex-wrap pb-5 mb-3">
            <div className="w-full lg:w-1/3 sm:w-12/12">
              <h3 className="project-title">Concert Compass</h3>
              <div>
                <p className="mb-4 text-left">
                  A concert finder that uses the Google Maps and Ticketmaster
                  API's. This app was built using HTML, Javascript, Day.js and
                  Tailwind CSS.
                </p>
              </div>
              <a
                rel="noreferrer"
                target="_blank"
                href="https://pchandler858.github.io/Concert-Compass"
              >
                <button className="btn btn-white">
                  <span className="gradient-text" id="btn-white">
                    See Live
                  </span>
                </button>
              </a>
              <a
                rel="noreferrer"
                target="_blank"
                className="gradient-text source-code"
                href="https://github.com/pchandler858/Concert-Compass"
              >
                Source Code
              </a>
            </div>
            <div className="w-full lg:w-2/3 sm:w-12/12">
              <div className="image-project-1">
                <a
                  rel="noreferrer"
                  href="https://pchandler858.github.io/Concert-Compass"
                  target="_blank"
                >
                  <img
                    alt="Project Image"
                    className="img-fluid img-project-1 image-animation object-cover w-full h-full"
                    src={concertCompassImage}
                  />
                </a>
              </div>
            </div>
          </div>
          {/* /END Project Concert Compass  */}

          {/* START Project Taco'd */}
          <div className="flex flex-wrap pb-5 mb-3">
            <div className="w-full lg:w-1/3 sm:w-12/12">
              <h3 className="project-title">TACO'D</h3>
              <div>
                <p className="mb-4 text-left">
                  A web application that allows users to rate and review tacos
                  from various restaurants. It was built using a variety of
                  technologies, including mySQL2, Sequelize, Express,
                  Handlebars, Node.js, Tailwind CSS, and deployed on Heroku. The
                  app offers a seamless user experience with an intuitive
                  interface, enabling users to quickly rate and review their
                  favorite tacos.
                </p>
              </div>
              <a
                rel="noreferrer"
                target="_blank"
                href="https://tacod-app.herokuapp.com/"
              >
                <button className="btn btn-white">
                  <span className="gradient-text" id="btn-white">
                    See Live
                  </span>
                </button>
              </a>
              <a
                rel="noreferrer"
                target="_blank"
                className="gradient-text source-code"
                href="https://github.com/pchandler858/tacod"
              >
                Source Code
              </a>
            </div>
            <div className="w-full lg:w-2/3 sm:w-12/12">
              <div className="image-project-1">
                <a
                  rel="noreferrer"
                  href="https://tacod-app.herokuapp.com/"
                  target="_blank"
                >
                  <img
                    alt="Project Image"
                    className="img-fluid img-project-1 image-animation object-cover w-full h-full"
                    src={tacodImage}
                  />
                </a>
              </div>
            </div>
          </div>
          {/* /END Project Taco'd  */}

          {/* START Project Robo Friends */}
          <div className="flex flex-wrap pb-5 mb-3">
            <div className="w-full lg:w-1/3 sm:w-12/12">
              <h3 className="project-title">Robo Friends</h3>
              <div>
                <p className="mb-4 text-left">
                  A Create-react-app project that uses React Redux to manage
                  it's states, fetch APIs .
                </p>
              </div>
              <a
                rel="noreferrer"
                target="_blank"
                href="https://pchandler858.github.io/RoboFriends/"
              >
                <button className="btn btn-white">
                  <span className="gradient-text" id="btn-white">
                    See Live
                  </span>
                </button>
              </a>
              <a
                rel="noreferrer"
                target="_blank"
                className="gradient-text source-code"
                href="https://github.com/pchandler858/RoboFriends"
              >
                Source Code
              </a>
            </div>
            <div className="w-full lg:w-2/3 sm:w-12/12">
              <div className="image-project-1">
                <a
                  rel="noreferrer"
                  href="https://pchandler858.github.io/RoboFriends/"
                  target="_blank"
                >
                  <img
                    alt="Project Image"
                    className="img-fluid img-project-1 image-animation object-cover w-full h-full"
                    src={roboFriendsImage}
                  />
                </a>
              </div>
            </div>
          </div>
          {/* /END Project Robo Friends  */}

          {/* START Project Chore Door */}
          <div className="flex flex-wrap pb-5 mb-3">
            <div className="w-full lg:w-1/3 sm:w-12/12">
              <h3 className="project-title">Chore Door</h3>
              <div>
                <p className="mb-4 text-left">
                  A single-page interactive game built with JavaScript using the
                  DOM.
                </p>
              </div>
              <a
                rel="noreferrer"
                target="_blank"
                href="https://pchandler858.github.io/Chore-Door-Game/"
              >
                <button className="btn btn-white">
                  <span className="gradient-text" id="btn-white">
                    See Live
                  </span>
                </button>
              </a>
              <a
                rel="noreferrer"
                target="_blank"
                className="gradient-text source-code"
                href="https://github.com/pchandler858/Chore-Door-Game"
              >
                Source Code
              </a>
            </div>
            <div className="w-full lg:w-2/3 sm:w-12/12">
              <div className="image-project-1">
                <a
                  rel="noreferrer"
                  href="https://pchandler858.github.io/Chore-Door-Game/"
                  target="_blank"
                >
                  <img
                    alt="Project Image"
                    className="img-fluid img-project-1 image-animation object-cover w-full h-full"
                    src={choreDoorImage}
                  />
                </a>
              </div>
            </div>
          </div>
          {/* /END Project Chore Door  */}

          {/* START Project Movie Lookup */}
          <div className="flex flex-wrap pb-5 mb-3">
            <div className="w-full lg:w-1/3 sm:w-12/12">
              <h3 className="project-title">Movie Lookup</h3>
              <div>
                <p className="mb-4 text-left">
                  A simple app that allows you to search for movies using the
                  TMDB API.
                </p>
              </div>
              <a
                rel="noreferrer"
                target="_blank"
                href="https://pchandler858.github.io/movie_lookup/"
              >
                <button className="btn btn-white">
                  <span className="gradient-text" id="btn-white">
                    See Live
                  </span>
                </button>
              </a>
              <a
                rel="noreferrer"
                target="_blank"
                className="gradient-text source-code"
                href="https://github.com/pchandler858/Concert-Compass"
              >
                Source Code
              </a>
            </div>
            <div className="w-full lg:w-2/3 sm:w-12/12">
              <div className="image-project-1">
                <a
                  rel="noreferrer"
                  href="https://pchandler858.github.io/movie_lookup/"
                  target="_blank"
                >
                  <img
                    alt="Project Image"
                    className="img-fluid img-project-1 image-animation object-cover w-full h-full"
                    src={movieLookupImage}
                  />
                </a>
              </div>
            </div>
          </div>
          {/* /END Project Movie Lookup  */}
        </div>
      </div>
    </section>
  );
}

export default Projects;
