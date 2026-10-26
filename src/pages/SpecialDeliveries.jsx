
import React from "react";
import { Helmet } from "react-helmet-async";
import {
  ArrowRight,
  ArrowUpRight,
  Package,
  MapPin,
  Clock,
  ShieldCheck,
  MessageCircle,
  CheckCircle2,
  Route,
  CalendarClock,
  Boxes,
  Truck,
  ClipboardCheck,
  Phone,
  Navigation,
} from "lucide-react";
import "./SpecialDeliveries.css";

const SITE_URL = "https://pearlpsafaris.com";
const WHATSAPP_NUMBER = "256789842436";

const whatsappLink = (message) =>
  `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;

const deliveryServices = [
  {
    number: "01",
    icon: Package,
    title: "Parcel Deliveries",
    description:
      "Enquire about transporting suitable parcels between agreed collection and delivery locations, subject to size, contents and route.",
    tags: ["Parcels", "Collection", "Delivery"],
  },
  {
    number: "02",
    icon: Boxes,
    title: "Business Item Deliveries",
    description:
      "Discuss delivery arrangements for documents, business supplies and other permitted items that need to move between locations.",
    tags: ["Business needs", "Documents", "Supplies"],
  },
  {
    number: "03",
    icon: Route,
    title: "Intercity Deliveries",
    description:
      "Ask about coordinating suitable items between Kampala and other destinations in Uganda, depending on the route and availability.",
    tags: ["Intercity", "Route planning", "Uganda"],
  },
  {
    number: "04",
    icon: Truck,
    title: "Special Transport Requests",
    description:
      "Have a delivery requirement that needs additional planning? Share the item details and destination so feasibility can be reviewed.",
    tags: ["Custom requests", "Special handling", "Prior arrangement"],
  },
];

const process = [
  {
    number: "01",
    icon: ClipboardCheck,
    title: "Share the details",
    description:
      "Describe the item, its dimensions where relevant, collection point, destination and preferred delivery date.",
  },
  {
    number: "02",
    icon: Navigation,
    title: "Confirm arrangements",
    description:
      "Discuss whether the request can be accommodated, the route, expected timing, charges and any handling requirements.",
  },
  {
    number: "03",
    icon: ShieldCheck,
    title: "Arrange the delivery",
    description:
      "Proceed after the delivery details and applicable terms have been agreed and confirmed.",
  },
];

const faqs = [
  {
    question: "Does PearlP Safaris offer special delivery services?",
    answer:
      "You can contact PearlP Safaris to enquire about a delivery request. Share the item type, collection and delivery locations, and preferred date so the team can confirm whether the request can be accommodated.",
  },
  {
    question: "Do you deliver items outside Kampala?",
    answer:
      "You can enquire about deliveries between Kampala and other destinations in Uganda. Service availability depends on the route, item, transport arrangements and timing, and must be confirmed before booking.",
  },
  {
    question: "How much does a delivery cost?",
    answer:
      "The cost depends on the distance, item size and weight, handling needs, urgency and route. Contact us with the details for a quotation before confirming the service.",
  },
  {
    question: "Can I request urgent or same-day delivery?",
    answer:
      "You can ask about an urgent delivery, but same-day service is not guaranteed. It depends on the collection time, destination, route, transport availability and the type of item.",
  },
  {
    question: "Which items can be delivered?",
    answer:
      "Items must be lawful and suitable for the agreed transport arrangements. Restricted, dangerous, prohibited or inadequately packaged items may not be accepted. Disclose the contents before requesting a quotation.",
  },
];

export default function SpecialDeliveries() {
  const title = "Special Delivery Services in Kampala & Uganda | PearlP Safaris";
  const description =
    "Enquire about parcel deliveries, business item transport and intercity delivery arrangements in Kampala and across Uganda with PearlP Safaris.";

  const schema = {
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
        "@id": `${SITE_URL}/special-deliveries#webpage`,
        url: `${SITE_URL}/special-deliveries`,
        name: title,
        description,
        isPartOf: { "@id": `${SITE_URL}/#website` },
        about: { "@id": `${SITE_URL}/#travel-agency` },
        breadcrumb: {
          "@id": `${SITE_URL}/special-deliveries#breadcrumb`,
        },
      },
      {
        "@type": "BreadcrumbList",
        "@id": `${SITE_URL}/special-deliveries#breadcrumb`,
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
            name: "Special Deliveries",
            item: `${SITE_URL}/special-deliveries`,
          },
        ],
      },
      {
        "@type": "Service",
        name: "Special Delivery Enquiries in Uganda",
        serviceType: [
          "Parcel delivery enquiries",
          "Business item transport",
          "Intercity delivery arrangements",
          "Special transport requests",
        ],
        provider: { "@id": `${SITE_URL}/#travel-agency` },
        areaServed: { "@type": "Country", name: "Uganda" },
        url: `${SITE_URL}/special-deliveries`,
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
    <div className="special-deliveries-page">
      <Helmet>
        <title>{title}</title>
        <meta name="description" content={description} />
        <link rel="canonical" href={`${SITE_URL}/special-deliveries`} />
        <meta name="robots" content="index, follow" />
        <meta
          name="keywords"
          content="delivery services Kampala, parcel delivery Uganda, special deliveries Uganda, business deliveries Kampala, intercity delivery Uganda, item transport Uganda, PearlP Safaris"
        />

        <meta property="og:type" content="website" />
        <meta property="og:locale" content="en_UG" />
        <meta property="og:site_name" content="PearlP Safaris" />
        <meta property="og:title" content={title} />
        <meta property="og:description" content={description} />
        <meta
          property="og:url"
          content={`${SITE_URL}/special-deliveries`}
        />
        <meta
          property="og:image"
          content={`${SITE_URL}/images/special-delivery-uganda.jpg`}
        />

        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={title} />
        <meta name="twitter:description" content={description} />

        <script type="application/ld+json">
          {JSON.stringify(schema)}
        </script>
      </Helmet>

      <section className="sd-hero">
        <div className="sd-hero-image" aria-hidden="true" />
        <div className="sd-hero-overlay" />

        <div className="sd-container sd-hero-content">
          <div className="sd-eyebrow">
            <span />
            DELIVERY ARRANGEMENTS · UGANDA
          </div>

          <h1>
            Every delivery
            <br />
            has a destination.
            <br />
            <em>Let's get it there.</em>
          </h1>

          <p className="sd-hero-description">
            From business items to suitable parcels and special transport
            requests, tell us what needs to move and where it needs to go.
            We’ll discuss the available arrangements with you.
          </p>

          <div className="sd-hero-actions">
            <a
              className="sd-button sd-button-gold"
              href={whatsappLink(
                "Hello PearlP Safaris, I would like to enquire about your special delivery services. Please let me share the item and route details."
              )}
              target="_blank"
              rel="noreferrer"
            >
              Request a Delivery Quote <ArrowUpRight size={18} />
            </a>

            <a className="sd-text-link" href="#sd-services">
              Explore delivery options <ArrowRight size={17} />
            </a>
          </div>

          <div className="sd-hero-note">
            <MapPin size={16} />
            Kampala and other destinations by arrangement
          </div>
        </div>

        <div className="sd-hero-bottom">
          <span>YOUR ITEM</span>
          <span className="sd-hero-rule" />
          <span>YOUR DESTINATION</span>
        </div>
      </section>

      <section className="sd-intro">
        <div className="sd-container sd-intro-grid">
          <div className="sd-side-label">
            <span>01 / THE SERVICE</span>
            <i />
          </div>

          <div className="sd-intro-copy">
            <p className="sd-kicker">DELIVERY, MADE CLEARER</p>
            <h2>
              Tell us what needs
              <br />
              to move. <em>We'll discuss how.</em>
            </h2>

            <p>
              Getting an item to the right place takes more than knowing
              the destination. The type of item, collection point, distance
              and timing all help determine the right transport arrangement.
            </p>

            <p>
              PearlP Safaris welcomes enquiries about suitable delivery
              and transport requests in Kampala and other parts of Uganda.
              We’ll review the details with you before any arrangement is
              confirmed.
            </p>

            <a
              className="sd-inline-link"
              href={whatsappLink(
                "Hello PearlP Safaris, I need help arranging a delivery in Uganda. Please advise what details you require."
              )}
              target="_blank"
              rel="noreferrer"
            >
              Discuss your delivery <ArrowUpRight size={17} />
            </a>
          </div>

          <div className="sd-intro-card">
            <div className="sd-intro-card-icon">
              <Package size={28} strokeWidth={1.4} />
            </div>
            <span className="sd-card-overline">START WITH THE DETAILS</span>
            <h3>The right item.<br />The right destination.</h3>
            <p>
              Tell us the route, item details and preferred timing to
              begin your enquiry.
            </p>
            <div className="sd-card-footer">
              <MapPin size={15} />
              <span>Kampala · Uganda</span>
            </div>
          </div>
        </div>
      </section>

      <section className="sd-services" id="sd-services">
        <div className="sd-container">
          <div className="sd-section-heading">
            <div>
              <p className="sd-kicker">HOW CAN WE HELP?</p>
              <h2>
                Delivery needs
                <br />
                <em>aren't all the same.</em>
              </h2>
            </div>
            <p>
              Select the type of delivery you want to discuss. Final
              acceptance, route availability and charges are confirmed
              individually.
            </p>
          </div>

          <div className="sd-service-grid">
            {deliveryServices.map((service) => {
              const Icon = service.icon;

              return (
                <article className="sd-service-card" key={service.number}>
                  <div className="sd-service-top">
                    <span>{service.number}</span>
                    <Icon size={26} strokeWidth={1.4} />
                  </div>

                  <h3>{service.title}</h3>
                  <p>{service.description}</p>

                  <div className="sd-tags">
                    {service.tags.map((tag) => (
                      <span key={tag}>{tag}</span>
                    ))}
                  </div>

                  <a
                    className="sd-card-link"
                    href={whatsappLink(
                      `Hello PearlP Safaris, I would like to enquire about ${service.title.toLowerCase()}. Please let me share the delivery details and request a quotation.`
                    )}
                    target="_blank"
                    rel="noreferrer"
                  >
                    Enquire about this service <ArrowUpRight size={17} />
                  </a>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      <section className="sd-planning">
        <div className="sd-container sd-planning-grid">
          <div className="sd-planning-image">
            <div className="sd-image-caption">
              <span />
              PLAN THE ROUTE BEFORE THE JOURNEY
            </div>
          </div>

          <div className="sd-planning-copy">
            <p className="sd-kicker">BEFORE WE CONFIRM</p>
            <h2>
              Clear details.
              <br />
              Better <em>arrangements.</em>
            </h2>

            <p>
              A complete enquiry helps us understand your request and
              assess whether the delivery can be arranged. Please share
              accurate information so timing, handling and costs can be
              discussed upfront.
            </p>

            <div className="sd-checklist">
              {[
                "Item description and contents",
                "Approximate size and weight",
                "Collection and delivery locations",
                "Preferred collection and delivery dates",
                "Any special handling requirements",
                "Contact details for both locations",
              ].map((item) => (
                <div className="sd-check-item" key={item}>
                  <CheckCircle2 size={17} />
                  <span>{item}</span>
                </div>
              ))}
            </div>

            <a
              className="sd-button sd-button-dark"
              href={whatsappLink(
                "Hello PearlP Safaris, I would like a delivery quotation. Please guide me through the information you need."
              )}
              target="_blank"
              rel="noreferrer"
            >
              Discuss Your Requirements <ArrowUpRight size={18} />
            </a>
          </div>
        </div>
      </section>

      <section className="sd-process">
        <div className="sd-container">
          <div className="sd-process-heading">
            <p className="sd-kicker">A SIMPLE PROCESS</p>
            <h2>
              From request
              <br />
              to <em>arrangement.</em>
            </h2>
          </div>

          <div className="sd-process-grid">
            {process.map((step) => {
              const Icon = step.icon;

              return (
                <article className="sd-process-step" key={step.number}>
                  <span className="sd-process-number">{step.number}</span>
                  <Icon size={25} strokeWidth={1.4} />
                  <h3>{step.title}</h3>
                  <p>{step.description}</p>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      <section className="sd-faq">
        <div className="sd-container sd-faq-grid">
          <div className="sd-faq-intro">
            <p className="sd-kicker">DELIVERY QUESTIONS</p>
            <h2>
              Before you
              <br />
              <em>send it.</em>
            </h2>
            <p>
              Have a question about routes, charges or whether an item
              can be transported? Contact us before making arrangements.
            </p>

            <a
              className="sd-inline-link"
              href={whatsappLink(
                "Hello PearlP Safaris, I have a question about your special delivery services."
              )}
              target="_blank"
              rel="noreferrer"
            >
              Ask us on WhatsApp <ArrowUpRight size={17} />
            </a>
          </div>

          <div className="sd-faq-list">
            {faqs.map((faq, index) => (
              <details className="sd-faq-item" key={faq.question}>
                <summary>
                  <span className="sd-faq-index">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <span>{faq.question}</span>
                  <span className="sd-faq-plus">+</span>
                </summary>
                <p>{faq.answer}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      <section className="sd-final-cta">
        <div className="sd-container sd-final-content">
          <p className="sd-kicker">LET'S DISCUSS YOUR REQUEST</p>
          <h2>
            One destination
            <br />
            closer to <em>done.</em>
          </h2>
          <p>
            Share the item, route and timing you have in mind. We'll help
            you understand the available options and next steps.
          </p>

          <a
            className="sd-button sd-button-gold"
            href={whatsappLink(
              "Hello PearlP Safaris, I would like to arrange a special delivery in Uganda."
            )}
            target="_blank"
            rel="noreferrer"
          >
            <MessageCircle size={18} />
            Enquire on WhatsApp
          </a>

          <span className="sd-final-note">
            PearlP International Safari · Kampala, Uganda
          </span>
        </div>
      </section>
    </div>
  );
}
