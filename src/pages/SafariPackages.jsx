import React from "react";
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import {
  ArrowRight,
  ArrowUpRight,
  Binoculars,
  CalendarDays,
  Compass,
  Heart,
  MapPin,
  Mountain,
  Trees,
} from "lucide-react";

import "./SafariPackages.css";

import safariVehicleImage from "../assets/safari-vehicle.jpg";
import gorillaImage from "../assets/gorilla.jpg";
import wildlifeImage from "../assets/wildlife.jpg";
import safariHeroImage from "../assets/safari-hero.jpg";

const SITE_URL = "https://pearlpsafaris.com";

const packages = [
  {
    number: "01",
    category: "PRIMATE ENCOUNTERS",
    title: "Gorillas & Rainforest",
    duration: "Sample 3–4 day itinerary",
    description:
      "A rainforest-focused journey for travellers who want to experience Uganda's mountain gorillas and the beautiful landscapes of the southwest.",
    image: gorillaImage,
    imageAlt: "Mountain gorilla in Uganda's tropical rainforest",
    highlights: [
      "Bwindi or Mgahinga region",
      "Gorilla trekking permit planning",
      "Scenic countryside journey",
    ],
    icon: Trees,
    link: "/gorilla-trekking",
  },
  {
    number: "02",
    category: "CLASSIC WILDLIFE",
    title: "Uganda Wildlife Explorer",
    duration: "Sample 5–7 day itinerary",
    description:
      "Discover savannah scenery, wildlife viewing and remarkable natural landscapes across selected Ugandan national parks.",
    image: wildlifeImage,
    imageAlt: "Wildlife in a Ugandan national park",
    highlights: [
      "Selected national parks",
      "Guided game-drive options",
      "Wildlife and landscape photography",
    ],
    icon: Binoculars,
    link: "/wildlife-safaris",
  },
  {
    number: "03",
    category: "THE BIG ADVENTURE",
    title: "The Best of Uganda",
    duration: "Sample 8–12 day itinerary",
    description:
      "A broader journey combining wildlife, forests and scenic destinations, with time to experience Uganda at a more relaxed pace.",
    image: safariHeroImage,
    imageAlt: "Safari landscape in Uganda",
    highlights: [
      "Multiple regions and landscapes",
      "Wildlife and nature experiences",
      "Flexible overnight stops",
    ],
    icon: Compass,
    link: "/destinations",
  },
];

const planningSteps = [
  {
    number: "01",
    title: "Tell us what inspires you",
    description:
      "Share the experiences you care about most, from wildlife and gorillas to culture, birdwatching or scenic escapes.",
  },
  {
    number: "02",
    title: "Shape your itinerary",
    description:
      "Discuss your travel dates, group size, trip length, transport needs and preferred accommodation style.",
  },
  {
    number: "03",
    title: "Confirm the details",
    description:
      "Review the proposed route, inclusions, exclusions, current permit availability and costs before making commitments.",
  },
];

const experiences = [
  {
    title: "Gorilla trekking",
    description: "Rainforest encounters and conservation",
    icon: Trees,
    link: "/gorilla-trekking",
  },
  {
    title: "Wildlife safaris",
    description: "National parks and guided wildlife viewing",
    icon: Binoculars,
    link: "/wildlife-safaris",
  },
  {
    title: "Birdwatching",
    description: "Forests, wetlands and lakeshores",
    icon: Compass,
    link: "/birdwatching",
  },
  {
    title: "Hiking & adventure",
    description: "Mountains, trails and scenic landscapes",
    icon: Mountain,
    link: "/hiking-adventure",
  },
  {
    title: "Cultural experiences",
    description: "Local heritage and community experiences",
    icon: Heart,
    link: "/cultural-tours",
  },
  {
    title: "Scenic escapes",
    description: "Lakes, countryside and quiet retreats",
    icon: MapPin,
    link: "/destinations",
  },
];

export default function SafariPackages() {
  return (
    <div className="packages-page">
      <Helmet>
        <title>
          Uganda Safari Packages & Itinerary Ideas | PearlP Safaris
        </title>

        <meta
          name="description"
          content="Explore Uganda safari itinerary ideas with PearlP Safaris, from mountain gorilla trekking and classic wildlife safaris to longer journeys combining national parks, forests and scenic landscapes."
        />

        <meta
          name="keywords"
          content="Uganda safari packages, Uganda safari itineraries, gorilla trekking Uganda, wildlife safari Uganda, tailor-made Uganda tours, private Uganda safaris"
        />

        <link
          rel="canonical"
          href={`${SITE_URL}/safari-packages`}
        />

        <meta
          property="og:title"
          content="Uganda Safari Packages | PearlP Safaris"
        />

        <meta
          property="og:description"
          content="Explore Uganda safari itinerary ideas and start planning a journey around your interests, travel dates and preferred experiences."
        />

        <meta property="og:type" content="website" />

        <meta
          property="og:url"
          content={`${SITE_URL}/safari-packages`}
        />

        <meta
          property="og:image"
          content={`${SITE_URL}/og-safari-packages.jpg`}
        />

        <meta
          property="og:site_name"
          content="PearlP Safaris"
        />

        <meta name="twitter:card" content="summary_large_image" />

        <meta
          name="twitter:title"
          content="Uganda Safari Packages | PearlP Safaris"
        />

        <meta
          name="twitter:description"
          content="Discover sample Uganda safari itineraries and start planning a journey designed around you."
        />

        <meta
          name="twitter:image"
          content={`${SITE_URL}/og-safari-packages.jpg`}
        />
      </Helmet>

      {/* HERO */}
      <section className="packages-hero">
        <div
          className="packages-hero-image"
          style={{ backgroundImage: `url("${safariVehicleImage}")` }}
          aria-hidden="true"
        />

        <div className="packages-hero-overlay" aria-hidden="true" />

        <div className="packages-container packages-hero-content">
          <nav className="packages-breadcrumb" aria-label="Breadcrumb">
            <Link to="/">Home</Link>
            <span>/</span>
            <Link to="/uganda-safaris">Uganda Safaris</Link>
            <span>/</span>
            <span aria-current="page">Safari Packages</span>
          </nav>

          <p className="packages-eyebrow">
            <span />
            YOUR JOURNEY, YOUR WAY
          </p>

          <h1>
            Find the journey
            <br />
            <em>that feels like you.</em>
          </h1>

          <p className="packages-hero-description">
            From intimate rainforest encounters to expansive wildlife
            adventures, explore safari ideas and start shaping your own
            Ugandan journey.
          </p>

          <div className="packages-hero-actions">
            <a
              href="#package-ideas"
              className="packages-button packages-button-gold"
            >
              Explore safari ideas
              <ArrowRight size={18} />
            </a>

            <Link to="/contact" className="packages-hero-link">
              Plan a private safari
              <ArrowUpRight size={17} />
            </Link>
          </div>

          <div className="packages-hero-location">
            <MapPin size={17} />
            <span>Uganda · East Africa</span>
          </div>
        </div>

        <div className="packages-hero-caption">
          <span>THOUGHTFULLY PLANNED JOURNEYS</span>
          <span>THE PEARL OF AFRICA</span>
        </div>
      </section>

      {/* INTRODUCTION */}
      <section className="packages-intro section-padding">
        <div className="packages-container packages-intro-grid">
          <div>
            <p className="eyebrow">NOT JUST A HOLIDAY</p>

            <h2>
              A journey shaped
              <br />
              around <em>you.</em>
            </h2>
          </div>

          <div className="packages-intro-copy">
            <p>
              The right safari is about more than a list of destinations.
              It is about finding the experiences you want, choosing a
              comfortable pace and making time to appreciate the places
              you visit.
            </p>

            <p>
              Use these sample itinerary concepts as inspiration. Routes,
              durations, accommodation, activities and costs can be discussed
              and confirmed around your travel plans.
            </p>

            <Link to="/contact" className="packages-inline-link">
              Tell us what you have in mind
              <ArrowRight size={17} />
            </Link>
          </div>
        </div>
      </section>

      {/* PACKAGE IDEAS */}
      <section
        className="packages-ideas section-padding"
        id="package-ideas"
      >
        <div className="packages-container">
          <div className="packages-section-heading">
            <div>
              <p className="eyebrow">FIND YOUR KIND OF ADVENTURE</p>

              <h2>
                Start with an idea.
                <br />
                <em>Make it your own.</em>
              </h2>
            </div>

            <p>
              Explore three starting points for your Uganda safari. These
              are illustrative itinerary concepts, not fixed or confirmed
              packages.
            </p>
          </div>

          <div className="packages-grid">
            {packages.map((item) => {
              const Icon = item.icon;

              return (
                <article className="package-card" key={item.number}>
                  <Link
                    to={item.link}
                    className="package-card-image"
                    aria-label={`Explore ${item.title}`}
                  >
                    <img
                      src={item.image}
                      alt={item.imageAlt}
                      loading="lazy"
                      decoding="async"
                    />

                    <span className="package-card-number">
                      {item.number}
                    </span>

                    <span className="package-card-arrow">
                      <ArrowUpRight size={19} />
                    </span>
                  </Link>

                  <div className="package-card-content">
                    <p className="package-card-category">
                      {item.category}
                    </p>

                    <h3>{item.title}</h3>

                    <div className="package-card-duration">
                      <CalendarDays size={15} />
                      <span>{item.duration}</span>
                    </div>

                    <p className="package-card-description">
                      {item.description}
                    </p>

                    <div className="package-card-highlights">
                      {item.highlights.map((highlight) => (
                        <div
                          className="package-card-highlight"
                          key={highlight}
                        >
                          <span />
                          {highlight}
                        </div>
                      ))}
                    </div>

                    <Link to={item.link} className="package-card-link">
                      Explore this experience
                      <ArrowRight size={16} />
                    </Link>
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      {/* EXPERIENCE CATEGORIES */}
      <section className="packages-experiences section-padding">
        <div className="packages-container">
          <div className="packages-section-heading">
            <div>
              <p className="eyebrow">BUILD YOUR OWN COMBINATION</p>

              <h2>
                What would you
                <br />
                love to <em>experience?</em>
              </h2>
            </div>

            <p>
              Combine interests to create a trip that suits the way you
              want to discover Uganda.
            </p>
          </div>

          <div className="packages-experience-grid">
            {experiences.map((experience) => {
              const Icon = experience.icon;

              return (
                <Link
                  to={experience.link}
                  className="packages-experience"
                  key={experience.title}
                >
                  <span className="packages-experience-icon">
                    <Icon size={23} />
                  </span>

                  <span className="packages-experience-copy">
                    <strong>{experience.title}</strong>
                    <small>{experience.description}</small>
                  </span>

                  <ArrowUpRight size={19} />
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      {/* PLANNING PROCESS */}
      <section className="packages-planning">
        <div className="packages-container packages-planning-grid">
          <div className="packages-planning-intro">
            <p className="packages-eyebrow">
              <span />
              FROM DREAM TO DEPARTURE
            </p>

            <h2>
              Simple planning.
              <br />
              <em>Meaningful travel.</em>
            </h2>

            <p>
              Start with the details you know. We can discuss the rest as
              your plans take shape.
            </p>

            <Link
              to="/contact"
              className="packages-button packages-button-gold"
            >
              Start your enquiry
              <ArrowUpRight size={18} />
            </Link>
          </div>

          <div className="packages-planning-steps">
            {planningSteps.map((step) => (
              <article
                className="packages-planning-step"
                key={step.number}
              >
                <span>{step.number}</span>

                <div>
                  <h3>{step.title}</h3>
                  <p>{step.description}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* FINAL CALL TO ACTION */}
      <section className="packages-final-cta section-padding">
        <div className="packages-container packages-final-cta-inner">
          <div className="packages-final-icon">
            <Heart size={25} strokeWidth={1.4} />
          </div>

          <p className="eyebrow">YOUR UGANDA STORY STARTS HERE</p>

          <h2>
            The best itinerary
            <br />
            is <em>the one made for you.</em>
          </h2>

          <p className="packages-final-description">
            Share your travel dates, group size, interests and approximate
            budget. Begin a conversation about a safari that works for you.
          </p>

          <Link
            to="/contact"
            className="packages-button packages-button-dark"
          >
            Let's plan your safari
            <ArrowUpRight size={18} />
          </Link>
        </div>
      </section>
    </div>
  );
}
