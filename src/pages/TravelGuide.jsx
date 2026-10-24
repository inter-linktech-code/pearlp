
import React from "react";
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import {
  ArrowRight,
  Backpack,
  CalendarDays,
  CheckCircle2,
  Compass,
  FileCheck2,
  HeartPulse,
  Map,
  ShieldCheck,
  Sun,
  TreePine,
} from "lucide-react";

import "./TravelGuide.css";

import safariHeroImage from "../assets/safari-hero.jpg";
import gorillaImage from "../assets/gorilla.jpg";
import wildlifeImage from "../assets/wildlife.jpg";

const SITE_URL = "https://pearlpsafaris.com";
const PAGE_URL = `${SITE_URL}/travel-guide`;
const SOCIAL_IMAGE = `${SITE_URL}/og-travel-guide.jpg`;

const guideTopics = [
  {
    number: "01",
    icon: CalendarDays,
    title: "When to visit Uganda",
    description:
      "Choose travel dates around your preferred activities, the regions on your route and your comfort with seasonal weather.",
    points: [
      "Consider seasonal rainfall and trail conditions.",
      "Allow flexibility for changing weather.",
      "Check current conditions before departure.",
    ],
  },
  {
    number: "02",
    icon: TreePine,
    title: "Gorilla trekking preparation",
    description:
      "A trek through tropical forest requires planning, suitable clothing and a realistic understanding of the physical experience.",
    points: [
      "Arrange the required permit well in advance.",
      "Pack sturdy, comfortable hiking footwear.",
      "Follow ranger instructions and wildlife rules.",
    ],
  },
  {
    number: "03",
    icon: FileCheck2,
    title: "Travel documents",
    description:
      "Check entry requirements for your nationality and make sure your documents are ready before travelling.",
    points: [
      "Review passport validity requirements.",
      "Check visa and entry rules through official sources.",
      "Confirm any applicable vaccination documentation.",
    ],
  },
  {
    number: "04",
    icon: HeartPulse,
    title: "Health and preparation",
    description:
      "Speak with a qualified travel-health professional early enough to receive advice suited to your itinerary and personal needs.",
    points: [
      "Ask about recommended and required vaccinations.",
      "Discuss malaria prevention and personal medication.",
      "Carry travel insurance details and essential medicines.",
    ],
  },
  {
    number: "05",
    icon: Map,
    title: "Getting around Uganda",
    description:
      "Travel times can be longer than expected, particularly between national parks. Plan a route that leaves room to enjoy each stop.",
    points: [
      "Allow generous time between destinations.",
      "Arrange transfers and park transport in advance.",
      "Consider an overnight stop on longer journeys.",
    ],
  },
  {
    number: "06",
    icon: Backpack,
    title: "What to pack",
    description:
      "Pack for warm days, cooler evenings, outdoor activities and possible rain, adjusting your list to the season.",
    points: [
      "Bring layers and lightweight rain protection.",
      "Pack comfortable walking shoes and sun protection.",
      "Use a small daypack for excursions.",
    ],
  },
];

const itineraryIdeas = [
  {
    days: "03–04 DAYS",
    title: "The rainforest encounter",
    description:
      "A short trip centred on gorilla trekking, with time for transfers and a stay near the forest.",
    link: "/gorilla-trekking-uganda",
    linkText: "Explore gorilla trekking",
    image: gorillaImage,
    imageAlt: "Mountain gorilla in a tropical rainforest",
  },
  {
    days: "05–07 DAYS",
    title: "Wild Uganda",
    description:
      "A wildlife-focused journey with time for game drives and selected park experiences.",
    link: "/wildlife-safaris-uganda",
    linkText: "Explore wildlife safaris",
    image: wildlifeImage,
    imageAlt: "Wildlife in a Ugandan natural landscape",
  },
  {
    days: "08–12 DAYS",
    title: "The wider adventure",
    description:
      "An extended journey combining selected landscapes, wildlife and cultural experiences.",
    link: "/safari-packages",
    linkText: "Explore safari ideas",
    image: safariHeroImage,
    imageAlt: "Ugandan wilderness and safari landscapes",
  },
];

function GuideTopic({ topic }) {
  const Icon = topic.icon;

  return (
    <article className="travel-guide-topic">
      <div className="travel-guide-topic-top">
        <span className="travel-guide-topic-number">
          {topic.number}
        </span>

        <span className="travel-guide-topic-icon" aria-hidden="true">
          <Icon size={22} strokeWidth={1.6} />
        </span>
      </div>

      <h3>{topic.title}</h3>

      <p className="travel-guide-topic-description">
        {topic.description}
      </p>

      <ul>
        {topic.points.map((point) => (
          <li key={point}>
            <CheckCircle2 size={16} aria-hidden="true" />
            <span>{point}</span>
          </li>
        ))}
      </ul>
    </article>
  );
}

function ItineraryCard({ item }) {
  return (
    <article className="travel-guide-itinerary-card">
      <div className="travel-guide-itinerary-image">
        <img
          src={item.image}
          alt={item.imageAlt}
          loading="lazy"
          decoding="async"
        />

        <span>{item.days}</span>
      </div>

      <div className="travel-guide-itinerary-content">
        <h3>{item.title}</h3>

        <p>{item.description}</p>

        <Link to={item.link}>
          {item.linkText}
          <ArrowRight size={16} aria-hidden="true" />
        </Link>
      </div>
    </article>
  );
}

export default function TravelGuide() {
  return (
    <>
      <Helmet>
        <title>
          Uganda Travel Guide | Safari Planning Tips | PearlP Safaris
        </title>

        <meta
          name="description"
          content="Plan your Uganda trip with practical travel advice on seasons, gorilla trekking, travel documents, health preparation, transport, packing and safari itineraries."
        />

        <meta
          name="robots"
          content="index, follow, max-image-preview:large"
        />

        <link rel="canonical" href={PAGE_URL} />

        <meta property="og:title" content="Uganda Travel Guide | PearlP Safaris" />

        <meta
          property="og:description"
          content="Prepare for gorilla trekking, wildlife safaris and unforgettable journeys across Uganda with practical travel planning advice."
        />

        <meta property="og:type" content="website" />
        <meta property="og:url" content={PAGE_URL} />
        <meta property="og:image" content={SOCIAL_IMAGE} />
        <meta property="og:image:alt" content="Discover Uganda with PearlP Safaris" />
        <meta property="og:site_name" content="PearlP Safaris" />
        <meta property="og:locale" content="en_UG" />

        <meta name="twitter:card" content="summary_large_image" />

        <meta
          name="twitter:title"
          content="Uganda Travel Guide | PearlP Safaris"
        />

        <meta
          name="twitter:description"
          content="Practical tips for planning gorilla trekking, wildlife safaris and travel across Uganda."
        />

        <meta name="twitter:image" content={SOCIAL_IMAGE} />
      </Helmet>

      <main className="travel-guide-page">
        {/* HERO */}
        <section className="travel-guide-hero">
          <img
            className="travel-guide-hero-image"
            src={safariHeroImage}
            alt=""
            fetchPriority="high"
            decoding="async"
          />

          <div className="travel-guide-hero-overlay" />

          <div className="page-container travel-guide-hero-inner">
            <div className="travel-guide-hero-copy">
              <span className="eyebrow">
                <span className="travel-guide-eyebrow-line" />
                YOUR GUIDE TO THE PEARL OF AFRICA
              </span>

              <h1>
                Come prepared.
                <br />
                <em>Leave changed.</em>
              </h1>

              <p>
                From the first travel document to the final safari drive,
                thoughtful preparation helps you experience more of Uganda
                with confidence.
              </p>

              <div className="travel-guide-hero-actions">
                <a href="#travel-essentials" className="button button-gold">
                  Start planning
                  <ArrowRight size={17} aria-hidden="true" />
                </a>

                <Link
                  to="/destinations"
                  className="travel-guide-hero-link"
                >
                  Discover Uganda
                  <ArrowRight size={17} aria-hidden="true" />
                </Link>
              </div>
            </div>

            <div className="travel-guide-hero-caption">
              <span />
              PRACTICAL ADVICE. EXTRAORDINARY EXPERIENCES.
            </div>
          </div>
        </section>

        {/* INTRODUCTION */}
        <section className="travel-guide-intro section-padding">
          <div className="page-container travel-guide-intro-grid">
            <div>
              <span className="eyebrow-dark">BEFORE YOU SET OFF</span>

              <h2 className="section-heading">
                Good journeys
                <br />
                begin with <em>good planning.</em>
              </h2>
            </div>

            <div className="travel-guide-intro-copy">
              <p>
                Uganda brings together tropical forests, wildlife-rich
                savannahs, mountain landscapes, lakes and vibrant communities.
                Each journey is different, and a little preparation goes a
                long way.
              </p>

              <p>
                Use this guide as a starting point for planning your trip.
                Confirm current travel requirements, seasonal conditions and
                activity arrangements before you leave home.
              </p>

              <div className="travel-guide-intro-note">
                <Compass size={21} aria-hidden="true" />

                <span>
                  Plan around your interests, your pace and the experiences
                  you most want to remember.
                </span>
              </div>
            </div>
          </div>
        </section>

        {/* TRAVEL ESSENTIALS */}
        <section
          className="travel-guide-essentials section-padding"
          id="travel-essentials"
        >
          <div className="page-container">
            <div className="travel-guide-section-heading">
              <span className="eyebrow-dark">THE ESSENTIALS</span>

              <h2 className="section-heading">
                Everything to know
                <br />
                <em>before you go.</em>
              </h2>

              <p>
                Start with the practical details, then shape your itinerary
                around the places and experiences that interest you most.
              </p>
            </div>

            <div className="travel-guide-topics-grid">
              {guideTopics.map((topic) => (
                <GuideTopic key={topic.number} topic={topic} />
              ))}
            </div>
          </div>
        </section>

        {/* SEASONAL PLANNING */}
        <section className="travel-guide-seasons section-padding">
          <div className="page-container travel-guide-seasons-grid">
            <div className="travel-guide-seasons-copy">
              <span className="eyebrow">TIMING YOUR ADVENTURE</span>

              <h2>
                Every season
                <br />
                has its <em>own rhythm.</em>
              </h2>

              <p>
                Uganda can be visited throughout the year, but rainfall,
                trail conditions and the character of outdoor activities
                change with the seasons. The right time depends on where
                you're going and what you hope to do.
              </p>

              <div className="travel-guide-season-points">
                <div>
                  <Sun size={20} aria-hidden="true" />

                  <span>
                    <strong>Consider your activities</strong>

                    <small>
                      Trekking, wildlife viewing, hiking and birdwatching may
                      have different seasonal considerations.
                    </small>
                  </span>
                </div>

                <div>
                  <CalendarDays size={20} aria-hidden="true" />

                  <span>
                    <strong>Book key experiences early</strong>

                    <small>
                      Confirm permit requirements, accommodation and transport
                      for your intended dates.
                    </small>
                  </span>
                </div>
              </div>
            </div>

            <div className="travel-guide-seasons-image">
              <img
                src={wildlifeImage}
                alt="Wildlife in a natural Ugandan landscape"
                loading="lazy"
                decoding="async"
              />

              <div className="travel-guide-seasons-image-caption">
                <span>01 / 03</span>
                <span>LET THE LANDSCAPE SET THE PACE</span>
              </div>
            </div>
          </div>
        </section>

        {/* ITINERARY IDEAS */}
        <section className="travel-guide-itineraries section-padding">
          <div className="page-container">
            <div className="travel-guide-section-heading travel-guide-itinerary-heading">
              <span className="eyebrow-dark">FIND YOUR TRAVEL STYLE</span>

              <h2 className="section-heading">
                How much of Uganda
                <br />
                will you <em>discover?</em>
              </h2>

              <p>
                These are starting points, not fixed packages. Your actual
                route and trip length depend on your travel dates, interests,
                transport and confirmed arrangements.
              </p>
            </div>

            <div className="travel-guide-itineraries-grid">
              {itineraryIdeas.map((item) => (
                <ItineraryCard key={item.title} item={item} />
              ))}
            </div>

            <div className="travel-guide-itinerary-footer">
              <span>
                <Map size={19} aria-hidden="true" />
                Prefer a trip designed around you?
              </span>

              <Link to="/contact">
                Discuss your itinerary
                <ArrowRight size={16} aria-hidden="true" />
              </Link>
            </div>
          </div>
        </section>

        {/* RESPONSIBLE TRAVEL */}
        <section className="travel-guide-responsible section-padding">
          <div className="page-container travel-guide-responsible-grid">
            <div className="travel-guide-responsible-icon">
              <ShieldCheck size={38} strokeWidth={1.3} aria-hidden="true" />
            </div>

            <div className="travel-guide-responsible-copy">
              <span className="eyebrow">TRAVEL WITH CARE</span>

              <h2>
                Leave room for wonder.
                <br />
                <em>Leave a lighter footprint.</em>
              </h2>

              <p>
                Respect local customs, follow guides' instructions, keep a
                considerate distance from wildlife and follow park rules.
                Support local communities thoughtfully and avoid leaving
                litter behind.
              </p>
            </div>

            <Link
              to="/cultural-tours-uganda"
              className="travel-guide-responsible-link"
            >
              Explore cultural experiences
              <ArrowRight size={17} aria-hidden="true" />
            </Link>
          </div>
        </section>

        {/* TRAVEL INFORMATION DISCLAIMER */}
        <section
          className="travel-guide-disclaimer"
          aria-label="Important travel information"
        >
          <div className="page-container travel-guide-disclaimer-inner">
            <ShieldCheck size={20} aria-hidden="true" />

            <p>
              <strong>A note on travel requirements:</strong> Entry rules,
              visa requirements, health guidance, permit conditions and
              transport arrangements can change. Verify the latest
              requirements with relevant official authorities and qualified
              professionals before travelling. This guide provides general
              planning information, not legal or medical advice.
            </p>
          </div>
        </section>

        {/* FINAL CTA */}
        <section className="travel-guide-final-cta">
          <img
            className="travel-guide-final-image"
            src={safariHeroImage}
            alt=""
            loading="lazy"
            decoding="async"
          />

          <div className="travel-guide-final-overlay" />

          <div className="page-container travel-guide-final-content">
            <span className="eyebrow">
              YOUR UGANDA JOURNEY STARTS HERE
            </span>

            <h2>
              The details are yours.
              <br />
              <em>The adventure awaits.</em>
            </h2>

            <p>
              Tell us what brings you to Uganda and the experiences you want
              to discover. Let's start turning your ideas into a journey.
            </p>

            <div className="travel-guide-final-actions">
              <Link to="/contact" className="button button-gold">
                Start planning your trip
                <ArrowRight size={17} aria-hidden="true" />
              </Link>

              <Link
                to="/safari-packages"
                className="travel-guide-final-link"
              >
                Browse safari ideas
              </Link>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
