import React from "react";
import { Helmet } from "react-helmet-async";
import {
  ArrowRight,
  ArrowUpRight,
  Plane,
  MapPin,
  Clock,
  ShieldCheck,
  CarFront,
  Luggage,
  MessageCircle,
  CheckCircle2,
  Navigation,
} from "lucide-react";

import "./AirportDeliveries.css";

const WHATSAPP_NUMBER = "256789842436";

const bookingMessage =
  "Hello PearlP Safaris, I would like to enquire about an airport transfer in Uganda. Please share availability and pricing.";

const whatsappUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
  bookingMessage
)}`;

const transferServices = [
  {
    icon: Plane,
    number: "01",
    title: "Airport Pickups",
    description:
      "Arrange a pickup from Entebbe International Airport to your hotel, home, safari lodge, or another agreed destination.",
  },
  {
    icon: Navigation,
    number: "02",
    title: "Airport Drop-Offs",
    description:
      "Plan your journey to the airport ahead of departure, with pickup arrangements confirmed before travel.",
  },
  {
    icon: CarFront,
    number: "03",
    title: "Private Transfers",
    description:
      "Request private transport for individuals, couples, families, business visitors, and travelling groups.",
  },
  {
    icon: Luggage,
    number: "04",
    title: "Safari Connections",
    description:
      "Connect your arrival or departure with a Uganda safari, hotel stay, city visit, or longer road journey.",
  },
];

const bookingSteps = [
  {
    number: "01",
    title: "Share your travel details",
    description:
      "Tell us your arrival or departure date, flight details if available, passenger numbers, and destination.",
  },
  {
    number: "02",
    title: "Confirm your arrangement",
    description:
      "Discuss the vehicle, pickup location, timing, luggage requirements, availability, and price with our team.",
  },
  {
    number: "03",
    title: "Travel with a plan",
    description:
      "Once the arrangements are confirmed, keep your booking details handy for your scheduled transfer.",
  },
];

const faqs = [
  {
    question: "Do you arrange transfers from Entebbe International Airport?",
    answer:
      "You can contact PearlP Safaris to enquire about transfers from Entebbe International Airport to Kampala, Entebbe, hotels, safari destinations, and other agreed locations. Availability and pricing must be confirmed for your journey.",
  },
  {
    question: "Can I book an airport transfer before arriving in Uganda?",
    answer:
      "Yes, you can send an enquiry in advance through WhatsApp. Share your travel date, flight details if available, passenger numbers, luggage requirements, and destination so the arrangements can be discussed.",
  },
  {
    question: "Can you take me directly from the airport to a safari destination?",
    answer:
      "You can enquire about connecting your airport arrival with a Uganda safari or another destination. The route, journey duration, vehicle, availability, and price will need to be confirmed.",
  },
  {
    question: "How much does an airport transfer cost?",
    answer:
      "The cost depends on the route, distance, vehicle requirements, timing, and number of passengers. Contact us for a quote based on your specific journey.",
  },
  {
    question: "Can you accommodate luggage or a group?",
    answer:
      "Please share the number of passengers and the amount and size of luggage when enquiring. This helps us discuss an appropriate vehicle and confirm availability.",
  },
];

export default function AirportDeliveries() {
  const pageUrl = "https://pearlpsafaris.com/airport-deliveries";

  const structuredData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebPage",
        "@id": `${pageUrl}#webpage`,
        url: pageUrl,
        name: "Airport Transfers in Kampala & Entebbe, Uganda | PearlP Safaris",
        description:
          "Enquire about airport pickups, airport drop-offs, private transfers, and connections to hotels and safari destinations in Uganda.",
        isPartOf: {
          "@id": "https://pearlpsafaris.com/#website",
        },
        about: {
          "@id": "https://pearlpsafaris.com/#organization",
        },
        inLanguage: "en-UG",
      },
      {
        "@type": "Service",
        "@id": `${pageUrl}#service`,
        name: "Airport Transfers and Deliveries in Uganda",
        serviceType: [
          "Airport pickup",
          "Airport drop-off",
          "Private airport transfer",
          "Airport to hotel transfer",
          "Airport to safari destination transfer",
        ],
        url: pageUrl,
        description:
          "Airport transfer enquiries for journeys connecting Entebbe International Airport, Kampala, hotels, and agreed destinations in Uganda.",
        areaServed: [
          {
            "@type": "City",
            name: "Kampala",
          },
          {
            "@type": "City",
            name: "Entebbe",
          },
          {
            "@type": "Country",
            name: "Uganda",
          },
        ],
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
            name: "Airport Transfers",
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
          Airport Transfers Kampala & Entebbe, Uganda | PearlP Safaris
        </title>

        <meta
          name="description"
          content="Enquire about airport transfers in Uganda with PearlP Safaris. Arrange pickups and drop-offs from Entebbe International Airport to Kampala, hotels and safari destinations."
        />

        <meta
          name="keywords"
          content="airport transfers Uganda, Entebbe airport transfers, airport pickup Kampala, airport drop off Kampala, Entebbe International Airport transport, private airport transfer Uganda, airport to hotel transfer Uganda, airport safari transfer"
        />

        <meta name="robots" content="index, follow" />

        <link rel="canonical" href={pageUrl} />

        <meta
          property="og:title"
          content="Airport Transfers in Uganda | PearlP Safaris"
        />

        <meta
          property="og:description"
          content="Plan an airport pickup or drop-off in Uganda. Enquire about transfers connecting Entebbe Airport, Kampala, hotels and safari destinations."
        />

        <meta property="og:url" content={pageUrl} />
        <meta property="og:type" content="website" />
        <meta property="og:locale" content="en_UG" />

        <script type="application/ld+json">
          {JSON.stringify(structuredData)}
        </script>
      </Helmet>

      <main className="airport-page">
        <section className="airport-hero">
          <div className="airport-hero-overlay" />

          <div className="airport-container airport-hero-content">
            <div className="airport-eyebrow">
              <span />
              PEARLP SAFARIS · AIRPORT TRANSFERS
            </div>

            <h1>
              Your Uganda journey
              <br />
              <em>starts at arrival.</em>
            </h1>

            <p className="airport-hero-description">
              Plan your airport pickup or drop-off with PearlP Safaris.
              Enquire about transport between Entebbe International Airport,
              Kampala, your hotel, and your next destination.
            </p>

            <div className="airport-hero-actions">
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="airport-button airport-button-gold"
              >
                <MessageCircle size={18} />
                Enquire on WhatsApp
                <ArrowUpRight size={17} />
              </a>

              <a
                href="#airport-services"
                className="airport-button airport-button-outline"
              >
                Explore transfers
                <ArrowRight size={17} />
              </a>
            </div>

            <div className="airport-hero-note">
              <MapPin size={16} />
              Entebbe · Kampala · Destinations across Uganda
            </div>
          </div>

          <div className="airport-hero-bottom">
            <span>ARRIVE</span>
            <span className="airport-hero-bottom-line" />
            <span>CONNECT</span>
            <span className="airport-hero-bottom-line" />
            <span>EXPLORE UGANDA</span>
          </div>
        </section>

        <section className="airport-intro section-padding">
          <div className="airport-container airport-intro-grid">
            <div>
              <p className="airport-kicker">A BETTER WAY TO ARRIVE</p>

              <h2>
                Get from the airport
                <br />
                <em>to your next destination.</em>
              </h2>
            </div>

            <div className="airport-intro-copy">
              <p>
                Arriving in a new country is easier when your onward journey
                has been considered in advance. PearlP Safaris helps travellers
                enquire about airport transport and plan the next part of
                their journey in Uganda.
              </p>

              <p>
                Whether you are visiting Kampala, checking into a hotel,
                beginning a safari, or returning to the airport, share your
                requirements so the right arrangement can be discussed.
              </p>

              <a href={whatsappUrl} target="_blank" rel="noopener noreferrer">
                Discuss your transfer <ArrowUpRight size={17} />
              </a>
            </div>
          </div>
        </section>

        <section
          className="airport-services section-padding"
          id="airport-services"
        >
          <div className="airport-container">
            <div className="airport-section-heading">
              <div>
                <p className="airport-kicker">TRANSFER OPTIONS</p>
                <h2>
                  Travel connections
                  <br />
                  <em>made simpler.</em>
                </h2>
              </div>

              <p>
                Tell us where you are going and when you need to travel.
                We will discuss the available arrangements for your route.
              </p>
            </div>

            <div className="airport-service-grid">
              {transferServices.map((service) => {
                const Icon = service.icon;

                return (
                  <article className="airport-service-card" key={service.number}>
                    <div className="airport-service-card-top">
                      <span className="airport-service-number">
                        {service.number}
                      </span>

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
                      Make an enquiry <ArrowUpRight size={16} />
                    </a>
                  </article>
                );
              })}
            </div>
          </div>
        </section>

        <section className="airport-route-section section-padding">
          <div className="airport-container airport-route-grid">
            <div className="airport-route-copy">
              <p className="airport-kicker">YOUR ROUTE, YOUR PLANS</p>

              <h2>
                From arrival
                <br />
                <em>to adventure.</em>
              </h2>

              <p>
                Your airport journey may be the first step of a holiday,
                a business visit, a hotel stay, or a wildlife safari.
                Share your destination and travel plans so we can discuss
                a suitable connection.
              </p>

              <ul className="airport-check-list">
                <li>
                  <CheckCircle2 size={18} />
                  Airport-to-hotel journeys
                </li>
                <li>
                  <CheckCircle2 size={18} />
                  Airport connections to Kampala
                </li>
                <li>
                  <CheckCircle2 size={18} />
                  Transfers linked to safari itineraries
                </li>
                <li>
                  <CheckCircle2 size={18} />
                  Advance booking enquiries
                </li>
              </ul>

              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="airport-text-link"
              >
                Plan your arrival <ArrowRight size={17} />
              </a>
            </div>

            <div className="airport-route-visual">
              <div className="airport-route-card">
                <div className="airport-route-card-heading">
                  <Plane size={21} />
                  <span>YOUR JOURNEY IN UGANDA</span>
                </div>

                <div className="airport-route-stop">
                  <span className="airport-route-dot airport-route-dot-gold" />
                  <div>
                    <small>YOUR ARRIVAL POINT</small>
                    <strong>Entebbe International Airport</strong>
                  </div>
                </div>

                <div className="airport-route-connector">
                  <span />
                  <span />
                  <span />
                </div>

                <div className="airport-route-stop">
                  <span className="airport-route-dot" />
                  <div>
                    <small>YOUR NEXT STOP</small>
                    <strong>
                      Kampala, a hotel, or a safari destination
                    </strong>
                  </div>
                </div>

                <div className="airport-route-card-footer">
                  <MapPin size={17} />
                  <span>
                    Route and timing confirmed with your booking
                  </span>
                </div>
              </div>

              <div className="airport-route-stamp">
                <ShieldCheck size={23} />
                <span>
                  PLAN
                  <br />
                  AHEAD
                </span>
              </div>
            </div>
          </div>
        </section>

        <section className="airport-benefits section-padding">
          <div className="airport-container">
            <div className="airport-section-heading airport-section-heading-center">
              <div>
                <p className="airport-kicker">TRAVEL WITH CLARITY</p>
                <h2>
                  Know the plan
                  <br />
                  <em>before you travel.</em>
                </h2>
              </div>

              <p>
                Good transfer arrangements begin with clear communication.
                Share the details that matter before confirming your journey.
              </p>
            </div>

            <div className="airport-benefit-grid">
              <article>
                <Clock size={24} />
                <h3>Discuss timing</h3>
                <p>
                  Share your flight time and preferred pickup time to discuss
                  a suitable schedule.
                </p>
              </article>

              <article>
                <MapPin size={24} />
                <h3>Confirm the destination</h3>
                <p>
                  Provide the full destination or accommodation details when
                  requesting your transfer.
                </p>
              </article>

              <article>
                <CarFront size={24} />
                <h3>Explain your needs</h3>
                <p>
                  Tell us about passengers, luggage, and any vehicle
                  requirements before confirming.
                </p>
              </article>

              <article>
                <ShieldCheck size={24} />
                <h3>Confirm before travel</h3>
                <p>
                  Agree on the price, availability, meeting point, and
                  arrangements before your journey.
                </p>
              </article>
            </div>
          </div>
        </section>

        <section className="airport-booking section-padding">
          <div className="airport-container">
            <div className="airport-booking-heading">
              <p className="airport-kicker">HOW TO BOOK</p>
              <h2>
                Three steps
                <br />
                <em>to your enquiry.</em>
              </h2>
            </div>

            <div className="airport-booking-grid">
              {bookingSteps.map((step) => (
                <article key={step.number} className="airport-booking-step">
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
              className="airport-button airport-button-gold"
            >
              <MessageCircle size={18} />
              Start your enquiry
              <ArrowUpRight size={17} />
            </a>
          </div>
        </section>

        <section className="airport-faq section-padding">
          <div className="airport-container airport-faq-grid">
            <div>
              <p className="airport-kicker">HELPFUL INFORMATION</p>
              <h2>
                Airport transfer
                <br />
                <em>questions.</em>
              </h2>

              <p className="airport-faq-intro">
                Have another question about your journey? Send us your
                travel details and ask our team.
              </p>

              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="airport-text-link"
              >
                Ask us on WhatsApp <ArrowUpRight size={17} />
              </a>
            </div>

            <div className="airport-faq-list">
              {faqs.map((faq) => (
                <details key={faq.question} className="airport-faq-item">
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

        <section className="airport-final-cta">
          <div className="airport-final-cta-overlay" />

          <div className="airport-container airport-final-cta-content">
            <p className="airport-kicker">YOUR UGANDA JOURNEY STARTS HERE</p>

            <h2>
              Let's plan
              <br />
              <em>your airport transfer.</em>
            </h2>

            <p>
              Share your arrival date, destination, passenger numbers,
              and luggage requirements to begin your enquiry.
            </p>

            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="airport-button airport-button-gold"
            >
              <MessageCircle size={18} />
              Enquire on WhatsApp
              <ArrowUpRight size={17} />
            </a>

            <span className="airport-final-note">
              PearlP Safaris · We Travel All Distances
            </span>
          </div>
        </section>
      </main>
    </>
  );
}
