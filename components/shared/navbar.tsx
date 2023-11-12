"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import Button from "../ui/button";

export default function Navbar() {
  const [activeLink, setActiveLink] = useState("Home");
  const links = [
    { label: "Home", link: "/" },
    { label: "Services", link: "#services" },
    { label: "Portfolio", link: "/" },
    { label: "About Us", link: "/" },
    { label: "Contact Us", link: "/" },
  ];

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
    <header className={`sticky top-0 inset-x-0 py-4 z-40 ${!navAtTop && 'bg-background'}`}>
      <nav className="container flex items-center justify-between">
        <Image src={`/svgs/kult.svg`} alt="img" width={121} height={36} />
        <ul className="hidden lg:flex space-x-8">
          {links.map((link) => (
            <Link
              key={link.label}
              href={link.link}
              className={`${
                activeLink === link.label
                  ? "text-foreground"
                  : "text-muted-foreground"
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
