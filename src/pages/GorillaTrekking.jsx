
import React from "react";
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import {
  ArrowRight,
  ArrowUpRight,
  Check,
  Clock3,
  Compass,
  Footprints,
  Leaf,
  MapPin,
  ShieldCheck,
  Trees,
} from "lucide-react";
import "./GorillaTrekking.css";

// YOUR LOCAL PHOTOGRAPHS
import gorillaHeroImage from "../assets/gorilla-hero.jpg";
import gorillaForestImage from "../assets/gorilla-forest.jpg";
import gorillaEncounterImage from "../assets/gorilla-encounter.jpg";
import gorillaSilverbackImage from "../assets/gorilla-silverback.jpg";

const experiences = [
  {
    number: "01",
    title: "Into the rainforest",
    description:
      "Follow experienced park guides through Uganda's mountain forests in search of a habituated mountain gorilla family.",
    image: gorillaForestImage,
    alt: "Rainforest habitat for mountain gorilla trekking in Uganda",
  },
  {
    number: "02",
    title: "A remarkable encounter",
    description:
      "Observe mountain gorillas in their natural habitat, from playful young gorillas to the impressive silverback.",
    image: gorillaEncounterImage,
    alt: "Mountain gorillas in their natural habitat",
  },
  {
    number: "03",
    title: "A forest worth protecting",
    description:
      "Discover why responsible tourism, conservation and respect for wildlife are central to protecting these endangered great apes.",
    image: gorillaSilverbackImage,
    alt: "Mountain gorilla in a protected forest environment",
  },
];

const preparation = [
  {
    icon: Footprints,
    title: "A reasonable level of fitness",
    text:
      "Trekking can involve steep slopes, uneven ground, mud and changing forest conditions. The duration and difficulty vary.",
  },
  {
    icon: Clock3,
    title: "A flexible schedule",
    text:
      "The search for gorillas can take several hours. Keep your itinerary flexible and allow time for the briefing and trek.",
  },
  {
    icon: Trees,
    title: "Suitable clothing",
    text:
      "Pack sturdy hiking boots, long trousers, long sleeves, rain protection, drinking water and a small daypack.",
  },
  {
    icon: ShieldCheck,
    title: "A confirmed permit",
    text:
      "Gorilla trekking requires an authorised permit. Availability, eligibility, fees and booking conditions should be confirmed before travel.",
  },
];

export default function GorillaTrekking() {
  return (
    <div className="gorilla-page">
      <Helmet>
        <title>
          Gorilla Trekking in Uganda | Pearl P International Safari
        </title>

        <meta
          name="description"
          content="Plan a mountain gorilla trekking adventure in Uganda with Pearl P International Safari. Explore Bwindi Impenetrable National Park, Mgahinga Gorilla National Park and practical trekking guidance."
        />

        <meta
          name="keywords"
          content="gorilla trekking Uganda, Uganda gorilla safaris, Bwindi gorilla trekking, Mgahinga gorilla trekking, mountain gorilla permits"
        />

        <link
          rel="canonical"
          href="https://pearlpsafaris.com/gorilla-trekking-uganda"
        />

        <meta name="robots" content="index, follow" />

        <meta
          property="og:title"
          content="Gorilla Trekking in Uganda | Pearl P International Safari"
        />

        <meta
          property="og:description"
          content="Discover Uganda's mountain gorillas and plan a responsible rainforest trekking experience."
        />

        <meta
          property="og:type"
          content="website"
        />

        <meta
          property="og:url"
          content="https://pearlpsafaris.com/gorilla-trekking-uganda"
        />

        <meta
          property="og:image"
          content="https://pearlpsafaris.com/"
        />

        <meta name="twitter:card" content="summary_large_image" />
      </Helmet>

      {/* HERO */}
      <section className="gorilla-hero">
        <div
          className="gorilla-hero-image"
          style={{
            backgroundImage: `url("${gorillaHeroImage}")`,
          }}
          aria-hidden="true"
        />

        <div
          className="gorilla-hero-overlay"
          aria-hidden="true"
        />

        <div className="gorilla-container gorilla-hero-content">
          <div className="gorilla-breadcrumb">
            <Link to="/">Home</Link>
            <span>/</span>
            <Link to="/uganda-safaris">Uganda Safaris</Link>
            <span>/</span>
            <span>Gorilla Trekking</span>
          </div>

          <p className="gorilla-eyebrow">
            <span />
            AN ENCOUNTER LIKE NO OTHER
          </p>

          <h1>
            Into the wild.
            <br />
            Face to face with
            <br />
            <em>the extraordinary.</em>
          </h1>

          <p className="gorilla-hero-description">
            Enter Uganda's ancient rainforests for an unforgettable
            opportunity to encounter mountain gorillas in their natural
            habitat.
          </p>

          <div className="gorilla-hero-actions">
            <Link
              to="/contact"
              className="gorilla-button gorilla-button-gold"
            >
              Plan your gorilla trek
              <ArrowUpRight size={18} />
            </Link>

            <a
              href="#the-experience"
              className="gorilla-text-link"
            >
              Discover the experience
              <ArrowRight size={17} />
            </a>
          </div>

          <div className="gorilla-hero-note">
            <MapPin size={17} />
            <span>Bwindi & Mgahinga, southwestern Uganda</span>
          </div>
        </div>

        <div className="gorilla-hero-caption">
          <span>01 / WILD UGANDA</span>
          <span>AN EXPERIENCE TO TREASURE</span>
        </div>
      </section>

      {/* INTRODUCTION */}
      <section
        className="gorilla-intro section-padding"
        id="the-experience"
      >
        <div className="gorilla-container gorilla-intro-grid">
          <div className="gorilla-intro-heading">
            <p className="eyebrow">BEYOND THE ORDINARY</p>

            <h2>
              Some moments
              <br />
              <em>stay with you forever.</em>
            </h2>
          </div>

          <div className="gorilla-intro-copy">
            <p>
              Deep in Uganda's mist-covered forests lives one of the
              world's most remarkable wildlife treasures: the mountain
              gorilla.
            </p>

            <p>
              Gorilla trekking takes you beyond the familiar safari trail
              and into a living rainforest. Accompanied by authorised
              guides and trackers, you follow the forest until a gorilla
              family is found. The encounter is intimate, moving and
              governed by strict wildlife-protection rules.
            </p>

            <p>
              Pearl P International Safari can help you explore itinerary
              options, understand the permit process and plan the wider
              journey around your interests and travel dates.
            </p>

            <Link
              to="/contact"
              className="gorilla-inline-link"
            >
              Start planning your journey
              <ArrowRight size={17} />
            </Link>
          </div>
        </div>
      </section>

      {/* EXPERIENCE GALLERY */}
      <section className="gorilla-experiences section-padding">
        <div className="gorilla-container">
          <div className="gorilla-section-heading">
            <div>
              <p className="eyebrow">THE JOURNEY</p>

              <h2>
                A forest.
                <br />
                <em>A family. A lasting memory.</em>
              </h2>
            </div>

            <p>
              Every trek is different. The forest, terrain and time spent
              searching are part of what makes the experience unique.
            </p>
          </div>

          <div className="gorilla-experience-grid">
            {experiences.map((experience) => (
              <article
                className="gorilla-experience-card"
                key={experience.number}
              >
                <div className="gorilla-experience-image">
                  <img
                    src={experience.image}
                    alt={experience.alt}
                    loading="lazy"
                  />

                  <span>{experience.number}</span>
                </div>

                <div className="gorilla-experience-content">
                  <h3>{experience.title}</h3>
                  <p>{experience.description}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* GORILLA TREKKING PARKS */}
      <section className="gorilla-parks">
        <div
          className="gorilla-parks-image"
          style={{
            backgroundImage: `url("${gorillaForestImage}")`,
          }}
          aria-hidden="true"
        />

        <div
          className="gorilla-parks-shade"
          aria-hidden="true"
        />

        <div className="gorilla-container gorilla-parks-content">
          <p className="gorilla-eyebrow">
            <span />
            WHERE THE FOREST CALLS
          </p>

          <h2>
            Two extraordinary
            <br />
            places to begin.
          </h2>

          <p className="gorilla-parks-description">
            Uganda's mountain gorilla trekking takes place in two
            protected areas in the country's southwest. Each offers
            its own landscape and setting for a forest adventure.
          </p>

          <div className="gorilla-park-list">
            <article className="gorilla-park-item">
              <span className="gorilla-park-number">01</span>

              <div>
                <h3>Bwindi Impenetrable National Park</h3>

                <p>
                  A remarkable ancient rainforest known for its
                  biodiversity and mountain gorilla trekking experiences.
                </p>

                <Link to="/destinations">
                  Explore destinations
                  <ArrowUpRight size={16} />
                </Link>
              </div>
            </article>

            <article className="gorilla-park-item">
              <span className="gorilla-park-number">02</span>

              <div>
                <h3>Mgahinga Gorilla National Park</h3>

                <p>
                  A scenic volcanic landscape forming part of the
                  Virunga conservation region, with forest and mountain
                  scenery.
                </p>

                <Link to="/destinations">
                  Explore destinations
                  <ArrowUpRight size={16} />
                </Link>
              </div>
            </article>
          </div>
        </div>
      </section>

      {/* TREKKING PREPARATION */}
      <section className="gorilla-preparation section-padding">
        <div className="gorilla-container">
          <div className="gorilla-section-heading gorilla-preparation-heading">
            <div>
              <p className="eyebrow">BE READY FOR THE RAINFOREST</p>

              <h2>
                Prepare for
                <br />
                <em>the adventure.</em>
              </h2>
            </div>

            <p>
              A little preparation helps you feel more comfortable
              and make the most of your trekking day.
            </p>
          </div>

          <div className="gorilla-preparation-grid">
            {preparation.map((item) => {
              const Icon = item.icon;

              return (
                <article
                  className="gorilla-preparation-card"
                  key={item.title}
                >
                  <div className="gorilla-preparation-icon">
                    <Icon size={23} strokeWidth={1.5} />
                  </div>

                  <h3>{item.title}</h3>
                  <p>{item.text}</p>
                </article>
              );
            })}
          </div>

          <div className="gorilla-conservation-note">
            <div className="gorilla-conservation-icon">
              <Leaf size={25} strokeWidth={1.5} />
            </div>

            <div>
              <h3>Respect the wildlife. Protect the experience.</h3>

              <p>
                Follow your ranger's instructions, maintain the required
                distance from gorillas, never trek when unwell, and
                follow park guidance on photography, noise and hygiene.
                Gorilla encounters are regulated to protect both people
                and wildlife.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* PLAN YOUR TREK */}
      <section className="gorilla-planning">
        <div className="gorilla-container gorilla-planning-grid">
          <div className="gorilla-planning-copy">
            <p className="eyebrow">YOUR JOURNEY STARTS HERE</p>

            <h2>
              Your gorilla
              <br />
              adventure.
              <br />
              <em>Your way.</em>
            </h2>

            <p>
              Tell us when you hope to travel, how many people are
              joining and what else you would love to discover in Uganda.
              We'll help you explore the next steps for your trip.
            </p>

            <Link
              to="/contact"
              className="gorilla-button gorilla-button-gold"
            >
              Enquire about gorilla trekking
              <ArrowUpRight size={18} />
            </Link>
          </div>

          <div className="gorilla-planning-details">
            <div className="gorilla-planning-detail">
              <Compass size={22} />

              <div>
                <h3>Build your itinerary</h3>
                <p>
                  Combine gorilla trekking with wildlife safaris,
                  lakes, cultural experiences or other destinations.
                </p>
              </div>
            </div>

            <div className="gorilla-planning-detail">
              <ShieldCheck size={22} />

              <div>
                <h3>Check permit arrangements</h3>
                <p>
                  Permit availability and fees can change. Confirm
                  current requirements before committing to travel dates.
                </p>
              </div>
            </div>

            <div className="gorilla-planning-detail">
              <Check size={22} />

              <div>
                <h3>Plan with clarity</h3>
                <p>
                  Discuss your dates, group size, accommodation
                  preferences and transport needs before finalising
                  your trip.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
