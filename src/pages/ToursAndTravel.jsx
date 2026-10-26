
import React from "react";
import { Helmet } from "react-helmet-async";
import {
  ArrowRight,
  ArrowUpRight,
  CheckCircle2,
  MapPin,
  Compass,
  Car,
  Hotel,
  Plane,
  Users,
  MessageCircle,
  ShieldCheck,
  Clock3,
  Globe2,
  Route,
  CalendarCheck,
  Mountain,
} from "lucide-react";
import "./ToursAndTravel.css";

const WHATSAPP_NUMBER = "256789842436";

const whatsappLink = (message) =>
  `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;

const services = [
  {
    icon: Compass,
    number: "01",
    title: "Uganda Safari Planning",
    description:
      "Explore Uganda's remarkable wildlife, national parks and natural landscapes with a safari itinerary tailored to your interests, travel dates and budget.",
    link: "/uganda-safaris",
    linkText: "Explore Uganda safaris",
  },
  {
    icon: Mountain,
    number: "02",
    title: "Gorilla Trekking Adventures",
    description:
      "Plan an unforgettable gorilla trekking experience with guidance on destinations, travel arrangements, accommodation and the preparation required for your visit.",
    link: "/gorilla-trekking-uganda",
    linkText: "Discover gorilla trekking",
  },
  {
    icon: Car,
    number: "03",
    title: "Car Hire & Private Transport",
    description:
      "Arrange transport for airport transfers, business journeys, sightseeing, safari circuits and other trips across Kampala and Uganda, subject to availability.",
    link: "/car-hire-uganda",
    linkText: "Explore car hire",
  },
  {
    icon: Plane,
    number: "04",
    title: "Airport Transfers",
    description:
      "Coordinate airport pickups and drop-offs between Entebbe International Airport, Kampala, hotels and other agreed destinations.",
    link: "/airport-transfers-uganda",
    linkText: "Arrange airport transport",
  },
  {
    icon: Hotel,
    number: "05",
    title: "Hotel & Safari Lodge Booking",
    description:
      "Get assistance finding suitable hotels, guesthouses and safari lodges based on your destination, preferred comfort level and travel budget.",
    link: "/hotel-booking-uganda",
    linkText: "Explore accommodation",
  },
  {
    icon: MapPin,
    number: "06",
    title: "Kampala City Tours",
    description:
      "Discover Kampala through sightseeing, cultural experiences, local attractions and personalised city trips planned around your available time.",
    link: "/city-tours-uganda",
    linkText: "Discover city tours",
  },
];

const benefits = [
  {
    icon: Route,
    title: "Tailored travel plans",
    description:
      "Build a trip around your interests, preferred destinations, schedule and budget.",
  },
  {
    icon: Users,
    title: "Local travel assistance",
    description:
      "Get help coordinating the practical details of your journey in Uganda.",
  },
  {
    icon: ShieldCheck,
    title: "Clear arrangements",
    description:
      "Discuss services, availability, inclusions and costs before confirming your booking.",
  },
  {
    icon: Clock3,
    title: "Flexible enquiries",
    description:
      "Contact our team with your dates and plans to discuss suitable arrangements.",
  },
];

const process = [
  {
    number: "01",
    title: "Tell us about your trip",
    description:
      "Share your travel dates, number of travellers, destinations and the experiences you want.",
  },
  {
    number: "02",
    title: "Discuss your options",
    description:
      "We discuss suitable services, possible routes, transport and accommodation requirements.",
  },
  {
    number: "03",
    title: "Review the arrangements",
    description:
      "Confirm the proposed itinerary, availability, inclusions and agreed costs before proceeding.",
  },
  {
    number: "04",
    title: "Prepare for your journey",
    description:
      "Once your arrangements are confirmed, prepare for your trip with the details provided.",
  },
];

function ToursAndTravel() {
  const generalEnquiry = whatsappLink(
    "Hello PearlP Safaris, I would like to enquire about tours and travel services in Kampala, Uganda. Please help me plan my trip."
  );

  return (
    <>
      <Helmet>
        <title>
          Tours & Travel Services in Kampala, Uganda | PearlP Safaris
        </title>

        <meta
          name="description"
          content="Discover tours and travel services in Kampala, Uganda with PearlP Safaris. Enquire about Uganda safaris, gorilla trekking, city tours, car hire, airport transfers and hotel bookings."
        />

        <meta
          name="keywords"
          content="tours and travel services Kampala Uganda, tour operator Kampala, travel agency Uganda, Uganda safari planning, Kampala city tours, airport transfers Uganda, car hire Kampala, hotel booking Uganda, gorilla trekking tours Uganda"
        />

        <link
          rel="canonical"
          href="https://pearlpsafaris.com/tours-and-travel-uganda"
        />

        <meta name="robots" content="index, follow" />

        <meta
          property="og:title"
          content="Tours & Travel Services in Kampala, Uganda | PearlP Safaris"
        />

        <meta
          property="og:description"
          content="Plan your Uganda journey with PearlP Safaris. Explore safari planning, city tours, transport, airport transfers and accommodation assistance."
        />

        <meta
          property="og:url"
          content="https://pearlpsafaris.com/tours-and-travel-uganda"
        />

        <meta property="og:type" content="website" />
        <meta property="og:locale" content="en_UG" />
        <meta property="og:site_name" content="PearlP Safaris" />

        <meta name="twitter:card" content="summary_large_image" />

        <meta
          name="twitter:title"
          content="Tours & Travel Services in Kampala, Uganda | PearlP Safaris"
        />

        <meta
          name="twitter:description"
          content="Enquire about Uganda safaris, Kampala city tours, transport and travel arrangements with PearlP Safaris."
        />

        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@graph": [
              {
                "@type": "TravelAgency",
                "@id": "https://pearlpsafaris.com/#travel-agency",
                name: "PearlP Safaris",
                alternateName: "PEARL P INTERNATIONAL SAFARI",
                url: "https://pearlpsafaris.com/",
                telephone: "+256789842436",
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
                address: {
                  "@type": "PostalAddress",
                  streetAddress: "Ggaba Road, Bunga, Ivory Mall",
                  addressLocality: "Kampala",
                  addressCountry: "UG",
                },
                contactPoint: {
                  "@type": "ContactPoint",
                  telephone: "+256789842436",
                  contactType: "travel enquiries",
                  availableLanguage: ["English"],
                },
              },
              {
                "@type": "WebPage",
                "@id":
                  "https://pearlpsafaris.com/tours-and-travel-uganda#webpage",
                url: "https://pearlpsafaris.com/tours-and-travel-uganda",
                name:
                  "Tours & Travel Services in Kampala, Uganda | PearlP Safaris",
                description:
                  "Tours and travel services in Kampala, Uganda, including safari planning, city tours, transport and accommodation assistance.",
                inLanguage: "en-UG",
                isPartOf: {
                  "@type": "WebSite",
                  "@id": "https://pearlpsafaris.com/#website",
                  url: "https://pearlpsafaris.com/",
                  name: "PearlP Safaris",
                },
                about: {
                  "@id": "https://pearlpsafaris.com/#travel-agency",
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
                    name: "Tours & Travel Services",
                    item:
                      "https://pearlpsafaris.com/tours-and-travel-uganda",
                  },
                ],
              },
            ],
          })}
        </script>
      </Helmet>

      <main className="tours-page">
        <section className="tours-hero">
          <div className="tours-hero-overlay" />

          <div className="tours-container tours-hero-content">
            <div className="tours-eyebrow">
              <span />
              YOUR JOURNEY STARTS HERE
            </div>

            <h1>
              Tours & Travel Services
              <br />
              <em>in Kampala, Uganda</em>
            </h1>

            <p className="tours-hero-description">
              From discovering Uganda's incredible landscapes to arranging
              transport, accommodation and city experiences, PearlP Safaris
              helps you plan your journey with greater confidence.
            </p>

            <div className="tours-hero-actions">
              <a
                href={generalEnquiry}
                target="_blank"
                rel="noopener noreferrer"
                className="tours-button tours-button-primary"
              >
                Plan Your Trip
                <ArrowUpRight size={18} />
              </a>

              <a
                href="#our-services"
                className="tours-button tours-button-outline"
              >
                Explore Our Services
                <ArrowRight size={18} />
              </a>
            </div>

            <div className="tours-hero-note">
              <MapPin size={17} />
              <span>Kampala, Uganda · Travel across Uganda</span>
            </div>
          </div>

          <div className="tours-hero-bottom">
            <span>EXPLORE</span>
            <span className="tours-hero-line" />
            <span>EXPERIENCE</span>
            <span className="tours-hero-line" />
            <span>DISCOVER</span>
          </div>
        </section>

        <section className="tours-intro tours-section">
          <div className="tours-container tours-intro-grid">
            <div>
              <div className="tours-section-label">
                <span /> TRAVEL, MADE PERSONAL
              </div>

              <h2>
                Discover more of Uganda.
                <br />
                <em>Travel your way.</em>
              </h2>
            </div>

            <div className="tours-intro-copy">
              <p>
                Planning a trip involves more than choosing a destination.
                Transport, accommodation, timing and activities all contribute
                to a smooth travel experience.
              </p>

              <p>
                PearlP Safaris provides a point of contact for travellers
                looking for safari planning and related travel arrangements
                in Kampala and across Uganda. Whether you are visiting for
                leisure, business or an adventure, tell us what you have in
                mind and we can discuss the available options.
              </p>

              <a href="/about-us" className="tours-text-link">
                Get to know PearlP Safaris <ArrowRight size={17} />
              </a>
            </div>
          </div>
        </section>

        <section
          className="tours-services tours-section"
          id="our-services"
        >
          <div className="tours-container">
            <div className="tours-section-heading">
              <div className="tours-section-label">
                <span /> WHAT WE CAN HELP WITH
              </div>

              <h2>
                Travel services for
                <br />
                <em>every kind of journey.</em>
              </h2>

              <p>
                Explore our services and contact us to discuss your
                requirements, travel dates and availability.
              </p>
            </div>

            <div className="tours-service-grid">
              {services.map((service) => {
                const Icon = service.icon;

                return (
                  <article className="tours-service-card" key={service.number}>
                    <div className="tours-service-top">
                      <div className="tours-service-icon">
                        <Icon size={23} strokeWidth={1.6} />
                      </div>

                      <span className="tours-service-number">
                        {service.number}
                      </span>
                    </div>

                    <h3>{service.title}</h3>
                    <p>{service.description}</p>

                    <a href={service.link} className="tours-card-link">
                      {service.linkText}
                      <ArrowUpRight size={17} />
                    </a>
                  </article>
                );
              })}
            </div>
          </div>
        </section>

        <section className="tours-experience">
          <div className="tours-container tours-experience-grid">
            <div className="tours-experience-copy">
              <div className="tours-section-label tours-label-light">
                <span /> THE PEARLP APPROACH
              </div>

              <h2>
                More than a destination.
                <br />
                <em>A journey worth planning.</em>
              </h2>

              <p>
                Every traveller has a different reason for exploring Uganda.
                We start by understanding yours, then discuss the services
                and arrangements that may suit your journey.
              </p>

              <a
                href={generalEnquiry}
                target="_blank"
                rel="noopener noreferrer"
                className="tours-button tours-button-light"
              >
                Discuss Your Journey
                <ArrowUpRight size={18} />
              </a>
            </div>

            <div className="tours-benefits">
              {benefits.map((benefit) => {
                const Icon = benefit.icon;

                return (
                  <div className="tours-benefit" key={benefit.title}>
                    <div className="tours-benefit-icon">
                      <Icon size={21} />
                    </div>

                    <div>
                      <h3>{benefit.title}</h3>
                      <p>{benefit.description}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        <section className="tours-process tours-section">
          <div className="tours-container">
            <div className="tours-section-heading tours-process-heading">
              <div className="tours-section-label">
                <span /> HOW IT WORKS
              </div>

              <h2>
                From first enquiry
                <br />
                <em>to travel plans.</em>
              </h2>

              <p>
                Start with a conversation. We will help clarify the details
                before you decide how to proceed.
              </p>
            </div>

            <div className="tours-process-grid">
              {process.map((step) => (
                <article className="tours-process-step" key={step.number}>
                  <span className="tours-process-number">{step.number}</span>
                  <div className="tours-process-rule" />
                  <h3>{step.title}</h3>
                  <p>{step.description}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="tours-destinations tours-section">
          <div className="tours-container tours-destinations-grid">
            <div>
              <div className="tours-section-label">
                <span /> START EXPLORING
              </div>

              <h2>
                Find your next
                <br />
                <em>Uganda experience.</em>
              </h2>

              <p>
                From wildlife encounters to forests, cultural experiences and
                city discoveries, explore the journeys that interest you.
              </p>
            </div>

            <div className="tours-destination-links">
              <a href="/destinations">
                <span>
                  <Globe2 size={20} />
                  Destinations in Uganda
                </span>
                <ArrowUpRight size={19} />
              </a>

              <a href="/wildlife-safaris-uganda">
                <span>
                  <Compass size={20} />
                  Wildlife Safaris
                </span>
                <ArrowUpRight size={19} />
              </a>

              <a href="/cultural-tours-uganda">
                <span>
                  <Users size={20} />
                  Cultural Tours
                </span>
                <ArrowUpRight size={19} />
              </a>

              <a href="/safari-packages">
                <span>
                  <CalendarCheck size={20} />
                  Safari Packages
                </span>
                <ArrowUpRight size={19} />
              </a>
            </div>
          </div>
        </section>

        <section className="tours-faq tours-section">
          <div className="tours-container tours-faq-grid">
            <div className="tours-faq-intro">
              <div className="tours-section-label">
                <span /> BEFORE YOU TRAVEL
              </div>

              <h2>
                Frequently asked
                <br />
                <em>questions.</em>
              </h2>

              <p>
                Have a different question? Contact our team to discuss your
                specific travel needs.
              </p>

              <a
                href={generalEnquiry}
                target="_blank"
                rel="noopener noreferrer"
                className="tours-text-link"
              >
                Ask us a question <ArrowRight size={17} />
              </a>
            </div>

            <div className="tours-faq-list">
              <details>
                <summary>
                  Do you organise tours in Kampala and elsewhere in Uganda?
                  <span>+</span>
                </summary>
                <p>
                  You can enquire about Kampala city experiences, Uganda
                  safaris and travel arrangements to other destinations.
                  Specific services and dates are subject to confirmation.
                </p>
              </details>

              <details>
                <summary>
                  Can I request a customised travel itinerary?
                  <span>+</span>
                </summary>
                <p>
                  Yes. Share your preferred destinations, travel dates,
                  number of travellers and budget so we can discuss a suitable
                  itinerary and the available arrangements.
                </p>
              </details>

              <details>
                <summary>
                  Can you assist with transport and accommodation?
                  <span>+</span>
                </summary>
                <p>
                  You can enquire about car hire, airport transfers, other
                  transport needs and hotel or safari lodge bookings.
                  Availability and costs should be confirmed before booking.
                </p>
              </details>

              <details>
                <summary>
                  How do I request a quote?
                  <span>+</span>
                </summary>
                <p>
                  Contact PearlP Safaris through WhatsApp and include your
                  intended dates, destination, group size and required
                  services. We can then discuss the information needed to
                  prepare an appropriate quote.
                </p>
              </details>

              <details>
                <summary>
                  How far in advance should I plan my trip?
                  <span>+</span>
                </summary>
                <p>
                  Earlier enquiries give you more time to coordinate
                  transport, accommodation and activities. Popular safari
                  experiences may require additional advance planning.
                </p>
              </details>
            </div>
          </div>
        </section>

        <section className="tours-final-cta">
          <div className="tours-container tours-final-cta-inner">
            <div>
              <div className="tours-section-label tours-label-light">
                <span /> LET'S PLAN SOMETHING MEMORABLE
              </div>

              <h2>
                Your next journey
                <br />
                <em>starts with a conversation.</em>
              </h2>

              <p>
                Tell us where you want to go and what you need. We'll discuss
                the next steps with you.
              </p>
            </div>

            <div className="tours-final-actions">
              <a
                href={generalEnquiry}
                target="_blank"
                rel="noopener noreferrer"
                className="tours-button tours-button-primary"
              >
                <MessageCircle size={19} />
                Chat on WhatsApp
                <ArrowUpRight size={18} />
              </a>

              <a href="/contact" className="tours-button tours-button-outline">
                Contact Us
                <ArrowRight size={18} />
              </a>

              <span className="tours-response-note">
                <CheckCircle2 size={15} />
                Enquire about availability and pricing
              </span>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}

export default ToursAndTravel;
