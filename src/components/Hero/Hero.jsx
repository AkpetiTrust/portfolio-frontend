import React from "react";
import Button from "../Button/Button";
import HeroImage from "../HeroImage/HeroImage";
import Nav from "../Nav/Nav";
import Shapes from "../Shapes/Shapes";
import Typer from "../Typer/Typer";

function Hero() {
  return (
    <section className="hero">
      <Nav />
      <Typer />
      <section className="grid">
        <div className="talk">
          <h1>
            Making your life easier, one <span>application</span> at a time
          </h1>
          <p className="subtitle">
            Heyy, Trust here, nice to meet you. I'm a full stack developer based
            in Nigeria, I enjoy solving problems by building applications.
            Welcome to my small corner of the Internet.
          </p>
          <Button href={"#projects"}>SEE MY WORK</Button>
        </div>
        <div className="image">
          <figure>
            <HeroImage />
          </figure>
        </div>
      </section>
      <Shapes />
    </section>
  );
}

export default Hero;
