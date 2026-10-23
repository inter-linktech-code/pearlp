
import React from "react";
import { Link } from "react-router-dom";
import {
  ArrowUpRight,
  MapPin,
  MoveRight,
} from "lucide-react";
import "./Footer.css";

function InstagramIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="19"
      height="19"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.7"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <rect x="3" y="3" width="18" height="18" rx="5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.5" cy="6.5" r="0.8" fill="currentColor" />
    </svg>
  );
}

function FacebookIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="19"
      height="19"
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden="true"
    >
      <path d="M13.5 21v-8.2h2.8l.42-3.2H13.5V7.56c0-.93.26-1.56 1.6-1.56h1.71V3.14A23 23 0 0 0 14.32 3C11.85 3 10.16 4.5 10.16 7.25V9.6H7.5v3.2h2.66V21h3.34Z" />
    </svg>
  );
}

const serviceLinks = [
  { label: "Gorilla Trekking", to: "/gorilla-trekking-uganda" },
  { label: "Wildlife Safaris", to: "/wildlife-safaris-uganda" },
  { label: "Safari Packages", to: "/safari-packages" },
  { label: "Birdwatching", to: "/birdwatching-uganda" },
  { label: "Car Hire & Transfers", to: "/car-hire-uganda" },
  { label: "Safari Lodges", to: "/uganda-safari-lodges" },
];

const exploreLinks = [
  { label: "Destinations", to: "/destinations" },
  { label: "Uganda Safaris", to: "/uganda-safaris" },
  { label: "Travel Guide", to: "/travel-guide" },
  { label: "About Us", to: "/about-us" },
  { label: "Contact", to: "/contact" },
];

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="site-footer">
      <div className="footer-main page-container">
        <div className="footer-brand">
          <Link
            to="/"
            className="brand footer-brand-link"
            aria-label="PearlP Safaris home"
          >
            <img
              src="/webicon.png"
              alt="PearlP Safaris"
              className="footer-logo"
              width="58"
              height="58"
            />

            <span className="brand-copy">
              <span className="brand-name">PEARLP SAFARIS</span>
              <span className="brand-tagline">
                DISCOVER THE PEARL OF AFRICA
              </span>
            </span>
          </Link>

          <p className="footer-brand-description">
            Discover Uganda through extraordinary landscapes, wildlife
            experiences and journeys shaped around what inspires you.
          </p>

          <div className="footer-location">
            <MapPin size={17} strokeWidth={1.6} />
            <span>Uganda, East Africa</span>
          </div>

          <div className="footer-socials">
            <a
              href="https://www.instagram.com/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
            >
              <InstagramIcon />
            </a>

            <a
              href="https://www.facebook.com/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Facebook"
            >
              <FacebookIcon />
            </a>
          </div>
        </div>

        <div className="footer-column">
          <h3>Our experiences</h3>
          <ul>
            {serviceLinks.map((item) => (
              <li key={item.to}>
                <Link to={item.to}>
                  {item.label}
                  <ArrowUpRight size={13} />
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div className="footer-column">
          <h3>Explore</h3>
          <ul>
            {exploreLinks.map((item) => (
              <li key={item.to}>
                <Link to={item.to}>
                  {item.label}
                  <ArrowUpRight size={13} />
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div className="footer-cta">
          <span className="footer-cta-eyebrow">
            YOUR NEXT ADVENTURE
          </span>

          <h3>
            Uganda is
            <br />
            calling.
          </h3>

          <p>
            Tell us what you dream of discovering, and let’s start planning
            your journey.
          </p>

          <Link to="/contact" className="footer-cta-link">
            Start an enquiry
            <MoveRight size={17} />
          </Link>
        </div>
      </div>

      <div className="footer-bottom">
        <div className="page-container footer-bottom-inner">
          <p>
            © {currentYear} PearlP Safaris. All rights reserved.
          </p>

          <div className="footer-legal-links">
            <Link to="/privacy-policy">Privacy Policy</Link>
            <Link to="/terms">Terms &amp; Conditions</Link>
          </div>

          <a href="#root" className="footer-back-to-top">
            Back to top
            <ArrowUpRight size={14} />
          </a>

          <span className="footer-powered-by">
            Powered by{" "}
            <a
              href="https://inter-linktech.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="INTER-LINK TECH website, opens in a new tab"
            >
              INTER-LINK TECH
              <ArrowUpRight size={13} />
            </a>
          </span>
        </div>
      </div>
    </footer>
  );
}
