import React, { useState } from "react";
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import {
  ArrowRight,
  CalendarDays,
  CheckCircle2,
  Clock3,
  Compass,
  MessageCircle,
  Phone,
} from "lucide-react";
import "./Contact.css";

const WHATSAPP_NUMBER = "256789842436";
const PHONE_NUMBER = "+256702765380";

const interests = [
  "Gorilla trekking",
  "Wildlife safari",
  "Safari packages",
  "Birdwatching",
  "Cultural tours",
  "Hiking & adventure",
  "Car hire & transfers",
  "Safari lodges",
  "A little bit of everything",
];

export default function Contact() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    country: "",
    travelDate: "",
    duration: "",
    travellers: "2",
    interests: [],
    budget: "",
    message: "",
  });

  function handleChange(event) {
    const { name, value } = event.target;

    setForm((current) => ({
      ...current,
      [name]: value,
    }));
  }

  function handleInterestChange(interest) {
    setForm((current) => ({
      ...current,
      interests: current.interests.includes(interest)
        ? current.interests.filter((item) => item !== interest)
        : [...current.interests, interest],
    }));
  }

  function handleSubmit(event) {
    event.preventDefault();

    const selectedInterests = form.interests.length
      ? form.interests.join(", ")
      : "Not specified";

    const enquiry = [
      "HELLO PEARLP SAFARIS! 🌍",
      "",
      "I'd like to enquire about planning a safari or trip.",
      "",
      "TRAVELLER DETAILS",
      `Full name: ${form.name.trim()}`,
      `Email: ${form.email.trim()}`,
      `Travelling from: ${form.country.trim() || "Not specified"}`,
      "",
      "TRIP DETAILS",
      `Preferred arrival date: ${
        form.travelDate || "Flexible / not specified"
      }`,
      `Trip duration: ${form.duration || "Not specified"}`,
      `Number of travellers: ${form.travellers}`,
      `Budget per person: ${form.budget || "Prefer to discuss"}`,
      `Interests: ${selectedInterests}`,
      "",
      "ADDITIONAL MESSAGE",
      form.message.trim() || "No additional message provided.",
      "",
      "Please let me know the available options and next steps.",
    ].join("\n");

    const whatsappUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
      enquiry
    )}`;

    window.open(whatsappUrl, "_blank", "noopener,noreferrer");
  }

  return (
    <>
      <Helmet>
        <title>Contact PearlP Safaris | Plan Your Uganda Safari</title>
        <meta
          name="description"
          content="Start planning your Uganda safari with PearlP Safaris. Share your travel dates, interests and trip preferences for gorilla trekking, wildlife safaris and more."
        />
        <meta
          name="robots"
          content="index, follow, max-image-preview:large"
        />
        <link
          rel="canonical"
          href="https://pearlpsafaris.com/contact"
        />
        <meta property="og:title" content="Contact PearlP Safaris" />
        <meta
          property="og:description"
          content="Tell us about your dream Uganda adventure and begin planning your journey."
        />
        <meta property="og:type" content="website" />
        <meta
          property="og:url"
          content="https://pearlpsafaris.com/contact"
        />
      </Helmet>

      <main className="contact-page">
        <section className="contact-hero">
          <img
            className="contact-hero-image"
            src="https://images.unsplash.com/photo-1516026672322-bc52d61a55d5?auto=format&fit=crop&w=2200&q=90"
            alt="Uganda's beautiful natural landscapes"
          />
          <div className="contact-hero-overlay" />

          <div className="page-container contact-hero-inner">
            <div className="contact-hero-copy">
              <span className="eyebrow">
                <span className="contact-eyebrow-line" />
                YOUR JOURNEY STARTS HERE
              </span>

              <h1>
                Tell us what
                <br />
                <em>you dream of.</em>
              </h1>

              <p>
                A rainforest encounter, a wildlife safari or a journey across
                the Pearl of Africa. Tell us what brings you to Uganda, and
                start shaping the trip you have in mind.
              </p>

              <a href="#contact-form" className="button button-gold">
                Plan your journey <ArrowRight size={17} />
              </a>
            </div>

            <div className="contact-hero-caption">
              <span />
              LET THE ADVENTURE TAKE SHAPE
            </div>
          </div>
        </section>

        <section className="contact-main section-padding" id="contact-form">
          <div className="page-container contact-layout">
            <aside className="contact-sidebar">
              <span className="eyebrow-dark">
                LET'S START WITH A CONVERSATION
              </span>

              <h2>
                Every great
                <br />
                journey begins
                <br />
                with <em>a question.</em>
              </h2>

              <p className="contact-sidebar-intro">
                Share a few details about your plans. Your interests, travel
                dates and preferred pace will help shape the conversation
                about your Uganda adventure.
              </p>

              <div className="contact-benefits">
                <div className="contact-benefit">
                  <span className="contact-benefit-icon">
                    <Compass size={21} />
                  </span>
                  <div>
                    <h3>Start with your interests</h3>
                    <p>
                      Tell us which experiences and destinations appeal to you.
                    </p>
                  </div>
                </div>

                <div className="contact-benefit">
                  <span className="contact-benefit-icon">
                    <CalendarDays size={21} />
                  </span>
                  <div>
                    <h3>Share your travel window</h3>
                    <p>
                      Your preferred dates and trip length help frame the plan.
                    </p>
                  </div>
                </div>

                <div className="contact-benefit">
                  <span className="contact-benefit-icon">
                    <MessageCircle size={21} />
                  </span>
                  <div>
                    <h3>Discuss your options</h3>
                    <p>
                      Use your enquiry to explain what matters most to you.
                    </p>
                  </div>
                </div>
              </div>

              <div className="contact-sidebar-note">
                <Clock3 size={19} />
                <p>
                  <strong>Planning tip</strong>
                  <span>
                    If you are considering gorilla trekking, mention it early
                    so permit requirements can be part of the planning.
                  </span>
                </p>
              </div>

              <div className="contact-direct-contact">
                <span className="eyebrow-dark">CONTACT OUR TEAM DIRECTLY</span>

                <a
                  href={`https://wa.me/${WHATSAPP_NUMBER}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="contact-direct-link"
                >
                  <MessageCircle size={19} />
                  <span>
                    <small>WHATSAPP</small>
                    <strong>+256 789 842 436</strong>
                  </span>
                  <ArrowRight size={16} />
                </a>

                <a
                  href={`tel:${PHONE_NUMBER}`}
                  className="contact-direct-link"
                >
                  <Phone size={19} />
                  <span>
                    <small>CALL US</small>
                    <strong>+256 702 765 380</strong>
                  </span>
                  <ArrowRight size={16} />
                </a>

                <p>Ggaba Road, Bunga, Ivory Mall, Uganda</p>
              </div>

              <div className="contact-explore-links">
                <span>STILL EXPLORING?</span>
                <Link to="/destinations">
                  Discover destinations <ArrowRight size={15} />
                </Link>
                <Link to="/travel-guide">
                  Read the travel guide <ArrowRight size={15} />
                </Link>
              </div>
            </aside>

            <div className="contact-form-panel">
              <div className="contact-form-heading">
                <span className="eyebrow-dark">YOUR UGANDA ADVENTURE</span>
                <h2>Let's plan the details.</h2>
                <p>
                  Complete what you can. You don't need to have everything
                  figured out yet.
                </p>
              </div>

              <form className="contact-form" onSubmit={handleSubmit}>
                <div className="contact-form-section-title">
                  <span>01</span>
                  <h3>About you</h3>
                </div>

                <div className="contact-fields-grid">
                  <label className="contact-field">
                    <span>Full name *</span>
                    <input
                      type="text"
                      name="name"
                      autoComplete="name"
                      placeholder="Your name"
                      value={form.name}
                      onChange={handleChange}
                      required
                    />
                  </label>

                  <label className="contact-field">
                    <span>Email address *</span>
                    <input
                      type="email"
                      name="email"
                      autoComplete="email"
                      placeholder="you@example.com"
                      value={form.email}
                      onChange={handleChange}
                      required
                    />
                  </label>

                  <label className="contact-field contact-field-full">
                    <span>Where are you travelling from?</span>
                    <input
                      type="text"
                      name="country"
                      autoComplete="country-name"
                      placeholder="Country of residence"
                      value={form.country}
                      onChange={handleChange}
                    />
                  </label>
                </div>

                <div className="contact-form-divider" />

                <div className="contact-form-section-title">
                  <span>02</span>
                  <h3>Your trip</h3>
                </div>

                <div className="contact-fields-grid">
                  <label className="contact-field">
                    <span>Preferred arrival date</span>
                    <input
                      type="date"
                      name="travelDate"
                      min={new Date().toLocaleDateString("en-CA")}
                      value={form.travelDate}
                      onChange={handleChange}
                    />
                  </label>

                  <label className="contact-field">
                    <span>How long would you like to travel?</span>
                    <select
                      name="duration"
                      value={form.duration}
                      onChange={handleChange}
                    >
                      <option value="">Choose trip length</option>
                      <option value="1–3 days">1–3 days</option>
                      <option value="4–7 days">4–7 days</option>
                      <option value="8–12 days">8–12 days</option>
                      <option value="13+ days">13+ days</option>
                      <option value="Not sure yet">Not sure yet</option>
                    </select>
                  </label>

                  <label className="contact-field">
                    <span>Number of travellers</span>
                    <select
                      name="travellers"
                      value={form.travellers}
                      onChange={handleChange}
                    >
                      <option value="1">1 traveller</option>
                      <option value="2">2 travellers</option>
                      <option value="3">3 travellers</option>
                      <option value="4">4 travellers</option>
                      <option value="5–6">5–6 travellers</option>
                      <option value="7+">7 or more</option>
                    </select>
                  </label>

                  <label className="contact-field">
                    <span>Approximate budget per person</span>
                    <select
                      name="budget"
                      value={form.budget}
                      onChange={handleChange}
                    >
                      <option value="">Prefer to discuss</option>
                      <option value="Under US$1,000">Under US$1,000</option>
                      <option value="US$1,000–2,500">US$1,000–2,500</option>
                      <option value="US$2,500–5,000">US$2,500–5,000</option>
                      <option value="Over US$5,000">Over US$5,000</option>
                      <option value="Flexible">Flexible</option>
                    </select>
                  </label>
                </div>

                <div className="contact-form-divider" />

                <div className="contact-form-section-title">
                  <span>03</span>
                  <h3>What would you love to experience?</h3>
                </div>

                <p className="contact-field-hint">
                  Select as many as you like.
                </p>

                <div className="contact-interest-grid">
                  {interests.map((interest) => (
                    <label
                      className={`contact-interest-option ${
                        form.interests.includes(interest) ? "is-selected" : ""
                      }`}
                      key={interest}
                    >
                      <input
                        type="checkbox"
                        checked={form.interests.includes(interest)}
                        onChange={() => handleInterestChange(interest)}
                      />
                      <span className="contact-interest-check">
                        <CheckCircle2 size={16} />
                      </span>
                      <span>{interest}</span>
                    </label>
                  ))}
                </div>

                <div className="contact-form-divider" />

                <div className="contact-form-section-title">
                  <span>04</span>
                  <h3>Tell us a little more</h3>
                </div>

                <label className="contact-field">
                  <span>
                    What do you have in mind? Any questions or special
                    requests?
                  </span>
                  <textarea
                    name="message"
                    rows="5"
                    placeholder="Share your ideas, must-see places, accommodation preferences or anything else you'd like us to know..."
                    value={form.message}
                    onChange={handleChange}
                  />
                </label>

                <p className="contact-privacy-note">
                  By continuing, you agree that the details you provide may be
                  used to respond to your enquiry.
                </p>

                <button
                  className="button button-dark contact-submit"
                  type="submit"
                >
                  Send Enquiry on WhatsApp <MessageCircle size={17} />
                </button>

                <p className="contact-demo-note">
                  WhatsApp will open with your enquiry ready to send. Please
                  press Send in WhatsApp to deliver your message.
                </p>
              </form>
            </div>
          </div>
        </section>

        <section className="contact-bottom-cta">
          <div className="page-container contact-bottom-inner">
            <div>
              <span className="eyebrow">THE PEARL OF AFRICA IS CALLING</span>
              <h2>
                Your next chapter
                <br />
                <em>could begin here.</em>
              </h2>
            </div>

            <Link to="/uganda-safaris" className="button button-gold">
              Explore Uganda safaris <ArrowRight size={17} />
            </Link>
          </div>
        </section>
      </main>
    </>
  );
}
