
import React from "react";
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import {
  ArrowRight,
  ArrowUpRight,
  BriefcaseBusiness,
  CheckCircle2,
  Clock3,
  MapPin,
  MessageCircle,
  ShieldCheck,
  UserRoundCheck,
  Users,
  CarFront,
  Route,
  CalendarCheck,
  Phone,
} from "lucide-react";
import "./DriverHiring.css";

const SITE_URL = "https://pearlpsafaris.com";
const PAGE_URL = `${SITE_URL}/driver-hiring`;
const WHATSAPP_URL =
  "https://wa.me/256789842436?text=" +
  encodeURIComponent(
    "Hello PearlP International Safari, I would like to enquire about hiring a driver in Uganda."
  );

const services = [
  {
    icon: BriefcaseBusiness,
    title: "Business & Corporate Travel",
    description:
      "Arrange a driver for business meetings, corporate visits, appointments, and professional travel.",
  },
  {
    icon: Route,
    title: "Long-Distance Journeys",
    description:
      "Travel between Kampala and destinations across Uganda with a driver arranged for your journey.",
  },
  {
    icon: CarFront,
    title: "Safari & Tourist Driving",
    description:
      "Arrange a driver for sightseeing, safari itineraries, attractions, and trips around Uganda.",
  },
  {
    icon: CalendarCheck,
    title: "Daily & Multi-Day Hire",
    description:
      "Request a driver for a single day, several days, or a longer period, subject to availability.",
  },
  {
    icon: Users,
    title: "Family & Personal Travel",
    description:
      "Get driving support for family outings, personal appointments, shopping trips, and private journeys.",
  },
  {
    icon: Clock3,
    title: "Events & Special Occasions",
    description:
      "Arrange a driver for weddings, functions, conferences, celebrations, and other planned occasions.",
  },
];

const benefits = [
  "Driver arrangements based on your itinerary and requirements",
  "Flexible hire requests for different trip durations",
  "Travel planning support for destinations across Uganda",
  "Clear communication about pickup details and journey plans",
  "Pricing and availability confirmed before your booking",
];

const faqs = [
  {
    question: "Can I hire a driver in Kampala?",
    answer:
      "Yes. You can contact PearlP International Safari to enquire about hiring a driver in Kampala and nearby areas. Availability depends on your preferred date, location, and requirements.",
  },
  {
    question: "Can I hire a driver for a trip outside Kampala?",
    answer:
      "Yes. You can request a driver for travel between Kampala and other destinations in Uganda. Share your route, travel dates, and expected return arrangements so the trip can be assessed.",
  },
  {
    question: "Can I hire a driver for several days?",
    answer:
      "Yes. You can enquire about daily or multi-day driver hire. Tell us how many days you need, your itinerary, and whether you require a vehicle as well.",
  },
  {
    question: "Can I hire a driver without a car?",
    answer:
      "You can enquire about a driver-only arrangement or a driver with a vehicle. Please specify which option you need so we can confirm what is available.",
  },
  {
    question: "How much does it cost to hire a driver in Uganda?",
    answer:
      "The cost depends on the journey, hire duration, pickup location, vehicle requirements, and other arrangements. Contact us for a quote based on your specific trip.",
  },
  {
    question: "How do I book a driver?",
    answer:
      "Send your pickup location, destination, travel date, duration, passenger details, and vehicle requirements through WhatsApp or our contact page. Your booking is subject to confirmation.",
  },
];

function DriverHiring() {
  const structuredData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "TravelAgency",
        "@id": `${SITE_URL}/#travel-agency`,
        name: "PearlP International Safari",
        url: SITE_URL,
        telephone: "+256789842436",
        email: "info@pearlpsafaris.com",
        address: {
          "@type": "PostalAddress",
          streetAddress: "Ggaba Road, Bunga, Ivory Mall",
          addressLocality: "Kampala",
          addressCountry: "UG",
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
        "@type": "WebPage",
        "@id": `${PAGE_URL}/#webpage`,
        url: PAGE_URL,
        name: "Driver Hiring in Uganda | PearlP International Safari",
        description:
          "Enquire about hiring a driver in Kampala and across Uganda for business travel, private journeys, safaris, events, and long-distance trips.",
        isPartOf: {
          "@id": `${SITE_URL}/#website`,
        },
        about: {
          "@id": `${PAGE_URL}/#service`,
        },
        breadcrumb: {
          "@id": `${PAGE_URL}/#breadcrumb`,
        },
      },
      {
        "@type": "Service",
        "@id": `${PAGE_URL}/#service`,
        name: "Driver Hiring in Uganda",
        serviceType: "Driver hire and private travel driving services",
        url: PAGE_URL,
        description:
          "Driver hire enquiries for business travel, personal journeys, safaris, events, and long-distance travel in Uganda.",
        provider: {
          "@id": `${SITE_URL}/#travel-agency`,
        },
        areaServed: {
          "@type": "Country",
          name: "Uganda",
        },
        availableChannel: {
          "@type": "ServiceChannel",
          serviceUrl: WHATSAPP_URL,
          servicePhone: {
            "@type": "ContactPoint",
            telephone: "+256789842436",
            contactType: "booking enquiries",
            availableLanguage: ["English"],
          },
        },
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
            name: "Driver Hiring",
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
    <div className="driver-hiring-page">
      <Helmet>
        <title>Driver Hiring in Uganda & Kampala | PearlP Safaris</title>
        <meta
          name="description"
          content="Looking for a driver in Kampala or Uganda? Enquire about daily driver hire, business travel, private journeys, safari driving and long-distance trips with PearlP International Safari."
        />
        <meta
          name="keywords"
          content="driver hiring Uganda, hire a driver Kampala, private driver Uganda, driver hire Kampala, safari driver Uganda, daily driver hire Uganda, long distance driver Uganda"
        />
        <link rel="canonical" href={PAGE_URL} />
        <meta name="robots" content="index, follow, max-image-preview:large" />
        <meta property="og:type" content="website" />
        <meta
          property="og:title"
          content="Driver Hiring in Uganda | PearlP International Safari"
        />
        <meta
          property="og:description"
          content="Enquire about hiring a driver for business, personal travel, safaris, events, and long-distance journeys in Uganda."
        />
        <meta property="og:url" content={PAGE_URL} />
        <meta
          property="og:image"
          content={`${SITE_URL}/images/driver-hire-uganda.jpg`}
        />
        <meta property="og:locale" content="en_UG" />
        <meta name="twitter:card" content="summary_large_image" />
        <script type="application/ld+json">
          {JSON.stringify(structuredData)}
        </script>
      </Helmet>

      <section className="driver-hero">
        <div className="driver-hero-image" aria-hidden="true" />
        <div className="driver-hero-overlay" aria-hidden="true" />

        <div className="driver-container driver-hero-content">
          <div className="driver-eyebrow">
            <span />
            PROFESSIONAL TRAVEL SUPPORT
          </div>

          <h1>
            Driver Hiring in Uganda.
            <br />
            <em>Your Journey, Your Way.</em>
          </h1>

          <p className="driver-hero-description">
            Need someone to drive while you focus on your journey? Enquire
            about driver hire in Kampala and across Uganda for business,
            personal travel, safaris, events, and long-distance trips.
          </p>

          <div className="driver-hero-actions">
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="driver-button driver-button-gold"
            >
              <MessageCircle size={19} />
              Enquire on WhatsApp
              <ArrowUpRight size={18} />
            </a>

            <a href="#driver-services" className="driver-button driver-button-outline">
              Explore Driver Hire
              <ArrowRight size={18} />
            </a>
          </div>

          <div className="driver-hero-note">
            <MapPin size={17} />
            <span>Kampala, Uganda · Travel arrangements across Uganda</span>
          </div>
        </div>

        <div className="driver-hero-bottom">
          <span>PEARLP INTERNATIONAL SAFARI</span>
          <span>WE TRAVEL ALL DISTANCES.</span>
        </div>
      </section>

      <section className="driver-intro section-space">
        <div className="driver-container driver-intro-grid">
          <div className="driver-intro-heading">
            <span className="driver-section-label">DRIVER HIRE SERVICES</span>
            <h2>
              More freedom.
              <br />
              <em>Less driving stress.</em>
            </h2>
          </div>

          <div className="driver-intro-copy">
            <p>
              Whether you need a driver for a few hours, a full day, a business
              trip, or a journey across Uganda, PearlP International Safari
              helps you make the right arrangements for your travel needs.
            </p>
            <p>
              Tell us where you are going, when you need to travel, and
              whether you have your own vehicle. We will discuss your
              requirements and confirm availability and pricing before you
              proceed.
            </p>
            <Link to="/contact" className="driver-text-link">
              Talk to our team <ArrowUpRight size={17} />
            </Link>
          </div>
        </div>
      </section>

      <section id="driver-services" className="driver-services section-space">
        <div className="driver-container">
          <div className="driver-section-heading">
            <div>
              <span className="driver-section-label">FIND YOUR ARRANGEMENT</span>
              <h2>
                A driver for
                <br />
                <em>the way you travel.</em>
              </h2>
            </div>
            <p>
              Different journeys call for different arrangements. Choose the
              type of driving support you need and contact us to discuss the
              details.
            </p>
          </div>

          <div className="driver-service-grid">
            {services.map((service, index) => {
              const Icon = service.icon;

              return (
                <article className="driver-service-card" key={service.title}>
                  <div className="driver-card-top">
                    <span className="driver-card-number">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                    <span className="driver-card-icon">
                      <Icon size={23} strokeWidth={1.6} />
                    </span>
                  </div>
                  <h3>{service.title}</h3>
                  <p>{service.description}</p>
                  <a
                    href={`${WHATSAPP_URL}&type=${encodeURIComponent(service.title)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="driver-card-link"
                    aria-label={`Enquire about ${service.title}`}
                  >
                    Make an enquiry <ArrowUpRight size={17} />
                  </a>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      <section className="driver-benefits section-space">
        <div className="driver-container driver-benefits-grid">
          <div className="driver-benefits-visual">
            <img
              src="/images/driver-hire-uganda.jpg"
              alt="Private travel and driver hire in Uganda"
              loading="lazy"
              onError={(event) => {
                event.currentTarget.style.display = "none";
              }}
            />
            <div className="driver-visual-caption">
              <span className="driver-visual-caption-icon">
                <ShieldCheck size={23} />
              </span>
              <div>
                <strong>Travel arranged around you</strong>
                <span>Discuss your needs before confirming</span>
              </div>
            </div>
          </div>

          <div className="driver-benefits-content">
            <span className="driver-section-label">WHY ARRANGE WITH US?</span>
            <h2>
              Your plans
              <br />
              <em>come first.</em>
            </h2>
            <p>
              We help you organise the driving support that fits your route,
              schedule, and travel preferences.
            </p>

            <ul className="driver-benefits-list">
              {benefits.map((benefit) => (
                <li key={benefit}>
                  <CheckCircle2 size={19} />
                  <span>{benefit}</span>
                </li>
              ))}
            </ul>

            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="driver-button driver-button-dark"
            >
              Discuss Your Requirements <ArrowRight size={18} />
            </a>
          </div>
        </div>
      </section>

      <section className="driver-process section-space">
        <div className="driver-container">
          <div className="driver-section-heading driver-process-heading">
            <div>
              <span className="driver-section-label">HOW IT WORKS</span>
              <h2>
                From enquiry
                <br />
                <em>to the open road.</em>
              </h2>
            </div>
            <p>
              A straightforward enquiry helps us understand your journey and
              identify the right available arrangement.
            </p>
          </div>

          <div className="driver-process-grid">
            <article className="driver-process-step">
              <span className="driver-process-number">01</span>
              <UserRoundCheck size={25} />
              <h3>Share your plans</h3>
              <p>
                Tell us your travel date, pickup point, destination, and
                intended hire duration.
              </p>
            </article>

            <article className="driver-process-step">
              <span className="driver-process-number">02</span>
              <MessageCircle size={25} />
              <h3>Discuss the details</h3>
              <p>
                Confirm whether you need a driver only or a driver with a
                vehicle, plus any additional requirements.
              </p>
            </article>

            <article className="driver-process-step">
              <span className="driver-process-number">03</span>
              <CalendarCheck size={25} />
              <h3>Confirm your booking</h3>
              <p>
                Review the agreed price, availability, pickup arrangements,
                and any applicable conditions before confirming.
              </p>
            </article>
          </div>
        </div>
      </section>

      <section className="driver-trip-planning">
        <div className="driver-container driver-trip-grid">
          <div>
            <span className="driver-section-label">
              MORE WAYS TO GET THERE
            </span>
            <h2>
              Planning more
              <br />
              than a drive?
            </h2>
            <p>
              Combine driver hire with transport, accommodation, or a wider
              Uganda travel itinerary. Explore our other services to plan
              around your journey.
            </p>
          </div>

          <div className="driver-related-links">
            <Link to="/car-hire-uganda">
              <span>
                <CarFront size={21} />
                <span>
                  <strong>Car Hire</strong>
                  <small>Enquire about vehicle hire</small>
                </span>
              </span>
              <ArrowUpRight size={19} />
            </Link>

            <Link to="/airport-deliveries">
              <span>
                <Route size={21} />
                <span>
                  <strong>Airport Transfers</strong>
                  <small>Plan your airport journey</small>
                </span>
              </span>
              <ArrowUpRight size={19} />
            </Link>

            <Link to="/hotel-booking">
              <span>
                <MapPin size={21} />
                <span>
                  <strong>Hotel Booking</strong>
                  <small>Discuss your accommodation needs</small>
                </span>
              </span>
              <ArrowUpRight size={19} />
            </Link>

            <Link to="/tours-and-travel-services">
              <span>
                <BriefcaseBusiness size={21} />
                <span>
                  <strong>Tours & Travel Services</strong>
                  <small>Explore wider travel arrangements</small>
                </span>
              </span>
              <ArrowUpRight size={19} />
            </Link>
          </div>
        </div>
      </section>

      <section className="driver-faq section-space">
        <div className="driver-container driver-faq-grid">
          <div className="driver-faq-intro">
            <span className="driver-section-label">GOOD TO KNOW</span>
            <h2>
              Your questions,
              <br />
              <em>answered.</em>
            </h2>
            <p>
              Need help deciding which arrangement suits your journey? Contact
              our team with your plans.
            </p>
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="driver-text-link"
            >
              <MessageCircle size={18} />
              Ask us on WhatsApp
            </a>
          </div>

          <div className="driver-faq-list">
            {faqs.map((faq) => (
              <details className="driver-faq-item" key={faq.question}>
                <summary>
                  <span>{faq.question}</span>
                  <span className="driver-faq-toggle">+</span>
                </summary>
                <p>{faq.answer}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      <section className="driver-final-cta">
        <div className="driver-final-cta-overlay" />
        <div className="driver-container driver-final-cta-content">
          <span className="driver-section-label">
            LET'S PLAN YOUR JOURNEY
          </span>
          <h2>
            You choose the
            <br />
            destination. <em>We'll help with the drive.</em>
          </h2>
          <p>
            Tell us what you need, where you are travelling, and when you
            would like to go.
          </p>

          <div className="driver-final-actions">
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="driver-button driver-button-gold"
            >
              <MessageCircle size={19} />
              Hire a Driver
              <ArrowUpRight size={18} />
            </a>
            <a href="tel:+256702765380" className="driver-button driver-button-outline">
              <Phone size={18} />
              Call +256 702 765 380
            </a>
          </div>

          <span className="driver-final-slogan">
            WE TRAVEL ALL DISTANCES. DON'T GET STUCK ANYWHERE YOU ARE.
          </span>
        </div>
      </section>
    </div>
  );
}

export default DriverHiring;
