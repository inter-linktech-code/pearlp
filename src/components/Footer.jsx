import React from "react";
import { Link } from "react-router-dom";
import {
  ArrowDownRight,
  ArrowRight,
  ArrowUpRight,
  MapPin,
  MoveUpRight,
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
      strokeWidth="1.5"
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
  { label: "Hiking & Adventure", to: "/hiking-adventure-uganda" },
  { label: "Cultural Tours", to: "/cultural-tours-uganda" },
  { label: "Car Hire & Transfers", to: "/car-hire-uganda" },
  { label: "Safari Lodges", to: "/uganda-safari-lodges" },
];

const exploreLinks = [
  { label: "Destinations", to: "/destinations" },
  { label: "Uganda Safaris", to: "/uganda-safaris" },
  { label: "Travel Guide", to: "/travel-guide" },
  { label: "About PearlP", to: "/about-us" },
  { label: "Contact Our Team", to: "/contact" },
];

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="site-footer">
      {/* Pre-footer statement */}
      <div className="footer-prelude">
        <div className="page-container footer-prelude-inner">
          <span className="footer-prelude-line" />

          <p>
            Extraordinary places.
            <span> Unforgettable journeys.</span>
          </p>

          <span className="footer-prelude-location">
            <MapPin size={14} strokeWidth={1.5} />
            UGANDA, EAST AFRICA
          </span>
        </div>
      </div>

      {/* Main footer */}
      <div className="footer-main page-container">
        <div className="footer-brand">
          <Link
            to="/"
            className="footer-brand-link"
            aria-label="PearlP Safaris homepage"
          >
            <span className="footer-logo-frame">
              <img
                src="/webicon.png"
                alt=""
                className="footer-logo"
                width="56"
                height="56"
              />
            </span>

            <span className="footer-brand-copy">
              <span className="footer-brand-name">
                PEARLP <span>SAFARIS</span>
              </span>

              <span className="footer-brand-tagline">
                DISCOVER THE PEARL OF AFRICA
              </span>
            </span>
          </Link>

          <p className="footer-brand-description">
            Thoughtfully planned journeys through Uganda's extraordinary
            landscapes, remarkable wildlife and rich cultural heritage.
            Discover Africa at your own pace.
          </p>

          <div className="footer-location">
            <span className="footer-location-icon">
              <MapPin size={16} strokeWidth={1.5} />
            </span>

            <span>
              <strong>Based in Uganda</strong>
              <small>Exploring the Pearl of Africa</small>
            </span>
          </div>

          <div className="footer-socials">
            <a
              href="https://www.instagram.com/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Visit Instagram"
            >
              <InstagramIcon />
            </a>

            <a
              href="https://www.facebook.com/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Visit Facebook"
            >
              <FacebookIcon />
            </a>

            <span className="footer-social-caption">
              FOLLOW THE JOURNEY
            </span>
          </div>
        </div>

        <nav className="footer-column" aria-label="Safari experiences">
          <p className="footer-column-index">01 / EXPERIENCES</p>
          <h2>Discover Uganda</h2>

          <ul>
            {serviceLinks.map((item) => (
              <li key={item.to}>
                <Link to={item.to}>
                  <span>{item.label}</span>
                  <ArrowUpRight size={14} strokeWidth={1.5} />
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <nav className="footer-column" aria-label="Explore PearlP Safaris">
          <p className="footer-column-index">02 / THE JOURNEY</p>
          <h2>Explore</h2>

          <ul>
            {exploreLinks.map((item) => (
              <li key={item.to}>
                <Link to={item.to}>
                  <span>{item.label}</span>
                  <ArrowUpRight size={14} strokeWidth={1.5} />
                </Link>
              </li>
            ))}
          </ul>

          <div className="footer-small-note">
            <span className="footer-status-dot" />
            <span>Every journey starts somewhere.</span>
          </div>
        </nav>

        {/* Enquiry panel */}
        <div className="footer-cta">
          <div className="footer-cta-top">
            <span className="footer-cta-kicker">
              YOUR NEXT CHAPTER
            </span>

            <span className="footer-cta-icon">
              <MoveUpRight size={20} strokeWidth={1.4} />
            </span>
          </div>

          <div className="footer-cta-art" aria-hidden="true">
            <span className="footer-art-circle footer-art-circle-one" />
            <span className="footer-art-circle footer-art-circle-two" />
            <span className="footer-art-sun" />
            <span className="footer-art-mountain footer-art-mountain-back" />
            <span className="footer-art-mountain footer-art-mountain-front" />
          </div>

          <h2>
            Your Africa
            <br />
            <em>story awaits.</em>
          </h2>

          <p>
            Tell us what moves you. We'll help you explore the possibilities
            and start shaping a journey worth remembering.
          </p>

          <Link to="/contact" className="footer-cta-link">
            <span>Begin your journey</span>
            <span className="footer-cta-link-icon">
              <ArrowRight size={18} />
            </span>
          </Link>

          <span className="footer-cta-footnote">
            PERSONAL ENQUIRIES · THOUGHTFUL PLANNING
          </span>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="footer-bottom">
        <div className="page-container footer-bottom-inner">
          <p className="footer-copyright">
            © {currentYear} PearlP Safaris.
            <span> Crafted for the curious.</span>
          </p>

          <div className="footer-legal-links">
            <Link to="/privacy-policy">Privacy Policy</Link>
            <span className="footer-legal-divider" />
            <Link to="/terms">Terms &amp; Conditions</Link>
          </div>

          <a href="#root" className="footer-back-to-top">
            <span>BACK TO TOP</span>
            <ArrowUpRight size={14} />
          </a>

          <div className="footer-powered-by">
            <span>DESIGNED &amp; DEVELOPED BY</span>

            <a
              href="https://inter-linktech.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="INTER-LINK TECH website, opens in a new tab"
            >
              INTER-LINK TECH
              <ArrowUpRight size={12} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}