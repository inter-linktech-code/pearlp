import React from "react";
import { Helmet } from "react-helmet-async";
import {
  ArrowRight,
  ArrowUpRight,
  MapPin,
  Route,
  CarFront,
  Clock,
  ShieldCheck,
  Luggage,
  MessageCircle,
  CheckCircle2,
  Navigation,
  Mountain,
  Building2,
} from "lucide-react";

import "./LongDistanceTransfers.css";

const WHATSAPP_NUMBER = "256789842436";

const bookingMessage =
  "Hello PearlP Safaris, I would like to enquire about a long-distance transfer in Uganda. Please help me with availability and pricing.";

const whatsappUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
  bookingMessage
)}`;

const services = [
  {
    number: "01",
    icon: Route,
    title: "Intercity Transfers",
    description:
      "Enquire about private journeys between Kampala, Entebbe, and other towns across Uganda.",
  },
  {
    number: "02",
    icon: Mountain,
    title: "Safari Destination Transfers",
    description:
      "Discuss transport between your arrival point, accommodation, national park, and safari destination.",
  },
  {
    number: "03",
    icon: Building2,
    title: "Hotel-to-Hotel Travel",
    description:
      "Plan road transfers between hotels, lodges, guesthouses, and other agreed accommodation.",
  },
  {
    number: "04",
    icon: Luggage,
    title: "Private Group Journeys",
    description:
      "Share your passenger numbers and luggage requirements to discuss an appropriate transport arrangement.",
  },
];

const steps = [
  {
    number: "01",
    title: "Tell us your route",
    description:
      "Share your starting point, destination, travel date, preferred departure time, and passenger numbers.",
  },
  {
    number: "02",
    title: "Review your options",
    description:
      "Discuss availability, vehicle requirements, estimated journey arrangements, and the quoted price.",
  },
  {
    number: "03",
    title: "Confirm your journey",
    description:
      "Once the details are agreed, keep your pickup information and booking confirmation ready for travel.",
  },
];

const faqs = [
  {
    question: "Do you arrange long-distance transfers across Uganda?",
    answer:
      "You can enquire about journeys between Kampala, Entebbe, towns, hotels, and safari destinations across Uganda. Routes, availability, vehicle arrangements, and prices must be confirmed for your specific trip.",
  },
  {
    question: "Can I book a transfer from Kampala to a national park?",
    answer:
      "You can request a transfer connected to a Uganda safari. Tell us which park or destination you are visiting, your travel date, passenger numbers, and accommodation details so the journey can be discussed.",
  },
  {
    question: "How much does a long-distance transfer cost?",
    answer:
      "Pricing depends on the route, distance, vehicle, timing, passenger numbers, and any additional requirements. Contact PearlP Safaris for a quote based on your itinerary.",
  },
  {
    question: "Can you arrange a return journey?",
    answer:
      "Include your return date, pickup location, destination, and preferred times when making your enquiry. Return arrangements and availability will need to be confirmed.",
  },
  {
    question: "What information should I provide when booking?",
    answer:
      "Share your travel date, pickup point, destination, number of passengers, luggage requirements, preferred departure time, and whether you need a one-way or return transfer.",
  },
];

export default function LongDistanceTransfers() {
  const pageUrl = "https://pearlpsafaris.com/long-distance-transfers";

  const structuredData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebPage",
        "@id": `${pageUrl}#webpage`,
        url: pageUrl,
        name: "Long-Distance Transfers in Uganda | PearlP Safaris",
        description:
          "Enquire about private long-distance transfers from Kampala and Entebbe to towns, hotels, and safari destinations across Uganda.",
        inLanguage: "en-UG",
        isPartOf: {
          "@id": "https://pearlpsafaris.com/#website",
        },
        about: {
          "@id": `${pageUrl}#service`,
        },
      },
      {
        "@type": "Service",
        "@id": `${pageUrl}#service`,
        name: "Long-Distance Transfers in Uganda",
        serviceType: [
          "Long-distance private transfers",
          "Intercity transport",
          "Hotel transfers",
          "Safari destination transfers",
        ],
        url: pageUrl,
        description:
          "Enquiries for long-distance road journeys connecting Kampala, Entebbe, accommodation, towns, and safari destinations in Uganda.",
        areaServed: {
          "@type": "Country",
          name: "Uganda",
        },
        provider: {
          "@type": "TravelAgency",
          name: "PearlP Safaris",
          url: "https://pearlpsafaris.com/",
          telephone: "+256789842436",
        },
      },
      {
        "@type": "BreadcrumbList",
        itemListElement: [
          {
            "@type": "ListItem",
            position: 1,
            name: "Home",
            item: "https://pearlpsafaris.com/",
          },
          {
            "@type": "ListItem",
            position: 2,
            name: "Long-Distance Transfers",
            item: pageUrl,
          },
        ],
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
    <>
      <Helmet>
        <title>
          Long-Distance Transfers in Uganda | PearlP Safaris
        </title>

        <meta
          name="description"
          content="Plan long-distance transfers in Uganda with PearlP Safaris. Enquire about private transport from Kampala and Entebbe to towns, hotels and safari destinations."
        />

        <meta
          name="keywords"
          content="long distance transfers Uganda, private transfers Kampala, intercity transport Uganda, Kampala to Entebbe transfer, Uganda safari transfers, private transport Uganda, hotel transfers Uganda, long distance car hire Uganda"
        />

        <meta name="robots" content="index, follow" />

        <link rel="canonical" href={pageUrl} />

        <meta
          property="og:title"
          content="Long-Distance Transfers in Uganda | PearlP Safaris"
        />

        <meta
          property="og:description"
          content="Enquire about private road transfers between Kampala, Entebbe, hotels, towns and safari destinations across Uganda."
        />

        <meta property="og:url" content={pageUrl} />
        <meta property="og:type" content="website" />
        <meta property="og:locale" content="en_UG" />

        <script type="application/ld+json">
          {JSON.stringify(structuredData)}
        </script>
      </Helmet>

      <main className="ldt-page">
        <section className="ldt-hero">
          <div className="ldt-hero-overlay" />

          <div className="ldt-container ldt-hero-content">
            <div className="ldt-eyebrow">
              <span />
              PEARLP SAFARIS · PRIVATE ROAD TRANSFERS
            </div>

            <h1>
              Every destination
              <br />
              <em>has a way there.</em>
            </h1>

            <p className="ldt-hero-description">
              Planning a journey beyond the city? Enquire about long-distance
              transfers connecting Kampala, Entebbe, towns, accommodation,
              and safari destinations across Uganda.
            </p>

            <div className="ldt-hero-actions">
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="ldt-button ldt-button-gold"
              >
                <MessageCircle size={18} />
                Request a transfer quote
                <ArrowUpRight size={17} />
              </a>

              <a href="#ldt-services" className="ldt-button ldt-button-outline">
                Explore services
                <ArrowRight size={17} />
              </a>
            </div>

            <div className="ldt-hero-note">
              <MapPin size={16} />
              Kampala · Entebbe · Destinations across Uganda
            </div>
          </div>

          <div className="ldt-hero-bottom">
            <span>YOUR ROUTE</span>
            <span className="ldt-hero-line" />
            <span>YOUR JOURNEY</span>
            <span className="ldt-hero-line" />
            <span>YOUR DESTINATION</span>
          </div>
        </section>

        <section className="ldt-intro ldt-section">
          <div className="ldt-container ldt-intro-grid">
            <div>
              <p className="ldt-kicker">GO BEYOND THE CITY</p>

              <h2>
                Longer journeys.
                <br />
                <em>Better planning.</em>
              </h2>
            </div>

            <div className="ldt-intro-copy">
              <p>
                Travelling between destinations takes more than choosing a
                route. It helps to plan your departure, arrival, luggage,
                accommodation connections, and return journey before setting
                off.
              </p>

              <p>
                PearlP Safaris welcomes enquiries for long-distance travel
                within Uganda, whether you are visiting family, travelling
                for business, connecting between hotels, or heading towards
                a safari destination.
              </p>

              <a href={whatsappUrl} target="_blank" rel="noopener noreferrer">
                Discuss your journey <ArrowUpRight size={17} />
              </a>
            </div>
          </div>
        </section>

        <section className="ldt-services ldt-section" id="ldt-services">
          <div className="ldt-container">
            <div className="ldt-section-heading">
              <div>
                <p className="ldt-kicker">OUR TRANSFER OPTIONS</p>
                <h2>
                  Travel on
                  <br />
                  <em>your own itinerary.</em>
                </h2>
              </div>

              <p>
                Tell us where you need to go, when you plan to travel,
                and what your journey requires. We will discuss the
                available arrangements.
              </p>
            </div>

            <div className="ldt-service-grid">
              {services.map((service) => {
                const Icon = service.icon;

                return (
                  <article className="ldt-service-card" key={service.number}>
                    <div className="ldt-service-top">
                      <span>{service.number}</span>
                      <Icon size={25} strokeWidth={1.5} />
                    </div>

                    <h3>{service.title}</h3>
                    <p>{service.description}</p>

                    <a
                      href={whatsappUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`Enquire about ${service.title}`}
                    >
                      Enquire now <ArrowUpRight size={16} />
                    </a>
                  </article>
                );
              })}
            </div>
          </div>
        </section>

        <section className="ldt-route ldt-section">
          <div className="ldt-container ldt-route-grid">
            <div className="ldt-route-copy">
              <p className="ldt-kicker">PLAN THE DETAILS</p>

              <h2>
                The right journey
                <br />
                <em>starts with a route.</em>
              </h2>

              <p>
                Whether you are travelling from Kampala to another town
                or connecting an airport arrival with a safari, your route
                helps determine the arrangements needed.
              </p>

              <ul>
                <li>
                  <CheckCircle2 size={18} />
                  Share your pickup and drop-off points
                </li>
                <li>
                  <CheckCircle2 size={18} />
                  Include your dates and preferred departure time
                </li>
                <li>
                  <CheckCircle2 size={18} />
                  Explain passenger and luggage requirements
                </li>
                <li>
                  <CheckCircle2 size={18} />
                  Confirm the quote before travelling
                </li>
              </ul>

              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="ldt-text-link"
              >
                Plan your transfer <ArrowRight size={17} />
              </a>
            </div>

            <div className="ldt-route-visual">
              <div className="ldt-route-card">
                <div className="ldt-route-card-heading">
                  <Navigation size={21} />
                  <span>YOUR JOURNEY AT A GLANCE</span>
                </div>

                <div className="ldt-route-stop">
                  <span className="ldt-route-dot ldt-route-dot-gold" />
                  <div>
                    <small>STARTING POINT</small>
                    <strong>Kampala, Entebbe, or your location</strong>
                  </div>
                </div>

                <div className="ldt-route-connector">
                  <span />
                  <span />
                  <span />
                </div>

                <div className="ldt-route-stop">
                  <span className="ldt-route-dot" />
                  <div>
                    <small>YOUR DESTINATION</small>
                    <strong>Town, hotel, or safari destination</strong>
                  </div>
                </div>

                <div className="ldt-route-footer">
                  <Clock size={17} />
                  Journey time and pricing confirmed for your route
                </div>
              </div>

              <div className="ldt-route-stamp">
                <Route size={23} />
                <span>
                  GO
                  <br />
                  FURTHER
                </span>
              </div>
            </div>
          </div>
        </section>

        <section className="ldt-benefits ldt-section">
          <div className="ldt-container">
            <div className="ldt-section-heading">
              <div>
                <p className="ldt-kicker">BEFORE YOU SET OFF</p>
                <h2>
                  A clear plan
                  <br />
                  <em>for the road ahead.</em>
                </h2>
              </div>

              <p>
                Good communication helps you understand the journey
                before confirming your transport arrangements.
              </p>
            </div>

            <div className="ldt-benefit-grid">
              <article>
                <MapPin size={24} />
                <h3>Clear destinations</h3>
                <p>
                  Confirm the full pickup and drop-off details before
                  your travel date.
                </p>
              </article>

              <article>
                <Clock size={24} />
                <h3>Planned timing</h3>
                <p>
                  Discuss departure time, stops, and any important
                  arrival requirements.
                </p>
              </article>

              <article>
                <CarFront size={24} />
                <h3>Suitable arrangements</h3>
                <p>
                  Explain your group size and luggage needs before
                  agreeing on the vehicle.
                </p>
              </article>

              <article>
                <ShieldCheck size={24} />
                <h3>Confirmed details</h3>
                <p>
                  Check availability, price, pickup arrangements,
                  and other trip details in advance.
                </p>
              </article>
            </div>
          </div>
        </section>

        <section className="ldt-booking ldt-section">
          <div className="ldt-container">
            <div className="ldt-booking-heading">
              <p className="ldt-kicker">HOW TO ARRANGE YOUR JOURNEY</p>
              <h2>
                Three steps.
                <br />
                <em>One clear plan.</em>
              </h2>
            </div>

            <div className="ldt-booking-grid">
              {steps.map((step) => (
                <article key={step.number} className="ldt-booking-step">
                  <span>{step.number}</span>
                  <h3>{step.title}</h3>
                  <p>{step.description}</p>
                </article>
              ))}
            </div>

            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="ldt-button ldt-button-gold"
            >
              <MessageCircle size={18} />
              Enquire about your route
              <ArrowUpRight size={17} />
            </a>
          </div>
        </section>

        <section className="ldt-faq ldt-section">
          <div className="ldt-container ldt-faq-grid">
            <div>
              <p className="ldt-kicker">FREQUENTLY ASKED QUESTIONS</p>

              <h2>
                Before you
                <br />
                <em>hit the road.</em>
              </h2>

              <p className="ldt-faq-intro">
                Need help planning a particular route? Contact our team
                with your travel details.
              </p>

              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="ldt-text-link"
              >
                Ask a question <ArrowUpRight size={17} />
              </a>
            </div>

            <div className="ldt-faq-list">
              {faqs.map((faq) => (
                <details key={faq.question} className="ldt-faq-item">
                  <summary>
                    {faq.question}
                    <span>+</span>
                  </summary>
                  <p>{faq.answer}</p>
                </details>
              ))}
            </div>
          </div>
        </section>

        <section className="ldt-final-cta">
          <div className="ldt-final-overlay" />

          <div className="ldt-container ldt-final-content">
            <p className="ldt-kicker">WHERE WILL THE ROAD TAKE YOU?</p>

            <h2>
              Tell us your route.
              <br />
              <em>Let's plan the journey.</em>
            </h2>

            <p>
              Send your destination, travel dates, passenger numbers,
              and preferred pickup time to begin your enquiry.
            </p>

            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="ldt-button ldt-button-gold"
            >
              <MessageCircle size={18} />
              Get started on WhatsApp
              <ArrowUpRight size={17} />
            </a>

            <span className="ldt-final-note">
              PearlP Safaris · We Travel All Distances
            </span>
          </div>
        </section>
      </main>
    </>
  );
}