
import React, { useEffect, useState } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import { ChevronDown, ArrowUpRight, Menu, X } from "lucide-react";
import "./Navbar.css";
import logo from "../assets/logo.png";

const safariLinks = [
  { label: "Uganda Safaris", path: "/uganda-safaris" },
  { label: "Safari Packages", path: "/safari-packages" },
  { label: "Gorilla Trekking", path: "/gorilla-trekking-uganda" },
  { label: "Wildlife Safaris", path: "/wildlife-safaris-uganda" },
  { label: "Birdwatching", path: "/birdwatching-uganda" },
  { label: "Cultural Tours", path: "/cultural-tours-uganda" },
  { label: "Hiking & Adventure", path: "/hiking-adventure-uganda" },
];

const serviceLinks = [
  { label: "City Tours", path: "/city-tours" },
  { label: "Long Distance Transfers", path: "/long-distance-transfers" },
  { label: "Hotel Booking", path: "/hotel-booking" },
  { label: "Special Deliveries", path: "/special-deliveries" },
  { label: "Airport Deliveries", path: "/airport-deliveries" },
  { label: "Pick and Drop", path: "/pick-and-drop" },
  { label: "Tours & Travel Services", path: "/tours-and-travel-services" },
  { label: "Driver Hiring", path: "/driver-hiring" },
];

function Dropdown({
  label,
  id,
  items,
  open,
  setOpen,
  closeMenu,
  active,
  description,
}) {
  const isDesktop = () =>
    window.matchMedia("(min-width: 1101px)").matches;

  const handleLinkClick = () => {
    // Close both dropdowns and the mobile menu immediately.
    closeMenu();

    // Move focus away from the dropdown trigger so focus styling
    // cannot keep the desktop menu visually open.
    if (document.activeElement instanceof HTMLElement) {
      document.activeElement.blur();
    }
  };

  return (
    <div
      className={[
        "nav-dropdown",
        open ? "nav-dropdown-open" : "",
        active ? "nav-dropdown-active" : "",
      ]
        .filter(Boolean)
        .join(" ")}
      onMouseEnter={() => {
        if (isDesktop()) setOpen(true);
      }}
      onMouseLeave={() => {
        if (isDesktop()) setOpen(false);
      }}
    >
      <button
        type="button"
        className="nav-link nav-dropdown-toggle"
        aria-expanded={open}
        aria-controls={id}
        onClick={() => setOpen((current) => !current)}
      >
        <span>{label}</span>
        <ChevronDown
          className="nav-dropdown-chevron"
          size={15}
          strokeWidth={1.8}
          aria-hidden="true"
        />
      </button>

      <div
        id={id}
        className="nav-dropdown-menu"
        aria-label={`${label} navigation`}
        aria-hidden={!open}
      >
        <div className="nav-dropdown-heading">
          <span className="nav-dropdown-eyebrow">DISCOVER PEARL P</span>
          <p>{description}</p>
        </div>

        <div className="nav-dropdown-list">
          {items.map((item) => (
            <NavLink
              key={item.path}
              to={item.path}
              className={({ isActive }) =>
                `nav-dropdown-item${
                  isActive ? " nav-dropdown-item-active" : ""
                }`
              }
              onClick={handleLinkClick}
              tabIndex={open ? 0 : -1}
            >
              <span>{item.label}</span>
              <ArrowUpRight
                className="nav-dropdown-item-icon"
                size={15}
                strokeWidth={1.8}
                aria-hidden="true"
              />
            </NavLink>
          ))}
        </div>
      </div>
    </div>
  );
}

export default function Navbar() {
  const location = useLocation();

  const [menuOpen, setMenuOpen] = useState(false);
  const [safarisOpen, setSafarisOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);

  const closeMenu = () => {
    setMenuOpen(false);
    setSafarisOpen(false);
    setServicesOpen(false);
  };

  useEffect(() => {
    closeMenu();
  }, [location.pathname]);

  useEffect(() => {
    const handleResize = () => {
      closeMenu();
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.key === "Escape") {
        closeMenu();
      }
    };

    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, []);

  const isSafariActive = safariLinks.some(
    (item) => location.pathname === item.path
  );

  const isServiceActive = serviceLinks.some(
    (item) => location.pathname === item.path
  );

  const toggleSafaris = (value) => {
    setSafarisOpen(value);
    if (value) setServicesOpen(false);
  };

  const toggleServices = (value) => {
    setServicesOpen(value);
    if (value) setSafarisOpen(false);
  };

  return (
    <header className="site-header">
      <div className="nav-container">
        <div className="nav-shell">
          <Link
            to="/"
            className="brand-link"
            aria-label="PearlP Safaris home"
            onClick={closeMenu}
          >
            <img
              src={logo}
              alt="PearlP International Safari"
              className="brand-logo"
            />
          </Link>

          <button
            type="button"
            className="menu-toggle"
            aria-label={
              menuOpen ? "Close navigation menu" : "Open navigation menu"
            }
            aria-expanded={menuOpen}
            aria-controls="primary-navigation"
            onClick={() => setMenuOpen((current) => !current)}
          >
            {menuOpen ? (
              <X size={23} strokeWidth={1.8} />
            ) : (
              <Menu size={23} strokeWidth={1.8} />
            )}
          </button>

          <nav
            id="primary-navigation"
            className={`nav-links${menuOpen ? " nav-links-open" : ""}`}
            aria-label="Main navigation"
          >
            <NavLink
              to="/"
              end
              className={({ isActive }) =>
                `nav-link${isActive ? " nav-link-active" : ""}`
              }
              onClick={closeMenu}
            >
              Home
            </NavLink>

            <NavLink
              to="/destinations"
              className={({ isActive }) =>
                `nav-link${isActive ? " nav-link-active" : ""}`
              }
              onClick={closeMenu}
            >
              Destinations
            </NavLink>

            <Dropdown
              label="Safaris"
              id="safaris-dropdown"
              items={safariLinks}
              open={safarisOpen}
              setOpen={toggleSafaris}
              closeMenu={closeMenu}
              active={isSafariActive}
              description="Explore Uganda's wild beauty"
            />

            <Dropdown
              label="Services"
              id="services-dropdown"
              items={serviceLinks}
              open={servicesOpen}
              setOpen={toggleServices}
              closeMenu={closeMenu}
              active={isServiceActive}
              description="Travel made simple, wherever you go"
            />

            <NavLink
              to="/car-hire-uganda"
              className={({ isActive }) =>
                `nav-link${isActive ? " nav-link-active" : ""}`
              }
              onClick={closeMenu}
            >
              Car Hire
            </NavLink>

            <NavLink
              to="/about-us"
              className={({ isActive }) =>
                `nav-link${isActive ? " nav-link-active" : ""}`
              }
              onClick={closeMenu}
            >
              About
            </NavLink>

            <Link
              to="/contact"
              className="nav-cta"
              onClick={closeMenu}
            >
              <span>Plan Your Trip</span>
              <ArrowUpRight
                size={16}
                strokeWidth={1.9}
                aria-hidden="true"
              />
            </Link>
          </nav>
        </div>
      </div>
    </header>
  );
}
