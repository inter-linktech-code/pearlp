import { Link } from "react-router-dom";
import { ArrowLeft, ArrowUpRight, Compass } from "lucide-react";
import "./PlaceholderPage.css";

export default function PlaceholderPage({ title, description }) {
  return (
    <main className="placeholder-page">
      <div className="placeholder-content page-container">
        <span className="placeholder-icon">
          <Compass size={31} />
        </span>

        <span className="eyebrow eyebrow-dark">
          PEARLP SAFARIS & EXPERIENCES
        </span>

        <h1>{title}</h1>

        <p>
          {description ||
            "We’re preparing this part of your Uganda travel experience. Explore our homepage or contact us to start planning your trip."}
        </p>

        <div className="placeholder-actions">
          <Link to="/" className="button button-dark">
            <ArrowLeft size={16} />
            Back to home
          </Link>

          <Link to="/contact" className="button button-gold">
            Plan your safari
            <ArrowUpRight size={16} />
          </Link>
        </div>
      </div>
    </main>
  );
}