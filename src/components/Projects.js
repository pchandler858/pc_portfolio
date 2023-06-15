// export default Projects;
import React from "react";
import concertCompassImage from "../assets/concert-compass.png";
import tacodImage from "../assets/TACOD.png";
import roboFriendsImage from "../assets/robo-friends.png";
import choreDoorImage from "../assets/chore-door.png";
import movieLookupImage from "../assets/movie-lookup.png";
import devDiveImage from "../assets/dev-dive.png";

function ProjectCard({
  title,
  description,
  liveLink,
  sourceCodeLink,
  imageSrc,
}) {
  return (
    <div className="w-2/3 mx-auto mb-10 shadow-xl rounded-lg overflow-hidden bg-slate-100">
      <img className="w-full" src={imageSrc} alt="Project Image" />
      <div className="px-6 py-4">
        <h3 className="font-bold text-3xl mb-2 gradient-text">{title}</h3>
        <p className=" text-base dark-blue-text">{description}</p>
      </div>
      <div className="px-6 py-4 flex justify-around">
        <a
          rel="noreferrer"
          target="_blank"
          href={liveLink}
          className="btn gradient-text"
        >
          See Live
        </a>
        <a
          rel="noreferrer"
          target="_blank"
          href={sourceCodeLink}
          className="btn  gradient-text"
        >
          Source Code
        </a>
      </div>
    </div>
  );
}

function Projects() {
  return (
    <section id="projects" className="about py-10">
      <div className="container mx-auto">
        <h2 className="section-title text-3xl mb-16">Projects</h2>

        <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-1 gap-8">
          <ProjectCard
            title="Dev Dive"
            description="This project focuses on building a CMS-style blog site where developers can publish their blog posts and interact with other developers through comments. The site follows the MVC paradigm, utilizing Handlebars.js as the templating language, Sequelize as the ORM, and the express-session npm package for authentication. The application allows users to sign up, log in, create blog posts, comment on posts, and perform various other actions."
            liveLink="https://devdive.herokuapp.com/"
            sourceCodeLink="https://github.com/pchandler858/DevDive"
            imageSrc={devDiveImage}
          />

          <ProjectCard
            title="Concert Compass"
            description="A concert finder that uses the Google Maps and Ticketmaster API's. This app was built using HTML, Javascript, Day.js and Tailwind CSS."
            liveLink="https://pchandler858.github.io/Concert-Compass"
            sourceCodeLink="https://github.com/pchandler858/Concert-Compass"
            imageSrc={concertCompassImage}
          />

          <ProjectCard
            title="TACO'D"
            description="A web application that allows users to rate and review tacos from various restaurants. It was built using a variety of technologies, including mySQL2, Sequelize, Express, Handlebars, Node.js, Tailwind CSS, and deployed on Heroku. The app offers a seamless user experience with an intuitive interface, enabling users to quickly rate and review their favorite tacos."
            liveLink="https://tacod-app.herokuapp.com/"
            sourceCodeLink="https://github.com/pchandler858/tacod"
            imageSrc={tacodImage}
          />

          <ProjectCard
            title="Robo Friends"
            description="A Create-react-app project that uses React Redux to manage its states and fetches APIs."
            liveLink="https://pchandler858.github.io/RoboFriends/"
            sourceCodeLink="https://github.com/pchandler858/RoboFriends"
            imageSrc={roboFriendsImage}
          />

          <ProjectCard
            title="Chore Door"
            description="A single-page interactive game built with JavaScript using the DOM."
            liveLink="https://pchandler858.github.io/Chore-Door-Game/"
            sourceCodeLink="https://github.com/pchandler858/Chore-Door-Game"
            imageSrc={choreDoorImage}
          />

          <ProjectCard
            title="Movie Lookup"
            description="A simple app that allows you to search for movies using the TMDB API."
            liveLink="https://pchandler858.github.io/movie_lookup/"
            sourceCodeLink="https://github.com/pchandler858/movie_lookup"
            imageSrc={movieLookupImage}
          />
        </div>
      </div>
    </section>
  );
}

export default Projects;
