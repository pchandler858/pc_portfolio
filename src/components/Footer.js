import React from "react";
import { Link } from "react-scroll";

const Footer = () => {
  return (
    <footer className=" pt-10 text-center">
      <div className="">
        {/* <Link to="top" spy={true} smooth={true} offset={0} duration={1000}>
          <i className="fa fa-angle-up fa-2x" aria-hidden="true"></i>
        </Link> */}
        <div className="social-links mb-4">
          <a
            rel="noreferrer"
            href="https://twitter.com/PrestonChandler"
            target="_blank"
          >
            <i className="fa-brands fa-twitter fa-2x"></i>
          </a>
          <a
            rel="noreferrer"
            href="https://www.linkedin.com/in/preston-chandler/"
            target="_blank"
          >
            <i className="fa-brands fa-linkedin fa-2x"></i>
          </a>
          <a
            rel="noreferrer"
            href="https://github.com/pchandler858"
            target="_blank"
          >
            <i className="fa-brands fa-github fa-2x"></i>
          </a>
        </div>
        <hr />
        <p className="footer my-5">
          © 2023 - {""}
          <a
            rel="noreferrer"
            href="https://github.com/pchandler858"
            target="_blank"
          >
            Preston Chandler
          </a>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
