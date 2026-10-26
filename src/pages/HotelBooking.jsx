
import React from "react";
import { Helmet } from "react-helmet-async";
import {
  ArrowRight,
  ArrowUpRight,
  BedDouble,
  MapPin,
  Star,
  CheckCircle2,
  MessageCircle,
  CalendarDays,
  Users,
  Compass,
  ShieldCheck,
  Coffee,
  Waves,
  Trees,
  Building2,
} from "lucide-react";
import "./HotelBooking.css";

const SITE_URL = "https://pearlpsafaris.com";
const WHATSAPP_NUMBER = "256789842436";

const whatsappLink = (message) =>
  `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;

const accommodationTypes = [
  {
    icon: Building2,
    number: "01",
    title: "Hotels in Kampala",
    description:
      "Enquire about accommodation for business visits, city breaks, stopovers and the beginning or end of your Uganda journey.",
    tags: ["City stays", "Business travel", "Stopovers"],
  },
  {
    icon: Trees,
    number: "02",
    title: "Safari Lodges",
    description:
      "Explore accommodation options to discuss for wildlife safaris, national park visits and journeys into Uganda's natural landscapes.",
    tags: ["Safari trips", "Nature stays", "Park visits"],
  },
  {
    icon: Coffee,
    number: "03",
    title: "Guesthouses & B&Bs",
    description:
      "Ask about guesthouses, bed-and-breakfast accommodation and other stays that may suit your route and travel preferences.",
    tags: ["Short stays", "Local hospitality", "Flexible options"],
  },
  {
    icon: Waves,
    number: "04",
    title: "Retreats & Leisure Stays",
    description:
      "Discuss accommodation for relaxing breaks, couples, families or travellers who want to spend more time enjoying their destination.",
    tags: ["Leisure", "Couples", "Family travel"],
  },
];

const benefits = [
  "Accommodation options based on your itinerary",
  "Choices for different travel styles and budgets",
  "Support for local and international visitors",
  "Hotel and safari-lodge enquiries in one place",
  "Options to coordinate accommodation with transport",
  "Booking details confirmed before you commit",
];

const faqs = [
  {
    question: "Can PearlP Safaris help me book a hotel in Uganda?",
    answer:
      "You can contact PearlP Safaris with your destination, travel dates, number of guests and accommodation preferences. We can discuss suitable options and confirm availability and booking arrangements before you commit.",
  },
  {
    question: "Can you help me find safari lodges near national parks?",
    answer:
      "You can enquire about lodge options for a safari itinerary. Share the national parks or destinations you plan to visit, your dates and preferred accommodation standard so suitable options can be discussed.",
  },
  {
    question: "How much does hotel booking cost?",
    answer:
      "Accommodation prices vary by property, season, room type, number of guests and meal plan. Any quoted rate, included services, taxes and payment conditions should be confirmed before booking.",
  },
  {
    question: "Can you arrange accommodation and transport together?",
    answer:
      "Yes, you can enquire about coordinating accommodation with car hire, airport transfers or a wider Uganda safari itinerary. Each service and its availability will need to be confirmed.",
  },
  {
    question: "How far in advance should I enquire?",
    answer:
      "Enquiring early is especially useful for peak travel periods and accommodation near popular safari destinations. Availability is not guaranteed until the relevant property confirms your reservation.",
  },
];

export default function HotelBooking() {
  const title = "Hotel Booking in Uganda & Kampala | PearlP Safaris";
  const description =
    "Enquire about hotel booking in Kampala, Uganda safari lodges, guesthouses and accommodation for holidays, business trips and wildlife safaris with PearlP Safaris.";

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
        "@id": `${SITE_URL}/hotel-booking#webpage`,
        url: `${SITE_URL}/hotel-booking`,
        name: title,
        description,
        isPartOf: { "@id": `${SITE_URL}/#website` },
        about: { "@id": `${SITE_URL}/#travel-agency` },
        breadcrumb: { "@id": `${SITE_URL}/hotel-booking#breadcrumb` },
      },
      {
        "@type": "BreadcrumbList",
        "@id": `${SITE_URL}/hotel-booking#breadcrumb`,
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
            name: "Hotel Booking",
            item: `${SITE_URL}/hotel-booking`,
          },
        ],
      },
      {
        "@type": "Service",
        name: "Hotel Booking and Accommodation Assistance in Uganda",
        serviceType: [
          "Hotel booking assistance",
          "Safari lodge accommodation enquiries",
          "Guesthouse accommodation enquiries",
          "Travel accommodation planning",
        ],
        provider: { "@id": `${SITE_URL}/#travel-agency` },
        areaServed: { "@type": "Country", name: "Uganda" },
        url: `${SITE_URL}/hotel-booking`,
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
    <div className="hotel-booking-page">
      <Helmet>
        <title>{title}</title>
        <meta name="description" content={description} />
        <link rel="canonical" href={`${SITE_URL}/hotel-booking`} />
        <meta name="robots" content="index, follow" />
        <meta
          name="keywords"
          content="hotel booking Uganda, hotels in Kampala Uganda, Uganda safari lodges, accommodation Uganda, book hotels Kampala, safari accommodation Uganda, PearlP Safaris"
        />

        <meta property="og:type" content="website" />
        <meta property="og:locale" content="en_UG" />
        <meta property="og:site_name" content="PearlP Safaris" />
        <meta property="og:title" content={title} />
        <meta property="og:description" content={description} />
        <meta property="og:url" content={`${SITE_URL}/hotel-booking`} />
        <meta
          property="og:image"
          content={`${SITE_URL}/images/uganda-hotel-accommodation.jpg`}
        />

        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={title} />
        <meta name="twitter:description" content={description} />

        <script type="application/ld+json">
          {JSON.stringify(schema)}
        </script>
      </Helmet>

      <section className="hb-hero">
        <div className="hb-hero-image" aria-hidden="true" />
        <div className="hb-hero-overlay" />

        <div className="hb-container hb-hero-content">
          <div className="hb-eyebrow">
            <span />
            FIND YOUR PLACE IN UGANDA
          </div>

          <h1>
            Stay somewhere
            <br />
            <em>worth remembering.</em>
          </h1>

          <p className="hb-hero-description">
            From comfortable Kampala hotels to safari lodges close to
            Uganda's extraordinary landscapes, let us help you explore
            accommodation options for your journey.
          </p>

          <div className="hb-hero-actions">
            <a
              className="hb-button hb-button-gold"
              href={whatsappLink(
                "Hello PearlP Safaris, I would like help with hotel booking in Uganda. Please let me know what information you need."
              )}
              target="_blank"
              rel="noreferrer"
            >
              Find Accommodation <ArrowUpRight size={18} />
            </a>

            <a className="hb-text-link" href="#hb-accommodation">
              Explore stay options <ArrowRight size={17} />
            </a>
          </div>

          <div className="hb-hero-location">
            <MapPin size={16} />
            Kampala & destinations across Uganda
          </div>
        </div>

        <div className="hb-hero-bottom">
          <span>YOUR JOURNEY</span>
          <span className="hb-bottom-rule" />
          <span>YOUR PERFECT STAY</span>
        </div>
      </section>

      <section className="hb-intro">
        <div className="hb-container hb-intro-grid">
          <div className="hb-side-label">
            <span>01 / THE RIGHT STAY</span>
            <i />
          </div>

          <div className="hb-intro-copy">
            <p className="hb-kicker">ACCOMMODATION, CONSIDERED</p>
            <h2>
              A better journey
              <br />
              begins with <em>where you stay.</em>
            </h2>
            <p>
              The right accommodation can make a city break easier, a
              business trip more comfortable and a safari more memorable.
              Your destination, itinerary and personal preferences all
              matter when choosing where to stay.
            </p>
            <p>
              PearlP Safaris helps travellers enquire about accommodation
              options in Kampala and around Uganda. Tell us where you are
              going, when you plan to travel and what matters most to you.
            </p>

            <a
              className="hb-inline-link"
              href={whatsappLink(
                "Hello PearlP Safaris, please help me explore accommodation options for my trip to Uganda."
              )}
              target="_blank"
              rel="noreferrer"
            >
              Discuss your accommodation <ArrowUpRight size={17} />
            </a>
          </div>

          <div className="hb-intro-card">
            <div className="hb-card-icon">
              <BedDouble size={28} strokeWidth={1.4} />
            </div>
            <span className="hb-card-overline">YOUR NEXT STOP</span>
            <h3>Rest well.<br />Explore more.</h3>
            <p>
              Start with your destination and travel dates. We can discuss
              options that fit your plans.
            </p>
            <div className="hb-card-footer">
              <MapPin size={15} />
              <span>Uganda, East Africa</span>
            </div>
          </div>
        </div>
      </section>

      <section className="hb-types" id="hb-accommodation">
        <div className="hb-container">
          <div className="hb-section-heading">
            <div>
              <p className="hb-kicker">EXPLORE YOUR OPTIONS</p>
              <h2>
                Find the stay
                <br />
                that <em>suits your journey.</em>
              </h2>
            </div>
            <p>
              Every trip is different. Explore the type of accommodation
              you need, then contact us to discuss availability and
              arrangements.
            </p>
          </div>

          <div className="hb-type-grid">
            {accommodationTypes.map((type) => {
              const Icon = type.icon;

              return (
                <article className="hb-type-card" key={type.number}>
                  <div className="hb-type-top">
                    <span>{type.number}</span>
                    <Icon size={26} strokeWidth={1.4} />
                  </div>

                  <h3>{type.title}</h3>
                  <p>{type.description}</p>

                  <div className="hb-type-tags">
                    {type.tags.map((tag) => (
                      <span key={tag}>{tag}</span>
                    ))}
                  </div>

                  <a
                    className="hb-type-link"
                    href={whatsappLink(
                      `Hello PearlP Safaris, I would like to enquire about ${type.title.toLowerCase()} in Uganda. Please share suitable options and availability.`
                    )}
                    target="_blank"
                    rel="noreferrer"
                  >
                    Enquire about options <ArrowUpRight size={17} />
                  </a>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      <section className="hb-planning">
        <div className="hb-container hb-planning-grid">
          <div className="hb-planning-image">
            <div className="hb-image-caption">
              <span />
              MAKE ROOM FOR THE EXPERIENCE
            </div>
          </div>

          <div className="hb-planning-copy">
            <p className="hb-kicker">THOUGHTFUL TRAVEL PLANNING</p>
            <h2>
              The right details
              <br />
              make all the <em>difference.</em>
            </h2>
            <p>
              We want you to understand your options before confirming a
              stay. Share your travel details and accommodation preferences
              so the available choices and terms can be discussed clearly.
            </p>

            <div className="hb-benefits">
              {benefits.map((benefit) => (
                <div className="hb-benefit" key={benefit}>
                  <CheckCircle2 size={17} />
                  <span>{benefit}</span>
                </div>
              ))}
            </div>

            <a
              className="hb-button hb-button-dark"
              href={whatsappLink(
                "Hello PearlP Safaris, I need accommodation assistance in Uganda. I would like to discuss my travel dates, destination and budget."
              )}
              target="_blank"
              rel="noreferrer"
            >
              Discuss Your Stay <ArrowUpRight size={18} />
            </a>
          </div>
        </div>
      </section>

      <section className="hb-booking-process">
        <div className="hb-container">
          <div className="hb-process-heading">
            <p className="hb-kicker">HOW IT WORKS</p>
            <h2>
              From enquiry
              <br />
              to <em>confirmed stay.</em>
            </h2>
          </div>

          <div className="hb-process-grid">
            <article>
              <span className="hb-process-number">01</span>
              <CalendarDays size={24} />
              <h3>Share your dates</h3>
              <p>
                Tell us your destination, arrival and departure dates,
                number of guests and room requirements.
              </p>
            </article>

            <article>
              <span className="hb-process-number">02</span>
              <Compass size={24} />
              <h3>Review the options</h3>
              <p>
                Discuss accommodation choices, rates, location, inclusions
                and any relevant booking conditions.
              </p>
            </article>

            <article>
              <span className="hb-process-number">03</span>
              <ShieldCheck size={24} />
              <h3>Confirm your booking</h3>
              <p>
                Proceed after the property confirms availability and
                the final price and payment terms are clear.
              </p>
            </article>
          </div>
        </div>
      </section>

      <section className="hb-faq">
        <div className="hb-container hb-faq-grid">
          <div className="hb-faq-intro">
            <p className="hb-kicker">BEFORE YOU BOOK</p>
            <h2>
              Frequently asked
              <br />
              <em>questions.</em>
            </h2>
            <p>
              Have questions about accommodation, pricing or combining
              your stay with a safari? Start a conversation with us.
            </p>
            <a
              className="hb-inline-link"
              href={whatsappLink(
                "Hello PearlP Safaris, I have a question about hotel booking and accommodation in Uganda."
              )}
              target="_blank"
              rel="noreferrer"
            >
              Ask us on WhatsApp <ArrowUpRight size={17} />
            </a>
          </div>

          <div className="hb-faq-list">
            {faqs.map((faq, index) => (
              <details className="hb-faq-item" key={faq.question}>
                <summary>
                  <span className="hb-faq-index">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <span>{faq.question}</span>
                  <span className="hb-faq-plus">+</span>
                </summary>
                <p>{faq.answer}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      <section className="hb-final-cta">
        <div className="hb-container hb-final-content">
          <p className="hb-kicker">LET'S PLAN YOUR STAY</p>
          <h2>
            Your next journey
            <br />
            deserves a <em>great stay.</em>
          </h2>
          <p>
            Tell us where you are going, when you plan to travel and what
            kind of accommodation you prefer.
          </p>

          <a
            className="hb-button hb-button-gold"
            href={whatsappLink(
              "Hello PearlP Safaris, I would like to enquire about booking accommodation in Uganda."
            )}
            target="_blank"
            rel="noreferrer"
          >
            <MessageCircle size={18} />
            Enquire About Accommodation
          </a>

          <span className="hb-final-note">
            PearlP International Safari · Kampala, Uganda
          </span>
        </div>
      </section>
    </div>
  );
}
