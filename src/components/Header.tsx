"use client";

import Link from "next/link";
import { useState } from "react";

const exploreLinks = [
  { href: "/explore", label: "Explore Hot Springs" },
  { href: "/things-to-do-in-hot-springs-ar", label: "Things To Do" },
  { href: "/history", label: "History" },
];

const stayLinks = [
  { href: "/hot-springs-ar-cabins", label: "Cabins" },
  { href: "/hot-springs-ar-hotels", label: "Hotels" },
];

const localLinks = [
  { href: "/hot-springs-ar-restaurants", label: "Restaurants" },
  { href: "/local-businesses", label: "Local Businesses" },
];

const sisterSites = [
  { href: "https://glenwoodarkansas.org", label: "Glenwood Arkansas" },
  { href: "https://amityarkansas.org", label: "Amity Arkansas" },
  { href: "https://mountidaarkansas.org", label: "Mount Ida Arkansas" },
];

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="site-header">
      <div className="container header-inner">
        <Link href="/" className="logo" onClick={() => setOpen(false)}>
          Hot Springs Arkansas
        </Link>

        {/* DESKTOP NAV ONLY */}
        <nav className="hot-desktop-nav">
          <Link href="/">Home</Link>

          <div className="nav-dropdown">
            <button type="button">Explore</button>

            <div className="dropdown-menu">
              {exploreLinks.map((link) => (
                <Link key={link.href} href={link.href}>
                  {link.label}
                </Link>
              ))}
            </div>
          </div>

          <div className="nav-dropdown">
            <button type="button">Places To Stay</button>

            <div className="dropdown-menu">
              {stayLinks.map((link) => (
                <Link key={link.href} href={link.href}>
                  {link.label}
                </Link>
              ))}
            </div>
          </div>

          <div className="nav-dropdown">
            <button type="button">Local Guide</button>

            <div className="dropdown-menu">
              {localLinks.map((link) => (
                <Link key={link.href} href={link.href}>
                  {link.label}
                </Link>
              ))}
            </div>
          </div>

          <div className="nav-dropdown">
            <button type="button">Sister Sites</button>

            <div className="dropdown-menu">
              {sisterSites.map((site) => (
                <a
                  key={site.href}
                  href={site.href}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {site.label}
                </a>
              ))}
            </div>
          </div>

          <Link className="nav-cta" href="/local-businesses">
            Get Listed
          </Link>
        </nav>

        {/* MOBILE BUTTON ONLY */}
        <button
          type="button"
          className="hot-mobile-button"
          onClick={() => setOpen((prev) => !prev)}
          aria-label="Toggle navigation menu"
          aria-expanded={open}
        >
          {open ? "Close" : "Menu"}
        </button>
      </div>

      {/* MOBILE MENU ONLY */}
      {open && (
        <div className="hot-mobile-menu">
          <nav className="container hot-mobile-menu-inner">
            <Link href="/" onClick={() => setOpen(false)}>
              Home
            </Link>

            <div className="hot-mobile-menu-group">
              <p>Explore</p>
              {exploreLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setOpen(false)}
                >
                  {link.label}
                </Link>
              ))}
            </div>

            <div className="hot-mobile-menu-group">
              <p>Places To Stay</p>
              {stayLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setOpen(false)}
                >
                  {link.label}
                </Link>
              ))}
            </div>

            <div className="hot-mobile-menu-group">
              <p>Local Guide</p>
              {localLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setOpen(false)}
                >
                  {link.label}
                </Link>
              ))}
            </div>

            <div className="hot-mobile-menu-group">
              <p>Sister Sites</p>
              {sisterSites.map((site) => (
                <a
                  key={site.href}
                  href={site.href}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {site.label}
                </a>
              ))}
            </div>

            <Link
              className="nav-cta hot-mobile-cta"
              href="/local-businesses"
              onClick={() => setOpen(false)}
            >
              Get Listed
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}