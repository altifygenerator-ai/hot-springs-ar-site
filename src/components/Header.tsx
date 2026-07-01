"use client";

import Link from "next/link";
import { useState } from "react";
import HeaderSearch from "@/components/HeaderSearch";

const thingsToDoLinks = [
  { href: "/things-to-do-in-hot-springs-ar", label: "Things To Do" },
  { href: "/explore", label: "Explore Hot Springs" },
  { href: "/bathhouse-row", label: "Bathhouse Row" },
  { href: "/things-to-do-near-bathhouse-row", label: "Things To Do Near Bathhouse Row" },
  { href: "/hot-springs-spas-wellness", label: "Spas & Wellness" },
  { href: "/lake-hamilton", label: "Lake Hamilton" },
  { href: "/history", label: "History" },
  { href: "/free-things-to-do-hot-springs", label: "Free Things To Do" },
  { href: "/hot-springs-family-friendly", label: "Family-Friendly Finds" },
  { href: "/pet-friendly-hot-springs", label: "Pet-Friendly Finds" },
  { href: "/community-photos", label: "Community Photos" },
  { href: "/submit-photo", label: "Submit a Photo" },
];

const foodLocalLinks = [
  { href: "/hot-springs-ar-restaurants", label: "Restaurants" },
  {
    href: "/restaurants-near-bathhouse-row",
    label: "Restaurants Near Bathhouse Row",
  },
  {
    href: "/lake-hamilton-restaurants",
    label: "Lake Hamilton Restaurants",
  },
  {
  href: "/hot-springs-antique-thrift-flea-markets",
  label: "Antique, Thrift & Flea Markets",
},
  { href: "/hot-springs-local-spots", label: "Local Hidden Gems" },
  { href: "/hot-springs-ouachita-avenue", label: "Ouachita Avenue" },
  {
    href: "/hot-springs-bathhouse-row-local-finds",
    label: "Bathhouse Row Local Finds",
  },
  { href: "/local-businesses", label: "Local Businesses" },
];

const stayLinks = [
  { href: "/hot-springs-ar-hotels", label: "Hotels" },
  { href: "/hotels-near-bathhouse-row", label: "Hotels Near Bathhouse Row" },
  { href: "/hotels-near-oaklawn", label: "Hotels Near Oaklawn" },
  { href: "/hot-springs-ar-cabins", label: "Cabins" },
  { href: "/lake-hamilton-cabins", label: "Lake Hamilton Cabins" },
];

const articleLinks = [
  { href: "/articles", label: "All Articles" },
  {
    href: "/articles/bathhouse-row",
    label: "Bathhouse Row: Why It Still Matters",
  },
  {
    href: "/articles/history-of-hot-springs-gambling-museum",
    label: "History of Hot Springs Gambling Museum",
  },
];

const sisterSites = [
  { href: "https://glenwoodarkansas.org", label: "Glenwood Arkansas" },
  { href: "https://amityarkansas.org", label: "Amity Arkansas" },
  { href: "https://mountidaarkansas.org", label: "Mount Ida Arkansas" },
  { href: "https://murfreesboroarkansas.org", label: "Murfreesboro Arkansas" },
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
            <button type="button">Things To Do</button>

            <div className="dropdown-menu">
              {thingsToDoLinks.map((link) => (
                <Link key={link.href} href={link.href}>
                  {link.label}
                </Link>
              ))}
            </div>
          </div>

          <div className="nav-dropdown">
            <button type="button">Food & Local</button>

            <div className="dropdown-menu">
              {foodLocalLinks.map((link) => (
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

          <Link href="/events">Events</Link>

          <div className="nav-dropdown">
            <button type="button">Articles</button>

            <div className="dropdown-menu">
              {articleLinks.map((link) => (
                <Link key={link.href} href={link.href}>
                  {link.label}
                </Link>
              ))}
            </div>
          </div>

          <Link className="nav-cta" href="/contact">
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

      <HeaderSearch />

      {/* MOBILE MENU ONLY */}
      {open && (
        <div className="hot-mobile-menu">
          <nav className="container hot-mobile-menu-inner">
            <Link href="/" onClick={() => setOpen(false)}>
              Home
            </Link>

            <div className="hot-mobile-menu-group">
              <p>Things To Do</p>
              {thingsToDoLinks.map((link) => (
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
              <p>Food & Local</p>
              {foodLocalLinks.map((link) => (
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
              <p>Events</p>
              <Link href="/events" onClick={() => setOpen(false)}>
                Events
              </Link>
              <Link href="/this-weekend" onClick={() => setOpen(false)}>
                This Weekend
              </Link>
            </div>

            <div className="hot-mobile-menu-group">
              <p>Articles</p>
              {articleLinks.map((link) => (
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