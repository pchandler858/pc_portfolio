import { identifier } from "@babel/types";
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
            duration={800}
            className="nav-link px-4 text-slate-900 hover:text-slate-500 hover:cursor-pointer"
          >
            ABOUT ME
          </Link>
        </li>
        <li className="nav-item">
          <Link
            className="nav-link px-4 text-slate-900 hover:text-slate-500 hover:cursor-pointer"
            to="projects"
            spy={true}
            smooth={true}
            offset={0}
            duration={800}
          >
            PROJECTS
          </Link>
        </li>
        <li className="nav-item">
          <Link
            className="nav-link px-4 text-slate-900 hover:text-slate-500 hover:cursor-pointer"
            to="contact"
            spy={true}
            smooth={true}
            offset={0}
            duration={800}
          >
            CONTACT
          </Link>
        </li>
        <li className="nav-item">
          <Link
            className="nav-link px-4 text-slate-900 hover:text-slate-500 hover:cursor-pointer"
            to="about"
            spy={true}
            smooth={true}
            offset={0}
            duration={800}
          >
            RESUME
          </Link>
        </li>
      </ul>
    </nav>
  );
}

export default Navigation;
