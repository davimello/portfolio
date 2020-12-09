import React from "react";
// import { Code, Database, BookOpen } from "react-feather";
import { skills } from '../skills.json'

import {
  Flex,
  Heading,
  Container,
  Columns,
  Text,
  Paragraph,
  Badge,
} from "bumbag";

const Skill = ({ folder, title, info }) => (
  <Flex display={{ default: "flex", "max-tablet": "block" }} alignX='center' alignY='center' alignItems='baseline'>
  <Columns.Column spread={4}>
    <Heading use="h4" fontWeight={{ default: "semibold", "max-tablet": "bold"}} paddingBottom={{ default: "0rem", "max-tablet": "2rem"}}>
            {folder}
    </Heading>
  </Columns.Column>
  <Columns.Column spread={4} spreadTablet={6} spreadMobile={12}>
          <Heading
            use="h4"
            fontWeight="semibold"
            paddingTop='0'
            paddingBottom={{ default: "4rem", "max-tablet": "2rem"}}
          >
            {title}
          </Heading>
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

const Skills = () => {
  return (
    <Container padding="2rem 1rem"> 
      {skills.map(skill => (
        <Skill key={skill.id} {...skill} />     
        ))} 
    </Container>
  );
};

export default Skills;
