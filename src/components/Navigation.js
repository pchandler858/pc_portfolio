import React, { useState } from "react";
import { Link } from "react-scroll";

// function Navigation({ currentPage, handlePageChange }) {
//   const [click] = useState(false);
//   return (
//     <nav className="flex justify-end items-center py-3 bg-transparent font-semibold">
//       <ul className="flex">
//         <li className="nav-item">
//           <Link
//             // to="about"
//             spy={true}
//             smooth={true}
//             offset={0}
//             duration={800}
//             onClick={() => handlePageChange("About")}
//             className={
//               "nav-link px-4 text-slate-900 hover:text-slate-500 hover:cursor-pointer"
//             }
//           >
//             ABOUT ME
//           </Link>
//         </li>
//         <li className="nav-item">
//           <Link
//             className={`nav-link px-4 text-slate-900 hover:text-slate-500 hover:cursor-pointer ${
//               currentPage === "Home" ? "active" : ""
//             }`}
//             to="projects"
//             spy={true}
//             smooth={true}
//             offset={0}
//             duration={800}
//           >
//             PORTFOLIO
//           </Link>
//         </li>
//         <li className="nav-item">
//           <Link
//             className="nav-link px-4 text-slate-900 hover:text-slate-500 hover:cursor-pointer"
//             to="contact"
//             spy={true}
//             smooth={true}
//             offset={0}
//             duration={800}
//           >
//             CONTACT
//           </Link>
//         </li>
//         <li className="nav-item">
//           <Link
//             className="nav-link px-4 text-slate-900 hover:text-slate-500 hover:cursor-pointer"
//             to="about"
//             spy={true}
//             smooth={true}
//             offset={0}
//             duration={800}
//           >
//             RESUME
//           </Link>
//         </li>
//       </ul>
//     </nav>
//   );
// }

function Navigation({ currentPage, handlePageChange }) {
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
            onClick={() => handlePageChange("About")}
            className={`nav-link px-4 text-slate-900 hover:text-slate-500 hover:cursor-pointer ${
              currentPage === "About" ? "active" : ""
            }`}
          >
            ABOUT ME
          </Link>
        </li>
        <li className="nav-item">
          <Link
            to="projects"
            spy={true}
            smooth={true}
            offset={0}
            duration={800}
            onClick={() => handlePageChange("Projects")}
            className={`nav-link px-4 text-slate-900 hover:text-slate-500 hover:cursor-pointer ${
              currentPage === "Projects" ? "active" : ""
            }`}
          >
            PORTFOLIO
          </Link>
        </li>
        <li className="nav-item">
          <Link
            to="contact"
            spy={true}
            smooth={true}
            offset={0}
            duration={800}
            onClick={() => handlePageChange("Contact")}
            className={`nav-link px-4 text-slate-900 hover:text-slate-500 hover:cursor-pointer ${
              currentPage === "Contact" ? "active" : ""
            }`}
          >
            CONTACT
          </Link>
        </li>
        <li className="nav-item">
          <Link
            to="resume"
            spy={true}
            smooth={true}
            offset={0}
            duration={800}
            onClick={() => handlePageChange("Resume")}
            className={`nav-link px-4 text-slate-900 hover:text-slate-500 hover:cursor-pointer ${
              currentPage === "Resume" ? "active" : ""
            }`}
          >
            RESUME
          </Link>
        </li>
      </ul>
    </nav>
  );
}

export default Navigation;
