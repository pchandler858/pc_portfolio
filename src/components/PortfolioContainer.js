import React, { useState, useEffect } from "react";
import { Events, scrollSpy } from "react-scroll";
import Header from "./Header";
import About from "./About";
// import Hero from "./Hero";
import Projects from "./Projects";
import Contact from "./Contact";
import Footer from "./Footer";
import Resume from "./Resume";

export default function PortfolioContainer() {
  const [currentPage, setCurrentPage] = useState("About");

  useEffect(() => {
    Events.scrollEvent.register("begin", (to, element) => {
      setCurrentPage(to.charAt(0).toUpperCase() + to.slice(1));
    });

    scrollSpy.update();

    return () => {
      Events.scrollEvent.remove("begin");
    };
  }, []);

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
