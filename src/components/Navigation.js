// // import React, { useState } from "react";
// import { Link } from "react-scroll";

// function Navigation({ currentPage, handlePageChange }) {
//   return (
//     <nav className="flex justify-between items-center py-3 font-semibold">
//       <div className="ml-4">
//         <span className="text-slate-900">PRESTON CHANDLER</span>
//       </div>
//       <ul className="flex">
//         <li className="nav-item">
//           <Link
//             activeClass="text-slate-500 underline"
//             // to="about"
//             // spy={true}
//             // smooth={true}
//             // offset={0}
//             // duration={800}
//             onClick={() => handlePageChange("About")}
//             className={`nav-link px-4  hover:text-slate-500 hover:cursor-pointer ${
//               currentPage === "About"
//                 ? "text-slate-500 underline"
//                 : "text-slate-900"
//             }`}
//           >
//             ABOUT ME
//           </Link>
//         </li>
//         <li className="nav-item">
//           <Link
//             activeClass="text-slate-500 underline"
//             // to="projects"
//             // spy={true}
//             // smooth={true}
//             // offset={0}
//             // duration={800}
//             onClick={() => handlePageChange("Projects")}
//             className={`nav-link px-4 hover:text-slate-500 hover:cursor-pointer ${
//               currentPage === "Projects"
//                 ? "text-slate-500 underline"
//                 : "text-slate-900"
//             }`}
//           >
//             PORTFOLIO
//           </Link>
//         </li>
//         <li className="nav-item">
//           <Link
//             activeClass="text-slate-500 underline"
//             // to="contact"
//             // spy={true}
//             // smooth={true}
//             // offset={0}
//             // duration={800}
//             onClick={() => handlePageChange("Contact")}
//             className={`nav-link px-4  hover:text-slate-500 hover:cursor-pointer ${
//               currentPage === "Contact"
//                 ? "text-slate-500 underline"
//                 : "text-slate-900"
//             }`}
//           >
//             CONTACT
//           </Link>
//         </li>
//         <li className="nav-item">
//           <Link
//             activeClass="text-slate-500 underline"
//             // to="resume"
//             // spy={true}
//             // smooth={true}
//             // offset={0}
//             // duration={800}
//             onClick={() => handlePageChange("Resume")}
//             className={`nav-link px-4  hover:text-slate-500 hover:cursor-pointer ${
//               currentPage === "Resume"
//                 ? "text-slate-500 underline"
//                 : "text-slate-900"
//             }`}
//           >
//             RESUME
//           </Link>
//         </li>
//       </ul>
//     </nav>
//   );
// }

// export default Navigation;

import React from "react";
import { Link } from "react-scroll";

function Navigation({ currentPage, handlePageChange }) {
  return (
    <nav className="flex justify-between items-center py-3 font-semibold">
      <div className="ml-4">
        <span className="text-slate-900">PRESTON C.</span>
      </div>

      <ul className="flex flex-col sm:flex-row">
        <li className="nav-item">
          <Link
            activeClass="text-slate-500 underline"
            to="about"
            spy={true}
            smooth={true}
            offset={0}
            duration={800}
            onClick={() => handlePageChange("About")}
            className={`nav-link px-4 hover:text-slate-500 hover:cursor-pointer ${
              currentPage === "About"
                ? "text-slate-500 underline"
                : "text-slate-900"
            }`}
          >
            ABOUT ME
          </Link>
        </li>
        <li className="nav-item">
          <Link
            activeClass="text-slate-500 underline"
            to="projects"
            spy={true}
            smooth={true}
            offset={0}
            duration={800}
            onClick={() => handlePageChange("Projects")}
            className={`nav-link px-4 hover:text-slate-500 hover:cursor-pointer ${
              currentPage === "Projects"
                ? "text-slate-500 underline"
                : "text-slate-900"
            }`}
          >
            PORTFOLIO
          </Link>
        </li>
        <li className="nav-item">
          <Link
            activeClass="text-slate-500 underline"
            to="contact"
            spy={true}
            smooth={true}
            offset={0}
            duration={800}
            onClick={() => handlePageChange("Contact")}
            className={`nav-link px-4 hover:text-slate-500 hover:cursor-pointer ${
              currentPage === "Contact"
                ? "text-slate-500 underline"
                : "text-slate-900"
            }`}
          >
            CONTACT
          </Link>
        </li>
        <li className="nav-item">
          <Link
            activeClass="text-slate-500 underline"
            to="resume"
            spy={true}
            smooth={true}
            offset={0}
            duration={800}
            onClick={() => handlePageChange("Resume")}
            className={`nav-link px-4 hover:text-slate-500 hover:cursor-pointer ${
              currentPage === "Resume"
                ? "text-slate-500 underline"
                : "text-slate-900"
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
