import React from "react"
import Header from './Header'
import About from './About'
import Skills from './Skills'
import Projects from './Projects'
import { projects } from '../projects.json'

import {
  Card,
  Box,
  Button,
  Divider,
  Image,
  Stack,
  Set,
  Heading,
  Container,
  Columns,
  Text,
  Paragraph,
  Badge,
} from "bumbag";

const Home = () => (
  <Container breakpoint="max-desktop" paddingX="0" margin="0">
    <Header />
    <Container padding="2rem 1rem">
    <About />
    <Divider color='secondary' opacity='0.7' />
    <Skills/>
    <Divider color='secondary' opacity='0.7' />
    <Projects />
    </Container>
  </Container>
);

export default Home;
