import React from "react";
import { about } from "../about.json";

import { Flex, Heading, Container, Columns, Paragraph } from "bumbag";

const AboutSection = ({ folder, info }) => (
  <Flex
    id="about"
    display={{ default: "flex", "max-tablet": "block" }}
    alignX="center"
    alignY="center"
    alignItems="baseline"
  >
    <Columns.Column spread={4}>
      <Heading
        use="h4"
        fontWeight={{ default: "semibold", "max-tablet": "bold" }}
        paddingBottom={{ default: "0rem", "max-tablet": "2rem" }}
      >
        {folder}
      </Heading>
    </Columns.Column>
    <Columns.Column spread={4} spreadTablet={12} spreadMobile={12}>
      <Heading
        use="h4"
        fontWeight={{ default: "semibold", "max-tablet": "normal" }}
        paddingTop="0"
        paddingBottom={{ default: "4rem", "max-tablet": "2rem" }}
      >
        {info}
      </Heading>
    </Columns.Column>

    <Columns.Column spread={4} spreadTablet={12} spreadMobile={12}>
      <Paragraph
        paddingTop="0"
        paddingBottom={{ default: "4rem", "max-tablet": "2rem" }}
        alignItems="baseline"
        color="secondary"
        lineHeight={{ default: "1.8rem", "max-tablet": "1.4rem" }}
      ></Paragraph>
    </Columns.Column>
  </Flex>
);

const About = () => {
  return (
    <Container padding="2rem 1rem">
      {about.map((about) => (
        <AboutSection key={about.id} {...about} />
      ))}
    </Container>
  );
};

export default About;
