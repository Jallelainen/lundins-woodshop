import React from "react";

const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <div className="container-fluid">
      <div className="row">
        <div className="spacer" useRef="pageBottom"></div>
        <h5 className="mb-0 pl-3 py-4 bg-dark text-white-50 fixed-bottom" id="footer">
          &copy; Lundin Trähantverk {year}{" "}
        </h5>
      </div>
    </div>
  );
};

export default Footer;
