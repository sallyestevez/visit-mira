"use client";

// import { useState } from "react";
import Link from "next/link";

import Hamburger from "./images/nav-bar/hamburger-menu.svg";

// code used as reference: https://www.codevertiser.com/reactjs-responsive-navbar/

export default function NavBar() {
  // const [showNavbar, setShowNavbar] = useState(false);

  // const handleShowNavbar = () => {
  //   setShowNavbar(!showNavbar);
  // };
  // would like a hamburger menu to be used for mobile devices
  return (
    <nav className="navbar">
      <div className="container">
        <div className="home-link">
          <Link href="/">Visit Mira</Link>
        </div>
        {/* hamburger menu: */}
        {/* <div className="menu-icon" onClick={handleShowNavbar}>
          <Hamburger />
        </div> */}
        {/* <div className={`nav-page-links ${showNavbar && "active"}`}> */}
        <div className="nav-page-links">
          <p>
            <Link href="/NLA">New LA</Link>
          </p>
          <p>
            <Link href="/destinations">Destinations</Link>
          </p>
          {/* <p>
            <Link href="/guides">Guides</Link>
          </p> */}
          <p>
            <Link href="/FAQs">FAQs</Link>
          </p>
        </div>
      </div>
    </nav>
  );
}
