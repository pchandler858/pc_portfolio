import React, { useState } from "react";
import Header from "./Header";
import About from "./About";
// import Hero from "./Hero";
import Projects from "./Projects";
import Contact from "./Contact";
import Footer from "./Footer";
import Resume from "./Resume";

export default function PortfolioContainer() {
  const [currentPage, setCurrentPage] = useState("About");

  const renderPage = () => {
    if (currentPage === "About") {
      return <About />;
    }
    if (currentPage === "Projects") {
      return <Projects />;
    }
    if (currentPage === "Contact") {
      return <Contact />;
    }
    if (currentPage === "Resume") {
      return <Resume />;
    }
    return <About />;
  };

  const handlePageChange = (page) => setCurrentPage(page);

  return (
    <div className="flex flex-col min-h-screen justify-between">
      <Header currentPage={currentPage} handlePageChange={handlePageChange} />
      {renderPage()}
      <Footer />
    </div>
  );
}
