import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { Menu, X, ArrowUpRight } from "lucide-react";
import logo from "../assets/logo.png";
import "./Navbar.css";

const navigation = [
  { label: "Home", path: "/" },
  { label: "Safaris", path: "/uganda-safaris" },
  { label: "Destinations", path: "/destinations" },
  { label: "Safari Packages", path: "/safari-packages" },
  { label: "Travel Guide", path: "/travel-guide" },
  { label: "About", path: "/about-us" },
];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = () => setMenuOpen(false);

  return (
    <header className="site-header">
      <div className="nav-shell page-container">
        <Link
          to="/"
          className="brand"
          aria-label="Pearl P International Safari home"
          onClick={closeMenu}
        >
          <img
            src={logo}
            alt="Pearl P International Safari"
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
          {menuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>

        <nav
          id="primary-navigation"
          className={`nav-links ${menuOpen ? "nav-links-open" : ""}`}
          aria-label="Main navigation"
        >
          {navigation.map((item) => (
            <NavLink
              key={item.path}
              to={item.path}
              end={item.path === "/"}
              className={({ isActive }) =>
                `nav-link ${isActive ? "nav-link-active" : ""}`
              }
              onClick={closeMenu}
            >
              {item.label}
            </NavLink>
          ))}

          <Link
            to="/contact"
            className="nav-cta"
            onClick={closeMenu}
          >
            Plan Your Safari
            <ArrowUpRight size={16} />
          </Link>
        </nav>
      </div>
    </header>
  );
}
