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
              <a href="/about">About</a>
            </li>
            <li>
              <a href="/analyse">Twitter Analyzer</a>
            </li>
            <li>
              <a href="/plot">Plot</a>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
