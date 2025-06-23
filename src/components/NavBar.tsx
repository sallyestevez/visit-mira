"use client";

import { useState } from "react";
import Link from "next/link";

import Hamburger from "./images/nav-bar/hamburger-menu.svg";

// code used as reference: https://www.codevertiser.com/reactjs-responsive-navbar/

export default function NavBar() {
  const [showNavbar, setShowNavbar] = useState(false);

  const handleShowNavbar = () => {
    setShowNavbar(!showNavbar);
  };
  const handleCloseNavbar = () => {
    setShowNavbar(false);
  };
  // would like a hamburger menu to be used for mobile devices
  return (
    <nav className="navbar">
      <div className="container">
        <div className="home-link">
          <Link href="/">Visit Mira</Link>
        </div>
        {/* hamburger menu: */}
        <div className="menu-icon" onClick={handleShowNavbar}>
          &#9776;
        </div>
        <div className={`nav-page-links ${showNavbar && "active"}`}>
          <p>
            <Link href="/NLA" onClick={handleCloseNavbar}>
              New LA
            </Link>
          </p>
          <p>
            <Link href="/destinations" onClick={handleCloseNavbar}>
              Destinations
            </Link>
          </p>
          <p>
            <Link href="/guides" onClick={handleCloseNavbar}>
              Guides
            </Link>
          </p>
          <p>
            <Link href="/FAQs" onClick={handleCloseNavbar}>
              FAQs
            </Link>
          </p>
        </div>
      </div>
    </nav>
  );
}
