import React from "react";
import {
  About,
  Contact,
  Footer,
  Hero,
  Preloader,
  Projects,
  Services,
  Stack,
} from "../../components";

function Home() {
  return (
    <>
      <Preloader />
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
