"use client";

import React, { useState } from "react";
import { UserButton, useUser } from "@stackframe/stack";
import {
  Navbar,
  NavBody,
  NavItems,
  MobileNav,
  NavbarLogo,
  NavbarButton,
  MobileNavHeader,
  MobileNavToggle,
  MobileNavMenu,
} from "./ui/resizable-navbar";
import Link from "next/link";

const NavbarCom = () => {
  const user = useUser();

  const navItems = [
    {
      name: "Features",
      link: "#features",
    },
    {
      name: "Pricing",
      link: "#pricing",
    },
    {
      name: "Contact",
      link: "#contact",
    },
  ];

  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <Navbar className="z-50">
      {/* Desktop Navigation */}
      <NavBody>
        <NavbarLogo />
        <NavItems items={navItems} />
        <div className="flex items-center gap-4">
          <NavbarButton variant="gradient">Book a call</NavbarButton>
          {user ? (
            <NavbarButton variant="secondary">
              <UserButton />
            </NavbarButton>
          ) : (
            <Link
              className="px-4 py-2 rounded-md bg-white button bg-white text-black text-sm font-bold relative cursor-pointer hover:-translate-y-0.5 transition duration-200 inline-block text-center"
              href="/handler/sign-in"
            >
              Login
            </Link>
          )}
        </div>
      </NavBody>

      {/* Mobile Navigation */}
      <MobileNav className="md:mb-5">
        <MobileNavHeader>
          <NavbarLogo />
          <MobileNavToggle
            isOpen={isMobileMenuOpen}
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          />
        </MobileNavHeader>

        <MobileNavMenu
          isOpen={isMobileMenuOpen}
          onClose={() => setIsMobileMenuOpen(false)}
        >
          {navItems.map((item, idx) => (
            <a
              key={`mobile-link-${idx}`}
              href={item.link}
              onClick={() => setIsMobileMenuOpen(false)}
              className="relative text-neutral-600 dark:text-neutral-300"
            >
              <span className="block">{item.name}</span>
            </a>
          ))}
          <div className="flex w-full flex-col gap-4">
            <NavbarButton variant="gradient">Book a call</NavbarButton>
            {user ? (
              <NavbarButton variant="secondary">
                <UserButton />
              </NavbarButton>
            ) : (
              <Link
                className="px-4 py-2 rounded-md button bg-white text-black text-sm font-bold relative cursor-pointer hover:-translate-y-0.5 transition duration-200 inline-block text-center"
                href="/handler/sign-in"
              >
                Login
              </Link>
            )}
          </div>
        </MobileNavMenu>
      </MobileNav>
    </Navbar>
  );
};

export default NavbarCom;
