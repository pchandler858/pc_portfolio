import React from "react";

function Navigation() {
  return (
    <nav className="flex justify-end items-center py-3 bg-transparent font-semibold">
      <ul className="flex">
        <li className="nav-item">
          <a
            className="nav-link px-4 text-black hover:text-blue-600"
            href="#about"
          >
            ABOUT ME
          </a>
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
