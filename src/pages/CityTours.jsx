
import React from "react";
import { Helmet } from "react-helmet-async";
import {
  ArrowRight,
  ArrowUpRight,
  MapPin,
  Clock,
  Car,
  Camera,
  Compass,
  Building2,
  CheckCircle2,
  MessageCircle,
  CalendarDays,
  Route,
  Users,
} from "lucide-react";
import "./CityTours.css";

const WHATSAPP_NUMBER = "256789842436";
const SITE_URL = "https://pearlpsafaris.com";

const whatsappLink = (message) =>
  `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;

const experiences = [
  {
    number: "01",
    icon: Building2,
    title: "Kampala City Tours",
    description:
      "Discover Kampala's lively streets, local markets, cultural landmarks and everyday urban life with a trip planned around your interests.",
    tags: ["City sightseeing", "Local culture", "Shopping"],
  },
  {
    number: "02",
    icon: Camera,
    title: "Cultural & Heritage Trips",
    description:
      "Explore selected cultural sites, historical places and local experiences while learning more about Uganda's people and traditions.",
    tags: ["Heritage", "Culture", "Local experiences"],
  },
  {
    number: "03",
    icon: Route,
    title: "Day Trips Around Uganda",
    description:
      "Plan a day away from the city, with transport and stops arranged according to your destination, available time and interests.",
    tags: ["Day excursions", "Scenic routes", "Custom itineraries"],
  },
  {
    number: "04",
    icon: Car,
    title: "Private City Transfers",
    description:
      "Connect your city tour with hotel pick-ups, airport transfers or other destinations through a coordinated travel plan.",
    tags: ["Private transport", "Flexible stops", "Convenience"],
  },
];

const highlights = [
  "Flexible itineraries based on your interests",
  "Options for solo travellers, couples and groups",
  "Local and international visitor support",
  "Transport arrangements on request",
  "Trips tailored to your available time",
  "Clear arrangements before your journey",
];

const faqs = [
  {
    question: "Do you organise Kampala city tours?",
    answer:
      "Yes. Contact PearlP Safaris to discuss a Kampala city tour, your preferred attractions, group size and travel date. The itinerary and availability will be confirmed before booking.",
  },
  {
    question: "Can I book a private city tour?",
    answer:
      "You can enquire about a private tour for yourself, your family, colleagues or group. Vehicle arrangements, itinerary and pricing depend on your requirements and availability.",
  },
  {
    question: "Can you arrange transport from my hotel?",
    answer:
      "Hotel pick-up and drop-off can be discussed when requesting your tour. Share your accommodation location, preferred start time and destinations so the arrangements can be confirmed.",
  },
  {
    question: "How much does a city tour in Uganda cost?",
    answer:
      "Prices depend on the destination, duration, number of travellers, transport requirements and any requested activities. Contact us for a quotation based on your planned trip.",
  },
  {
    question: "Can I combine a city tour with a safari?",
    answer:
      "Yes. You can enquire about combining a city experience with gorilla trekking, wildlife safaris, cultural tours or other travel services offered by PearlP Safaris.",
  },
];

export default function CityTours() {
  const pageTitle =
    "Kampala City Tours & Trips in Uganda | PearlP Safaris";

  const pageDescription =
    "Plan Kampala city tours and trips around Uganda with PearlP Safaris. Enquire about cultural experiences, sightseeing, private transport and customised day trips.";

  const structuredData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "TravelAgency",
        "@id": `${SITE_URL}/#travel-agency`,
        name: "PearlP International Safari",
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
      },
      {
        "@type": "WebPage",
        "@id": `${SITE_URL}/city-tours#webpage`,
        url: `${SITE_URL}/city-tours`,
        name: pageTitle,
        description: pageDescription,
        isPartOf: { "@id": `${SITE_URL}/#website` },
        about: { "@id": `${SITE_URL}/#travel-agency` },
        breadcrumb: { "@id": `${SITE_URL}/city-tours#breadcrumb` },
      },
      {
        "@type": "BreadcrumbList",
        "@id": `${SITE_URL}/city-tours#breadcrumb`,
        itemListElement: [
          {
            "@type": "ListItem",
            position: 1,
            name: "Home",
            item: SITE_URL,
          },
          {
            "@type": "ListItem",
            position: 2,
            name: "City Tours & Trips",
            item: `${SITE_URL}/city-tours`,
          },
        ],
      },
      {
        "@type": "Service",
        name: "City Tours and Trips in Uganda",
        serviceType: [
          "Kampala city tours",
          "Cultural sightseeing",
          "Day trips",
          "Private city tour transport",
        ],
        provider: { "@id": `${SITE_URL}/#travel-agency` },
        areaServed: { "@type": "Country", name: "Uganda" },
        url: `${SITE_URL}/city-tours`,
      },
      {
        "@type": "FAQPage",
        mainEntity: faqs.map((faq) => ({
          "@type": "Question",
          name: faq.question,
          acceptedAnswer: {
            "@type": "Answer",
            text: faq.answer,
          },
        })),
      },
    ],
  };

  return (
    <div className="city-tours-page">
      <Helmet>
        <title>{pageTitle}</title>
        <meta name="description" content={pageDescription} />
        <link rel="canonical" href={`${SITE_URL}/city-tours`} />
        <meta name="robots" content="index, follow" />
        <meta
          name="keywords"
          content="Kampala city tours, city tours Uganda, Kampala sightseeing, Uganda day trips, cultural tours Kampala, private city tours Uganda, PearlP Safaris"
        />

        <meta property="og:type" content="website" />
        <meta property="og:locale" content="en_UG" />
        <meta property="og:site_name" content="PearlP Safaris" />
        <meta property="og:title" content={pageTitle} />
        <meta property="og:description" content={pageDescription} />
        <meta property="og:url" content={`${SITE_URL}/city-tours`} />
        <meta
          property="og:image"
          content={`${SITE_URL}/images/kampala-city-tour.jpg`}
        />

        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={pageTitle} />
        <meta name="twitter:description" content={pageDescription} />

        <script type="application/ld+json">
          {JSON.stringify(structuredData)}
        </script>
      </Helmet>

      <section className="ct-hero">
        <div className="ct-hero-image" aria-hidden="true" />
        <div className="ct-hero-overlay" />

        <div className="ct-container ct-hero-content">
          <div className="ct-eyebrow">
            <span className="ct-eyebrow-line" />
            EXPLORE KAMPALA & BEYOND
          </div>

          <h1>
            Discover Uganda.
            <br />
            <span>One city, one story</span>
            <br />
            at a time.
          </h1>

          <p className="ct-hero-description">
            From the energy of Kampala to cultural landmarks and memorable
            day trips, let us help you plan an experience that fits your
            interests, schedule and travel style.
          </p>

          <div className="ct-hero-actions">
            <a
              className="ct-button ct-button-gold"
              href={whatsappLink(
                "Hello PearlP Safaris, I would like to enquire about city tours and trips in Uganda."
              )}
              target="_blank"
              rel="noreferrer"
            >
              Plan Your City Tour <ArrowUpRight size={18} />
            </a>

            <a className="ct-text-link" href="#ct-experiences">
              Explore experiences <ArrowRight size={17} />
            </a>
          </div>

          <div className="ct-hero-note">
            <MapPin size={16} />
            Kampala, Uganda · Trips planned around you
          </div>
        </div>

        <div className="ct-hero-bottom">
          <span>LOCAL DISCOVERY</span>
          <span className="ct-hero-bottom-line" />
          <span>YOUR JOURNEY, YOUR WAY</span>
        </div>
      </section>

      <section className="ct-intro-section">
        <div className="ct-container ct-intro-grid">
          <div className="ct-section-label">
            <span>01 / THE EXPERIENCE</span>
            <div className="ct-small-rule" />
          </div>

          <div className="ct-intro-copy">
            <p className="ct-kicker">MORE THAN JUST A VISIT</p>
            <h2>
              Get to know Uganda
              <br />
              <em>beyond the usual route.</em>
            </h2>
            <p>
              A good city trip is about more than moving from one place to
              another. It is an opportunity to experience the character of a
              destination, discover its culture and make time for the places
              that interest you most.
            </p>
            <p>
              PearlP Safaris helps you enquire about city sightseeing,
              cultural experiences, day trips and transport arrangements
              in Kampala and other parts of Uganda. Tell us what you would
              like to explore, and we can discuss a suitable plan.
            </p>
            <a
              className="ct-inline-link"
              href={whatsappLink(
                "Hello PearlP Safaris, please help me plan a customised city tour in Uganda."
              )}
              target="_blank"
              rel="noreferrer"
            >
              Let's plan your experience <ArrowUpRight size={17} />
            </a>
          </div>

          <div className="ct-intro-card">
            <div className="ct-intro-card-top">
              <Compass size={28} strokeWidth={1.4} />
              <span>YOUR NEXT DISCOVERY</span>
            </div>
            <div className="ct-intro-card-body">
              <span className="ct-intro-card-number">UG</span>
              <h3>Uganda, at your pace.</h3>
              <p>
                Choose your interests, preferred dates and the kind of
                experience you want to have.
              </p>
            </div>
            <div className="ct-intro-card-footer">
              <MapPin size={15} /> Kampala & destinations across Uganda
            </div>
          </div>
        </div>
      </section>

      <section className="ct-experiences-section" id="ct-experiences">
        <div className="ct-container">
          <div className="ct-section-heading">
            <div>
              <p className="ct-kicker">FIND YOUR KIND OF ADVENTURE</p>
              <h2>
                Explore at your
                <br />
                <em>own pace.</em>
              </h2>
            </div>
            <p className="ct-section-heading-description">
              Whether you have a few hours or a full day, start with the
              experience you want and we can discuss the arrangements.
            </p>
          </div>

          <div className="ct-experience-grid">
            {experiences.map((experience) => {
              const Icon = experience.icon;

              return (
                <article className="ct-experience-card" key={experience.number}>
                  <div className="ct-experience-card-top">
                    <span>{experience.number}</span>
                    <Icon size={25} strokeWidth={1.4} />
                  </div>

                  <h3>{experience.title}</h3>
                  <p>{experience.description}</p>

                  <div className="ct-tags">
                    {experience.tags.map((tag) => (
                      <span key={tag}>{tag}</span>
                    ))}
                  </div>

                  <a
                    className="ct-card-link"
                    href={whatsappLink(
                      `Hello PearlP Safaris, I am interested in ${experience.title.toLowerCase()}. Please share the available options and pricing.`
                    )}
                    target="_blank"
                    rel="noreferrer"
                    aria-label={`Enquire about ${experience.title}`}
                  >
                    Enquire about this experience <ArrowUpRight size={17} />
                  </a>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      <section className="ct-planning-section">
        <div className="ct-container ct-planning-grid">
          <div className="ct-planning-image">
            <div className="ct-image-caption">
              <span className="ct-image-caption-line" />
              <span>MAKE EVERY STOP COUNT</span>
            </div>
          </div>

          <div className="ct-planning-content">
            <p className="ct-kicker">MADE AROUND YOUR PLANS</p>
            <h2>
              Your day.
              <br />
              Your interests.
              <br />
              <em>Your Uganda.</em>
            </h2>

            <p>
              Every traveller has a different idea of a great day out. Share
              what interests you and how much time you have, and we will help
              you explore suitable tour and transport options.
            </p>

            <div className="ct-highlights">
              {highlights.map((highlight) => (
                <div className="ct-highlight" key={highlight}>
                  <CheckCircle2 size={17} />
                  <span>{highlight}</span>
                </div>
              ))}
            </div>

            <a
              className="ct-button ct-button-dark"
              href={whatsappLink(
                "Hello PearlP Safaris, I would like to plan a personalised city tour or day trip in Uganda."
              )}
              target="_blank"
              rel="noreferrer"
            >
              Discuss Your Trip <ArrowUpRight size={18} />
            </a>
          </div>
        </div>
      </section>

      <section className="ct-process-section">
        <div className="ct-container">
          <div className="ct-process-heading">
            <p className="ct-kicker">SIMPLE FROM THE START</p>
            <h2>
              How to plan
              <br />
              <em>your city trip.</em>
            </h2>
          </div>

          <div className="ct-process-grid">
            <article className="ct-process-step">
              <span className="ct-process-number">01</span>
              <CalendarDays size={24} />
              <h3>Share your plans</h3>
              <p>
                Tell us your travel date, preferred destination and how
                many people are travelling.
              </p>
            </article>

            <article className="ct-process-step">
              <span className="ct-process-number">02</span>
              <Users size={24} />
              <h3>Discuss your options</h3>
              <p>
                Review the proposed itinerary, transport needs, inclusions
                and quotation.
              </p>
            </article>

            <article className="ct-process-step">
              <span className="ct-process-number">03</span>
              <CheckCircle2 size={24} />
              <h3>Confirm arrangements</h3>
              <p>
                Proceed once the details, availability and agreed costs
                have been confirmed.
              </p>
            </article>
          </div>
        </div>
      </section>

      <section className="ct-faq-section">
        <div className="ct-container ct-faq-grid">
          <div className="ct-faq-intro">
            <p className="ct-kicker">GOOD TO KNOW</p>
            <h2>
              Your questions,
              <br />
              <em>answered.</em>
            </h2>
            <p>
              Need help choosing a tour or arranging transport? Contact our
              team to discuss your plans before making a booking.
            </p>
            <a
              className="ct-inline-link"
              href={whatsappLink(
                "Hello PearlP Safaris, I have a question about city tours in Uganda."
              )}
              target="_blank"
              rel="noreferrer"
            >
              Ask us on WhatsApp <ArrowUpRight size={17} />
            </a>
          </div>

          <div className="ct-faq-list">
            {faqs.map((faq, index) => (
              <details className="ct-faq-item" key={faq.question}>
                <summary>
                  <span className="ct-faq-index">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <span>{faq.question}</span>
                  <span className="ct-faq-plus">+</span>
                </summary>
                <p>{faq.answer}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      <section className="ct-final-cta">
        <div className="ct-final-cta-pattern" aria-hidden="true" />
        <div className="ct-container ct-final-cta-content">
          <p className="ct-kicker">YOUR NEXT STORY STARTS HERE</p>
          <h2>
            Ready to see
            <br />
            <em>Uganda differently?</em>
          </h2>
          <p>
            Tell us what you would love to explore. Let’s discuss a city
            tour or day trip that suits your plans.
          </p>
          <a
            className="ct-button ct-button-gold"
            href={whatsappLink(
              "Hello PearlP Safaris, I am ready to plan a city tour or day trip in Uganda. Please help me with the options."
            )}
            target="_blank"
            rel="noreferrer"
          >
            <MessageCircle size={18} /> Start Planning on WhatsApp
          </a>
          <span className="ct-cta-footnote">
            PearlP International Safari · Kampala, Uganda
          </span>
        </div>
      </section>
    </div>
  );
}
