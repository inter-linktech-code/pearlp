import React from "react";
import { Helmet } from "react-helmet-async";
import {
  ArrowDown,
  ArrowRight,
  ArrowUpRight,
  Binoculars,
  Bird,
  Compass,
  MapPin,
  Mountain,
  Trees,
  Waves,
} from "lucide-react";
import { Link } from "react-router-dom";
import "./Destinations.css";

// =========================================================
// LOCAL DESTINATION IMAGES
// Place all images inside src/assets/
// =========================================================

import heroImage from "../assets/hero.jpg";
import bwindiImage from "../assets/bwindi.jpg";
import queenImage from "../assets/queen.jpg";
import murchisonImage from "../assets/murchison.jpg";
import wildlifeImage from "../assets/wildlife.jpg";
import hikingImage from "../assets/hiking.jpg";
import kibaleImage from "../assets/kibale.jpg";
import bunyonyiImage from "../assets/bunyonyi.jpg";
import kidepoImage from "../assets/kidepo.jpg";

// =========================================================
// SITE CONFIGURATION
// =========================================================

const SITE_URL = "https://pearlpsafaris.com";
const PAGE_URL = `${SITE_URL}/destinations`;

const CONTACT_PATH = "/contact";
const SAFARI_PACKAGES_PATH = "/safari-packages";

// =========================================================
// DESTINATION DATA
// =========================================================

const destinations = [
  {
    number: "01",
    name: "Bwindi Impenetrable National Park",
    shortName: "Bwindi Forest",
    region: "Southwestern Uganda",
    category: "Gorilla trekking",
    description:
      "Step into an ancient rainforest and discover the extraordinary experience of encountering mountain gorillas in their natural habitat.",
    image: bwindiImage,
    imageAlt:
      "Rainforest landscape representing Bwindi Impenetrable National Park in southwestern Uganda",
    icon: Trees,
    featured: true,
    link: "/gorilla-trekking-uganda",
    linkLabel: "Explore gorilla trekking",
    imagePosition: "center",
  },
  {
    number: "02",
    name: "Queen Elizabeth National Park",
    shortName: "Queen Elizabeth",
    region: "Western Uganda",
    category: "Wildlife safari",
    description:
      "Discover open savannah, crater lakes and the wildlife-rich Kazinga Channel on a classic Ugandan safari.",
    image: queenImage,
    imageAlt:
      "Landscape representing Queen Elizabeth National Park in western Uganda",
    icon: Binoculars,
    link: "/wildlife-safaris-uganda",
    linkLabel: "Explore wildlife safaris",
    imagePosition: "center",
  },
  {
    number: "03",
    name: "Murchison Falls National Park",
    shortName: "Murchison Falls",
    region: "Northwestern Uganda",
    category: "Wildlife and the Nile",
    description:
      "Witness the mighty Nile squeeze through a narrow gorge, surrounded by expansive wilderness and remarkable scenery.",
    image: murchisonImage,
    imageAlt:
      "Natural scenery representing Murchison Falls National Park and the Nile",
    icon: Waves,
    link: "/wildlife-safaris-uganda",
    linkLabel: "Discover wildlife safaris",
    imagePosition: "center",
  },
  {
    number: "04",
    name: "Kibale National Park",
    shortName: "Kibale Forest",
    region: "Western Uganda",
    category: "Chimpanzee tracking",
    description:
      "Explore tropical forest habitats and discover one of Uganda's best-known destinations for chimpanzee tracking.",
    image: kibaleImage,
    imageAlt:
      "Forest landscape representing Kibale National Park, known for chimpanzee tracking",
    icon: Trees,
    link: SAFARI_PACKAGES_PATH,
    linkLabel: "Plan a forest safari",
    imagePosition: "center",
  },
  {
    number: "05",
    name: "Lake Mburo National Park",
    shortName: "Lake Mburo",
    region: "Western Uganda",
    category: "Nature and wildlife",
    description:
      "Find rolling hills, open grasslands and lakeside scenery in a compact wilderness escape in western Uganda.",
    image: wildlifeImage,
    imageAlt:
      "Wildlife and natural scenery representing a Ugandan savannah landscape",
    icon: Binoculars,
    link: "/wildlife-safaris-uganda",
    linkLabel: "Explore wildlife safaris",
    imagePosition: "center",
  },
  {
    number: "06",
    name: "Kidepo Valley National Park",
    shortName: "Kidepo Valley",
    region: "Northeastern Uganda",
    category: "Remote wilderness",
    description:
      "Discover sweeping plains, rugged mountain backdrops and a sense of remoteness in Uganda's northeastern wilderness.",
    image: kidepoImage,
    imageAlt:
      "Landscape representing Kidepo Valley National Park in northeastern Uganda",
    icon: Compass,
    link: SAFARI_PACKAGES_PATH,
    linkLabel: "Plan your safari",
    imagePosition: "center",
  },
  {
    number: "07",
    name: "Rwenzori Mountains",
    shortName: "Rwenzori Mountains",
    region: "Western Uganda",
    category: "Mountain adventure",
    description:
      "Explore dramatic mountain scenery, mist-covered slopes and hiking adventures in the legendary Mountains of the Moon.",
    image: hikingImage,
    imageAlt:
      "Mountain scenery representing hiking and adventure in Uganda",
    icon: Mountain,
    link: "/hiking-adventure-uganda",
    linkLabel: "Explore hiking adventures",
    imagePosition: "center",
  },
  {
    number: "08",
    name: "Lake Bunyonyi",
    shortName: "Lake Bunyonyi",
    region: "Southwestern Uganda",
    category: "Lakeside escape",
    description:
      "Slow down beside a scenic highland lake, explore its island-dotted waters and enjoy the quieter side of Uganda.",
    image: bunyonyiImage,
    imageAlt:
      "Lake and surrounding highland scenery representing Lake Bunyonyi in southwestern Uganda",
    icon: Waves,
    link: "/cultural-tours-uganda",
    linkLabel: "Explore local experiences",
    imagePosition: "center",
  },
  {
    number: "09",
    name: "Mgahinga Gorilla National Park",
    shortName: "Mgahinga",
    region: "Southwestern Uganda",
    category: "Gorillas and volcanoes",
    description:
      "Discover volcanic peaks, montane forests and remarkable scenery in Uganda's part of the Virunga Mountains.",
    image: hikingImage,
    imageAlt:
      "Mountain scenery representing the volcanic landscapes around Mgahinga Gorilla National Park",
    icon: Mountain,
    link: "/gorilla-trekking-uganda",
    linkLabel: "Explore gorilla trekking",
    imagePosition: "center",
  },
];

// =========================================================
// TRAVEL EXPERIENCES
// =========================================================

const travelStyles = [
  {
    number: "01",
    title: "Wildlife safaris",
    description:
      "Explore national parks, search for wildlife and experience Uganda's varied landscapes.",
    icon: Binoculars,
    link: "/wildlife-safaris-uganda",
  },
  {
    number: "02",
    title: "Gorilla trekking",
    description:
      "Discover rainforest destinations known for mountain gorilla encounters.",
    icon: Trees,
    link: "/gorilla-trekking-uganda",
  },
  {
    number: "03",
    title: "Birdwatching",
    description:
      "Explore forest, wetland and savannah habitats in search of remarkable birdlife.",
    icon: Bird,
    link: "/birdwatching-uganda",
  },
  {
    number: "04",
    title: "Hiking and adventure",
    description:
      "Take in mountain scenery, outdoor trails and Uganda's adventurous side.",
    icon: Mountain,
    link: "/hiking-adventure-uganda",
  },
];

// =========================================================
// DESTINATION CARD
// =========================================================

function DestinationCard({ destination }) {
  const Icon = destination.icon;

  return (
    <article
      className={`destination-card ${
        destination.featured ? "destination-card-featured" : ""
      }`}
    >
      <Link
        to={destination.link}
        className="destination-card-image-link"
        aria-label={`Explore ${destination.name}`}
      >
        <div className="destination-card-image">
          <img
            src={destination.image}
            alt={destination.imageAlt}
            loading={destination.featured ? "eager" : "lazy"}
            fetchPriority={destination.featured ? "high" : "auto"}
            decoding="async"
            style={{
              objectPosition: destination.imagePosition || "center",
            }}
          />

          <div className="destination-card-image-shade" />

          <span className="destination-number">
            {destination.number}
          </span>

          <span className="destination-category">
            <Icon size={14} strokeWidth={1.8} />
            {destination.category}
          </span>

          <span className="destination-image-arrow" aria-hidden="true">
            <ArrowUpRight size={21} />
          </span>

          {destination.featured && (
            <span className="destination-featured-label">
              Featured destination
            </span>
          )}
        </div>
      </Link>

      <div className="destination-card-content">
        <span className="destination-region">
          <MapPin size={14} strokeWidth={1.8} />
          {destination.region}
        </span>

        <h3>
          <Link to={destination.link}>{destination.name}</Link>
        </h3>

        <p>{destination.description}</p>

        <Link to={destination.link} className="destination-card-link">
          {destination.linkLabel}
          <ArrowRight size={16} />
        </Link>
      </div>
    </article>
  );
}

// =========================================================
// DESTINATIONS PAGE
// =========================================================

export default function Destinations() {
  const destinationSchema = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    name: "Uganda Safari Destinations",
    description:
      "Explore Uganda's national parks, mountain landscapes, forests, lakes and wildlife destinations with PearlP Safaris.",
    url: PAGE_URL,
    isPartOf: {
      "@type": "WebSite",
      name: "PearlP Safaris",
      url: SITE_URL,
    },
    mainEntity: {
      "@type": "ItemList",
      name: "Uganda Safari Destinations",
      numberOfItems: destinations.length,
      itemListElement: destinations.map((destination, index) => ({
        "@type": "ListItem",
        position: index + 1,
        name: destination.name,
        description: destination.description,
        url: `${SITE_URL}${destination.link}`,
      })),
    },
  };

  return (
    <>
      <Helmet>
        <title>
          Uganda Safari Destinations | National Parks and Places to Visit |
          PearlP Safaris
        </title>

        <meta
          name="description"
          content="Discover Uganda safari destinations with PearlP Safaris. Explore Bwindi gorilla trekking, Queen Elizabeth National Park, Murchison Falls, Kibale Forest, Lake Bunyonyi and more."
        />

        <meta
          name="keywords"
          content="Uganda safari destinations, places to visit in Uganda, Uganda national parks, Bwindi gorilla trekking, Queen Elizabeth National Park, Murchison Falls, Kibale Forest, Lake Bunyonyi, Kidepo Valley National Park"
        />

        <meta name="robots" content="index, follow" />

        <link rel="canonical" href={PAGE_URL} />

        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="PearlP Safaris" />

        <meta
          property="og:title"
          content="Discover Uganda | Safari Destinations — PearlP Safaris"
        />

        <meta
          property="og:description"
          content="From rainforest gorilla trekking to open savannahs and mountain landscapes, discover places that make Uganda extraordinary."
        />

        <meta property="og:url" content={PAGE_URL} />

        <meta
          property="og:image"
          content={`${SITE_URL}/og-destinations.jpg`}
        />

        <meta
          property="og:image:alt"
          content="Uganda safari destinations and landscapes"
        />

        <meta name="twitter:card" content="summary_large_image" />

        <meta
          name="twitter:title"
          content="Uganda Safari Destinations | PearlP Safaris"
        />

        <meta
          name="twitter:description"
          content="Explore Uganda's forests, national parks, mountains and lakes with PearlP Safaris."
        />

        <meta
          name="twitter:image"
          content={`${SITE_URL}/og-destinations.jpg`}
        />

        <script type="application/ld+json">
          {JSON.stringify(destinationSchema)}
        </script>
      </Helmet>

      <main className="destinations-page">
        {/* HERO SECTION */}

        <section className="destinations-hero">
          <div
            className="destinations-hero-image"
            style={{
              backgroundImage: `url("${heroImage}")`,
            }}
            role="img"
            aria-label="Discover the landscapes and wilderness of Uganda"
          />

          <div className="destinations-hero-overlay" />

          <div className="destinations-hero-inner">
            <div className="destinations-hero-copy">
              <span className="destinations-eyebrow">
                <span className="destinations-eyebrow-line" />
                Discover the Pearl of Africa
              </span>

              <h1>
                Find your
                <br />
                <em>wild Uganda.</em>
              </h1>

              <p>
                Ancient rainforests. Open savannahs. Mountain horizons.
                Discover a country where every journey reveals a different
                side of the wild.
              </p>

              <div className="destinations-hero-actions">
                <a
                  href="#all-destinations"
                  className="destinations-button destinations-button-gold"
                >
                  Explore destinations
                  <ArrowRight size={17} />
                </a>

                <Link
                  to={CONTACT_PATH}
                  className="destinations-hero-text-link"
                >
                  Plan your journey
                  <ArrowUpRight size={17} />
                </Link>
              </div>
            </div>

            <div className="destinations-hero-side-note">
              <span className="destinations-vertical-line" />
              <span>
                A land of extraordinary
                <br />
                natural contrasts.
              </span>
            </div>

            <a
              href="#destination-intro"
              className="destinations-scroll-cue"
              aria-label="Scroll to discover destinations"
            >
              <span>SCROLL TO DISCOVER</span>
              <ArrowDown size={15} />
            </a>

            <div className="destinations-hero-index">
              <span>UGANDA</span>
              <span className="destinations-index-divider" />
              <span>00°19′N 32°35′E</span>
            </div>
          </div>

          <div className="destinations-landscape-strip">
            <div className="destinations-landscape-strip-inner">
              <span>Rainforests</span>
              <span className="destinations-strip-dot" />
              <span>Savannahs</span>
              <span className="destinations-strip-dot" />
              <span>Mountains</span>
              <span className="destinations-strip-dot" />
              <span>Lakes and rivers</span>
            </div>
          </div>
        </section>

        {/* INTRODUCTION */}

        <section
          className="destinations-intro"
          id="destination-intro"
        >
          <div className="destinations-container destinations-intro-grid">
            <div className="destinations-intro-heading">
              <span className="destinations-eyebrow destinations-eyebrow-dark">
                A country of contrasts
              </span>

              <h2>
                Small on the map.
                <br />
                <em>Extraordinary in experience.</em>
              </h2>
            </div>

            <div className="destinations-intro-copy">
              <p>
                Uganda brings together tropical forests, rich wildlife,
                freshwater lakes and striking mountain scenery. Each region
                offers a different perspective on the Pearl of Africa.
              </p>

              <p>
                Whether you dream of gorilla trekking, a classic wildlife
                safari or a peaceful lakeside escape, start with the places
                that inspire you.
              </p>

              <Link
                to={SAFARI_PACKAGES_PATH}
                className="destinations-text-link"
              >
                Find your safari experience
                <ArrowRight size={17} />
              </Link>
            </div>
          </div>
        </section>

        {/* ALL DESTINATIONS */}

        <section
          className="destinations-listing"
          id="all-destinations"
        >
          <div className="destinations-container">
            <div className="destinations-section-heading">
              <div>
                <span className="destinations-eyebrow destinations-eyebrow-dark">
                  Explore the country
                </span>

                <h2>
                  Places worth
                  <br />
                  <em>travelling for.</em>
                </h2>
              </div>

              <div className="destinations-section-aside">
                <p>
                  From the depths of ancient forests to wide-open
                  wilderness, find a destination that feels like your kind
                  of adventure.
                </p>

                <span className="destinations-count">
                  <strong>09</strong> DESTINATIONS TO EXPLORE
                </span>
              </div>
            </div>

            <div className="destinations-grid">
              {destinations.map((destination) => (
                <DestinationCard
                  key={destination.name}
                  destination={destination}
                />
              ))}
            </div>

            <div className="destinations-after-grid">
              <span>YOUR NEXT CHAPTER STARTS OUT HERE</span>

              <Link to={SAFARI_PACKAGES_PATH}>
                Explore safari packages
                <ArrowUpRight size={17} />
              </Link>
            </div>
          </div>
        </section>

        {/* TRAVEL EXPERIENCES */}

        <section className="destinations-experiences">
          <div className="destinations-container">
            <div className="destinations-experiences-heading">
              <span className="destinations-eyebrow">
                Travel your way
              </span>

              <h2>
                Begin with what
                <br />
                <em>moves you.</em>
              </h2>

              <p>
                Choose the experience you want to remember. We'll help you
                explore the destinations and possibilities around it.
              </p>
            </div>

            <div className="destinations-experience-grid">
              {travelStyles.map((style) => {
                const Icon = style.icon;

                return (
                  <Link
                    to={style.link}
                    className="destination-experience-card"
                    key={style.title}
                  >
                    <span className="destination-experience-number">
                      {style.number}
                    </span>

                    <span className="destination-experience-icon">
                      <Icon size={25} strokeWidth={1.5} />
                    </span>

                    <h3>{style.title}</h3>

                    <p>{style.description}</p>

                    <span className="destination-experience-bottom">
                      Explore experience
                      <ArrowUpRight size={18} />
                    </span>
                  </Link>
                );
              })}
            </div>
          </div>
        </section>

        {/* FINAL CALL TO ACTION */}

        <section className="destinations-cta">
          <div className="destinations-container">
            <div className="destinations-cta-panel">
              <div className="destinations-cta-content">
                <span className="destinations-eyebrow">
                  Your Uganda story starts here
                </span>

                <h2>
                  Let the journey
                  <br />
                  <em>become the story.</em>
                </h2>

                <p>
                  Tell us what you would love to experience in Uganda.
                  Start a conversation about your destinations, travel
                  interests and the journey you have in mind.
                </p>

                <Link
                  to={CONTACT_PATH}
                  className="destinations-button destinations-button-gold"
                >
                  Start planning your trip
                  <ArrowRight size={17} />
                </Link>

                <span className="destinations-cta-footnote">
                  Your interests. Your itinerary. Your Uganda.
                </span>
              </div>

              <div className="destinations-cta-art" aria-hidden="true">
                <div className="destinations-cta-orbit destinations-cta-orbit-one" />
                <div className="destinations-cta-orbit destinations-cta-orbit-two" />

                <Compass
                  className="destinations-cta-compass"
                  size={170}
                  strokeWidth={0.65}
                />

                <span className="destinations-cta-art-label">
                  PEARLP SAFARIS
                </span>

                <span className="destinations-cta-art-subtitle">
                  EXPLORE UGANDA
                </span>

                <span className="destinations-cta-art-coordinate">
                  THE PEARL OF AFRICA
                </span>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
