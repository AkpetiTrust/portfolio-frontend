import React from "react";
import {
  About,
  Contact,
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
    </>
  );
}

export default Home;
