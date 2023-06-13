import React from "react";
import { Link } from "react-scroll";

function Navigation() {
  return (
    <nav className="flex justify-end items-center py-3 bg-transparent font-semibold">
      <ul className="flex">
        <li className="nav-item">
          <Link
            to="about"
            spy={true}
            smooth={true}
            offset={0}
            duration={500}
            className="nav-link px-4 text-black hover:text-blue-600"
          >
            ABOUT ME
          </Link>
        </li>
        <li className="nav-item">
          <a
            className="nav-link px-4 text-black hover:text-blue-600"
            href="#projects"
          >
            PROJECTS
          </a>
        </li>
        <li className="nav-item">
          <a
            className="nav-link px-4 text-black hover:text-blue-600"
            href="#contact"
          >
            CONTACT
          </a>
        </li>
        <li className="nav-item">
          <a
            className="nav-link px-4 text-black hover:text-blue-600"
            href="#resume"
          >
            RESUME
          </a>
        </li>
      </ul>
    </nav>
  );
}

export default Navigation;
