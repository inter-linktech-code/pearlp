import React from "react";
import { Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import PlaceholderPage from "./components/PlaceholderPage";
import ScrollToTop from "./components/ScrollToTop";
import WhatsAppButton from "./components/WhatsAppButton";

import Home from "./pages/Home";
import Destinations from "./pages/Destinations";
import UgandaSafaris from "./pages/UgandaSafaris";
import GorillaTrekking from "./pages/GorillaTrekking";
import WildlifeSafaris from "./pages/WildlifeSafaris";
import SafariPackages from "./pages/SafariPackages";
import Birdwatching from "./pages/Birdwatching";
import CulturalTours from "./pages/CulturalTours";
import HikingAdventure from "./pages/HikingAdventure";
import CarHire from "./pages/CarHire";
import SafariLodges from "./pages/SafariLodges";
import TravelGuide from "./pages/TravelGuide";
import AboutUs from "./pages/AboutUs";
import Contact from "./pages/Contact";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import ToursAndTravel from "./pages/ToursAndTravel";
import AirportDeliveries from "./pages/AirportDeliveries";
import LongDistanceTransfers from "./pages/LongDistanceTransfers";
import CityTours from "./pages/CityTours";
import HotelBooking from "./pages/HotelBooking";
import DriverHiring from "./pages/DriverHiring";
import SpecialDeliveries from "./pages/SpecialDeliveries";
import PickAndDrop from "./pages/PickAndDrop";

const plannedPages = [
  {
    path: "/terms",
    title: "Terms & Conditions",
    description:
      "Read the terms and conditions relating to PearlP Safaris services and website use.",
  },
];

function NotFound() {
  return (
    <PlaceholderPage
      title="This trail ends here."
      description="We couldn't find the page you were looking for. Return home and continue exploring Uganda."
    />
  );
}

export default function App() {
  return (
    <>
      <ScrollToTop />

      <Navbar />

      <main>
        <Routes>
          <Route path="/" element={<Home />} />

          <Route path="/destinations" element={<Destinations />} />

          <Route path="/uganda-safaris" element={<UgandaSafaris />} />

          <Route
            path="/gorilla-trekking-uganda"
            element={<GorillaTrekking />}
          />

          <Route
            path="/wildlife-safaris-uganda"
            element={<WildlifeSafaris />}
          />

          <Route path="/safari-packages" element={<SafariPackages />} />

          <Route path="/birdwatching-uganda" element={<Birdwatching />} />

          <Route
            path="/cultural-tours-uganda"
            element={<CulturalTours />}
          />

          <Route
            path="/hiking-adventure-uganda"
            element={<HikingAdventure />}
          />

          <Route path="/car-hire-uganda" element={<CarHire />} />

          <Route path="/uganda-safari-lodges" element={<SafariLodges />} />

          <Route path="/travel-guide" element={<TravelGuide />} />

          {/* Tours & Travel Services */}
          <Route
            path="/tours-and-travel-services"
            element={<ToursAndTravel />}
          />

          <Route 
          path="/airport-deliveries"
          element={<AirportDeliveries />} 
          />
          <Route
            path="/long-distance-transfers"
            element={<LongDistanceTransfers />}
          />
          <Route path="/city-tours" element={<CityTours />} />

          <Route path="/hotel-booking" element={<HotelBooking />} />

          <Route path="/driver-hiring" element={<DriverHiring />} />
          <Route path="/special-deliveries" element={<SpecialDeliveries />} />
          <Route path="/pick-and-drop" element={<PickAndDrop />} />

          <Route path="/about-us" element={<AboutUs />} />

          <Route path="/contact" element={<Contact />} />

          <Route path="/privacy-policy" element={<PrivacyPolicy />} />

          {plannedPages.map((page) => (
            <Route
              key={page.path}
              path={page.path}
              element={
                <PlaceholderPage
                  title={page.title}
                  description={page.description}
                />
              }
            />
          ))}

          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>

      <Footer />

      <WhatsAppButton />
    </>
  );
}
