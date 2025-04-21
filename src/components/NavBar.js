import React from "react";
import { Link } from "react-router-dom";

function NavBar() {
  return (
    <nav className="navbar">
      <div className="container">
        <div className="home-link">
          <Link to="/">Visit Mira</Link>
        </div>
        <div className="nav-page-links">
          <p>
            <Link to="/NLA">New LA</Link>
          </p>
          <p>
            <Link to="/destinations">Destinations</Link>
          </p>
          {/* <p>
            <Link to="/guides">Guides</Link>
          </p>
          <p>
            <Link to="/FAQs">FAQs</Link>
          </p> */}
        </div>
      </div>
    </nav>
  );
}

export default NavBar;
