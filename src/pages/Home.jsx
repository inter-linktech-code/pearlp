
import React from "react";
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import {
  ArrowDown,
  ArrowRight,
  ArrowUpRight,
  Binoculars,
  Bird,
  CarFront,
  Compass,
  Leaf,
  MapPin,
  Mountain,
  Trees,
  CalendarDays,
  Hotel,
  PackageCheck,
  Plane,
  MapPinned,
  UserRound,
  Route,
  Phone,
  CheckCircle2,
} from "lucide-react";
import "./Home.css";

import heroImage from "../assets/hero.jpg";
import introImage from "../assets/intro.jpg";
import gorillaImage from "../assets/gorilla.jpg";
import wildlifeImage from "../assets/wildlife.jpg";
import birdsImage from "../assets/birds.jpg";
import hikingImage from "../assets/hiking.jpg";
import bwindiImage from "../assets/bwindi.jpg";
import queenImage from "../assets/queen.jpg";
import murchisonImage from "../assets/murchison.jpg";
import planningImage from "../assets/planning.jpg";
import ctaImage from "../assets/cta.jpg";

const WHATSAPP_NUMBER = "256789842436";
const PHONE_NUMBER = "+256702765380";

const whatsappMessage =
  "Hello Pearl P International Safari! I'd like to enquire about your safari, travel or transport services.";

const whatsappUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
  whatsappMessage
)}`;

const experiences = [
  {
    number: "01",
    title: "Gorilla Trekking",
    category: "Into the rainforest",
    description:
      "Experience the extraordinary mountain gorillas of Uganda with a carefully planned journey into their natural forest habitat.",
    image: gorillaImage,
    alt: "Mountain gorilla in its natural forest habitat",
    icon: Trees,
    link: "/gorilla-trekking-uganda",
  },
  {
    number: "02",
    title: "Wildlife Safaris",
    category: "The wild, up close",
    description:
      "Discover Uganda's national parks, remarkable wildlife, beautiful landscapes and unforgettable game-drive experiences.",
    image: wildlifeImage,
    alt: "African wildlife on safari",
    icon: Binoculars,
    link: "/wildlife-safaris-uganda",
  },
  {
    number: "03",
    title: "Birdwatching",
    category: "A world of wings",
    description:
      "Explore Uganda's diverse habitats and discover remarkable birdlife with trips tailored to your interests.",
    image: birdsImage,
    alt: "Bird in a natural Ugandan habitat",
    icon: Bird,
    link: "/birdwatching-uganda",
  },
  {
    number: "04",
    title: "Hiking & Adventure",
    category: "Find your next horizon",
    description:
      "Take the scenic route through mountain trails, natural wonders and outdoor adventures across Uganda.",
    image: hikingImage,
    alt: "Nature and mountain adventure landscape",
    icon: Mountain,
    link: "/hiking-adventure-uganda",
  },
];

const destinations = [
  {
    name: "Bwindi Impenetrable Forest",
    type: "Gorilla trekking · Rainforest",
    image: bwindiImage,
    alt: "Bwindi Impenetrable Forest",
    link: "/gorilla-trekking-uganda",
  },
  {
    name: "Queen Elizabeth National Park",
    type: "Wildlife · Game drives",
    image: queenImage,
    alt: "Queen Elizabeth National Park landscape",
    link: "/wildlife-safaris-uganda",
  },
  {
    name: "Murchison Falls National Park",
    type: "Wildlife · River adventures",
    image: murchisonImage,
    alt: "Murchison Falls National Park landscape",
    link: "/wildlife-safaris-uganda",
  },
];

const planningSteps = [
  {
    number: "01",
    title: "Tell us what you have in mind",
    description:
      "Share your destination, dates, group size, budget or transport needs.",
  },
  {
    number: "02",
    title: "We help organise the details",
    description:
      "We help you plan suitable experiences, transport and travel arrangements.",
  },
  {
    number: "03",
    title: "Travel with confidence",
    description:
      "Get in touch with our team to confirm your arrangements before travelling.",
  },
];

const services = [
  {
    title: "Tailor-made Safari Planning",
    description:
      "Personalised safari itineraries shaped around your interests, schedule and travel preferences.",
    icon: Compass,
    link: "/safari-packages",
    linkText: "Plan a safari",
  },
  {
    title: "Car Hire & Airport Transfers",
    description:
      "Arrange transport for airport journeys, local travel, sightseeing and longer trips.",
    icon: CarFront,
    link: "/car-hire-uganda",
    linkText: "Explore transport",
  },
  {
    title: "Safari Lodges & Hotel Booking",
    description:
      "Get assistance arranging accommodation for safaris, holidays, business trips and overnight stays.",
    icon: Hotel,
    link: "/uganda-safari-lodges",
    linkText: "Explore accommodation",
  },
  {
    title: "Cultural Experiences",
    description:
      "Discover local traditions, communities, heritage and cultural experiences across Uganda.",
    icon: Leaf,
    link: "/cultural-tours-uganda",
    linkText: "Explore experiences",
  },
  {
    title: "City Tours & Trips",
    description:
      "Explore Kampala and other destinations with organised city trips and sightseeing arrangements.",
    icon: MapPinned,
    link: "/destinations",
    linkText: "Explore destinations",
  },
  {
    title: "Long-Distance Transfers",
    description:
      "Plan journeys between cities, towns, accommodation and destinations across Uganda.",
    icon: Route,
    link: "/car-hire-uganda",
    linkText: "Arrange a transfer",
  },
  {
    title: "Special Deliveries",
    description:
      "Enquire about delivery arrangements for special items and time-sensitive transport needs.",
    icon: PackageCheck,
    link: "/contact",
    linkText: "Discuss a delivery",
  },
  {
    title: "Airport Deliveries",
    description:
      "Contact us to discuss delivery arrangements involving airport collection or drop-off.",
    icon: Plane,
    link: "/contact",
    linkText: "Enquire now",
  },
  {
    title: "Pick-Up & Drop-Off",
    description:
      "Arrange convenient collection and drop-off for appointments, accommodation, trips and transfers.",
    icon: MapPin,
    link: "/car-hire-uganda",
    linkText: "Arrange pick-up",
  },
  {
    title: "Tours & Travel Services",
    description:
      "Get help organising trips, travel logistics and experiences for individuals, families and groups.",
    icon: Compass,
    link: "/destinations",
    linkText: "Explore travel",
  },
  {
    title: "Driver Hiring",
    description:
      "Enquire about hiring a driver for your planned journey, trip or transport requirements.",
    icon: UserRound,
    link: "/car-hire-uganda",
    linkText: "Enquire about a driver",
  },
  {
    title: "Safari Packages",
    description:
      "Explore safari options and speak with us about planning a trip that suits your travel goals.",
    icon: CalendarDays,
    link: "/safari-packages",
    linkText: "View safari packages",
  },
];

function Eyebrow({ children, light = false }) {
  return (
    <span
      className={`home-eyebrow ${
        light ? "home-eyebrow-light" : "home-eyebrow-dark"
      }`}
    >
      <span className="home-eyebrow-line" aria-hidden="true" />
      {children}
    </span>
  );
}

function HomeButton({ to, href, children, variant = "gold" }) {
  const className = `home-button home-button-${variant}`;

  if (href) {
    const isWhatsApp = href.startsWith("https://wa.me/");

    return (
      <a
        className={className}
        href={href}
        target={isWhatsApp ? "_blank" : undefined}
        rel={isWhatsApp ? "noopener noreferrer" : undefined}
      >
        {children}
      </a>
    );
  }

  return (
    <Link className={className} to={to || "/"}>
      {children}
    </Link>
  );
}

export default function Home() {
  return (
    <div className="home-page">
      <Helmet>
        <title>
          Pearl P International Safari | Safaris, Tours & Car Hire in Uganda
        </title>
        <meta
          name="description"
          content="Discover Uganda with Pearl P International Safari. Enquire about gorilla trekking, wildlife safaris, tours, hotel booking, car hire, airport transfers, long-distance travel and delivery services."
        />
        <link rel="canonical" href="https://pearlpsafaris.com/" />
        <meta name="robots" content="index, follow" />
        <meta
          property="og:title"
          content="Pearl P International Safari | Explore Uganda"
        />
        <meta
          property="og:description"
          content="Safaris, tours, accommodation assistance, car hire and travel services in Uganda with Pearl P International Safari."
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://pearlpsafaris.com/" />
        <meta
          property="og:image"
          content="https://pearlpsafaris.com/"
        />
        <meta name="twitter:card" content="summary_large_image" />
      </Helmet>

      {/* HERO */}
      <section className="home-hero" aria-labelledby="home-hero-title">
        <div
          className="home-hero-image"
          style={{ backgroundImage: `url("${heroImage}")` }}
          role="img"
          aria-label="Safari landscape in Uganda"
        />
        <div className="home-hero-overlay" />

        <div className="home-hero-inner">
          <div className="home-hero-copy">
            <Eyebrow light>PEARL P INTERNATIONAL SAFARI</Eyebrow>

            <h1 id="home-hero-title">
              Find yourself
              <br />
              in the <em>wild.</em>
            </h1>

            <p className="home-hero-description">
              Discover Uganda through remarkable safaris, meaningful
              experiences and travel arrangements designed around you. From
              wild landscapes to everyday journeys, we help you get there.
            </p>

            <div className="home-hero-actions">
              <HomeButton to="/safari-packages">
                Explore Our Safaris <ArrowRight size={17} />
              </HomeButton>

              <HomeButton href={whatsappUrl} variant="outline">
                Plan Your Journey <ArrowUpRight size={17} />
              </HomeButton>
            </div>

            <a className="home-scroll-link" href="#home-intro">
              <span className="home-scroll-icon">
                <ArrowDown size={15} />
              </span>
              DISCOVER PEARL P
            </a>
          </div>

          <div className="home-hero-side-note" aria-hidden="true">
            <span className="home-hero-side-line" />
            EXPLORE UGANDA
          </div>

          <div className="home-hero-location">
            <MapPin size={15} />
            <span>Ggaba Road, Bunga, Ivory Mall · Uganda</span>
          </div>
        </div>
      </section>

      {/* INTRODUCTION */}
      <section className="home-intro" id="home-intro">
        <div className="home-container home-intro-grid">
          <div className="home-intro-heading">
            <Eyebrow>YOUR JOURNEY, OUR PRIORITY</Eyebrow>
            <h2>
              More than a destination.
              <br />
              It's the <em>whole journey.</em>
            </h2>
          </div>

          <div className="home-intro-copy">
            <p>
              At Pearl P International Safari, we help you discover Uganda
              through wildlife, nature, culture and memorable travel
              experiences. Whether you are planning a safari, exploring a city
              or organising transport, we are ready to discuss your needs.
            </p>
            <p>
              From the first conversation to the details of your journey, our
              goal is to make planning clearer and travelling more convenient.
            </p>
            <p className="home-intro-slogan">
              <strong>
                We Travel All Distances. Don't Get Stuck Anywhere.
              </strong>
            </p>
            <Link to="/about-us" className="home-text-link">
              Get to know us <ArrowRight size={16} />
            </Link>
          </div>
        </div>

        <div className="home-container home-intro-photo-wrap">
          <img
            className="home-intro-photo"
            src={introImage}
            alt="A glimpse of the travel experiences offered by Pearl P International Safari"
            loading="lazy"
          />
        </div>
      </section>

      {/* SAFARI EXPERIENCES */}
      <section className="home-experiences" id="experiences">
        <div className="home-container">
          <div className="home-section-heading">
            <div>
              <Eyebrow>EXPERIENCE THE EXTRAORDINARY</Eyebrow>
              <h2>
                Journeys that stay
                <br />
                with <em>you.</em>
              </h2>
            </div>
            <p>
              Explore Uganda's remarkable wildlife, rich habitats and outdoor
              adventures. Find an experience that speaks to you.
            </p>
          </div>

          <div className="home-experience-grid">
            {experiences.map((experience) => {
              const Icon = experience.icon;

              return (
                <article
                  className="home-experience-card"
                  key={experience.title}
                >
                  <Link
                    to={experience.link}
                    className="home-experience-image"
                    aria-label={`Explore ${experience.title}`}
                  >
                    <img
                      src={experience.image}
                      alt={experience.alt}
                      loading="lazy"
                    />
                    <span className="home-experience-number">
                      {experience.number}
                    </span>
                    <span className="home-experience-icon">
                      <Icon size={19} strokeWidth={1.6} />
                    </span>
                    <span className="home-experience-image-caption">
                      {experience.category}
                    </span>
                  </Link>

                  <div className="home-experience-content">
                    <h3>{experience.title}</h3>
                    <p>{experience.description}</p>
                    <Link to={experience.link} className="home-text-link">
                      Discover experience <ArrowRight size={15} />
                    </Link>
                  </div>
                </article>
              );
            })}
          </div>

          <div className="home-centered-link">
            <HomeButton to="/safari-packages" variant="dark">
              Explore All Safari Packages <ArrowRight size={16} />
            </HomeButton>
          </div>
        </div>
      </section>

      {/* DESTINATIONS */}
      <section className="home-destinations" id="destinations">
        <div className="home-container">
          <div className="home-section-heading home-destinations-heading">
            <div>
              <Eyebrow>THE PEARL OF AFRICA</Eyebrow>
              <h2>
                Discover the places
                <br />
                that make <em>Uganda.</em>
              </h2>
            </div>
            <p>
              From ancient rainforests to wide-open savannahs, Uganda offers
              unforgettable landscapes and wildlife encounters.
            </p>
          </div>

          <div className="home-destination-grid">
            {destinations.map((destination) => (
              <Link
                to={destination.link}
                className="home-destination-card"
                key={destination.name}
              >
                <img
                  src={destination.image}
                  alt={destination.alt}
                  loading="lazy"
                />
                <span className="home-destination-shade" />
                <span className="home-destination-copy">
                  <span className="home-destination-type">
                    {destination.type}
                  </span>
                  <span className="home-destination-name">
                    {destination.name}
                  </span>
                  <span className="home-destination-link">
                    Discover destination <ArrowUpRight size={16} />
                  </span>
                </span>
              </Link>
            ))}
          </div>

          <div className="home-destination-footer">
            <span>YOUR NEXT ADVENTURE STARTS HERE</span>
            <Link to="/destinations" className="home-text-link">
              Explore all destinations <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </section>

      {/* TRIP PLANNING */}
      <section className="home-planning" id="trip-planning">
        <div
          className="home-planning-image"
          style={{ backgroundImage: `url("${planningImage}")` }}
          aria-hidden="true"
        />

        <div className="home-container home-planning-grid">
          <div className="home-planning-copy">
            <Eyebrow light>LET'S PLAN YOUR JOURNEY</Eyebrow>
            <h2>
              Your plans.
              <br />
              Our <em>guidance.</em>
            </h2>
            <p>
              Every journey begins with an idea. Tell us where you want to go,
              what you want to experience or the transport you need. We'll help
              you discuss the next steps.
            </p>
            <HomeButton href={whatsappUrl}>
              Start Planning on WhatsApp <ArrowRight size={16} />
            </HomeButton>
          </div>

          <div className="home-planning-list">
            {planningSteps.map((step) => (
              <div className="home-planning-item" key={step.number}>
                <span>{step.number}</span>
                <div>
                  <h3>{step.title}</h3>
                  <p>{step.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section className="home-services" id="travel-services">
        <div className="home-container">
          <div className="home-section-heading home-services-heading">
            <div>
              <Eyebrow>MORE WAYS WE CAN HELP</Eyebrow>
              <h2>
                Travel, transport
                <br />
                and <em>everything between.</em>
              </h2>
            </div>
            <p>
              From safari planning and accommodation to city trips, transfers
              and delivery enquiries, contact our team to discuss the service
              you need.
            </p>
          </div>

          <div className="home-services-grid">
            {services.map((service) => {
              const Icon = service.icon;

              return (
                <article className="home-service-card" key={service.title}>
                  <span className="home-service-icon">
                    <Icon size={22} strokeWidth={1.6} />
                  </span>
                  <h3>{service.title}</h3>
                  <p>{service.description}</p>
                  <Link to={service.link}>
                    {service.linkText} <ArrowRight size={15} />
                  </Link>
                </article>
              );
            })}
          </div>

          <div className="home-services-contact">
            <div>
              <span className="home-services-contact-icon">
                <Phone size={19} />
              </span>
              <div>
                <h3>Need something specific?</h3>
                <p>
                  Tell us what you need and we'll help you discuss the
                  available arrangements.
                </p>
              </div>
            </div>
            <HomeButton href={whatsappUrl} variant="dark">
              Talk to Our Team <ArrowRight size={16} />
            </HomeButton>
          </div>
        </div>
      </section>

      {/* TRAVEL GUIDE */}
      <section className="home-guide">
        <div className="home-container home-guide-inner">
          <div className="home-guide-mark">
            <Compass size={28} strokeWidth={1.4} />
          </div>

          <div className="home-guide-copy">
            <Eyebrow>TRAVEL BETTER</Eyebrow>
            <h2>Get ready for Uganda.</h2>
            <p>
              Explore helpful information and travel inspiration to help you
              prepare for your next adventure.
            </p>
          </div>

          <HomeButton to="/travel-guide" variant="dark">
            Read the Travel Guide <ArrowRight size={16} />
          </HomeButton>
        </div>
      </section>

      {/* FINAL CALL TO ACTION */}
      <section className="home-final-cta">
        <div
          className="home-final-cta-image"
          style={{ backgroundImage: `url("${ctaImage}")` }}
          aria-hidden="true"
        />
        <div className="home-final-cta-overlay" />

        <div className="home-final-cta-content">
          <Eyebrow light>YOUR NEXT CHAPTER STARTS HERE</Eyebrow>
          <h2>
            Let's make it
            <br />
            <em>happen.</em>
          </h2>
          <p>
            A safari, a city trip, a transfer or a travel plan — tell us where
            you need to go. We'll be glad to hear from you.
          </p>

          <div className="home-final-cta-actions">
            <HomeButton href={whatsappUrl}>
              <CheckCircle2 size={17} /> Plan With Us
            </HomeButton>
            <a
              className="home-button home-button-outline"
              href={`tel:${PHONE_NUMBER}`}
            >
              <Phone size={16} /> Call {PHONE_NUMBER}
            </a>
          </div>

          <p className="home-final-slogan">
            We Travel All Distances. Don't Get Stuck Anywhere.
          </p>
        </div>
      </section>
    </div>
  );
}
