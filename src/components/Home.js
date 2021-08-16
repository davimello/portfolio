import React from "react";
import Header from "./Header";
import About from "./About";
import Skills from "./Skills";
import Projects from "./Projects";
import Contact from "./Contact";

import { Divider, Container } from "bumbag";

const Home = () => (
  <Container isFluid breakpoint="max-desktop" paddingX="0" margin="0">
    <Header />
    <Container
      isFluid
      padding={{
        desktop: "2rem 12rem",
        "min-desktop": "2rem 0rem",
        mobile: "2rem 0rem",
      }}
    >
      <About />
      <Divider
        color="secondary"
        opacity="0.7"
        margin={{
          desktop: "0rem -12rem",
          "min-desktop": "0rem 0rem",
          mobile: "0rem 0rem",
        }}
      />
      <Skills />
      <Divider
        color="secondary"
        opacity="0.7"
        margin={{
          desktop: "0rem -12rem",
          "min-desktop": "0rem 0rem",
          mobile: "0rem 0rem",
        }}
      />
      <Projects />
      <Divider
        color="secondary"
        opacity="0.7"
        margin={{
          desktop: "0rem -12rem",
          "min-desktop": "0rem 0rem",
          mobile: "0rem 0rem",
        }}
      />
      <Contact />
    </Container>
  </Container>
);

export default Home;
