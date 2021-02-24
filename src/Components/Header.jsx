import React from "react";

const Header = (props) => {
  return (
    <div className="row">
      <nav class="navbar navbar-expand-sm bg-dark navbar-dark d-inline-flex fixed-top">
        <a class="navbar-brand" href="#">
          Lundin Trähantverk
        </a>
        <ul class="navbar-nav">
          <li class="nav-item">
            <a class="nav-link" onClick = {() => props.openFrontPage()}>
              Hem
            </a>
          </li>
          <li class="nav-item">
            <a class="nav-link" onClick = {() => props.openProducts()}>
              Produkter
            </a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">
              Beställa
            </a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">
              Om oss
            </a>
          </li>
        </ul>
        <ul className="nav navbar-nav navbar-right">
        <li class="nav-item">
            <a class="nav-link" href="#">
              Logga in
            </a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">
              Skapa konto
            </a>
          </li>
        </ul>
      </nav>
      <div className="spacer"></div>
    </div>
  );
};

export default Header;
