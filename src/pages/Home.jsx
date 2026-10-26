
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
  MessageCircle,
  ShieldCheck,
  Clock3,
  Sparkles,
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

const SITE_URL = "https://pearlpsafaris.com";
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
      "Discover Uganda's mountain gorillas and experience the remarkable forests they call home.",
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
      "Explore Uganda's national parks, savannah landscapes, wildlife and memorable game drives.",
    image: wildlifeImage,
    alt: "African wildlife in a natural safari landscape",
    icon: Binoculars,
    link: "/wildlife-safaris-uganda",
  },
  {
    number: "03",
    title: "Birdwatching",
    category: "A world of wings",
    description:
      "Discover Uganda's birdlife across forests, wetlands and other diverse natural habitats.",
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
      "Explore scenic trails, beautiful landscapes and outdoor adventures across Uganda.",
    image: hikingImage,
    alt: "Scenic mountain landscape for hiking and outdoor adventures",
    icon: Mountain,
    link: "/hiking-adventure-uganda",
  },
];

const destinations = [
  {
    number: "01",
    name: "Bwindi Impenetrable Forest",
    type: "Rainforest · Gorilla trekking",
    image: bwindiImage,
    alt: "Bwindi Impenetrable Forest in Uganda",
    link: "/gorilla-trekking-uganda",
  },
  {
    number: "02",
    name: "Queen Elizabeth National Park",
    type: "Wildlife · Game drives",
    image: queenImage,
    alt: "Landscape of Queen Elizabeth National Park",
    link: "/wildlife-safaris-uganda",
  },
  {
    number: "03",
    name: "Murchison Falls National Park",
    type: "Wildlife · River adventures",
    image: murchisonImage,
    alt: "Murchison Falls National Park landscape",
    link: "/wildlife-safaris-uganda",
  },
];

const services = [
  {
    title: "Safari Packages",
    description: "Explore safari ideas and plan a trip around your interests.",
    icon: Compass,
    link: "/safari-packages",
  },
  {
    title: "Car Hire",
    description: "Enquire about vehicles for local journeys and longer trips.",
    icon: CarFront,
    link: "/car-hire-uganda",
  },
  {
    title: "Airport Transfers",
    description: "Discuss airport collection, drop-off and onward travel.",
    icon: Plane,
    link: "/airport-deliveries",
  },
  {
    title: "Hotel Booking",
    description: "Discuss accommodation for holidays, business and safaris.",
    icon: Hotel,
    link: "/hotel-booking",
  },
  {
    title: "City Tours & Trips",
    description: "Explore Kampala and enquire about trips to other destinations.",
    icon: MapPinned,
    link: "/city-tours",
  },
  {
    title: "Long-Distance Transfers",
    description: "Plan journeys between towns, cities and travel destinations.",
    icon: Route,
    link: "/long-distance-transfers",
  },
  {
    title: "Special Deliveries",
    description: "Discuss your delivery needs and possible arrangements.",
    icon: PackageCheck,
    link: "/special-deliveries",
  },
  {
    title: "Pick-Up & Drop-Off",
    description: "Enquire about planned pickups, appointments and transfers.",
    icon: MapPin,
    link: "/pick-and-drop",
  },
  {
    title: "Tours & Travel Services",
    description: "Discuss travel planning, experiences and trip logistics.",
    icon: Compass,
    link: "/tours-and-travel-services",
  },
  {
    title: "Driver Hiring",
    description: "Enquire about a driver for your planned journey.",
    icon: UserRound,
    link: "/driver-hiring",
  },
  {
    title: "Birdwatching & Nature",
    description: "Plan nature-focused experiences in Uganda.",
    icon: Bird,
    link: "/birdwatching-uganda",
  },
  {
    title: "Cultural Tours",
    description: "Explore cultural heritage and local experiences.",
    icon: Leaf,
    link: "/cultural-tours-uganda",
  },
];

const planningSteps = [
  {
    number: "01",
    title: "Tell us what you need",
    description:
      "Share your destination, dates, group size and travel requirements.",
  },
  {
    number: "02",
    title: "Discuss your options",
    description:
      "Talk through suitable experiences, transport and other arrangements.",
  },
  {
    number: "03",
    title: "Confirm your plans",
    description:
      "Review availability, pricing and details before confirming your booking.",
  },
];

function Eyebrow({ children, light = false }) {
  return (
    <span className={`home-eyebrow ${light ? "is-light" : ""}`}>
      <span className="home-eyebrow-line" aria-hidden="true" />
      {children}
    </span>
  );
}

function HomeButton({ to, href, children, variant = "gold" }) {
  const className = `home-button home-button-${variant}`;

  if (href) {
    const isExternal = href.startsWith("https://wa.me/");

    return (
      <a
        className={className}
        href={href}
        target={isExternal ? "_blank" : undefined}
        rel={isExternal ? "noopener noreferrer" : undefined}
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
  const structuredData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "TravelAgency",
        "@id": `${SITE_URL}/#travel-agency`,
        name: "Pearl P International Safari",
        url: SITE_URL,
        telephone: "+256789842436",
        address: {
          "@type": "PostalAddress",
          streetAddress: "Ggaba Road, Bunga, Ivory Mall",
          addressLocality: "Kampala",
          addressCountry: "UG",
        },
        areaServed: [
          { "@type": "City", name: "Kampala" },
          { "@type": "Country", name: "Uganda" },
        ],
        contactPoint: {
          "@type": "ContactPoint",
          telephone: "+256789842436",
          contactType: "travel enquiries",
          availableLanguage: ["English"],
        },
      },
      {
        "@type": "WebSite",
        "@id": `${SITE_URL}/#website`,
        url: SITE_URL,
        name: "Pearl P International Safari",
        publisher: { "@id": `${SITE_URL}/#travel-agency` },
        inLanguage: "en-UG",
      },
      {
        "@type": "WebPage",
        "@id": `${SITE_URL}/#webpage`,
        url: `${SITE_URL}/`,
        name: "Pearl P International Safari | Uganda Safaris, Tours & Travel",
        description:
          "Explore Uganda with Pearl P International Safari. Enquire about gorilla trekking, wildlife safaris, cultural tours, accommodation, car hire, airport transfers and travel services.",
        isPartOf: { "@id": `${SITE_URL}/#website` },
        about: { "@id": `${SITE_URL}/#travel-agency` },
        inLanguage: "en-UG",
      },
    ],
  };

  return (
    <div className="home-page">
      <Helmet>
        <title>
          Uganda Safaris, Gorilla Trekking & Tours | Pearl P International
          Safari
        </title>
        <meta
          name="description"
          content="Discover Uganda with Pearl P International Safari. Enquire about gorilla trekking, wildlife safaris, birdwatching, cultural tours, hotel booking, car hire, airport transfers and travel services in Kampala and across Uganda."
        />
        <link rel="canonical" href={`${SITE_URL}/`} />
        <meta
          name="robots"
          content="index, follow, max-image-preview:large"
        />
        <meta
          name="theme-color"
          content="#173b2b"
        />
        <meta property="og:type" content="website" />
        <meta
          property="og:site_name"
          content="Pearl P International Safari"
        />
        <meta
          property="og:title"
          content="Discover Uganda | Pearl P International Safari"
        />
        <meta
          property="og:description"
          content="Plan safaris, gorilla trekking, cultural experiences, accommodation and transport in Uganda with Pearl P International Safari."
        />
        <meta property="og:url" content={`${SITE_URL}/`} />
        <meta
          property="og:image"
          content={`${SITE_URL}/images/pearlp-home-social.jpg`}
        />
        <meta
          property="og:image:alt"
          content="Uganda travel and safari experiences with Pearl P International Safari"
        />
        <meta property="og:locale" content="en_UG" />
        <meta name="twitter:card" content="summary_large_image" />
        <script type="application/ld+json">
          {JSON.stringify(structuredData)}
        </script>
      </Helmet>

      {/* HERO */}
      <section className="home-hero" aria-labelledby="home-hero-title">
        <img
          className="home-hero-image"
          src={heroImage}
          alt="Ugandan wilderness landscape inviting visitors to explore the Pearl of Africa"
          fetchPriority="high"
        />
        <div className="home-hero-overlay" />

        <div className="home-container home-hero-inner">
          <div className="home-hero-copy">
            <Eyebrow light>PEARL P INTERNATIONAL SAFARI · UGANDA</Eyebrow>

            <h1 id="home-hero-title">
              The wild is
              <br />
              <em>calling.</em>
            </h1>

            <p className="home-hero-description">
              Discover the Pearl of Africa through extraordinary wildlife,
              mountain gorillas, rich cultures and journeys designed around
              you. From your first plans to the road ahead, let's make your
              Uganda experience memorable.
            </p>

            <div className="home-hero-actions">
              <HomeButton to="/safari-packages">
                Explore Our Safaris <ArrowRight size={17} />
              </HomeButton>
              <HomeButton href={whatsappUrl} variant="outline">
                <MessageCircle size={17} /> Plan Your Journey
              </HomeButton>
            </div>

            <div className="home-hero-trust">
              <span>
                <MapPin size={16} /> Based in Kampala, Uganda
              </span>
              <span>
                <CheckCircle2 size={16} /> Local and international enquiries
              </span>
            </div>
          </div>

          <a className="home-scroll-link" href="#home-intro">
            <span className="home-scroll-icon">
              <ArrowDown size={15} />
            </span>
            DISCOVER PEARL P
          </a>

          <div className="home-hero-side-note" aria-hidden="true">
            <span />
            THE PEARL OF AFRICA
          </div>
        </div>
      </section>

      {/* INTRODUCTION */}
      <section className="home-intro" id="home-intro">
        <div className="home-container home-intro-grid">
          <div className="home-intro-heading">
            <Eyebrow>YOUR JOURNEY, OUR PRIORITY</Eyebrow>
            <h2>
              Uganda is the destination.
              <br />
              <em>Your journey is the story.</em>
            </h2>
          </div>

          <div className="home-intro-copy">
            <p>
              Pearl P International Safari helps travellers explore Uganda
              through wildlife, nature, culture and memorable travel
              experiences. Whether you are planning a gorilla trek, organising
              a holiday or arranging transport, start by telling us what you
              have in mind.
            </p>
            <p>
              We also accept enquiries for accommodation, airport transfers,
              driver hire, city trips and other travel services. Share your
              plans with our team to discuss suitable arrangements.
            </p>
            <p className="home-intro-slogan">
              We travel all distances. Don't get stuck anywhere.
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
            alt="Travel scenery and experiences in Uganda"
            loading="lazy"
          />
          <div className="home-intro-photo-caption">
            <span>01 / DISCOVER</span>
            <span>Find your own Uganda.</span>
          </div>
        </div>
      </section>

      {/* EXPERIENCES */}
      <section className="home-experiences" id="experiences">
        <div className="home-container">
          <div className="home-section-heading">
            <div>
              <Eyebrow>EXPERIENCE THE EXTRAORDINARY</Eyebrow>
              <h2>
                Not just places.
                <br />
                <em>Unforgettable moments.</em>
              </h2>
            </div>
            <p>
              From the mountain forests to the open savannah, discover
              experiences that bring you closer to Uganda's extraordinary
              wildlife and natural beauty.
            </p>
          </div>

          <div className="home-experience-grid">
            {experiences.map((experience) => {
              const Icon = experience.icon;

              return (
                <article className="home-experience-card" key={experience.title}>
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
              Explore Safari Packages <ArrowRight size={16} />
            </HomeButton>
          </div>
        </div>
      </section>

      {/* DESTINATIONS */}
      <section className="home-destinations" id="destinations">
        <div className="home-container">
          <div className="home-section-heading">
            <div>
              <Eyebrow>THE PEARL OF AFRICA</Eyebrow>
              <h2>
                Three places.
                <br />
                <em>A thousand reasons to go.</em>
              </h2>
            </div>
            <p>
              Explore some of Uganda's best-known natural destinations and
              start planning the experience that interests you.
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
                <span className="home-destination-number">
                  {destination.number}
                </span>
                <span className="home-destination-copy">
                  <span className="home-destination-type">
                    {destination.type}
                  </span>
                  <span className="home-destination-name">
                    {destination.name}
                  </span>
                  <span className="home-destination-link">
                    Explore destination <ArrowUpRight size={16} />
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

      {/* PLANNING */}
      <section className="home-planning" id="trip-planning">
        <img
          className="home-planning-image"
          src={planningImage}
          alt=""
          loading="lazy"
        />
        <div className="home-planning-overlay" />

        <div className="home-container home-planning-grid">
          <div className="home-planning-copy">
            <Eyebrow light>LET'S PLAN YOUR JOURNEY</Eyebrow>
            <h2>
              Your idea.
              <br />
              Our <em>next steps.</em>
            </h2>
            <p>
              Tell us where you want to go, what you want to experience or
              which travel service you need. We'll help you discuss the
              available options before you confirm.
            </p>
            <HomeButton href={whatsappUrl}>
              <MessageCircle size={17} /> Start Planning on WhatsApp
            </HomeButton>
          </div>

          <div className="home-planning-list">
            {planningSteps.map((step) => (
              <div className="home-planning-item" key={step.number}>
                <span className="home-planning-number">{step.number}</span>
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
          <div className="home-section-heading">
            <div>
              <Eyebrow>MORE WAYS WE CAN HELP</Eyebrow>
              <h2>
                Beyond the safari.
                <br />
                <em>Here for the journey.</em>
              </h2>
            </div>
            <p>
              Need a hotel, driver, airport transfer or a delivery
              arrangement? Explore our services and contact us to discuss
              your requirements.
            </p>
          </div>

          <div className="home-services-grid">
            {services.map((service, index) => {
              const Icon = service.icon;

              return (
                <article className="home-service-card" key={service.title}>
                  <div className="home-service-top">
                    <span>{String(index + 1).padStart(2, "0")}</span>
                    <span className="home-service-icon">
                      <Icon size={22} strokeWidth={1.6} />
                    </span>
                  </div>
                  <h3>{service.title}</h3>
                  <p>{service.description}</p>
                  <Link to={service.link} className="home-service-link">
                    Explore service <ArrowRight size={15} />
                  </Link>
                </article>
              );
            })}
          </div>

          <div className="home-services-contact">
            <div className="home-services-contact-copy">
              <span className="home-services-contact-icon">
                <MessageCircle size={20} />
              </span>
              <div>
                <h3>Have a specific request?</h3>
                <p>
                  Tell us what you need. We'll discuss the details, availability
                  and next steps with you.
                </p>
              </div>
            </div>
            <HomeButton href={whatsappUrl} variant="dark">
              Talk to Our Team <ArrowUpRight size={16} />
            </HomeButton>
          </div>
        </div>
      </section>

      {/* TRAVEL GUIDE */}
      <section className="home-guide">
        <div className="home-container home-guide-inner">
          <div className="home-guide-mark">
            <Compass size={29} strokeWidth={1.4} />
          </div>
          <div className="home-guide-copy">
            <Eyebrow>TRAVEL BETTER</Eyebrow>
            <h2>Getting ready for Uganda?</h2>
            <p>
              Explore useful information to help you prepare for your trip,
              understand your options and plan with greater confidence.
            </p>
          </div>
          <HomeButton to="/travel-guide" variant="dark">
            Read the Travel Guide <ArrowRight size={16} />
          </HomeButton>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="home-final-cta">
        <img className="home-final-cta-image" src={ctaImage} alt="" loading="lazy" />
        <div className="home-final-cta-overlay" />

        <div className="home-final-cta-content">
          <span className="home-final-icon">
            <Sparkles size={21} />
          </span>
          <Eyebrow light>YOUR NEXT CHAPTER STARTS HERE</Eyebrow>
          <h2>
            Uganda is waiting.
            <br />
            <em>Let's make it happen.</em>
          </h2>
          <p>
            A gorilla trek, a safari, a city trip or a journey across the
            country. Tell us what you have in mind and let's start planning.
          </p>

          <div className="home-final-cta-actions">
            <HomeButton href={whatsappUrl}>
              <MessageCircle size={17} /> Plan With Us
            </HomeButton>
            <a
              className="home-button home-button-outline"
              href={`tel:${PHONE_NUMBER}`}
            >
              <Phone size={16} /> Call {PHONE_NUMBER}
            </a>
          </div>

          <div className="home-final-details">
            <span>
              <MapPin size={15} /> Ggaba Road, Bunga, Ivory Mall, Kampala
            </span>
            <span>
              <ShieldCheck size={15} /> Confirm arrangements before travelling
            </span>
          </div>

          <p className="home-final-slogan">
            WE TRAVEL ALL DISTANCES. DON'T GET STUCK ANYWHERE YOU ARE.
          </p>
        </div>
      </section>
    </div>
  );
}
