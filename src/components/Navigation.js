import React from "react";
import { Link } from "react-scroll";

function Navigation({ currentPage, handlePageChange }) {
  const navItems = [
    { label: "ABOUT ME", target: "About" },
    { label: "PORTFOLIO", target: "Projects" },
    { label: "CONTACT", target: "Contact" },
    { label: "RESUME", target: "Resume" },
  ];

  return (
    <nav className="flex justify-between items-center py-3 font-semibold">
      <div className="ml-4">
        <span className="text-slate-900">PRESTON C.</span>
      </div>

      <ul className="flex flex-col sm:flex-row">
        {navItems.map((item) => (
          <li className="nav-item" key={item.target}>
            <Link
              activeClass="text-slate-500 underline"
              onClick={() => handlePageChange(item.target)}
              className={`nav-link px-4 hover:text-slate-500 hover:cursor-pointer ${
                currentPage === item.target
                  ? "text-slate-500 underline"
                  : "text-slate-900"
              }`}
            >
              {item.label}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}

export default Navigation;
