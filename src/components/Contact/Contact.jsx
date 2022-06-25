import React, { useState } from "react";
import Alert from "../Alert/Alert";
import Form from "../Form/Form";
import Info from "../Info/Info";
import SectionHeading from "../SectionHeading/SectionHeading";

function Contact() {
  const [isAvailable, setIsAvailable] = useState(false);
  const [alertActive, setAlertActive] = useState(false);
  const [message, setMessage] = useState("");

  return (
    <section className="contact" id="contact">
      <Alert
        message={message}
        active={alertActive}
        setActive={setAlertActive}
      />
      <div className="inner">
        <SectionHeading>CONTΔCT MΣ</SectionHeading>
        <div className="grid">
          <section className="info">
            <p>
              {isAvailable
                ? "I'm currently open to collaborations and projects. My inbox is open, so invite me to join your team 😁."
                : "I'm currently not available for freelance, but my inbox is always open, so feel free to send a message!"}
            </p>
            <div className="info-items">
              <Info
                icon={
                  <svg
                    width="30"
                    height="30"
                    viewBox="0 0 30 30"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M3.00464 8.826L15.0001 14.823L26.9956 8.826C26.9512 8.06167 26.6163 7.34323 26.0594 6.81784C25.5025 6.29245 24.7658 5.99986 24.0001 6H6.00014C5.23452 5.99986 4.49781 6.29245 3.94091 6.81784C3.384 7.34323 3.04904 8.06167 3.00464 8.826Z"
                      fill="white"
                    />
                    <path
                      d="M27 12.1772L15 18.1772L3 12.1772V21.0002C3 21.7959 3.31607 22.559 3.87868 23.1216C4.44129 23.6842 5.20435 24.0002 6 24.0002H24C24.7956 24.0002 25.5587 23.6842 26.1213 23.1216C26.6839 22.559 27 21.7959 27 21.0002V12.1772Z"
                      fill="white"
                    />
                  </svg>
                }
                item="Email"
                setMessage={setMessage}
                setAlertActive={setAlertActive}
              >
                akpetitrust@gmail.com
              </Info>

              <Info
                icon={
                  <svg
                    width="30"
                    height="30"
                    viewBox="0 0 30 30"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M3 4.5C3 4.10218 3.15804 3.72064 3.43934 3.43934C3.72064 3.15804 4.10218 3 4.5 3H7.7295C8.08456 3.00016 8.42805 3.12627 8.69887 3.35589C8.96968 3.58551 9.15027 3.90375 9.2085 4.254L10.3185 10.9065C10.3715 11.2233 10.3215 11.5488 10.1756 11.835C10.0298 12.1213 9.79597 12.3531 9.5085 12.4965L7.1865 13.656C8.01916 15.7195 9.25925 17.5939 10.8327 19.1673C12.4061 20.7408 14.2805 21.9808 16.344 22.8135L17.505 20.4915C17.6483 20.2043 17.8799 19.9706 18.1658 19.8248C18.4518 19.679 18.7769 19.6288 19.0935 19.6815L25.746 20.7915C26.0963 20.8497 26.4145 21.0303 26.6441 21.3011C26.8737 21.572 26.9998 21.9154 27 22.2705V25.5C27 25.8978 26.842 26.2794 26.5607 26.5607C26.2794 26.842 25.8978 27 25.5 27H22.5C11.73 27 3 18.27 3 7.5V4.5Z"
                      fill="white"
                    />
                  </svg>
                }
                item="Number"
                setMessage={setMessage}
                setAlertActive={setAlertActive}
              >
                +234-8145049272
              </Info>
            </div>
          </section>

          <Form />
        </div>
      </div>
    </section>
  );
}

export default Contact;
