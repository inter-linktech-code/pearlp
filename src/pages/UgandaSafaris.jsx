
import React from "react";
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import {
  ArrowDown,
  ArrowRight,
  ArrowUpRight,
  Bird,
  CalendarCheck,
  CarFront,
  Compass,
  Footprints,
  Heart,
  Hotel,
  MapPinned,
  Mountain,
  Trees,
} from "lucide-react";
import "./UgandaSafaris.css";

import safariHeroImage from "../assets/safari-hero.jpg";
import gorillaImage from "../assets/gorilla.jpg";
import wildlifeImage from "../assets/wildlife.jpg";
import birdwatchingImage from "../assets/birdwatching.jpg";
import hikingImage from "../assets/hiking.jpg";
import culturalImage from "../assets/cultural.jpg";
import safariVehicleImage from "../assets/safari-vehicle.jpg";
import kibaleImage from "../assets/kibale.jpg";
import bunyonyiImage from "../assets/bunyonyi.jpg";
import kidepoImage from "../assets/kidepo.jpg";
import murchisonImage from "../assets/murchison.jpg";

const SITE_URL = "https://pearlpsafaris.com";
const PAGE_URL = `${SITE_URL}/uganda-safaris`;

const experiences = [
  {
    number: "01",
    title: "Gorilla Trekking",
    location: "Bwindi Impenetrable Forest",
    description:
      "Venture into Uganda's ancient rainforest for an unforgettable encounter with endangered mountain gorillas in their natural habitat.",
    image: gorillaImage,
    alt: "Mountain gorilla in its natural rainforest habitat in Uganda",
    icon: Trees,
    tag: "Wildlife encounter",
    link: "/gorilla-trekking",
  },
  {
    number: "02",
    title: "Wildlife Safaris",
    location: "Uganda's national parks",
    description:
      "Discover remarkable wildlife, open savannahs and unforgettable game drives across Uganda's diverse national parks.",
    image: wildlifeImage,
    alt: "Wildlife in Uganda's national parks",
    icon: Compass,
    tag: "Classic safari",
    link: "/wildlife-safaris",
  },
  {
    number: "03",
    title: "Birdwatching",
    location: "Forests, wetlands and savannahs",
    description:
      "Explore Uganda's exceptional birdlife, from colourful forest species to wetland birds and memorable sightings in the wild.",
    image: birdwatchingImage,
    alt: "Birdwatching in Uganda's diverse natural habitats",
    icon: Bird,
    tag: "Nature discovery",
    link: "/birdwatching",
  },
  {
    number: "04",
    title: "Hiking & Adventure",
    location: "Mountains and scenic trails",
    description:
      "Explore Uganda on foot, from peaceful nature walks to rewarding mountain adventures and spectacular viewpoints.",
    image: hikingImage,
    alt: "Hiking and outdoor adventure in Uganda",
    icon: Footprints,
    tag: "Outdoor adventure",
    link: "/hiking-adventure",
  },
  {
    number: "05",
    title: "Chimpanzee Tracking",
    location: "Kibale Forest",
    description:
      "Explore tropical forest and discover the fascinating behaviour of chimpanzees and other primates in their natural environment.",
    image: kibaleImage,
    alt: "Kibale Forest, a destination for chimpanzee tracking",
    icon: Trees,
    tag: "Forest experience",
    link: "/safari-packages",
  },
  {
    number: "06",
    title: "Cultural Experiences",
    location: "Communities across Uganda",
    description:
      "Discover local traditions, community life, cultural heritage and the stories that make Uganda such a distinctive destination.",
    image: culturalImage,
    alt: "Cultural experiences and local traditions in Uganda",
    icon: Heart,
    tag: "Culture & heritage",
    link: "/cultural-tours",
  },
  {
    number: "07",
    title: "Private Safari Travel",
    location: "Journeys tailored to your plans",
    description:
      "Enquire about private safari transport and personalised travel arrangements for your destinations, activities and itinerary.",
    image: safariVehicleImage,
    alt: "Safari vehicle for exploring Uganda",
    icon: CarFront,
    tag: "Personalised travel",
    link: "/contact",
  },
  {
    number: "08",
    title: "Remote Wilderness Safaris",
    location: "Kidepo Valley",
    description:
      "Discover dramatic landscapes, expansive savannah and the distinctive wilderness atmosphere of Uganda's far north-east.",
    image: kidepoImage,
    alt: "Kidepo Valley wilderness landscape in Uganda",
    icon: Compass,
    tag: "Off the beaten path",
    link: "/safari-packages",
  },
  {
    number: "09",
    title: "Murchison Falls Adventures",
    location: "Murchison Falls National Park",
    description:
      "Experience the spectacular Nile, dramatic scenery and wildlife in one of Uganda's most remarkable natural destinations.",
    image: murchisonImage,
    alt: "Murchison Falls region and surrounding natural landscape",
    icon: Mountain,
    tag: "Scenic adventure",
    link: "/wildlife-safaris",
  },
];

const services = [
  {
    icon: MapPinned,
    title: "Safari Planning",
    description:
      "Get help choosing destinations, activities and a practical itinerary around your interests, travel dates and budget.",
  },
  {
    icon: CalendarCheck,
    title: "Tailor-Made Safari Packages",
    description:
      "Enquire about safari options for couples, families, groups, solo travellers and visitors seeking a personalised journey.",
  },
  {
    icon: CarFront,
    title: "Safari Transport",
    description:
      "Ask about suitable transport and transfer arrangements for journeys between your chosen destinations.",
  },
  {
    icon: Hotel,
    title: "Accommodation Arrangements",
    description:
      "Discuss suitable places to stay near your chosen destinations, from comfortable lodges to other accommodation options.",
  },
];

const highlights = [
  {
    number: "01",
    title: "Remarkable biodiversity",
    description:
      "Rainforests, savannahs, wetlands, mountains and rich wildlife make Uganda an extraordinary destination to explore.",
  },
  {
    number: "02",
    title: "Journeys shaped around you",
    description:
      "Choose the experiences that interest you and enquire about a safari that fits your available time and travel budget.",
  },
  {
    number: "03",
    title: "More than a game drive",
    description:
      "Combine wildlife encounters with nature, scenery, culture and memorable moments across the Pearl of Africa.",
  },
];

function UgandaSafaris() {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "TouristDestination",
    name: "Uganda Safaris",
    description:
      "Discover Uganda safari experiences, gorilla trekking, wildlife safaris, birdwatching, hiking and personalised safari planning with PEARLP SAFARIS.",
    url: PAGE_URL,
    touristType: [
      "Wildlife enthusiasts",
      "Nature travellers",
      "Adventure travellers",
      "Cultural travellers",
    ],
    containedInPlace: {
      "@type": "Country",
      name: "Uganda",
    },
    provider: {
      "@type": "TravelAgency",
      name: "PEARLP SAFARIS",
      url: SITE_URL,
    },
  };

  return (
    <main className="uganda-safaris-page">
      <Helmet>
        <title>
          Uganda Safaris | Gorilla Trekking, Wildlife & Adventure | PEARLP
          SAFARIS
        </title>

        <meta
          name="description"
          content="Discover Uganda safaris with PEARLP SAFARIS. Explore gorilla trekking, wildlife safaris, birdwatching, hiking, cultural experiences and personalised safari travel."
        />

        <link rel="canonical" href={PAGE_URL} />

        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="PEARLP SAFARIS" />
        <meta
          property="og:title"
          content="Discover Uganda Safaris | PEARLP SAFARIS"
        />
        <meta
          property="og:description"
          content="Explore Uganda's wildlife, rainforests, mountains and cultural experiences with PEARLP SAFARIS."
        />
        <meta property="og:url" content={PAGE_URL} />
        <meta property="og:image" content={safariHeroImage} />
        <meta name="twitter:card" content="summary_large_image" />

        <script type="application/ld+json">
          {JSON.stringify(structuredData)}
        </script>
      </Helmet>

      {/* UGANDA SAFARIS HERO */}
      <section className="safaris-hero">
        <div className="safaris-hero-image">
          <img
            src={safariHeroImage}
            alt="Uganda's beautiful wilderness and natural landscapes"
            fetchPriority="high"
          />
        </div>

        <div className="safaris-hero-overlay" />

        <div className="page-container safaris-hero-inner">
          <div className="safaris-hero-content">
            <div className="safaris-breadcrumb">
              <Link to="/">Home</Link>
              <span>/</span>
              <span>Uganda Safaris</span>
            </div>

            <span className="safaris-eyebrow">
              <span className="safaris-eyebrow-line" />
              Discover the Pearl of Africa
            </span>

            <h1>
              Uganda is more than
              <br />
              a destination.
              <br />
              <em>It&apos;s a feeling.</em>
            </h1>

            <p>
              From mist-covered rainforests and extraordinary wildlife to
              breathtaking landscapes and authentic local experiences,
              discover a country that stays with you long after the journey
              ends.
            </p>

            <div className="safaris-hero-actions">
              <Link
                to="/safari-packages"
                className="safaris-btn safaris-btn-gold"
              >
                Explore Safari Packages
                <ArrowUpRight size={18} />
              </Link>

              <Link
                to="/contact"
                className="safaris-btn safaris-btn-outline"
              >
                Plan Your Safari
                <ArrowRight size={18} />
              </Link>
            </div>

            <a href="#safari-experiences" className="safaris-scroll-link">
              <span className="safaris-scroll-icon">
                <ArrowDown size={16} />
              </span>
              <span>Explore the experiences</span>
            </a>
          </div>

          <div className="safaris-hero-caption">
            <span className="safaris-caption-dot" />
            <span>Uganda, East Africa</span>
          </div>
        </div>
      </section>

      {/* INTRODUCTION */}
      <section className="safaris-intro section-space">
        <div className="page-container safaris-intro-grid">
          <div className="safaris-intro-heading">
            <span className="safaris-eyebrow safaris-eyebrow-dark">
              A country of extraordinary contrasts
            </span>

            <h2>
              One country.
              <br />
              <em>Endless ways to explore.</em>
            </h2>
          </div>

          <div className="safaris-intro-copy">
            <p>
              Uganda brings together some of Africa&apos;s most memorable
              travel experiences. Follow wildlife trails across open
              savannahs, venture into ancient forests, discover spectacular
              waterfalls or unwind beside peaceful lakes.
            </p>

            <p>
              Whether you are visiting for the first time or returning to
              explore further, PEARLP SAFARIS helps you discover experiences
              and destinations suited to your journey.
            </p>

            <Link to="/destinations" className="safaris-text-link">
              Discover Uganda&apos;s destinations
              <ArrowRight size={17} />
            </Link>
          </div>
        </div>
      </section>

      {/* SAFARI EXPERIENCES */}
      <section
        className="safaris-experiences section-space"
        id="safari-experiences"
      >
        <div className="page-container">
          <div className="safaris-section-heading">
            <div>
              <span className="safaris-eyebrow safaris-eyebrow-dark">
                Find your kind of adventure
              </span>

              <h2>
                Experiences that
                <br />
                <em>bring Uganda to life.</em>
              </h2>
            </div>

            <p>
              Every traveller has a different idea of the perfect safari.
              Discover experiences that inspire you, then start planning your
              journey.
            </p>
          </div>

          <div className="safaris-experience-grid">
            {experiences.map((experience) => {
              const ExperienceIcon = experience.icon;

              return (
                <article
                  className="safaris-experience-card"
                  key={experience.number}
                >
                  <Link
                    to={experience.link}
                    className="safaris-experience-image"
                    aria-label={`Explore ${experience.title}`}
                  >
                    <img
                      src={experience.image}
                      alt={experience.alt}
                      loading="lazy"
                    />

                    <span className="safaris-card-number">
                      {experience.number}
                    </span>

                    <span className="safaris-card-arrow">
                      <ArrowUpRight size={19} />
                    </span>
                  </Link>

                  <div className="safaris-experience-content">
                    <div className="safaris-card-meta">
                      <span className="safaris-card-icon">
                        <ExperienceIcon size={16} />
                      </span>
                      <span>{experience.tag}</span>
                    </div>

                    <h3>
                      <Link to={experience.link}>
                        {experience.title}
                      </Link>
                    </h3>

                    <div className="safaris-card-location">
                      <MapPinned size={14} />
                      <span>{experience.location}</span>
                    </div>

                    <p>{experience.description}</p>

                    <Link
                      to={experience.link}
                      className="safaris-card-link"
                    >
                      Discover experience
                      <ArrowRight size={16} />
                    </Link>
                  </div>
                </article>
              );
            })}
          </div>

          <div className="safaris-grid-footer">
            <p>Looking for a complete journey rather than one experience?</p>

            <Link to="/safari-packages" className="safaris-text-link">
              View safari packages
              <ArrowRight size={17} />
            </Link>
          </div>
        </div>
      </section>

      {/* TRAVEL SERVICES */}
      <section className="safaris-services section-space">
        <div className="page-container">
          <div className="safaris-services-heading">
            <span className="safaris-eyebrow">
              From inspiration to itinerary
            </span>

            <h2>
              Your journey starts
              <br />
              <em>with the right plan.</em>
            </h2>

            <p>
              Tell us what you want to experience and enquire about the
              arrangements you need for your Uganda trip.
            </p>
          </div>

          <div className="safaris-services-grid">
            {services.map((service, index) => {
              const ServiceIcon = service.icon;

              return (
                <article className="safaris-service-card" key={service.title}>
                  <div className="safaris-service-top">
                    <span className="safaris-service-icon">
                      <ServiceIcon size={23} strokeWidth={1.6} />
                    </span>

                    <span className="safaris-service-number">
                      0{index + 1}
                    </span>
                  </div>

                  <h3>{service.title}</h3>
                  <p>{service.description}</p>

                  <Link
                    to="/contact"
                    className="safaris-service-link"
                    aria-label={`Enquire about ${service.title}`}
                  >
                    Enquire about this service
                    <ArrowUpRight size={17} />
                  </Link>
                </article>
              );
            })}
          </div>

          <div className="safaris-services-note">
            <span className="safaris-note-icon">
              <Compass size={20} />
            </span>

            <p>
              Have a different idea in mind?{" "}
              <Link to="/contact">Tell us about your trip</Link> and ask about
              the arrangements available for your itinerary.
            </p>
          </div>
        </div>
      </section>

      {/* WHY UGANDA */}
      <section className="safaris-highlights section-space">
        <div className="page-container safaris-highlights-grid">
          <div className="safaris-highlights-visual">
            <img
              src={murchisonImage}
              alt="Murchison Falls region and Uganda's dramatic natural scenery"
              loading="lazy"
            />

            <div className="safaris-visual-label">
              <span>01 / THE PEARL OF AFRICA</span>
              <p>Nature at its most unforgettable.</p>
            </div>
          </div>

          <div className="safaris-highlights-content">
            <span className="safaris-eyebrow safaris-eyebrow-dark">
              Why discover Uganda?
            </span>

            <h2>
              Wild at heart.
              <br />
              <em>Rich in experiences.</em>
            </h2>

            <p className="safaris-highlights-lead">
              Uganda offers a remarkable mix of wildlife, scenery, culture and
              adventure in one welcoming East African destination.
            </p>

            <div className="safaris-highlight-list">
              {highlights.map((highlight) => (
                <div
                  className="safaris-highlight-item"
                  key={highlight.number}
                >
                  <span className="safaris-highlight-number">
                    {highlight.number}
                  </span>

                  <div>
                    <h3>{highlight.title}</h3>
                    <p>{highlight.description}</p>
                  </div>
                </div>
              ))}
            </div>

            <Link to="/destinations" className="safaris-text-link">
              Find your destination
              <ArrowRight size={17} />
            </Link>
          </div>
        </div>
      </section>

      {/* FINAL CALL TO ACTION */}
      <section className="safaris-final-cta">
        <div className="safaris-final-image">
          <img
            src={bunyonyiImage}
            alt="Lake Bunyonyi and Uganda's peaceful scenic countryside"
            loading="lazy"
          />
        </div>

        <div className="safaris-final-overlay" />

        <div className="page-container safaris-final-content">
          <span className="safaris-eyebrow">
            Your Uganda story begins here
          </span>

          <h2>
            The journey is yours.
            <br />
            <em>Let&apos;s make it unforgettable.</em>
          </h2>

          <p>
            Share your travel plans with PEARLP SAFARIS and start exploring
            possibilities for your Uganda adventure.
          </p>

          <div className="safaris-hero-actions">
            <Link to="/contact" className="safaris-btn safaris-btn-gold">
              Start Planning
              <ArrowUpRight size={18} />
            </Link>

            <Link
              to="/safari-packages"
              className="safaris-btn safaris-btn-outline"
            >
              Browse Packages
              <ArrowRight size={18} />
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}

export default UgandaSafaris;
