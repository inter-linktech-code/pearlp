
import React from "react";
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import {
  ArrowDown,
  ArrowRight,
  ArrowUpRight,
  Binoculars,
  Bird,
  Camera,
  Compass,
  Leaf,
  MapPin,
  ShieldCheck,
  Trees,
} from "lucide-react";
import "./Birdwatching.css";

// Local photographs in src/assets/
import birdingHeroImage from "../assets/birding-hero.jpg";
import birdingForestImage from "../assets/birding-forest.jpg";
import birdingWetlandsImage from "../assets/birding-wetlands.jpg";
import birdingSavannahImage from "../assets/birding-savannah.jpg";
import birdingShoebillImage from "../assets/birding-shoebill.jpg";
import birdingForestBirdsImage from "../assets/birding-forest-birds.jpg";
import birdingWaterbirdsImage from "../assets/birding-waterbirds.jpg";
import birdingFeatureImage from "../assets/birding-feature.jpg";

const birdingEnvironments = [
  {
    number: "01",
    title: "Tropical Rainforests",
    location: "Bwindi & Kibale",
    description:
      "Explore forest trails alive with bird calls, layered canopies and opportunities to look for forest-dwelling species.",
    image: birdingForestImage,
    alt: "Tropical rainforest habitat in Uganda",
    icon: Trees,
  },
  {
    number: "02",
    title: "Wetlands & Lakeshores",
    location: "Lake Victoria & wetlands",
    description:
      "Discover a different side of Uganda's birdlife around papyrus swamps, open water, marshes and quiet lakeshores.",
    image: birdingWetlandsImage,
    alt: "Wetland habitat suitable for birdwatching in Uganda",
    icon: Leaf,
  },
  {
    number: "03",
    title: "Savannah & Open Country",
    location: "Queen Elizabeth & Murchison Falls",
    description:
      "Combine classic safari landscapes with birdwatching across grasslands, woodland edges and river corridors.",
    image: birdingSavannahImage,
    alt: "Savannah landscape in Uganda",
    icon: Compass,
  },
];

const birdingHighlights = [
  {
    title: "The Shoebill",
    description:
      "A highly sought-after bird associated with suitable swamp and wetland habitats.",
    image: birdingShoebillImage,
    alt: "Shoebill in its natural habitat",
  },
  {
    title: "Forest Birdlife",
    description:
      "Listen and look for the diverse birdlife found in Uganda's tropical forest ecosystems.",
    image: birdingForestBirdsImage,
    alt: "Bird among forest vegetation",
  },
  {
    title: "Waterbirds",
    description:
      "Explore the varied bird communities found around lakes, wetlands and waterways.",
    image: birdingWaterbirdsImage,
    alt: "Waterbird in a wetland environment",
  },
];

const planningSteps = [
  {
    number: "01",
    title: "Tell us what interests you",
    description:
      "Share your travel dates, birding experience, target species and preferred travel pace.",
  },
  {
    number: "02",
    title: "Shape your route",
    description:
      "Discuss suitable habitats and destinations based on your interests and available time.",
  },
  {
    number: "03",
    title: "Plan your experience",
    description:
      "Bring your birdwatching plans together with transport, accommodation and other safari experiences.",
  },
];

export default function Birdwatching() {
  return (
    <>
      <Helmet>
        <title>
          Birdwatching in Uganda | Birding Safaris | PearlP Safaris
        </title>

        <meta
          name="description"
          content="Explore birdwatching in Uganda, from tropical forests and wetlands to savannah landscapes. Discuss a birding itinerary with PearlP Safaris."
        />

        <meta
          name="keywords"
          content="birdwatching Uganda, Uganda birding safaris, Shoebill Uganda, birding tours Uganda, birdwatching Bwindi, birding Murchison Falls"
        />

        <link
          rel="canonical"
          href="https://pearlpsafaris.com/birdwatching-uganda"
        />

        <meta name="robots" content="index, follow" />

        <meta property="og:type" content="website" />

        <meta
          property="og:title"
          content="Birdwatching in Uganda | PearlP Safaris"
        />

        <meta
          property="og:description"
          content="Discover Uganda's forests, wetlands and savannah through a birdwatching experience planned around your interests."
        />

        <meta
          property="og:url"
          content="https://pearlpsafaris.com/birdwatching-uganda"
        />

        <meta
          property="og:image"
          content="https://pearlpsafaris.com/"
        />

        <meta name="twitter:card" content="summary_large_image" />
      </Helmet>

      <main className="birding-page">
        {/* HERO */}
        <section
          className="birding-hero"
          style={{
            backgroundImage: `url("${birdingHeroImage}")`,
          }}
        >
          <div
            className="birding-hero-overlay"
            aria-hidden="true"
          />

          <div className="birding-hero-content page-container">
            <div className="birding-hero-copy">
              <span className="birding-eyebrow">
                <span className="birding-eyebrow-line" />
                BIRDING EXPERIENCES IN UGANDA
              </span>

              <h1>
                Listen closely.
                <br />
                <em>Discover more.</em>
              </h1>

              <p className="birding-hero-description">
                From mist-covered forests to expansive wetlands, discover
                Uganda through the extraordinary diversity of its birdlife.
              </p>

              <div className="birding-hero-actions">
                <Link
                  to="/contact"
                  className="birding-button birding-button-gold"
                >
                  Plan a birding trip
                  <ArrowUpRight size={18} />
                </Link>

                <Link
                  to="/destinations"
                  className="birding-hero-text-link"
                >
                  Explore destinations
                  <ArrowRight size={17} />
                </Link>
              </div>
            </div>

            <a className="birding-scroll" href="#birding-intro">
              <span>SCROLL TO EXPLORE</span>
              <ArrowDown size={16} />
            </a>
          </div>

          <div className="birding-hero-caption">
            <span>UGANDA</span>
            <span className="birding-caption-dot" />
            <span>THE PEARL OF AFRICA</span>
          </div>
        </section>

        {/* INTRODUCTION */}
        <section
          className="birding-intro birding-section"
          id="birding-intro"
        >
          <div className="page-container birding-intro-grid">
            <div className="birding-intro-heading">
              <span className="birding-eyebrow birding-eyebrow-dark">
                A DIFFERENT WAY TO EXPLORE
              </span>

              <h2>
                Every habitat
                <br />
                <em>has a story.</em>
              </h2>
            </div>

            <div className="birding-intro-copy">
              <p>
                Birdwatching in Uganda is an invitation to slow down and
                experience the landscape differently. Each habitat brings
                its own sounds, colours and opportunities to observe birdlife.
              </p>

              <p>
                Whether you are an experienced birder building a species list
                or a curious traveller discovering birdwatching for the first
                time, your interests can help shape the journey.
              </p>

              <Link
                to="/uganda-safaris"
                className="birding-inline-link"
              >
                Discover Uganda safaris
                <ArrowUpRight size={17} />
              </Link>
            </div>
          </div>

          <div className="page-container birding-principles">
            <div className="birding-principle">
              <Binoculars size={25} strokeWidth={1.4} />

              <div>
                <h3>Observe with care</h3>
                <p>Take time to notice the details.</p>
              </div>
            </div>

            <div className="birding-principle">
              <Trees size={25} strokeWidth={1.4} />

              <div>
                <h3>Explore diverse habitats</h3>
                <p>Discover forests, wetlands and open country.</p>
              </div>
            </div>

            <div className="birding-principle">
              <Leaf size={25} strokeWidth={1.4} />

              <div>
                <h3>Travel responsibly</h3>
                <p>Respect wildlife and natural habitats.</p>
              </div>
            </div>
          </div>
        </section>

        {/* BIRDING HABITATS */}
        <section className="birding-habitats birding-section">
          <div className="page-container">
            <div className="birding-section-heading">
              <div>
                <span className="birding-eyebrow birding-eyebrow-dark">
                  WHERE TO LOOK
                </span>

                <h2>
                  Three worlds.
                  <br />
                  <em>Countless discoveries.</em>
                </h2>
              </div>

              <p>
                Uganda's varied landscapes offer different birding
                environments. Your route can be shaped around the habitats
                and species you hope to experience.
              </p>
            </div>

            <div className="birding-habitat-grid">
              {birdingEnvironments.map((habitat) => {
                const Icon = habitat.icon;

                return (
                  <article
                    className="birding-habitat-card"
                    key={habitat.number}
                  >
                    <div className="birding-habitat-image">
                      <img
                        src={habitat.image}
                        alt={habitat.alt}
                        loading="lazy"
                      />

                      <span className="birding-card-number">
                        {habitat.number}
                      </span>

                      <span className="birding-habitat-icon">
                        <Icon size={20} strokeWidth={1.5} />
                      </span>
                    </div>

                    <div className="birding-habitat-body">
                      <span className="birding-card-location">
                        <MapPin size={14} />
                        {habitat.location}
                      </span>

                      <h3>{habitat.title}</h3>

                      <p>{habitat.description}</p>

                      <Link
                        to="/destinations"
                        className="birding-card-link"
                        aria-label={`Explore destinations for ${habitat.title}`}
                      >
                        Explore destinations
                        <ArrowUpRight size={17} />
                      </Link>
                    </div>
                  </article>
                );
              })}
            </div>
          </div>
        </section>

        {/* BIRDLIFE HIGHLIGHTS */}
        <section className="birding-species birding-section">
          <div className="page-container">
            <div className="birding-section-heading birding-species-heading">
              <div>
                <span className="birding-eyebrow">
                  THE JOY OF THE SEARCH
                </span>

                <h2>
                  Look a little
                  <br />
                  <em>closer.</em>
                </h2>
              </div>

              <p>
                Every outing is different. The species you encounter depend
                on habitat, season, weather and local conditions, making
                patience part of the adventure.
              </p>
            </div>

            <div className="birding-species-grid">
              {birdingHighlights.map((highlight, index) => (
                <article
                  className="birding-species-card"
                  key={highlight.title}
                >
                  <div className="birding-species-image">
                    <img
                      src={highlight.image}
                      alt={highlight.alt}
                      loading="lazy"
                    />

                    <span>{`0${index + 1}`}</span>
                  </div>

                  <div className="birding-species-copy">
                    <h3>{highlight.title}</h3>
                    <p>{highlight.description}</p>
                  </div>
                </article>
              ))}
            </div>

            <p className="birding-image-note">
              Verify that each photograph depicts the named bird or habitat
              and that you have permission to use it before publishing.
            </p>
          </div>
        </section>

        {/* PLANNING */}
        <section className="birding-planning birding-section">
          <div className="page-container birding-planning-grid">
            <div className="birding-planning-copy">
              <span className="birding-eyebrow birding-eyebrow-dark">
                YOUR JOURNEY, YOUR INTERESTS
              </span>

              <h2>
                Make room for
                <br />
                <em>the unexpected.</em>
              </h2>

              <p>
                Tell us what brings you to Uganda. We can discuss a birding
                journey that fits your travel window, interests and preferred
                pace, with opportunities to combine birdwatching and other
                safari experiences.
              </p>

              <Link
                to="/contact"
                className="birding-button birding-button-dark"
              >
                Start planning
                <ArrowUpRight size={18} />
              </Link>
            </div>

            <div className="birding-planning-steps">
              {planningSteps.map((step) => (
                <div
                  className="birding-planning-step"
                  key={step.number}
                >
                  <span className="birding-step-number">
                    {step.number}
                  </span>

                  <div>
                    <h3>{step.title}</h3>
                    <p>{step.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* RESPONSIBLE BIRDWATCHING */}
        <section className="birding-responsible">
          <div className="page-container birding-responsible-inner">
            <div className="birding-responsible-icon">
              <ShieldCheck size={31} strokeWidth={1.3} />
            </div>

            <div>
              <span className="birding-eyebrow">
                THE WILDLIFE COMES FIRST
              </span>

              <h2>Observe without disturbing.</h2>

              <p>
                Keep a respectful distance, avoid playback that disturbs
                wildlife, follow local guidance and leave habitats as you
                found them. Responsible birdwatching protects the experience
                for wildlife and future visitors.
              </p>
            </div>

            <Link
              to="/contact"
              className="birding-responsible-link"
            >
              Talk to us
              <ArrowUpRight size={17} />
            </Link>
          </div>
        </section>

        {/* FINAL CALL TO ACTION */}
        <section
          className="birding-final-cta"
          style={{
            backgroundImage: `url("${birdingFeatureImage}")`,
          }}
        >
          <div
            className="birding-final-cta-overlay"
            aria-hidden="true"
          />

          <div className="page-container birding-final-cta-content">
            <Bird size={33} strokeWidth={1.2} />

            <span className="birding-eyebrow">
              YOUR UGANDA STORY STARTS HERE
            </span>

            <h2>
              Follow the call
              <br />
              <em>of the wild.</em>
            </h2>

            <p>
              Share your birding interests and start exploring the
              possibilities for your Uganda journey.
            </p>

            <Link
              to="/contact"
              className="birding-button birding-button-gold"
            >
              Enquire about birdwatching
              <ArrowUpRight size={18} />
            </Link>
          </div>
        </section>
      </main>
    </>
  );
}
