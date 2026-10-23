import React from "react";
import { Helmet } from "react-helmet-async";
import { motion } from "framer-motion";
import {
  FiArrowUpRight,
  FiCompass,
  FiHeart,
  FiMapPin,
  FiShield,
  FiUsers,
  FiCheckCircle,
} from "react-icons/fi";
import "./AboutUs.css";

import aboutHeroImage from "../assets/about-hero.jpg";
import aboutCtaImage from "../assets/about-cta.jpg";
import bwindiImage from "../assets/bwindi.jpg";
import gorillaImage from "../assets/gorilla.jpg";
import wildlifeImage from "../assets/wildlife.jpg";
import culturalImage from "../assets/cultural.jpg";

const values = [
  {
    icon: <FiHeart />,
    title: "Personalized Experiences",
    description:
      "Every traveller is different. We tailor our safari experiences to your interests, pace, budget, and travel goals.",
  },
  {
    icon: <FiShield />,
    title: "Responsible Travel",
    description:
      "We believe tourism should respect wildlife, protect natural environments, and support the communities that make Uganda special.",
  },
  {
    icon: <FiCompass />,
    title: "Local Knowledge",
    description:
      "Our focus on Uganda helps us create meaningful journeys through its national parks, landscapes, cultures, and hidden gems.",
  },
  {
    icon: <FiUsers />,
    title: "People First",
    description:
      "We value genuine hospitality, clear communication, and personal attention throughout your journey.",
  },
];

const experiences = [
  {
    number: "01",
    title: "Gorilla Trekking",
    description:
      "Experience the extraordinary mountain gorillas of Uganda's Bwindi Impenetrable Forest and create memories that last a lifetime.",
    image: gorillaImage,
    link: "/gorilla-trekking-uganda",
    label: "Explore Gorilla Trekking",
  },
  {
    number: "02",
    title: "Wildlife Safaris",
    description:
      "Discover Uganda's remarkable wildlife, from elephants and lions to giraffes, buffaloes, and unforgettable savannah landscapes.",
    image: wildlifeImage,
    link: "/wildlife-safaris-uganda",
    label: "Explore Wildlife Safaris",
  },
  {
    number: "03",
    title: "Cultural Experiences",
    description:
      "Connect with Uganda's people, traditions, heritage, and everyday life through enriching cultural experiences.",
    image: culturalImage,
    link: "/cultural-tours-uganda",
    label: "Explore Cultural Tours",
  },
];

const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.65, ease: "easeOut" },
  },
};

export default function AboutUs() {
  return (
    <>
      <Helmet>
        <title>About PearlP Safaris | Discover Uganda with Local Experts</title>
        <meta
          name="description"
          content="Discover PearlP Safaris, your partner for memorable Uganda safaris, gorilla trekking, wildlife adventures, and cultural tours. Explore Uganda with a personalized travel experience."
        />
        <link
          rel="canonical"
          href="https://pearlpsafaris.com/about-us"
        />
        <meta
          property="og:title"
          content="About PearlP Safaris | Discover Uganda"
        />
        <meta
          property="og:description"
          content="Discover Uganda with PearlP Safaris through personalized gorilla trekking, wildlife safaris, and cultural experiences."
        />
        <meta
          property="og:url"
          content="https://pearlpsafaris.com/about-us"
        />
        <meta property="og:type" content="website" />
        <meta
          property="og:image"
          content="https://pearlpsafaris.com/images/about-hero.jpg"
        />
      </Helmet>

      <main className="about-page">
        {/* HERO */}
        <section
          className="about-hero"
          style={{ backgroundImage: `url(${aboutHeroImage})` }}
        >
          <div className="about-hero-overlay" />

          <div className="about-container about-hero-content">
            <motion.div
              initial="hidden"
              animate="visible"
              variants={fadeUp}
              className="about-hero-copy"
            >
              <span className="about-eyebrow">
                <FiMapPin />
                YOUR JOURNEY, OUR HOME
              </span>

              <h1>
                Discover the heart of <span>Uganda</span> with us.
              </h1>

              <p>
                At PearlP Safaris, we create meaningful African journeys
                connecting you with Uganda's extraordinary wildlife,
                beautiful landscapes, and vibrant cultures.
              </p>

              <div className="about-hero-actions">
                <a href="/safari-packages" className="about-btn about-btn-primary">
                  Explore Safari Packages
                  <FiArrowUpRight />
                </a>

                <a href="/contact" className="about-btn about-btn-outline">
                  Talk to Our Team
                </a>
              </div>
            </motion.div>
          </div>

          <div className="about-hero-bottom">
            <span>Authentic experiences</span>
            <span>Meaningful connections</span>
            <span>Unforgettable journeys</span>
          </div>
        </section>

        {/* INTRODUCTION */}
        <section className="about-intro section-padding">
          <div className="about-container about-intro-grid">
            <motion.div
              className="about-intro-image-wrap"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              variants={fadeUp}
            >
              <img
                src={bwindiImage}
                alt="Lush forest landscape in Uganda's Bwindi region"
                className="about-intro-image"
                loading="lazy"
              />

              <div className="about-image-caption">
                <FiMapPin />
                <span>Uganda, the Pearl of Africa</span>
              </div>
            </motion.div>

            <motion.div
              className="about-intro-copy"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              variants={fadeUp}
            >
              <span className="about-section-label">WHO WE ARE</span>

              <h2>
                More than a safari.
                <br />
                <span>A journey that stays with you.</span>
              </h2>

              <p>
                Uganda is a land of extraordinary contrasts. From misty
                rainforests and incredible wildlife to welcoming communities
                and breathtaking scenery, every journey offers something
                special.
              </p>

              <p>
                PearlP Safaris is here to help you experience that richness.
                We focus on creating thoughtful travel experiences that bring
                you closer to the places, people, and wildlife that make
                Uganda unforgettable.
              </p>

              <p>
                Whether you dream of meeting mountain gorillas, exploring
                national parks, or discovering local traditions, we help you
                plan a journey that reflects what matters most to you.
              </p>

              <a href="/destinations" className="about-text-link">
                Discover our destinations
                <FiArrowUpRight />
              </a>
            </motion.div>
          </div>
        </section>

        {/* VALUES */}
        <section className="about-values section-padding">
          <div className="about-container">
            <motion.div
              className="about-section-heading"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              variants={fadeUp}
            >
              <span className="about-section-label">WHAT GUIDES US</span>
              <h2>
                The values behind <span>every journey</span>
              </h2>
              <p>
                Great travel experiences begin with thoughtful planning,
                genuine care, and respect for the places we visit.
              </p>
            </motion.div>

            <div className="about-values-grid">
              {values.map((value, index) => (
                <motion.article
                  className="about-value-card"
                  key={value.title}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, amount: 0.2 }}
                  variants={fadeUp}
                  transition={{ delay: index * 0.08 }}
                >
                  <div className="about-value-icon">{value.icon}</div>
                  <h3>{value.title}</h3>
                  <p>{value.description}</p>
                  <span className="about-value-number">
                    0{index + 1}
                  </span>
                </motion.article>
              ))}
            </div>
          </div>
        </section>

        {/* EXPERIENCES */}
        <section className="about-experiences section-padding">
          <div className="about-container">
            <motion.div
              className="about-section-heading about-experiences-heading"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              variants={fadeUp}
            >
              <span className="about-section-label">EXPERIENCE UGANDA</span>
              <h2>
                Find the journey <span>that inspires you</span>
              </h2>
              <p>
                Explore the experiences that make Uganda such a remarkable
                destination.
              </p>
            </motion.div>

            <div className="about-experiences-grid">
              {experiences.map((experience) => (
                <motion.article
                  className="about-experience-card"
                  key={experience.number}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, amount: 0.15 }}
                  variants={fadeUp}
                >
                  <a
                    href={experience.link}
                    className="about-experience-image-link"
                    aria-label={experience.label}
                  >
                    <img
                      src={experience.image}
                      alt={experience.title}
                      className="about-experience-image"
                      loading="lazy"
                    />
                    <span className="about-experience-number">
                      {experience.number}
                    </span>
                    <span className="about-experience-image-arrow">
                      <FiArrowUpRight />
                    </span>
                  </a>

                  <div className="about-experience-content">
                    <h3>{experience.title}</h3>
                    <p>{experience.description}</p>

                    <a
                      href={experience.link}
                      className="about-text-link"
                    >
                      Explore experience
                      <FiArrowUpRight />
                    </a>
                  </div>
                </motion.article>
              ))}
            </div>
          </div>
        </section>

        {/* RESPONSIBLE TRAVEL BANNER */}
        <section className="about-promise section-padding">
          <div className="about-container about-promise-inner">
            <motion.div
              className="about-promise-copy"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              variants={fadeUp}
            >
              <span className="about-section-label">
                OUR COMMITMENT
              </span>

              <h2>
                Travel thoughtfully.
                <br />
                <span>Experience more.</span>
              </h2>

              <p>
                We believe the best journeys create lasting memories while
                encouraging respect for wildlife, natural environments,
                local cultures, and the communities that welcome travellers.
              </p>

              <ul className="about-promise-list">
                <li>
                  <FiCheckCircle />
                  Respect for Uganda's natural heritage
                </li>
                <li>
                  <FiCheckCircle />
                  Meaningful cultural connections
                </li>
                <li>
                  <FiCheckCircle />
                  Thoughtfully planned travel experiences
                </li>
              </ul>
            </motion.div>

            <motion.div
              className="about-promise-visual"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              variants={fadeUp}
            >
              <img
                src={gorillaImage}
                alt="Mountain gorilla in its natural forest habitat"
                loading="lazy"
              />
              <div className="about-promise-image-overlay">
                <FiHeart />
                <span>Respect the wild. Treasure the journey.</span>
              </div>
            </motion.div>
          </div>
        </section>

        {/* CTA */}
        <section
          className="about-cta"
          style={{ backgroundImage: `url(${aboutCtaImage})` }}
        >
          <div className="about-cta-overlay" />

          <motion.div
            className="about-container about-cta-content"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={fadeUp}
          >
            <span className="about-section-label">
              YOUR UGANDA ADVENTURE STARTS HERE
            </span>

            <h2>
              Let's create a journey
              <br />
              <span>worth remembering.</span>
            </h2>

            <p>
              Tell us what inspires you, and let's start planning your
              Uganda safari.
            </p>

            <div className="about-cta-actions">
              <a href="/contact" className="about-btn about-btn-primary">
                Plan Your Journey
                <FiArrowUpRight />
              </a>

              <a href="/uganda-safaris" className="about-btn about-btn-light">
                Explore Uganda Safaris
              </a>
            </div>
          </motion.div>
        </section>
      </main>
    </>
  );
}