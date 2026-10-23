import React from "react";
import { MessageCircle } from "lucide-react";
import "./WhatsAppButton.css";

const WHATSAPP_NUMBER = "256789842436";

const MESSAGE =
  "Hello Pearl P International Safari! I'd like to enquire about your services. We Travel All Distances. Can you help me plan my trip?";

export default function WhatsAppButton() {
  const whatsappUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
    MESSAGE
  )}`;

  return (
    <a
      className="whatsapp-float"
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat with Pearl P International Safari on WhatsApp"
      title="Chat with us on WhatsApp"
    >
      <span className="whatsapp-float__text">
        <span className="whatsapp-float__title">
          Need a ride or a trip?
        </span>
        <span className="whatsapp-float__subtitle">
          Chat with us on WhatsApp
        </span>
      </span>

      <span className="whatsapp-float__icon">
        <MessageCircle size={27} strokeWidth={2.2} />
      </span>
    </a>
  );
}
