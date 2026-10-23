
import React from "react";
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import {
  ArrowRight,
  ArrowUpRight,
  Binoculars,
  Camera,
  Compass,
  Leaf,
  MapPin,
  Sunrise,
  Trees,
} from "lucide-react";
import "./WildlifeSafaris.css";

const parks = [
  {
    number: "01",
    name: "Queen Elizabeth National Park",
    type: "SAVANNAH & WETLANDS",
    description:
      "Explore varied landscapes, open savannah, crater lakes and the Kazinga Channel, known for wildlife viewing and boat-based experiences.",
    image:
      "https://images.unsplash.com/photo-1516426122078-c23e76319801?auto=format&fit=crop&w=1100&q=85",
  },
  {
    number: "02",
    name: "Murchison Falls National Park",
    type: "RIVER & SAVANNAH",
    description:
      "Discover a landscape shaped by the Nile, with game drives across open plains and opportunities to experience the river and its dramatic falls.",
    image:
      "https://images.unsplash.com/photo-1516026672322-bc52d61a55d5?auto=format&fit=crop&w=1100&q=85",
  },
  {
    number: "03",
    name: "Kidepo Valley National Park",
    type: "REMOTE WILDERNESS",
    description:
      "Consider a journey into northeastern Uganda for wide-open scenery, rugged mountains and a distinctive wilderness atmosphere.",
    image:
      "https://images.unsplash.com/photo-1511497584788-876760111969?auto=format&fit=crop&w=1100&q=85",
  },
  {
    number: "04",
    name: "Lake Mburo National Park",
    type: "LAKES & GRASSLANDS",
    description:
      "A compact park with rolling grasslands and lakes, offering a different perspective on Uganda's wildlife and natural landscapes.",
    image:
      "https://images.unsplash.com/photo-1549366021-9f761d450615?auto=format&fit=crop&w=1100&q=85",
  },
  {
    number: "05",
    name: "Bwindi Impenetrable National Park",
    type: "ANCIENT RAINFOREST",
    description:
      "Combine forest scenery and exceptional biodiversity with a separately arranged mountain gorilla trekking experience where permits are available.",
    image:
      "https://images.unsplash.com/photo-1448375240586-882707db888b?auto=format&fit=crop&w=1100&q=85",
  },
  {
    number: "06",
    name: "Kibale National Park",
    type: "TROPICAL FOREST",
    description:
      "Explore a forest-rich destination known for chimpanzee tracking experiences and opportunities to discover primates in their natural environment.",
    image:
      "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?auto=format&fit=crop&w=1100&q=85",
  },
];

const safariMoments = [
  {
    icon: Sunrise,
    title: "Early-morning game drives",
    description:
      "Set out with your guide as the landscape wakes up and wildlife activity begins.",
  },
  {
    icon: Camera,
    title: "Wildlife photography",
    description:
      "Take time to appreciate the scenery, animal behaviour and changing light.",
  },
  {
    icon: Compass,
    title: "Journeys beyond the plains",
    description:
      "Bring together savannah, forests, waterways and local experiences in one itinerary.",
  },
];

export default function WildlifeSafaris() {
  return (
    <div className="wildlife-page">
      <Helmet>
        <title>Wildlife Safaris in Uganda | PearlP Safaris</title>
        <meta
          name="description"
          content="Explore wildlife safaris in Uganda with PearlP Safaris. Discover national parks, game drives, river landscapes and tailor-made safari itinerary options."
        />
        <meta
          name="keywords"
          content="wildlife safaris Uganda, Uganda safari tours, Uganda national parks, game drives Uganda, Murchison Falls safari, Queen Elizabeth National Park safari"
        />
        <link
          rel="canonical"
          href="https://YOUR-DOMAIN-HERE/wildlife-safaris-uganda"
        />
        <meta
          property="og:title"
          content="Wildlife Safaris in Uganda | PearlP Safaris"
        />
        <meta
          property="og:description"
          content="Discover Uganda's national parks, wildlife and extraordinary landscapes with a safari planned around you."
        />
        <meta property="og:type" content="website" />
      </Helmet>

      <section className="wildlife-hero">
        <div className="wildlife-hero-image" aria-hidden="true" />
        <div className="wildlife-hero-overlay" aria-hidden="true" />

        <div className="wildlife-container wildlife-hero-content">
          <nav className="wildlife-breadcrumb" aria-label="Breadcrumb">
            <Link to="/">Home</Link>
            <span>/</span>
            <Link to="/uganda-safaris">Uganda Safaris</Link>
            <span>/</span>
            <span>Wildlife Safaris</span>
          </nav>

          <p className="wildlife-eyebrow">
            <span />
            THE WILD SIDE OF UGANDA
          </p>

          <h1>
            Find your wild.
            <br />
            <em>Feel the extraordinary.</em>
          </h1>

          <p className="wildlife-hero-description">
            From golden savannahs and winding rivers to ancient forests,
            discover Uganda's wildlife through a journey shaped around your
            interests.
          </p>

          <div className="wildlife-hero-actions">
            <Link
              to="/contact"
              className="wildlife-button wildlife-button-gold"
            >
              Plan your wildlife safari
              <ArrowUpRight size={18} />
            </Link>

            <a href="#safari-parks" className="wildlife-hero-link">
              Explore the parks
              <ArrowRight size={17} />
            </a>
          </div>

          <div className="wildlife-hero-location">
            <MapPin size={17} />
            <span>Uganda · East Africa</span>
          </div>
        </div>

        <div className="wildlife-hero-caption">
          <span>WILD UGANDA</span>
          <span>YOUR NEXT CHAPTER BEGINS HERE</span>
        </div>
      </section>

      <section className="wildlife-intro section-padding">
        <div className="wildlife-container wildlife-intro-grid">
          <div className="wildlife-intro-heading">
            <p className="eyebrow">A DIFFERENT KIND OF JOURNEY</p>
            <h2>
              More than a
              <br />
              game drive.
              <br />
              <em>A world to discover.</em>
            </h2>
          </div>

          <div className="wildlife-intro-copy">
            <p>
              Uganda brings together open grasslands, tropical forests,
              wetlands, lakes and river systems within one remarkably varied
              landscape.
            </p>
            <p>
              A wildlife safari can mean watching the plains from a vehicle
              with a guide, travelling along a wildlife-rich waterway,
              exploring a forest on foot where permitted, or slowing down to
              appreciate the sounds and scenery of the African wilderness.
            </p>
            <p>
              PearlP Safaris can help you explore destinations and build an
              itinerary around your travel dates, group, interests and
              accommodation preferences.
            </p>
            <Link to="/contact" className="wildlife-inline-link">
              Discuss your safari <ArrowRight size={17} />
            </Link>
          </div>
        </div>
      </section>

      <section className="wildlife-parks section-padding" id="safari-parks">
        <div className="wildlife-container">
          <div className="wildlife-section-heading">
            <div>
              <p className="eyebrow">EXPLORE THE LANDSCAPES</p>
              <h2>
                Six places.
                <br />
                <em>Endless ways to explore.</em>
              </h2>
            </div>
            <p>
              Each destination has its own character. Choose a park that
              matches your interests, or combine several for a broader
              Ugandan journey.
            </p>
          </div>

          <div className="wildlife-parks-grid">
            {parks.map((park) => (
              <article className="wildlife-park-card" key={park.number}>
                <Link
                  to="/contact"
                  className="wildlife-park-image"
                  aria-label={`Enquire about a safari to ${park.name}`}
                >
                  <img
                    src={park.image}
                    alt={`${park.name} landscape`}
                    loading="lazy"
                  />
                  <span className="wildlife-park-number">{park.number}</span>
                  <span className="wildlife-park-arrow">
                    <ArrowUpRight size={19} />
                  </span>
                </Link>

                <div className="wildlife-park-content">
                  <p className="wildlife-park-type">{park.type}</p>
                  <h3>{park.name}</h3>
                  <p className="wildlife-park-description">
                    {park.description}
                  </p>
                  <Link to="/contact" className="wildlife-park-link">
                    Plan this experience <ArrowRight size={16} />
                  </Link>
                </div>
              </article>
            ))}
          </div>

          <p className="wildlife-image-disclaimer">
            Photography is illustrative and should be replaced with verified,
            appropriately licensed images of the named destinations before
            launch.
          </p>
        </div>
      </section>

      <section className="wildlife-moments section-padding">
        <div className="wildlife-container">
          <div className="wildlife-section-heading wildlife-moments-heading">
            <div>
              <p className="eyebrow">MAKE THE JOURNEY YOURS</p>
              <h2>
                The moments
                <br />
                <em>that make a safari.</em>
              </h2>
            </div>
            <p>
              A memorable safari is not only about what you see. It is also
              about the pace of the journey and the time you have to take it
              all in.
            </p>
          </div>

          <div className="wildlife-moments-grid">
            {safariMoments.map((moment, index) => {
              const Icon = moment.icon;

              return (
                <article className="wildlife-moment-card" key={moment.title}>
                  <div className="wildlife-moment-top">
                    <span>0{index + 1}</span>
                    <Icon size={25} strokeWidth={1.4} />
                  </div>
                  <h3>{moment.title}</h3>
                  <p>{moment.description}</p>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      <section className="wildlife-gorillas">
        <div className="wildlife-gorillas-image" aria-hidden="true" />
        <div className="wildlife-gorillas-overlay" aria-hidden="true" />

        <div className="wildlife-container wildlife-gorillas-content">
          <p className="wildlife-eyebrow">
            <span />
            FROM OPEN PLAINS TO MISTY FORESTS
          </p>
          <h2>
            One country.
            <br />
            Different worlds.
          </h2>
          <p>
            Make your wildlife safari part of a bigger Ugandan adventure.
            Depending on your schedule and interests, your journey may also
            include mountain gorilla trekking, chimpanzee tracking, scenic
            lakes, birdwatching or cultural experiences.
          </p>
          <div className="wildlife-gorillas-actions">
            <Link
              to="/gorilla-trekking-uganda"
              className="wildlife-button wildlife-button-gold"
            >
              Discover gorilla trekking
              <ArrowUpRight size={18} />
            </Link>
            <Link to="/destinations" className="wildlife-light-link">
              Browse destinations <ArrowRight size={17} />
            </Link>
          </div>
        </div>
      </section>

      <section className="wildlife-responsible section-padding">
        <div className="wildlife-container wildlife-responsible-grid">
          <div className="wildlife-responsible-icon">
            <Leaf size={30} strokeWidth={1.4} />
          </div>
          <div>
            <p className="eyebrow">TRAVEL WITH CARE</p>
            <h2>
              Respect the wild.
              <br />
              <em>Leave room for nature.</em>
            </h2>
          </div>
          <div className="wildlife-responsible-copy">
            <p>
              Wildlife belongs in the wild. Follow your guide's instructions,
              respect park rules and keep a safe distance from animals. Choose
              responsible wildlife experiences and avoid activities that
              disturb animals or damage their habitats.
            </p>
            <p>
              Park access, activities, wildlife sightings and travel
              conditions vary. Confirm current park rules and arrangements
              when planning your trip.
            </p>
          </div>
        </div>
      </section>

      <section className="wildlife-cta">
        <div className="wildlife-container wildlife-cta-inner">
          <div>
            <p className="wildlife-eyebrow">
              <span />
              YOUR UGANDA SAFARI STARTS HERE
            </p>
            <h2>
              Let's find
              <br />
              <em>your kind of wild.</em>
            </h2>
            <p>
              Tell us what you would love to experience, when you plan to
              travel and who is coming with you. Start building your Uganda
              safari around what matters to you.
            </p>
          </div>

          <div className="wildlife-cta-actions">
            <Link
              to="/contact"
              className="wildlife-button wildlife-button-gold"
            >
              Start your enquiry
              <ArrowUpRight size={18} />
            </Link>
            <Link to="/safari-packages" className="wildlife-light-link">
              Explore safari packages <ArrowRight size={17} />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
