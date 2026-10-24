
import React from "react";
import { MessageCircle } from "lucide-react";
import "./WhatsAppButton.css";

const WHATSAPP_NUMBER = "256789842436";

const MESSAGE =
  "Hello PearlP Safaris! I'd like to enquire about your services. Can you help me plan my trip?";

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
      aria-label="Chat with PearlP Safaris on WhatsApp"
      title="Chat with us on WhatsApp"
    >
      <span className="whatsapp-float__text">
        <span className="whatsapp-float__title">
          Need a trip?
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
