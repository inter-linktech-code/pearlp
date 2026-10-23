
import React from "react";
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import {
  ArrowRight,
  CarFront,
  Plane,
  MapPin,
  Clock3,
  ShieldCheck,
  Luggage,
  Navigation,
  Users,
  CheckCircle2,
  Route,
  Compass,
} from "lucide-react";
import "./CarHire.css";

const transportServices = [
  {
    icon: Plane,
    number: "01",
    title: "Airport Transfers",
    description:
      "Plan your arrival or departure with airport transport arranged around your flight details and travel schedule.",
    points: [
      "Arrival and departure planning",
      "Hotel and accommodation transfers",
      "Connection with your wider itinerary",
    ],
    image:
      "https://images.unsplash.com/photo-1436491865332-7a61a109cc05?auto=format&fit=crop&w=1000&q=85",
    imageAlt: "Passenger aircraft preparing for a journey",
  },
  {
    icon: CarFront,
    number: "02",
    title: "Private Car Hire",
    description:
      "Explore private transport options for city journeys, business travel, sightseeing and travel between destinations.",
    points: [
      "Flexible journey planning",
      "Private travel arrangements",
      "Routes tailored to your plans",
    ],
    image:
      "https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&w=1000&q=85",
    imageAlt: "Modern car ready for a road journey",
  },
  {
    icon: Route,
    number: "03",
    title: "Safari Transfers",
    description:
      "Plan the road journeys that connect Uganda's national parks, lodges and other stops on your safari itinerary.",
    points: [
      "Park-to-park journey planning",
      "Transfers between destinations",
      "Transport coordinated with your itinerary",
    ],
    image:
      "https://images.unsplash.com/photo-1516426122078-c23e76319801?auto=format&fit=crop&w=1000&q=85",
    imageAlt: "Safari vehicle travelling through an African landscape",
  },
];

const travelNeeds = [
  {
    icon: Plane,
    title: "Airport to accommodation",
    text: "Coordinate the first or final leg of your journey around your flight and accommodation plans.",
  },
  {
    icon: Compass,
    title: "Explore at your pace",
    text: "Discuss transport for sightseeing, city visits and journeys beyond your arrival destination.",
  },
  {
    icon: Navigation,
    title: "Travel between destinations",
    text: "Build transport into a wider Uganda itinerary, including stops along the way.",
  },
  {
    icon: Users,
    title: "Group travel planning",
    text: "Share your group size and luggage requirements so suitable transport options can be discussed.",
  },
];

const planningSteps = [
  {
    number: "01",
    title: "Tell us about your journey",
    description:
      "Share your arrival details, travel dates, destinations and the kind of transport you need.",
  },
  {
    number: "02",
    title: "Discuss your requirements",
    description:
      "Clarify your group size, luggage, preferred route and any stops you would like to make.",
  },
  {
    number: "03",
    title: "Confirm the arrangements",
    description:
      "Review the proposed transport arrangements, inclusions and costs before confirming your booking.",
  },
];

export default function CarHire() {
  return (
    <>
      <Helmet>
        <title>
          Car Hire & Airport Transfers in Uganda | PearlP Safaris
        </title>
        <meta
          name="description"
          content="Plan car hire, airport transfers and private transport for your Uganda trip with PearlP Safaris. Discuss your route, travel dates and safari transport requirements."
        />
        <meta
          name="robots"
          content="index, follow, max-image-preview:large"
        />
        <link
          rel="canonical"
          href="https://YOUR-DOMAIN-HERE/car-hire-uganda"
        />
        <meta
          property="og:title"
          content="Car Hire & Airport Transfers in Uganda | PearlP Safaris"
        />
        <meta
          property="og:description"
          content="Plan airport pickups, private journeys and safari transfers as part of your Uganda travel experience."
        />
        <meta property="og:type" content="website" />
        <meta
          property="og:url"
          content="https://YOUR-DOMAIN-HERE/car-hire-uganda"
        />
      </Helmet>

      <div className="car-hire-page">
        <section className="car-hire-hero">
          <div className="car-hire-hero-image" />
          <div className="car-hire-hero-overlay" />

          <div className="car-hire-hero-content page-container">
            <div className="car-hire-breadcrumb">
              <Link to="/">Home</Link>
              <span>/</span>
              <span>Car Hire & Transfers</span>
            </div>

            <div className="car-hire-hero-copy">
              <span className="eyebrow">
                <span className="car-hire-eyebrow-line" />
                YOUR JOURNEY, THOUGHTFULLY PLANNED
              </span>

              <h1>
                The journey is
                <br />
                <em>part of the adventure.</em>
              </h1>

              <p>
                From airport arrivals to the open roads leading into Uganda's
                wild places, plan the transport that connects every part of
                your trip.
              </p>

              <div className="car-hire-hero-actions">
                <Link
                  to="/contact"
                  className="button button-gold car-hire-primary-button"
                >
                  Plan Your Transport
                  <ArrowRight size={17} />
                </Link>

                <Link
                  to="/safari-packages"
                  className="car-hire-text-button"
                >
                  Explore safari packages
                  <ArrowRight size={16} />
                </Link>
              </div>
            </div>

            <div className="car-hire-hero-bottom">
              <span>
                <MapPin size={15} />
                Kampala, Uganda & beyond
              </span>
              <span className="car-hire-hero-bottom-divider" />
              <span>Airport · Private travel · Safari routes</span>
            </div>
          </div>
        </section>

        <section className="car-hire-intro section-padding">
          <div className="page-container car-hire-intro-grid">
            <div className="car-hire-intro-heading">
              <span className="eyebrow-dark">GETTING AROUND UGANDA</span>
              <h2 className="section-heading">
                More freedom.
                <br />
                <em>Less travel guesswork.</em>
              </h2>
            </div>

            <div className="car-hire-intro-copy">
              <p>
                The right transport plan can make a big difference to your
                Uganda experience. Whether you are arriving for a holiday,
                travelling between destinations or heading towards a national
                park, it helps to plan how each journey fits together.
              </p>
              <p>
                PearlP Safaris can help you discuss transport requirements
                alongside your wider trip. Tell us where you need to go, when
                you plan to travel and what matters most to you.
              </p>
              <Link to="/contact" className="text-link">
                Start planning your journey <ArrowRight size={16} />
              </Link>
            </div>
          </div>
        </section>

        <section className="car-hire-services section-padding">
          <div className="page-container">
            <div className="car-hire-section-top">
              <div>
                <span className="eyebrow-dark">TRANSPORT OPTIONS</span>
                <h2 className="section-heading">
                  A smoother way
                  <br />
                  <em>to explore.</em>
                </h2>
              </div>
              <p>
                Start with the kind of journey you have in mind. Your route,
                dates, group size and specific requirements will help shape
                the arrangements to discuss.
              </p>
            </div>

            <div className="car-hire-service-grid">
              {transportServices.map((service) => {
                const Icon = service.icon;

                return (
                  <article
                    className="car-hire-service-card"
                    key={service.number}
                  >
                    <div className="car-hire-service-image-wrap">
                      <img
                        src={service.image}
                        alt={service.imageAlt}
                        loading="lazy"
                      />
                      <span className="car-hire-service-number">
                        {service.number}
                      </span>
                    </div>

                    <div className="car-hire-service-body">
                      <div className="car-hire-service-title-row">
                        <span className="car-hire-service-icon">
                          <Icon size={20} strokeWidth={1.6} />
                        </span>
                        <h3>{service.title}</h3>
                      </div>

                      <p>{service.description}</p>

                      <ul>
                        {service.points.map((point) => (
                          <li key={point}>
                            <CheckCircle2 size={15} />
                            <span>{point}</span>
                          </li>
                        ))}
                      </ul>

                      <Link
                        to="/contact"
                        className="car-hire-card-link"
                        aria-label={`Enquire about ${service.title}`}
                      >
                        Enquire about this service
                        <ArrowRight size={16} />
                      </Link>
                    </div>
                  </article>
                );
              })}
            </div>
          </div>
        </section>

        <section className="car-hire-image-break">
          <div className="car-hire-image-break-photo" />
          <div className="car-hire-image-break-shade" />

          <div className="page-container car-hire-image-break-content">
            <span className="eyebrow">
              THE ROAD TO SOMETHING EXTRAORDINARY
            </span>
            <h2>
              From the city
              <br />
              <em>to the wild.</em>
            </h2>
            <p>
              Make the journey between Uganda's vibrant towns, beautiful
              landscapes and remarkable wildlife destinations part of the
              experience.
            </p>
            <Link
              to="/destinations"
              className="button button-gold car-hire-primary-button"
            >
              Discover Uganda
              <ArrowRight size={17} />
            </Link>
          </div>
        </section>

        <section className="car-hire-needs section-padding">
          <div className="page-container">
            <div className="car-hire-centered-heading">
              <span className="eyebrow-dark">MADE AROUND YOUR TRIP</span>
              <h2 className="section-heading">
                What does your journey <em>need?</em>
              </h2>
              <p>
                A few practical details help us understand the transport
                arrangements you are looking for.
              </p>
            </div>

            <div className="car-hire-needs-grid">
              {travelNeeds.map((need) => {
                const Icon = need.icon;

                return (
                  <article className="car-hire-need" key={need.title}>
                    <span className="car-hire-need-icon">
                      <Icon size={21} strokeWidth={1.6} />
                    </span>
                    <h3>{need.title}</h3>
                    <p>{need.text}</p>
                  </article>
                );
              })}
            </div>
          </div>
        </section>

        <section className="car-hire-planning section-padding">
          <div className="page-container car-hire-planning-grid">
            <div className="car-hire-planning-copy">
              <span className="eyebrow-dark">FROM ENQUIRY TO ITINERARY</span>
              <h2 className="section-heading">
                Three steps to
                <br />
                <em>get moving.</em>
              </h2>
              <p>
                Share the details you already know. You do not need to have
                every stop decided before starting a conversation.
              </p>

              <div className="car-hire-planning-note">
                <ShieldCheck size={23} />
                <div>
                  <strong>Clear arrangements matter.</strong>
                  <span>
                    Confirm availability, inclusions, timing and total costs
                    before committing to any transport booking.
                  </span>
                </div>
              </div>
            </div>

            <div className="car-hire-steps">
              {planningSteps.map((step) => (
                <article className="car-hire-step" key={step.number}>
                  <span className="car-hire-step-number">{step.number}</span>
                  <div>
                    <h3>{step.title}</h3>
                    <p>{step.description}</p>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="car-hire-checklist">
          <div className="page-container car-hire-checklist-inner">
            <div>
              <span className="eyebrow">BEFORE YOU ENQUIRE</span>
              <h2>Have these details handy.</h2>
              <p>
                They help make your first transport discussion more useful.
              </p>
            </div>

            <div className="car-hire-checklist-items">
              <span>
                <Clock3 size={17} /> Travel dates and times
              </span>
              <span>
                <MapPin size={17} /> Pickup and drop-off locations
              </span>
              <span>
                <Users size={17} /> Number of travellers
              </span>
              <span>
                <Luggage size={17} /> Luggage and special requirements
              </span>
            </div>
          </div>
        </section>

        <section className="car-hire-final-cta section-padding">
          <div className="page-container">
            <div className="car-hire-final-cta-panel">
              <div className="car-hire-final-cta-decoration" />
              <div className="car-hire-final-cta-content">
                <span className="eyebrow">
                  LET'S PLAN YOUR UGANDA JOURNEY
                </span>
                <h2>
                  Your next adventure
                  <br />
                  <em>starts with a conversation.</em>
                </h2>
                <p>
                  Tell us about your route, arrival plans or safari itinerary
                  and start discussing the transport that fits your trip.
                </p>
                <div className="car-hire-final-cta-actions">
                  <Link
                    to="/contact"
                    className="button button-gold car-hire-primary-button"
                  >
                    Make an Enquiry
                    <ArrowRight size={17} />
                  </Link>
                  <Link
                    to="/uganda-safaris"
                    className="car-hire-final-secondary"
                  >
                    Explore Uganda Safaris
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
