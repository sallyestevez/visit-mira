import React from "react";
import Link from "next/link";

export default function NavBar() {
  return (
    <nav className="navbar">
      <div className="container">
        <div className="home-link">
          <Link href="/">Visit Mira</Link>
        </div>
        <div className="nav-page-links">
          <p>
            <Link href="/NLA">New LA</Link>
          </p>
          <p>
            <Link href="/destinations">Destinations</Link>
          </p>
          {/* <p>
            <Link href="/guides">Guides</Link>
          </p>
          <p>
            <Link href="/FAQs">FAQs</Link>
          </p> */}
        </div>
      </div>
    </nav>
  );
}
