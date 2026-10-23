
import React from "react";
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import {
  ShieldCheck,
  LockKeyhole,
  Eye,
  Database,
  Cookie,
  Mail,
  ArrowUpRight,
  FileText,
} from "lucide-react";
import "./PrivacyPolicy.css";

const policySections = [
  {
    number: "01",
    icon: Eye,
    title: "Information we may collect",
    content: [
      {
        heading: "Information you provide",
        text: "If you contact PearlP Safaris or submit an enquiry through our website, you may provide information such as your name, email address, telephone number, travel dates, group size, destination preferences and other details relevant to planning your trip.",
      },
      {
        heading: "Technical information",
        text: "Depending on the website tools and services in use, technical information may include your browser type, device information, pages visited, approximate location derived from your connection and website usage data.",
      },
    ],
  },
  {
    number: "02",
    icon: Database,
    title: "How information may be used",
    content: [
      {
        heading: "Travel enquiries",
        text: "Information you choose to provide may be used to understand your travel requirements, respond to questions and prepare relevant safari or travel proposals.",
      },
      {
        heading: "Website improvement",
        text: "Where appropriate tools are enabled, technical and usage information may help us understand how visitors use the website, improve performance and make content more useful.",
      },
      {
        heading: "Communication",
        text: "Your contact details may be used to respond to a request you have made. We should obtain any additional consent required before sending marketing communications.",
      },
    ],
  },
  {
    number: "03",
    icon: LockKeyhole,
    title: "Storage and security",
    content: [
      {
        heading: "How information is stored",
        text: "The storage location, systems and retention periods depend on the services used to operate the website and handle enquiries. These arrangements must be confirmed and documented before the website begins collecting personal information through connected services.",
      },
      {
        heading: "Keeping information secure",
        text: "Reasonable technical and organisational safeguards should be used to protect personal information against unauthorised access, loss, alteration or disclosure. No method of transmission or storage can be guaranteed to be completely secure.",
      },
      {
        heading: "Retention",
        text: "Personal information should be kept only for as long as necessary for the purpose for which it was collected, subject to applicable legal and operational requirements.",
      },
    ],
  },
  {
    number: "04",
    icon: Cookie,
    title: "Cookies and analytics",
    content: [
      {
        heading: "Cookies",
        text: "Cookies and similar technologies may be used to support website functionality, remember preferences or understand website usage. The cookies actually used depend on the tools installed on the live website.",
      },
      {
        heading: "Analytics and advertising",
        text: "Analytics, advertising pixels and other tracking tools should be disclosed here if they are enabled. Any applicable consent requirements must be respected before non-essential tracking is activated.",
      },
    ],
  },
  {
    number: "05",
    icon: ArrowUpRight,
    title: "Third-party services",
    content: [
      {
        heading: "External providers",
        text: "Website hosting, form processing, analytics, booking tools, maps, payment providers or communication platforms may process information if they are integrated into the website. The providers actually used should be identified in this policy.",
      },
      {
        heading: "External websites",
        text: "Our website may link to third-party websites. Those websites have their own privacy practices, and we encourage visitors to review their policies before providing personal information.",
      },
    ],
  },
  {
    number: "06",
    icon: ShieldCheck,
    title: "Your privacy rights",
    content: [
      {
        heading: "Access and correction",
        text: "Depending on applicable law, you may have the right to request access to personal information held about you and ask for inaccurate information to be corrected.",
      },
      {
        heading: "Other requests",
        text: "Depending on the circumstances and applicable law, you may be able to request deletion, object to certain processing, withdraw consent or raise a privacy concern.",
      },
      {
        heading: "Making a request",
        text: "Once an official privacy contact has been confirmed, use the contact details published on this page to submit a privacy request. We may need to verify your identity before acting on a request.",
      },
    ],
  },
  {
    number: "07",
    icon: FileText,
    title: "Children's privacy",
    content: [
      {
        heading: "Protecting younger visitors",
        text: "This website is not intended to encourage children to submit personal information without appropriate involvement of a parent or guardian. If you believe a child has provided personal information inappropriately, contact the website operator through the confirmed contact channel so the matter can be reviewed.",
      },
    ],
  },
  {
    number: "08",
    icon: ShieldCheck,
    title: "Changes to this policy",
    content: [
      {
        heading: "Keeping this page current",
        text: "This policy should be reviewed whenever the website's forms, analytics, booking systems, communication tools or data-handling practices change. The published effective date should be updated when a revised policy is approved.",
      },
    ],
  },
];

export default function PrivacyPolicy() {
  return (
    <>
      <Helmet>
        <title>Privacy Policy | PearlP Safaris</title>
        <meta
          name="description"
          content="Read the PearlP Safaris privacy policy to understand how travel enquiries, personal information and website data may be handled."
        />
        <meta name="robots" content="index, follow" />
        <meta
          property="og:title"
          content="Privacy Policy | PearlP Safaris"
        />
        <meta
          property="og:description"
          content="Learn about privacy, personal information and website data handling at PearlP Safaris."
        />
      </Helmet>

      <div className="privacy-page">
        <section className="privacy-hero">
          <div className="privacy-hero-overlay" />

          <div className="privacy-hero-inner page-container">
            <div className="privacy-hero-copy">
              <span className="eyebrow">
                <ShieldCheck size={15} />
                YOUR PRIVACY MATTERS
              </span>

              <h1>
                Your journey is
                <br />
                <em>personal.</em>
              </h1>

              <p>
                We believe your trust matters as much as the journey itself.
                Learn how personal information may be handled when you explore
                PearlP Safaris online.
              </p>

              <div className="privacy-hero-meta">
                <span>
                  <LockKeyhole size={15} />
                  Privacy &amp; transparency
                </span>
                <span className="privacy-meta-divider" />
                <span>Policy draft for review</span>
              </div>
            </div>

            <div className="privacy-hero-mark" aria-hidden="true">
              <ShieldCheck size={54} strokeWidth={1} />
              <span>TRAVEL WITH TRUST</span>
            </div>
          </div>

          <div className="privacy-hero-caption">
            PEARLP SAFARIS <span /> UGANDA
          </div>
        </section>

        <section className="privacy-intro section-padding">
          <div className="page-container privacy-intro-grid">
            <div className="privacy-intro-heading">
              <span className="eyebrow-dark">A CLEAR UNDERSTANDING</span>
              <h2>
                Your information
                <br />
                deserves <em>care.</em>
              </h2>
            </div>

            <div className="privacy-intro-copy">
              <p>
                This Privacy Policy explains the information that PearlP
                Safaris may collect, how it may be used and the choices
                available to you when interacting with our website.
              </p>

              <p>
                The final policy must reflect the website's actual operation,
                including any contact forms, analytics, cookies and external
                services that are enabled. The details below are a starting
                point and must be verified before publication as a final
                legal policy.
              </p>

              <div className="privacy-review-note">
                <FileText size={19} />
                <div>
                  <strong>Before this policy goes live</strong>
                  <span>
                    Confirm the legal business identity, data-handling
                    practices and official privacy contact.
                  </span>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="privacy-content-section">
          <div className="page-container privacy-layout">
            <aside className="privacy-sidebar">
              <div className="privacy-sidebar-card">
                <span className="eyebrow-dark">ON THIS PAGE</span>
                <h3>Privacy at a glance</h3>

                <nav aria-label="Privacy policy sections">
                  {policySections.map((section) => (
                    <a
                      key={section.number}
                      href={`#privacy-${section.number}`}
                    >
                      <span>{section.number}</span>
                      {section.title}
                    </a>
                  ))}
                </nav>

                <div className="privacy-sidebar-footer">
                  <ShieldCheck size={22} />
                  <p>
                    Clear information. Thoughtful travel. Respect for your
                    privacy.
                  </p>
                </div>
              </div>
            </aside>

            <div className="privacy-policy-body">
              <div className="privacy-policy-heading">
                <span className="eyebrow-dark">THE DETAILS</span>
                <h2>Our privacy policy</h2>
                <p>
                  Please review the following sections to understand the
                  intended privacy approach.
                </p>
              </div>

              {policySections.map((section) => {
                const SectionIcon = section.icon;

                return (
                  <article
                    className="privacy-policy-section"
                    id={`privacy-${section.number}`}
                    key={section.number}
                  >
                    <div className="privacy-section-topline">
                      <span className="privacy-section-number">
                        {section.number}
                      </span>
                      <span className="privacy-section-icon">
                        <SectionIcon size={21} strokeWidth={1.6} />
                      </span>
                    </div>

                    <h3>{section.title}</h3>

                    <div className="privacy-section-content">
                      {section.content.map((item) => (
                        <div className="privacy-policy-item" key={item.heading}>
                          <h4>{item.heading}</h4>
                          <p>{item.text}</p>
                        </div>
                      ))}
                    </div>
                  </article>
                );
              })}

              <div className="privacy-last-updated">
                <span className="privacy-updated-dot" />
                <div>
                  <strong>Publication status: draft</strong>
                  <p>
                    Add the approved effective date after verifying the
                    business details and actual data-handling practices.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="privacy-bottom-cta">
          <div className="page-container privacy-bottom-inner">
            <div>
              <span className="eyebrow-dark">WE'RE HERE TO HELP</span>
              <h2>
                Questions about
                <br />
                <em>your privacy?</em>
              </h2>
              <p>
                Visit our contact page for available communication options.
                An official privacy contact should be confirmed before this
                policy is finalised.
              </p>
            </div>

            <Link to="/contact" className="button button-dark">
              Visit contact page
              <ArrowUpRight size={17} />
            </Link>
          </div>
        </section>
      </div>
    </>
  );
}
