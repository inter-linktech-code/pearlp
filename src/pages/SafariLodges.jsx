
import React from "react";
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import {
  ArrowDownRight,
  ArrowRight,
  BedDouble,
  Check,
  Compass,
  Leaf,
  MapPin,
  Mountain,
  Trees,
  Waves,
} from "lucide-react";
import "./SafariLodges.css";

const accommodationTypes = [
  {
    number: "01",
    icon: BedDouble,
    title: "Luxury safari lodges",
    description:
      "For travellers looking for distinctive stays, thoughtful comfort and memorable settings close to Uganda's wild places.",
    tags: ["Comfort", "Scenic settings", "Special occasions"],
    image:
      "https://images.unsplash.com/photo-1510798831971-661eb04b3739?auto=format&fit=crop&w=1100&q=85",
    alt: "Peaceful lodge-style accommodation surrounded by nature",
  },
  {
    number: "02",
    icon: Trees,
    title: "Rainforest retreats",
    description:
      "Stay near forest landscapes and plan early starts for gorilla trekking, chimpanzee tracking and guided nature walks.",
    tags: ["Forest locations", "Primate experiences", "Nature"],
    image:
      "https://images.unsplash.com/photo-1448375240586-882707db888b?auto=format&fit=crop&w=1100&q=85",
    alt: "Dense green rainforest with sunlight filtering through the trees",
  },
  {
    number: "03",
    icon: Mountain,
    title: "Safari camps & wilderness stays",
    description:
      "Consider a stay that brings you closer to the landscapes and wildlife areas on your safari route.",
    tags: ["Wildlife areas", "Outdoor atmosphere", "Adventure"],
    image:
      "https://images.unsplash.com/photo-1478131143081-80f7f84ca84d?auto=format&fit=crop&w=1100&q=85",
    alt: "Tent accommodation in a natural outdoor setting",
  },
];

const regions = [
  {
    icon: Trees,
    title: "Bwindi & Mgahinga",
    type: "Rainforest and gorilla trekking",
    description:
      "Explore accommodation options around Uganda's southwestern gorilla trekking region, with the location chosen to suit your permit and itinerary.",
    image:
      "https://images.unsplash.com/photo-1448375240586-882707db888b?auto=format&fit=crop&w=900&q=85",
  },
  {
    icon: Compass,
    title: "Queen Elizabeth",
    type: "Wildlife and savannah landscapes",
    description:
      "Plan an overnight stay that works with game drives, a possible Kazinga Channel boat trip and your onward journey.",
    image:
      "https://images.unsplash.com/photo-1516026672322-bc52d61a55d5?auto=format&fit=crop&w=900&q=85",
  },
  {
    icon: Leaf,
    title: "Murchison Falls",
    type: "Wildlife and the Nile",
    description:
      "Explore stays suited to a safari featuring game viewing, the Nile and the dramatic landscapes around Murchison Falls.",
    image:
      "https://images.unsplash.com/photo-1516426122078-c23e76319801?auto=format&fit=crop&w=900&q=85",
  },
  {
    icon: Waves,
    title: "Lake Bunyonyi",
    type: "Lakeside relaxation",
    description:
      "Consider a quieter lakeside stop to slow down, enjoy the scenery and add a restful chapter to your Uganda journey.",
    image:
      "https://images.unsplash.com/photo-1470770841072-f978cf4d019e?auto=format&fit=crop&w=900&q=85",
  },
];

const planningSteps = [
  {
    number: "01",
    title: "Share your route",
    description:
      "Tell us which parks and destinations you hope to visit, or let us help you shape the route.",
  },
  {
    number: "02",
    title: "Tell us how you like to travel",
    description:
      "Share your preferred comfort level, room arrangements, group size and any special requirements.",
  },
  {
    number: "03",
    title: "Discuss suitable options",
    description:
      "Review accommodation possibilities that fit your planned route, travel dates and budget.",
  },
];

function AccommodationCard({ item }) {
  const Icon = item.icon;

  return (
    <article className="lodges-type-card">
      <div className="lodges-type-image-wrap">
        <img src={item.image} alt={item.alt} loading="lazy" />
        <span className="lodges-card-number">{item.number}</span>
      </div>

      <div className="lodges-type-content">
        <div className="lodges-type-icon">
          <Icon size={21} strokeWidth={1.5} />
        </div>
        <h3>{item.title}</h3>
        <p>{item.description}</p>

        <div className="lodges-tags">
          {item.tags.map((tag) => (
            <span key={tag}>{tag}</span>
          ))}
        </div>
      </div>
    </article>
  );
}

function RegionCard({ region }) {
  const Icon = region.icon;

  return (
    <article className="lodges-region-card">
      <div className="lodges-region-image">
        <img src={region.image} alt={region.title} loading="lazy" />
        <span className="lodges-region-pin">
          <MapPin size={15} />
          Uganda
        </span>
      </div>

      <div className="lodges-region-content">
        <span className="lodges-region-type">
          <Icon size={15} />
          {region.type}
        </span>
        <h3>{region.title}</h3>
        <p>{region.description}</p>
        <Link
          to="/contact"
          className="lodges-region-link"
          aria-label={`Enquire about accommodation near ${region.title}`}
        >
          Discuss this region <ArrowRight size={16} />
        </Link>
      </div>
    </article>
  );
}

export default function SafariLodges() {
  return (
    <>
      <Helmet>
        <title>
          Uganda Safari Lodges & Accommodation | PearlP Safaris
        </title>
        <meta
          name="description"
          content="Explore safari lodge, rainforest retreat, wilderness camp and lakeside accommodation options for a Uganda safari. Discuss your route, travel dates and stay preferences with PearlP Safaris."
        />
        <meta
          name="robots"
          content="index, follow, max-image-preview:large"
        />
        <link
          rel="canonical"
          href="https://YOUR-DOMAIN-HERE/uganda-safari-lodges"
        />
        <meta
          property="og:title"
          content="Uganda Safari Lodges & Accommodation | PearlP Safaris"
        />
        <meta
          property="og:description"
          content="Find accommodation ideas for gorilla trekking, wildlife safaris and scenic escapes in Uganda."
        />
        <meta property="og:type" content="website" />
        <meta
          property="og:url"
          content="https://YOUR-DOMAIN-HERE/uganda-safari-lodges"
        />
      </Helmet>

      <main className="lodges-page">
        <section className="lodges-hero">
          <img
            className="lodges-hero-image"
            src="https://images.unsplash.com/photo-1449158743715-0a90ebb6d2d8?auto=format&fit=crop&w=2200&q=90"
            alt="A peaceful nature retreat surrounded by green forest"
          />
          <div className="lodges-hero-overlay" />

          <div className="lodges-hero-inner page-container">
            <div className="lodges-hero-copy">
              <span className="eyebrow">
                <span className="lodges-eyebrow-line" />
                STAY CLOSE TO THE EXPERIENCE
              </span>

              <h1>
                Where Uganda
                <br />
                <em>welcomes you in.</em>
              </h1>

              <p>
                The right place to stay can shape your entire safari. Discover
                accommodation ideas for rainforest adventures, wildlife
                journeys and slower days beside the lake.
              </p>

              <div className="lodges-hero-actions">
                <Link to="/contact" className="button button-gold">
                  Plan your stay <ArrowRight size={17} />
                </Link>
                <a href="#accommodation" className="lodges-hero-text-link">
                  Explore accommodation <ArrowDownRight size={17} />
                </a>
              </div>
            </div>

            <div className="lodges-hero-caption">
              <span className="lodges-caption-rule" />
              <span>YOUR JOURNEY, YOUR KIND OF STAY</span>
            </div>
          </div>

          <div className="lodges-hero-index">
            <span>01</span>
            <span className="lodges-index-line" />
            <span>UGANDA</span>
          </div>
        </section>

        <section className="lodges-intro section-padding">
          <div className="page-container lodges-intro-grid">
            <div className="lodges-intro-heading">
              <span className="eyebrow-dark">A PLACE TO PAUSE</span>
              <h2 className="section-heading">
                More than a room.
                <br />
                <em>Part of the story.</em>
              </h2>
            </div>

            <div className="lodges-intro-copy">
              <p>
                From the edge of an ancient rainforest to open savannah and
                tranquil lakeshores, Uganda offers very different settings
                for a night away.
              </p>
              <p>
                We help you think through where to stay, how each stop fits
                into your route and what matters most to your travel group.
                The aim is a considered itinerary—not simply a list of places
                to sleep.
              </p>

              <div className="lodges-intro-note">
                <span className="lodges-note-mark">“</span>
                <span>
                  Let the landscape guide your stay, and let your stay
                  complement the journey.
                </span>
              </div>
            </div>
          </div>
        </section>

        <section
          className="lodges-accommodation section-padding"
          id="accommodation"
        >
          <div className="page-container">
            <div className="lodges-section-top">
              <div>
                <span className="eyebrow-dark">FIND YOUR KIND OF COMFORT</span>
                <h2 className="section-heading">
                  Stay your <em>way.</em>
                </h2>
              </div>
              <p>
                Different journeys call for different places to stay. Start
                with the experience you want, then shape the details around
                your itinerary and budget.
              </p>
            </div>

            <div className="lodges-type-grid">
              {accommodationTypes.map((item) => (
                <AccommodationCard key={item.number} item={item} />
              ))}
            </div>

            <p className="lodges-image-disclaimer">
              Images are illustrative. Specific properties, facilities,
              rates and availability must be confirmed when planning your
              stay.
            </p>
          </div>
        </section>

        <section className="lodges-regions section-padding">
          <div className="page-container">
            <div className="lodges-section-top lodges-regions-top">
              <div>
                <span className="eyebrow-dark">STAYS ALONG THE WAY</span>
                <h2 className="section-heading">
                  Find your place
                  <br />
                  <em>in the landscape.</em>
                </h2>
              </div>
              <p>
                Accommodation is best planned around the places you want to
                explore. These regions offer different experiences and can
                help shape your overnight stops.
              </p>
            </div>

            <div className="lodges-regions-grid">
              {regions.map((region) => (
                <RegionCard key={region.title} region={region} />
              ))}
            </div>

            <div className="lodges-regions-footnote">
              <MapPin size={18} />
              <p>
                The best overnight location depends on your activity, route,
                transport arrangements and confirmed bookings.
              </p>
            </div>
          </div>
        </section>

        <section className="lodges-planning section-padding">
          <div className="page-container lodges-planning-grid">
            <div className="lodges-planning-copy">
              <span className="eyebrow">THOUGHTFUL TRAVEL, WELL PLANNED</span>
              <h2>
                A better stay
                <br />
                starts <em>before arrival.</em>
              </h2>
              <p>
                We can discuss your accommodation preferences alongside your
                safari plans, so your overnight stops make sense for the
                journey you want to take.
              </p>
              <Link to="/uganda-safaris" className="lodges-light-link">
                Explore Uganda safaris <ArrowRight size={17} />
              </Link>
            </div>

            <div className="lodges-planning-steps">
              {planningSteps.map((step) => (
                <div className="lodges-planning-step" key={step.number}>
                  <span className="lodges-step-number">{step.number}</span>
                  <div>
                    <h3>{step.title}</h3>
                    <p>{step.description}</p>
                  </div>
                  <Check className="lodges-step-check" size={18} />
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="lodges-considerations section-padding">
          <div className="page-container lodges-considerations-grid">
            <div>
              <span className="eyebrow-dark">BEFORE YOU BOOK</span>
              <h2 className="section-heading">
                The details
                <br />
                <em>make the difference.</em>
              </h2>
            </div>

            <div className="lodges-considerations-list">
              <div>
                <span>01</span>
                <p>Travel dates and number of nights in each location</p>
              </div>
              <div>
                <span>02</span>
                <p>Preferred comfort level and approximate accommodation budget</p>
              </div>
              <div>
                <span>03</span>
                <p>Number of travellers, room arrangements and children travelling</p>
              </div>
              <div>
                <span>04</span>
                <p>Dietary needs, accessibility requirements and other preferences</p>
              </div>
              <div>
                <span>05</span>
                <p>Activities and parks you plan to visit during the trip</p>
              </div>
            </div>
          </div>
        </section>

        <section className="lodges-final-cta">
          <div className="lodges-final-image" />
          <div className="lodges-final-overlay" />
          <div className="page-container lodges-final-content">
            <span className="eyebrow">
              LET'S FIND YOUR PLACE IN UGANDA
            </span>
            <h2>
              Your journey deserves
              <br />
              <em>a thoughtful stay.</em>
            </h2>
            <p>
              Tell us where you want to go, when you plan to travel and what
              makes a stay special to you. Let's start planning.
            </p>
            <div className="lodges-final-actions">
              <Link to="/contact" className="button button-gold">
                Enquire about accommodation <ArrowRight size={17} />
              </Link>
              <Link to="/safari-packages" className="lodges-final-link">
                Discover safari ideas
              </Link>
            </div>
          </div>
          <span className="lodges-final-decoration" aria-hidden="true">
            P
          </span>
        </section>
      </main>
    </>
  );
}
