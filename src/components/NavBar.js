import React from "react";
import { Link } from "react-router-dom";

function NavBar() {
  return (
    <nav className="navbar">
      <ul>
        <li>
          <Link to="/primordia">Primordia</Link>
        </li>
        <li>
          <Link to="/noctilum">Noctilum</Link>
        </li>
        <li>
          <Link to="/oblivia">Oblivia</Link>
        </li>
        <li>
          <Link to="/sylvalum">Sylvalum</Link>
        </li>
        <li>
          <Link to="/cauldros">Cauldros</Link>
        </li>
      </ul>
    </nav>
  );
}

export default NavBar;
