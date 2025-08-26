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

  return (
    <nav className="navbar">
      <div className="flex h-full w-full gap-6 px-8 py-4">
        <div className="flex w-full gap-6 align-middle">
          <button className="menu-icon" onClick={handleShowNavbar}>
            &#9776;
          </button>
          <div className="home-link">
            <Link href="/">Visit Mira</Link>
          </div>
        </div>

        <div className={`nav-page-links justify-end ${showNavbar && "active"}`}>
          <Link href="/NLA" onClick={handleCloseNavbar}>
            New LA
          </Link>

          <Link href="/destinations" onClick={handleCloseNavbar}>
            Destinations
          </Link>

          <Link href="/guides" onClick={handleCloseNavbar}>
            Guides
          </Link>

          <Link href="/FAQs" onClick={handleCloseNavbar}>
            FAQs
          </Link>
        </div>
      </div>
    </nav>
  );
}
