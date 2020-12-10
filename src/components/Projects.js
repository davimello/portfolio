import React from "react";
import { projects } from "../projects.json";
// import { Link } from "react-router-dom";

import {
  Flex,
  Heading,
  Container,
  Columns,
  Text,
  Paragraph,
} from "bumbag";

const Project = ({ folder, title, info, link }) => (
  <Flex display={{ default: "flex", "max-tablet": "block" }} alignX='center' alignY='center' alignItems='baseline'>
  <Columns.Column spread={4}>
    <Heading use="h4" fontWeight={{ default: "semibold", "max-tablet": "bold"}} paddingBottom={{ default: "0rem", "max-tablet": "2rem"}}>
            {folder}
    </Heading>
  </Columns.Column>
  <Columns.Column spread={4} spreadTablet={6} spreadMobile={12}>
        <a href={link} rel="noreferrer" target="_blank">
          <Heading
            use="h4"
            fontWeight="semibold"
            paddingTop='0'
            paddingBottom={{ default: "4rem", "max-tablet": "2rem"}}
            cursor="pointer"
            _hover={{ color: "terciary" }}
          >
            {title}
          </Heading>
        </a>
        </Columns.Column>
         
      <Columns.Column spread={4} spreadTablet={6} spreadMobile={12}>
        <Paragraph
          paddingTop='0'
          paddingBottom={{ default: "4rem", "max-tablet": "2rem"}}
          alignItems='baseline'
          color="secondary"
          lineHeight={{ default: "1.8rem", "max-tablet": "1.4rem" }}
        >
          {info}
        </Paragraph>
        </Columns.Column>
        </Flex>
);

const Projects = () => {
  return (
    <Container padding="2rem 1rem"> 
      {projects.map((project) => (
        <Project key={project.id} {...project} />
        ))}
      
      <Columns.Column spread={4} spreadOffset='left'>  
      <Text>You can see all projects on my GitHub&nbsp;</Text>
      <Text _hover={{ color: "terciary" }}>
        <a
          href={"https://github.com/daviavmello"}
          rel="noreferrer"
          target="_blank"
          >
          here.
        </a>
      </Text>
      </Columns.Column>
    </Container>
  );
};

export default Projects;
