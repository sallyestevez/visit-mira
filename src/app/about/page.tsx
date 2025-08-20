"use client";
import React from "react";
import Link from "next/link";

function AboutContent() {
  return (
    <div className="destination-page-description">
      <p>
        This is a fan-made website dedicated to{" "}
        <strong>Xenoblade Chronicles X</strong>, created to help players explore
        and enjoy the world of Mira. All Xenoblade Chronicles X content and
        assets are the property of <strong>Nintendo</strong> and{" "}
        <strong>Monolith Soft</strong>.
        <br />
        <br />
        You can view the source code on{" "}
        <Link
          className="text-blue-400"
          href="https://github.com/sallyestevez/visit-mira/tree/main"
          target="_blank"
          rel="noopener noreferrer"
        >
          GitHub
        </Link>
        .
      </p>
    </div>
  );
}

export default function About() {
  return (
    <main className="FAQs">
      <AboutContent />
    </main>
  );
}
