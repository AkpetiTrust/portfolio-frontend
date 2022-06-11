import React, { useState } from "react";
import SectionHeading from "../SectionHeading/SectionHeading";

function Contact() {
  const [isAvailable, setIsAvailable] = useState(false);

  return (
    <section className="contact" id="contact">
      <SectionHeading>CONTΔCT MΣ</SectionHeading>
      <div className="grid">
        <section className="info">
          <p>
            {isAvailable
              ? "I'm currently open to collaborations and projects. My inbox is open, so invite me to join your team 😁."
              : "I'm currently not available for freelance, but my inbox is always open, so feel free to send a message!"}
          </p>
        </section>
      </div>
    </section>
  );
}

export default Contact;
