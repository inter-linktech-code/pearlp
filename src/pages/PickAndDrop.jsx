
import React from "react";
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import {
  ArrowRight,
  ArrowUpRight,
  MapPin,
  MessageCircle,
  Clock3,
  BriefcaseBusiness,
  Plane,
  Users,
  ShoppingBag,
  CalendarCheck,
  CheckCircle2,
  Route,
  Phone,
} from "lucide-react";
import "./PickAndDrop.css";

const SITE_URL = "https://pearlpsafaris.com";
const PAGE_URL = `${SITE_URL}/pick-and-drop`;
const WHATSAPP_URL =
  "https://wa.me/256789842436?text=" +
  encodeURIComponent(
    "Hello PearlP International Safari, I would like to enquire about pick-up and drop-off services in Uganda."
  );

const services = [
  {
    icon: Plane,
    title: "Airport Pick-Up & Drop-Off",
    description:
      "Arrange a journey to or from the airport, with your flight details and pickup time confirmed in advance.",
  },
  {
    icon: BriefcaseBusiness,
    title: "Business Appointments",
    description:
      "Request transport to meetings, offices, conferences, and other business appointments.",
  },
  {
    icon: Users,
    title: "Family & Personal Trips",
    description:
      "Arrange transport for family visits, personal errands, social engagements, and planned outings.",
  },
  {
    icon: ShoppingBag,
    title: "Shopping & City Errands",
    description:
      "Plan a pickup and return journey for shopping, appointments, or other stops around town.",
  },
  {
    icon: Route,
    title: "Intercity Pick-Up & Drop-Off",
    description:
      "Enquire about one-way or return transport between Kampala and other destinations in Uganda.",
  },
  {
    icon: CalendarCheck,
    title: "Scheduled Transport",
    description:
      "Request transport for a specific date or recurring journey, subject to availability and confirmation.",
  },
];

const faqs = [
  {
    question: "Do you offer pick-up and drop-off in Kampala?",
    answer:
      "You can enquire about pick-up and drop-off arrangements in Kampala and nearby areas. Share your locations, travel date, and preferred time so availability can be checked.",
  },
  {
    question: "Can I book an airport pickup?",
    answer:
      "Yes, you can enquire about airport pickup or drop-off. Provide your flight details, arrival or departure time, passenger count, luggage requirements, and destination.",
  },
  {
    question: "Can I book a one-way trip?",
    answer:
      "You can request a one-way journey or ask about return transport. Tell us your pickup point, destination, date, and expected travel time.",
  },
  {
    question: "Can you pick me up outside Kampala?",
    answer:
      "You can enquire about transport between Kampala and other locations in Uganda. Longer journeys depend on the route, schedule, and availability.",
  },
  {
    question: "How much does pick-up and drop-off cost?",
    answer:
      "Pricing depends on the route, distance, waiting time, vehicle requirements, and whether the journey is one-way or return. Contact us for a quote before confirming.",
  },
  {
    question: "How do I arrange a pickup?",
    answer:
      "Send your pickup location, destination, date, preferred time, number of passengers, and luggage details through WhatsApp. Wait for confirmation of availability and price before relying on the arrangement.",
  },
];

export default function PickAndDrop() {
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
      },
      {
        "@type": "WebPage",
        "@id": `${PAGE_URL}/#webpage`,
        url: PAGE_URL,
        name: "Pick-Up and Drop-Off Services in Kampala, Uganda",
        description:
          "Enquire about pick-up and drop-off transport in Kampala and across Uganda for airport journeys, business appointments, personal trips, and intercity travel.",
        breadcrumb: {
          "@id": `${PAGE_URL}/#breadcrumb`,
        },
        mainEntity: {
          "@id": `${PAGE_URL}/#service`,
        },
      },
      {
        "@type": "Service",
        "@id": `${PAGE_URL}/#service`,
        name: "Pick-Up and Drop-Off Services",
        serviceType: "Private transport and scheduled pickup services",
        url: PAGE_URL,
        description:
          "Transport enquiries for airport transfers, business appointments, personal journeys, city errands, and intercity trips in Uganda.",
        provider: {
          "@id": `${SITE_URL}/#travel-agency`,
        },
        areaServed: [
          {
            "@type": "City",
            name: "Kampala",
          },
          {
            "@type": "Country",
            name: "Uganda",
          },
        ],
      },
      {
        "@type": "BreadcrumbList",
        "@id": `${PAGE_URL}/#breadcrumb`,
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
            name: "Pick-Up & Drop-Off",
            item: PAGE_URL,
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
    <div className="pick-drop-page">
      <Helmet>
        <title>Pick-Up & Drop-Off in Kampala, Uganda | PearlP Safaris</title>
        <meta
          name="description"
          content="Arrange pick-up and drop-off transport in Kampala and across Uganda. Enquire about airport pickups, business trips, personal journeys and intercity transfers with PearlP International Safari."
        />
        <meta
          name="keywords"
          content="pick up and drop off Kampala, pickup services Uganda, drop off services Kampala, airport pickup Uganda, private transport Kampala, intercity transfers Uganda"
        />
        <link rel="canonical" href={PAGE_URL} />
        <meta name="robots" content="index, follow, max-image-preview:large" />
        <meta property="og:type" content="website" />
        <meta
          property="og:title"
          content="Pick-Up & Drop-Off Services | PearlP International Safari"
        />
        <meta
          property="og:description"
          content="Plan convenient pickup and drop-off transport for airport journeys, business appointments, personal travel, and trips across Uganda."
        />
        <meta property="og:url" content={PAGE_URL} />
        <meta
          property="og:image"
          content={`${SITE_URL}/images/pick-up-drop-off-uganda.jpg`}
        />
        <meta property="og:locale" content="en_UG" />
        <script type="application/ld+json">
          {JSON.stringify(structuredData)}
        </script>
      </Helmet>

      <section className="pick-drop-hero">
        <div className="pick-drop-hero-image" aria-hidden="true" />
        <div className="pick-drop-hero-overlay" aria-hidden="true" />

        <div className="pick-drop-container pick-drop-hero-content">
          <div className="pick-drop-eyebrow">
            <span />
            PRIVATE TRANSPORT · UGANDA
          </div>

          <h1>
            Pick-Up & Drop-Off.
            <br />
            <em>Get There With Ease.</em>
          </h1>

          <p className="pick-drop-hero-copy">
            From planned city journeys to airport pickups and intercity
            transport, tell us where you need to go and when you need to
            travel. We’ll help you enquire about the right arrangement.
          </p>

          <div className="pick-drop-hero-actions">
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="pick-drop-button pick-drop-button-gold"
            >
              <MessageCircle size={19} />
              Arrange Your Pickup
              <ArrowUpRight size={18} />
            </a>

            <a href="#pick-drop-services" className="pick-drop-button pick-drop-button-outline">
              Explore Services
              <ArrowRight size={18} />
            </a>
          </div>

          <div className="pick-drop-hero-location">
            <MapPin size={17} />
            Kampala, Uganda · Other destinations by arrangement
          </div>
        </div>

        <div className="pick-drop-hero-footer">
          <span>PEARLP INTERNATIONAL SAFARI</span>
          <span>YOUR JOURNEY STARTS HERE.</span>
        </div>
      </section>

      <section className="pick-drop-intro pick-drop-section">
        <div className="pick-drop-container pick-drop-intro-grid">
          <div>
            <span className="pick-drop-label">TRANSPORT MADE SIMPLE</span>
            <h2>
              Your pickup.
              <br />
              <em>Your destination.</em>
            </h2>
          </div>

          <div className="pick-drop-intro-copy">
            <p>
              Getting to the right place at the right time starts with a clear
              transport plan. PearlP International Safari accepts enquiries
              for pickup and drop-off arrangements for individuals, families,
              visitors, and business travellers.
            </p>
            <p>
              Share your route, schedule, passenger count, and any special
              requirements. We’ll discuss availability and costs before your
              booking is confirmed.
            </p>
            <Link to="/contact" className="pick-drop-text-link">
              Contact our team <ArrowUpRight size={17} />
            </Link>
          </div>
        </div>
      </section>

      <section
        id="pick-drop-services"
        className="pick-drop-services pick-drop-section"
      >
        <div className="pick-drop-container">
          <div className="pick-drop-section-heading">
            <div>
              <span className="pick-drop-label">WHERE DO YOU NEED TO GO?</span>
              <h2>
                Pick-up and drop-off
                <br />
                <em>for everyday journeys.</em>
              </h2>
            </div>
            <p>
              Tell us the journey you have in mind. Each arrangement can be
              discussed according to your location, timing, and transport
              requirements.
            </p>
          </div>

          <div className="pick-drop-service-grid">
            {services.map((service, index) => {
              const Icon = service.icon;

              return (
                <article className="pick-drop-service-card" key={service.title}>
                  <div className="pick-drop-card-top">
                    <span>{String(index + 1).padStart(2, "0")}</span>
                    <div className="pick-drop-card-icon">
                      <Icon size={23} strokeWidth={1.6} />
                    </div>
                  </div>

                  <h3>{service.title}</h3>
                  <p>{service.description}</p>

                  <a
                    href={
                      "https://wa.me/256789842436?text=" +
                      encodeURIComponent(
                        `Hello PearlP International Safari, I would like to enquire about ${service.title.toLowerCase()}.`
                      )
                    }
                    target="_blank"
                    rel="noopener noreferrer"
                    className="pick-drop-card-link"
                  >
                    Enquire now <ArrowUpRight size={17} />
                  </a>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      <section className="pick-drop-planning pick-drop-section">
        <div className="pick-drop-container pick-drop-planning-grid">
          <div className="pick-drop-planning-image">
            <img
              src="/images/pick-up-drop-off-uganda.jpg"
              alt="Road travel in Uganda for a planned pickup or drop-off"
              loading="lazy"
              onError={(event) => {
                event.currentTarget.style.display = "none";
              }}
            />
            <div className="pick-drop-image-caption">
              <Clock3 size={22} />
              <div>
                <strong>Plan ahead</strong>
                <span>Confirm the pickup time and location</span>
              </div>
            </div>
          </div>

          <div className="pick-drop-planning-copy">
            <span className="pick-drop-label">BE READY FOR THE JOURNEY</span>
            <h2>
              The details matter.
              <br />
              <em>We’ll help you plan.</em>
            </h2>
            <p>
              Clear travel information helps us assess your request and
              discuss a suitable arrangement.
            </p>

            <ul>
              <li>
                <CheckCircle2 size={19} />
                <span>Pickup address and destination</span>
              </li>
              <li>
                <CheckCircle2 size={19} />
                <span>Travel date and preferred pickup time</span>
              </li>
              <li>
                <CheckCircle2 size={19} />
                <span>Number of passengers and luggage</span>
              </li>
              <li>
                <CheckCircle2 size={19} />
                <span>One-way, return, or additional stops</span>
              </li>
              <li>
                <CheckCircle2 size={19} />
                <span>Any accessibility or special travel requirements</span>
              </li>
            </ul>

            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="pick-drop-button pick-drop-button-dark"
            >
              Send Your Trip Details <ArrowRight size={18} />
            </a>
          </div>
        </div>
      </section>

      <section className="pick-drop-related">
        <div className="pick-drop-container pick-drop-related-grid">
          <div>
            <span className="pick-drop-label">EXPLORE MORE SERVICES</span>
            <h2>
              One journey.
              <br />
              <em>More possibilities.</em>
            </h2>
            <p>
              Need a different kind of transport or a complete travel plan?
              Explore other PearlP International Safari services.
            </p>
          </div>

          <div className="pick-drop-related-links">
            <Link to="/airport-deliveries">
              <span>
                <Plane size={21} />
                <span>
                  <strong>Airport Transfers</strong>
                  <small>Airport pickup and drop-off enquiries</small>
                </span>
              </span>
              <ArrowUpRight size={19} />
            </Link>

            <Link to="/long-distance-transfers">
              <span>
                <Route size={21} />
                <span>
                  <strong>Long-Distance Transfers</strong>
                  <small>Journeys between destinations</small>
                </span>
              </span>
              <ArrowUpRight size={19} />
            </Link>

            <Link to="/car-hire-uganda">
              <span>
                <CalendarCheck size={21} />
                <span>
                  <strong>Car Hire</strong>
                  <small>Discuss vehicle hire options</small>
                </span>
              </span>
              <ArrowUpRight size={19} />
            </Link>

            <Link to="/driver-hiring">
              <span>
                <Users size={21} />
                <span>
                  <strong>Driver Hiring</strong>
                  <small>Enquire about hiring a driver</small>
                </span>
              </span>
              <ArrowUpRight size={19} />
            </Link>
          </div>
        </div>
      </section>

      <section className="pick-drop-faq pick-drop-section">
        <div className="pick-drop-container pick-drop-faq-grid">
          <div>
            <span className="pick-drop-label">FREQUENTLY ASKED QUESTIONS</span>
            <h2>
              Before you
              <br />
              <em>set off.</em>
            </h2>
            <p>
              Find out what information to share when arranging a pickup or
              drop-off in Uganda.
            </p>
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="pick-drop-text-link"
            >
              <MessageCircle size={18} />
              Ask us a question
            </a>
          </div>

          <div className="pick-drop-faq-list">
            {faqs.map((faq) => (
              <details className="pick-drop-faq-item" key={faq.question}>
                <summary>
                  <span>{faq.question}</span>
                  <span className="pick-drop-faq-plus">+</span>
                </summary>
                <p>{faq.answer}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      <section className="pick-drop-cta">
        <div className="pick-drop-container pick-drop-cta-content">
          <span className="pick-drop-label">LET'S GET YOU THERE</span>
          <h2>
            Tell us where.
            <br />
            <em>We’ll help plan how.</em>
          </h2>
          <p>
            Send your route and preferred time to enquire about pickup and
            drop-off transport.
          </p>

          <div className="pick-drop-cta-actions">
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="pick-drop-button pick-drop-button-gold"
            >
              <MessageCircle size={19} />
              Enquire on WhatsApp
              <ArrowUpRight size={18} />
            </a>

            <a
              href="tel:+256702765380"
              className="pick-drop-button pick-drop-button-outline"
            >
              <Phone size={18} />
              Call +256 702 765 380
            </a>
          </div>

          <span className="pick-drop-slogan">
            WE TRAVEL ALL DISTANCES. DON'T GET STUCK ANYWHERE YOU ARE.
          </span>
        </div>
      </section>
    </div>
  );
}
