import React from "react";
import Link from "next/link";

export default function Footer() {
  return (
    <nav className="footer">
      <div className="footer-page-links">
        <Link href="/about">About</Link>
        <Link href="/about">Contact Us</Link>
        <Link href="/about">Terms and Conditions</Link>
        <Link href="/about">Privacy Policy</Link>
      </div>
    </nav>
  );
}
