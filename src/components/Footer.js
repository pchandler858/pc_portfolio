import React from "react";

const Footer = () => {
  return (
    <footer className=" my-4 text-center">
      <div className="">
        <div className="social-links mb-4">
          {/* <a
            rel="noreferrer"
            href="https://twitter.com/PrestonChandler"
            target="_blank"
          >
            <i className="fa-brands fa-twitter fa-2x"></i>
          </a> */}
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
        <p className="footer my-4">
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
