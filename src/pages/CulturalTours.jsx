import React from "react";
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import {
  ArrowDown,
  ArrowRight,
  ArrowUpRight,
  CookingPot,
  HandHeart,
  MapPin,
  Music2,
  Palette,
  Sparkles,
  Users,
} from "lucide-react";
import "./CulturalTours.css";

const culturalExperiences = [
  {
    id: "heritage",
    number: "01",
    category: "HERITAGE",
    title: "Traditions & Heritage",
    description:
      "Discover Uganda's living traditions, community customs, storytelling, and cultural heritage through meaningful encounters with local communities.",
    image:
      "https://images.unsplash.com/photo-1511632765486-a01980e01a18?auto=format&fit=crop&w=1200&q=85",
    imageAlt: "People sharing a cultural experience together",
    icon: HandHeart,
  },
  {
    id: "dance",
    number: "02",
    category: "PERFORMANCE",
    title: "Music, Dance & Celebration",
    description:
      "Experience the rhythms, traditional instruments, energetic dances, and celebrations that bring Ugandan culture to life.",
    image:
      "https://images.unsplash.com/photo-1504609813442-a8924e83f76e?auto=format&fit=crop&w=1200&q=85",
    imageAlt: "A lively cultural performance",
    icon: Music2,
  },
  {
    id: "food",
    number: "03",
    category: "CUISINE",
    title: "Food & Local Flavours",
    description:
      "Explore Uganda through its food, from traditional dishes and fresh local ingredients to the stories and customs behind every meal.",
    image:
      "https://images.unsplash.com/photo-1547592180-85f173990554?auto=format&fit=crop&w=1200&q=85",
    imageAlt: "Freshly prepared food and local ingredients",
    icon: CookingPot,
  },
  {
    id: "crafts",
    number: "04",
    category: "CRAFT",
    title: "Arts, Crafts & Creativity",
    description:
      "Meet local artisans, explore traditional craftsmanship, and appreciate the creativity expressed through handmade art, textiles, and souvenirs.",
    image:
      "https://images.unsplash.com/photo-1452860606245-08befc0ff44b?auto=format&fit=crop&w=1200&q=85",
    imageAlt: "Creative arts and traditional craftsmanship",
    icon: Palette,
  },
];

const culturalHighlights = [
  {
    icon: Users,
    title: "Authentic Encounters",
    description:
      "Experience local life through respectful interactions and opportunities to learn directly from communities.",
  },
  {
    icon: HandHeart,
    title: "Community Connections",
    description:
      "Discover the people, traditions, and stories that make Uganda culturally distinctive.",
  },
  {
    icon: Sparkles,
    title: "Meaningful Experiences",
    description:
      "Go beyond sightseeing with cultural experiences that help you appreciate Uganda more deeply.",
  },
];

const planningSteps = [
  {
    number: "01",
    title: "Tell us what interests you",
    description:
      "Share your preferred destinations, cultural interests, travel dates, and group size.",
  },
  {
    number: "02",
    title: "Personalise your experience",
    description:
      "We help you plan cultural activities that complement your itinerary and travel style.",
  },
  {
    number: "03",
    title: "Experience Uganda",
    description:
      "Enjoy a thoughtfully planned journey through Uganda's people, traditions, and local life.",
  },
];

export default function CulturalTours() {
  const pageUrl = "https://pearlpsafaris.com/cultural-tours-uganda";

  return (
    <>
      <Helmet>
        <title>
          Cultural Tours in Uganda | Pearl Safaris
        </title>

        <meta
          name="description"
          content="Discover Uganda's cultural heritage through traditional music, dance, local cuisine, crafts, community encounters, and personalised cultural tours with Pearl Safaris."
        />

        <meta
          name="keywords"
          content="cultural tours Uganda, Uganda cultural experiences, Uganda cultural heritage, traditional dance Uganda, Ugandan food, cultural safaris Uganda, community tourism Uganda"
        />

        <link rel="canonical" href={pageUrl} />

        <meta property="og:type" content="website" />
        <meta
          property="og:title"
          content="Cultural Tours in Uganda | Pearl Safaris"
        />
        <meta
          property="og:description"
          content="Discover Uganda's traditions, music, dance, cuisine, crafts, and community life with Pearl Safaris."
        />
        <meta property="og:url" content={pageUrl} />
        <meta
          property="og:image"
          content="https://images.unsplash.com/photo-1511632765486-a01980e01a18?auto=format&fit=crop&w=1600&q=90"
        />

        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="Cultural Tours in Uganda | Pearl Safaris"
        />
        <meta
          name="twitter:description"
          content="Experience Uganda's living traditions, local flavours, music, dance, and cultural heritage."
        />

        <meta name="robots" content="index, follow" />
      </Helmet>

      <main className="culture-page">
        {/* HERO */}
        <section className="culture-hero">
          <div className="culture-hero-shade" />

          <div className="culture-hero-inner">
            <div className="culture-hero-copy">
              <span className="culture-eyebrow culture-hero-eyebrow">
                <span className="culture-eyebrow-line" />
                CULTURAL TOURS · UGANDA
              </span>

              <h1>
                Discover the
                <br />
                <span>heart of Uganda.</span>
              </h1>

              <p>
                Meet the people behind the traditions. Experience the rhythms,
                flavours, stories, and heritage that make Uganda unforgettable.
              </p>

              <div className="culture-hero-actions">
                <Link
                  to="/contact"
                  className="culture-button culture-button-primary"
                >
                  Plan Your Cultural Tour
                  <ArrowUpRight size={18} />
                </Link>

                <a
                  href="#culture-experiences"
                  className="culture-text-link"
                >
                  Explore experiences
                  <ArrowDown size={16} />
                </a>
              </div>

              <div className="culture-hero-note">
                <MapPin size={15} />
                <span>Uganda, East Africa</span>
              </div>
            </div>

            <div className="culture-hero-caption">
              <span className="culture-caption-line" />
              <span>Culture. Connection. Discovery.</span>
            </div>
          </div>
        </section>

        {/* INTRODUCTION */}
        <section className="culture-intro section-padding">
          <div className="culture-container culture-intro-grid">
            <div className="culture-intro-label">
              <span className="culture-eyebrow">
                <span className="culture-eyebrow-line" />
                MORE THAN A JOURNEY
              </span>

              <p className="culture-side-note">
                Every tradition has a story.
                <br />
                Every community has a voice.
              </p>
            </div>

            <div className="culture-intro-content">
              <h2>
                Discover Uganda
                <br />
                <span>through its people.</span>
              </h2>

              <p className="culture-intro-lead">
                Uganda's cultural identity is expressed through its diverse
                communities, languages, traditions, music, food, craftsmanship,
                and ways of life.
              </p>

              <p>
                Our cultural tour experiences invite you to explore these
                connections at a thoughtful pace. Discover local traditions,
                learn about everyday life, and create meaningful memories
                alongside the landscapes and wildlife that make Uganda special.
              </p>

              <Link
                to="/uganda-safaris"
                className="culture-inline-link"
              >
                Explore Uganda safaris
                <ArrowRight size={17} />
              </Link>
            </div>
          </div>
        </section>

        {/* HIGHLIGHTS */}
        <section className="culture-highlights">
          <div className="culture-container culture-highlights-grid">
            {culturalHighlights.map((highlight) => {
              const Icon = highlight.icon;

              return (
                <article
                  className="culture-highlight"
                  key={highlight.title}
                >
                  <div className="culture-highlight-icon">
                    <Icon size={23} strokeWidth={1.6} />
                  </div>

                  <h3>{highlight.title}</h3>

                  <p>{highlight.description}</p>
                </article>
              );
            })}
          </div>
        </section>

        {/* CULTURAL EXPERIENCES */}
        <section
          className="culture-experiences section-padding"
          id="culture-experiences"
        >
          <div className="culture-container">
            <div className="culture-section-heading">
              <div>
                <span className="culture-eyebrow">
                  <span className="culture-eyebrow-line" />
                  EXPLORE OUR EXPERIENCES
                </span>

                <h2>
                  A closer look at
                  <br />
                  <span>Ugandan culture.</span>
                </h2>
              </div>

              <p>
                From traditional performances to local cuisine and creative
                craftsmanship, discover the cultural experiences that add
                depth to your Uganda journey.
              </p>
            </div>

            <div className="culture-experience-grid">
              {culturalExperiences.map((experience) => {
                const Icon = experience.icon;

                return (
                  <article
                    className="culture-experience-card"
                    key={experience.id}
                  >
                    <Link
                      to="/contact"
                      className="culture-experience-image-link"
                      aria-label={`Enquire about ${experience.title}`}
                    >
                      <div className="culture-experience-image">
                        <img
                          src={experience.image}
                          alt={experience.imageAlt}
                          loading="lazy"
                          decoding="async"
                        />

                        <span className="culture-card-number">
                          {experience.number}
                        </span>

                        <span className="culture-card-arrow">
                          <ArrowUpRight size={20} />
                        </span>
                      </div>
                    </Link>

                    <div className="culture-experience-content">
                      <div className="culture-card-category">
                        <Icon size={15} strokeWidth={1.8} />
                        <span>{experience.category}</span>
                      </div>

                      <h3>{experience.title}</h3>

                      <p>{experience.description}</p>

                      <Link
                        to="/contact"
                        className="culture-card-link"
                      >
                        Enquire about this experience
                        <ArrowRight size={16} />
                      </Link>
                    </div>
                  </article>
                );
              })}
            </div>
          </div>
        </section>

        {/* CULTURAL QUOTE BANNER */}
        <section className="culture-quote-section">
          <div className="culture-quote-image" />
          <div className="culture-quote-overlay" />

          <div className="culture-container culture-quote-content">
            <span className="culture-eyebrow culture-quote-eyebrow">
              THE SPIRIT OF UGANDA
            </span>

            <span className="culture-quote-mark" aria-hidden="true">
              “
            </span>

            <blockquote>
              Travel becomes meaningful when you connect with the people,
              traditions, and stories of a place.
            </blockquote>

            <p>Discover Uganda beyond the ordinary.</p>
          </div>
        </section>

        {/* PLAN YOUR EXPERIENCE */}
        <section className="culture-planning section-padding">
          <div className="culture-container">
            <div className="culture-planning-heading">
              <span className="culture-eyebrow">
                <span className="culture-eyebrow-line" />
                YOUR JOURNEY STARTS HERE
              </span>

              <h2>
                Let's plan something
                <br />
                <span>meaningful.</span>
              </h2>

              <p>
                Your interests, schedule, and travel style help shape your
                cultural experience. Tell us what you would love to discover.
              </p>
            </div>

            <div className="culture-planning-grid">
              {planningSteps.map((step) => (
                <article
                  className="culture-planning-step"
                  key={step.number}
                >
                  <span className="culture-step-number">
                    {step.number}
                  </span>

                  <div className="culture-step-rule" />

                  <h3>{step.title}</h3>

                  <p>{step.description}</p>
                </article>
              ))}
            </div>

            <div className="culture-planning-action">
              <Link
                to="/contact"
                className="culture-button culture-button-dark"
              >
                Start Planning
                <ArrowUpRight size={18} />
              </Link>
            </div>
          </div>
        </section>

        {/* RESPONSIBLE CULTURAL TRAVEL */}
        <section className="culture-respect">
          <div className="culture-container culture-respect-grid">
            <div className="culture-respect-icon">
              <HandHeart size={32} strokeWidth={1.4} />
            </div>

            <div className="culture-respect-content">
              <span className="culture-eyebrow">
                TRAVEL WITH RESPECT
              </span>

              <h2>
                Meaningful travel begins
                <br />
                with <span>mutual respect.</span>
              </h2>

              <p>
                Cultural experiences are most rewarding when approached with
                curiosity, sensitivity, and respect for local customs. We
                encourage thoughtful interactions, appropriate photography,
                and appreciation for the communities and traditions you
                encounter.
              </p>
            </div>

            <div className="culture-respect-mark" aria-hidden="true">
              U
            </div>
          </div>
        </section>

        {/* FINAL CTA */}
        <section className="culture-final-cta">
          <div className="culture-final-shade" />

          <div className="culture-container culture-final-content">
            <span className="culture-eyebrow culture-final-eyebrow">
              YOUR UGANDA STORY AWAITS
            </span>

            <h2>
              Come for the journey.
              <br />
              <span>Leave with a connection.</span>
            </h2>

            <p>
              Let Pearl Safaris help you plan a cultural experience that brings
              you closer to the people, heritage, and spirit of Uganda.
            </p>

            <Link
              to="/contact"
              className="culture-button culture-button-primary"
            >
              Plan Your Cultural Tour
              <ArrowUpRight size={18} />
            </Link>

            <span className="culture-final-footnote">
              Pearl Safaris · Discover Uganda
            </span>
          </div>
        </section>
      </main>
    </>
  );
}