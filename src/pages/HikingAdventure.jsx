// src/pages/HikingAdventure.jsx

import React from "react";
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import {
  ArrowDown,
  ArrowRight,
  ArrowUpRight,
  Compass,
  Footprints,
  Mountain,
  MapPin,
  ShieldCheck,
  Trees,
  Waves,
} from "lucide-react";

import "./HikingAdventure.css";

import hikingHeroImage from "../assets/hiking-hero.jpg";
import mountainHikingImage from "../assets/mountain-hiking.jpg";
import sipiFallsImage from "../assets/sipi-falls.jpg";
import forestHikingImage from "../assets/forest-hiking.jpg";
import scenicOutdoorsImage from "../assets/scenic-outdoors.jpg";
import hikingLandscapeImage from "../assets/hiking-landscape.jpg";

const adventureExperiences = [
  {
    number: "01",
    title: "Mountain Hiking",
    location: "Rwenzori Mountains & Mount Elgon",
    description:
      "Discover dramatic mountain scenery, changing landscapes and hiking possibilities suited to your interests and experience.",
    image: mountainHikingImage,
    icon: Mountain,
    tag: "MOUNTAINS",
  },
  {
    number: "02",
    title: "Waterfalls & Nature Trails",
    location: "Sipi Falls & surrounding landscapes",
    description:
      "Explore scenic trails, green hillsides and waterfall country, with time to appreciate the landscape along the way.",
    image: sipiFallsImage,
    icon: Waves,
    tag: "NATURE TRAILS",
  },
  {
    number: "03",
    title: "Forest Walks",
    location: "Uganda's forest landscapes",
    description:
      "Slow down beneath the canopy and experience the sounds, textures and natural beauty of Uganda's forest environments.",
    image: forestHikingImage,
    icon: Trees,
    tag: "FORESTS",
  },
  {
    number: "04",
    title: "Scenic Outdoor Escapes",
    location: "Highlands, lakes and countryside",
    description:
      "Bring open landscapes, peaceful viewpoints and outdoor exploration into a journey designed around your travel style.",
    image: scenicOutdoorsImage,
    icon: Compass,
    tag: "THE OUTDOORS",
  },
];

const adventurePrinciples = [
  {
    icon: Footprints,
    title: "Choose your pace",
    text: "Discuss routes and activity levels that fit your experience and comfort.",
  },
  {
    icon: Mountain,
    title: "Discover varied landscapes",
    text: "Explore mountains, forest paths, waterfalls and open countryside.",
  },
  {
    icon: ShieldCheck,
    title: "Prepare responsibly",
    text: "Consider local guidance, weather, suitable equipment and route conditions.",
  },
];

const planningSteps = [
  {
    number: "01",
    title: "Tell us what excites you",
    description:
      "Share the landscapes you want to explore, your travel dates and your hiking experience.",
  },
  {
    number: "02",
    title: "Discuss suitable options",
    description:
      "Explore destinations and activities that may fit your interests, schedule and ability.",
  },
  {
    number: "03",
    title: "Prepare your itinerary",
    description:
      "Discuss logistics, local guidance, accommodation and transport before confirming your plans.",
  },
];

export default function HikingAdventure() {
  return (
    <>
      <Helmet>
        <title>
          Hiking & Adventure in Uganda | Nature Trails | PearlP Safaris
        </title>

        <meta
          name="description"
          content="Explore hiking and outdoor adventures in Uganda, from mountain landscapes and waterfall trails to forests and scenic countryside. Plan your journey with PearlP Safaris."
        />

        <meta
          name="keywords"
          content="hiking Uganda, adventure travel Uganda, Rwenzori hiking, Mount Elgon hiking, Sipi Falls hiking, Uganda nature trails, outdoor adventures Uganda"
        />

        <link
          rel="canonical"
          href="https://pearlpsafaris.com/hiking-adventure-uganda"
        />

        <meta property="og:type" content="website" />

        <meta
          property="og:title"
          content="Hiking & Adventure in Uganda | PearlP Safaris"
        />

        <meta
          property="og:description"
          content="Discover Uganda's mountain scenery, waterfalls, forest trails and outdoor experiences."
        />

        <meta
          property="og:url"
          content="https://pearlpsafaris.com/hiking-adventure-uganda"
        />

        <meta
          property="og:image"
          content="https://pearlpsafaris.com/webicon.png"
        />

        <meta name="twitter:card" content="summary_large_image" />
      </Helmet>

      <main className="hiking-page">
        <section
          className="hiking-hero"
          style={{
            backgroundImage: `url(${hikingHeroImage})`,
          }}
        >
          <div className="hiking-hero-shade" />

          <div className="page-container hiking-hero-inner">
            <div className="hiking-hero-copy">
              <span className="hiking-eyebrow">
                <span className="hiking-eyebrow-line" />
                HIKING • NATURE • ADVENTURE
              </span>

              <h1>
                Find your path.
                <br />
                <em>Feel the wild.</em>
              </h1>

              <p>
                From mountain horizons to hidden trails and cascading
                waterfalls, discover another side of Uganda on your own terms.
              </p>

              <div className="hiking-hero-actions">
                <Link
                  to="/contact"
                  className="hiking-button hiking-button-gold"
                >
                  Plan an adventure <ArrowUpRight size={18} />
                </Link>

                <Link to="/destinations" className="hiking-text-link">
                  Explore destinations <ArrowRight size={17} />
                </Link>
              </div>
            </div>

            <a href="#hiking-intro" className="hiking-scroll">
              <span>EXPLORE THE OUTDOORS</span>
              <ArrowDown size={16} />
            </a>
          </div>

          <div className="hiking-hero-label">
            <span>UGANDA</span>
            <span className="hiking-label-dot" />
            <span>BEYOND THE ORDINARY</span>
          </div>
        </section>

        <section
          className="hiking-intro hiking-section"
          id="hiking-intro"
        >
          <div className="page-container hiking-intro-grid">
            <div className="hiking-intro-heading">
              <span className="hiking-eyebrow hiking-eyebrow-dark">
                MAKE SPACE FOR DISCOVERY
              </span>

              <h2>
                A world waiting
                <br />
                <em>to be explored.</em>
              </h2>
            </div>

            <div className="hiking-intro-copy">
              <p>
                Uganda's landscapes invite you to experience the country
                beyond the traditional safari. Walk through changing scenery,
                take in sweeping views and discover the details that reveal
                themselves when you travel at a slower pace.
              </p>

              <p>
                Whether you are interested in a gentle nature walk or a more
                demanding mountain adventure, the right experience depends on
                your available time, fitness, preparation and local conditions.
              </p>

              <Link to="/uganda-safaris" className="hiking-inline-link">
                Explore Uganda safaris <ArrowUpRight size={17} />
              </Link>
            </div>
          </div>

          <div className="page-container hiking-principles">
            {adventurePrinciples.map((principle) => {
              const Icon = principle.icon;

              return (
                <article
                  className="hiking-principle"
                  key={principle.title}
                >
                  <Icon size={25} strokeWidth={1.4} />

                  <div>
                    <h3>{principle.title}</h3>
                    <p>{principle.text}</p>
                  </div>
                </article>
              );
            })}
          </div>
        </section>

        <section className="hiking-experiences hiking-section">
          <div className="page-container">
            <div className="hiking-section-heading">
              <div>
                <span className="hiking-eyebrow hiking-eyebrow-dark">
                  CHOOSE YOUR ADVENTURE
                </span>

                <h2>
                  Different paths.
                  <br />
                  <em>One extraordinary country.</em>
                </h2>
              </div>

              <p>
                Explore the kinds of outdoor experiences you could include in
                your journey. Routes, access, conditions and activity
                availability should be confirmed for your travel dates.
              </p>
            </div>

            <div className="hiking-experience-grid">
              {adventureExperiences.map((experience) => {
                const Icon = experience.icon;

                return (
                  <article
                    className="hiking-experience-card"
                    key={experience.number}
                  >
                    <div className="hiking-experience-image">
                      <img
                        src={experience.image}
                        alt={`${experience.title} in Uganda`}
                        loading="lazy"
                      />

                      <span className="hiking-experience-number">
                        {experience.number}
                      </span>

                      <span className="hiking-experience-icon">
                        <Icon size={20} strokeWidth={1.5} />
                      </span>
                    </div>

                    <div className="hiking-experience-body">
                      <span className="hiking-category">
                        {experience.tag}
                      </span>

                      <span className="hiking-location">
                        <MapPin size={14} />
                        {experience.location}
                      </span>

                      <h3>{experience.title}</h3>

                      <p>{experience.description}</p>

                      <Link
                        to="/contact"
                        className="hiking-card-link"
                        aria-label={`Enquire about ${experience.title}`}
                      >
                        Discuss this experience <ArrowUpRight size={17} />
                      </Link>
                    </div>
                  </article>
                );
              })}
            </div>
          </div>
        </section>

        <section
          className="hiking-landscape"
          style={{
            backgroundImage: `url(${hikingLandscapeImage})`,
          }}
        >
          <div className="hiking-landscape-shade" />

          <div className="page-container hiking-landscape-content">
            <span className="hiking-eyebrow">
              TAKE THE SCENIC ROUTE
            </span>

            <h2>
              Let the landscape
              <br />
              <em>set the pace.</em>
            </h2>

            <p>
              Make room for fresh air, remarkable views and the rewarding
              feeling of discovering somewhere new.
            </p>

            <Link
              to="/destinations"
              className="hiking-button hiking-button-gold"
            >
              Discover destinations <ArrowUpRight size={18} />
            </Link>
          </div>
        </section>

        <section className="hiking-planning hiking-section">
          <div className="page-container hiking-planning-grid">
            <div className="hiking-planning-copy">
              <span className="hiking-eyebrow hiking-eyebrow-dark">
                PLAN WITH CONFIDENCE
              </span>

              <h2>
                Your adventure
                <br />
                <em>starts with a plan.</em>
              </h2>

              <p>
                The best outdoor journey is one that matches your interests
                and is prepared with care. Tell us what you have in mind and
                discuss the practical details before you travel.
              </p>

              <Link
                to="/contact"
                className="hiking-button hiking-button-dark"
              >
                Start planning <ArrowUpRight size={18} />
              </Link>
            </div>

            <div className="hiking-planning-steps">
              {planningSteps.map((step) => (
                <article
                  className="hiking-planning-step"
                  key={step.number}
                >
                  <span className="hiking-step-number">
                    {step.number}
                  </span>

                  <div>
                    <h3>{step.title}</h3>
                    <p>{step.description}</p>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="hiking-safety">
          <div className="page-container hiking-safety-inner">
            <div className="hiking-safety-icon">
              <ShieldCheck size={30} strokeWidth={1.4} />
            </div>

            <div className="hiking-safety-copy">
              <span className="hiking-eyebrow">
                PREPARE FOR THE JOURNEY
              </span>

              <h2>Adventure with care.</h2>

              <p>
                Check route difficulty, weather and access conditions before
                setting out. Use appropriate equipment, follow qualified
                local guidance where required and respect wildlife and
                protected areas.
              </p>
            </div>

            <Link to="/contact" className="hiking-safety-link">
              Discuss your plans <ArrowUpRight size={17} />
            </Link>
          </div>
        </section>

        <section
          className="hiking-final-cta"
          style={{
            backgroundImage: `url(${hikingLandscapeImage})`,
          }}
        >
          <div className="hiking-final-shade" />

          <div className="page-container hiking-final-content">
            <Mountain size={34} strokeWidth={1.2} />

            <span className="hiking-eyebrow">
              YOUR NEXT CHAPTER IS OUT THERE
            </span>

            <h2>
              Step outside.
              <br />
              <em>Discover Uganda.</em>
            </h2>

            <p>
              Tell us what kind of adventure you are looking for and start
              exploring the possibilities.
            </p>

            <Link
              to="/contact"
              className="hiking-button hiking-button-gold"
            >
              Enquire about an adventure <ArrowUpRight size={18} />
            </Link>
          </div>
        </section>
      </main>
    </>
  );
}