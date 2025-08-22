"use client";
import React, { useEffect, useState, useRef, ReactNode } from "react";

// https://medium.com/@victor.okolo/building-a-smooth-appear-on-scroll-effect-with-next-js-and-typescript-without-breaking-your-ux-f888d86eb687

export default function Homepage({
  className,
  children,
}: Readonly<{ className?: string; children?: ReactNode }>) {
  const domRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false); // Initially hidden

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => setIsVisible(entry.isIntersecting));
    });

    if (domRef.current) {
      observer.observe(domRef.current);
    }

    return () => {
      if (domRef.current) {
        observer.unobserve(domRef.current);
      }
    }; // Cleanup observer
  }, []);

  return (
    <div
      ref={domRef}
      className={`fade-in-section ${isVisible ? "is-visible" : ""} ${className ?? ""}`}
    >
      {children}
    </div>
  );
}
