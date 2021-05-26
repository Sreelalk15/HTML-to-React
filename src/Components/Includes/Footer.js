import React from "react";

const Footer = () => {
  return (
    <>
      <div className="footer">
        <div className="container">
          <div className="footer-text">
            <p>
              Template By <a href="http://w3layouts.com/"> W3layouts</a>
            </p>
          </div>
        </div>
        <a
          href="#home"
          id="toTop"
          className="scroll"
          style={{ display: "block", opacity: 1 }}
        >
          {" "}
          <span id="toTopHover"> </span>
        </a>
      </div>
    </>
  );
};

export default Footer;
