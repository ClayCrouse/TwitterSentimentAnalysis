import React from "react";
import "materialize-css/dist/css/materialize.min.css";

const Navbar = () => {
  return (
    <div>
      <nav>
        <div class="nav-wrapper light-blue darken-1">
          <a href="#!" class="brand-logo center">
            Twitter Sentiment Analyzer
          </a>
          <ul class="left hide-on-med-and-down">
            <li>
              <a href="http://localhost:3000/about">About</a>
            </li>
            <li>
              <a href="http://localhost:3000/analyse">Twitter Analyzer</a>
            </li>
            <li>
              <a href="http://localhost:3000/plot">Plot</a>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
