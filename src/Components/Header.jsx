import React from "react";

const Header = (props) => {
  return (
    <div className="row">
      <nav className="navbar navbar-expand-sm bg-dark shadow mb-4 navbar-dark d-inline-flex fixed-top">
        <a className="navbar-brand" id="navBrand" href="#" onClick={() => props.openFrontPage()} >
          <h2>Lundin Trähantverk</h2>
        </a>
        <ul className="navbar-nav">
          <li className="nav-item">
            <a className="nav-link" onClick={() => props.openFrontPage()}>
              Hem
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" onClick={() => props.openProducts()}>
              Produkter
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">
              Beställa
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" onClick={() => props.openAbout()}>
              Om oss
            </a>
          </li>
        </ul>
        <ul className="nav navbar-nav ml-auto">
          <li className="nav-item">
            <a className="nav-link" onClick={() => props.openSignIn()}>
              Logga in
            </a>
          </li>
        </ul>
      </nav>
      <div className="spacer"></div>
    </div>
  );
};

export default Header;
