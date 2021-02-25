import React from "react";

const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <div className="row-fluid" id="footer">
      <div className="col-fluid">
        <div className="spacer"></div>
        <h5
          className="mb-0 pl-3 pr-3 py-4 bg-dark text-white-50 fixed-bottom"
          
        >
          &copy; Lundins Trähantverk {year}{" "}
        </h5>
      </div>
    </div>
  );
};

export default Footer;
