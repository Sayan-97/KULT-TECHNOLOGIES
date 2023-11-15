"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import Button from "../ui/button";
import { navLinks } from "@/constants";

export default function Navbar() {
  const [activeLink, setActiveLink] = useState("Home");
  const [navAtTop, setNavAtTop] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      // Check if the scroll direction is up or down
      if (currentScrollY > 0) {
        setNavAtTop(false); // Scrolling down
      } else {
        setNavAtTop(true); // Scrolling up
      }
    };
    // Add the scroll event listener
    window.addEventListener("scroll", handleScroll);
    // Remove the event listener when the component unmounts
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header
      className={`fixed top-0 inset-x-0 py-4 z-40 ${
        navAtTop
          ? "bg-transparent"
          : "bg-[#0b0b0f] bg-opacity-80 backdrop-blur-md shadow-md"
      } transition-all ease-in-out`}
    >
      <nav className="container flex items-center justify-between">
        <Image src={`/svgs/kult.svg`} alt="img" width={121} height={36} />
        <ul className="hidden lg:flex space-x-8 ml-10">
          {navLinks.map((link) => (
            <Link
              key={link.label}
              href={link.link}
              className={`${
                activeLink !== link.label && "text-muted-foreground"
              }`}
              onClick={() => setActiveLink(link.label)}
            >
              {link.label}
            </Link>
          ))}
        </ul>
        <Button content="Get Started" />
      </nav>
    </header>
  );
}
