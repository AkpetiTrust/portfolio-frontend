import React from "react";
import {
  About,
  Contact,
  Footer,
  Hero,
  Projects,
  Services,
  Stack,
} from "../../components";

function Home() {
  return (
    <>
      <Hero />
      <About />
      <Services />
      <Stack />
      <Projects />
      <Contact />
      <Footer />
    </>
  );
}

export default Home;
