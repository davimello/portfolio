import React from "react";
import { Link } from "react-router-dom";
import { Linkedin, GitHub, Twitter } from "react-feather";

import { Box, Container, Paragraph, Stack, Set } from "bumbag";
import Logo from "./Logo";

const Footer = () => (
  <Box>
    <Container
      padding={{ default: "2rem 1rem", "max-tablet": "2rem 2rem" }}
      textAlign={{ default: "inherit", "max-tablet": "center" }}
    >
      <Stack>
        <Stack
          orientation="horizontal"
          alignItems="flex-start"
          verticalBelow="mobile"
        >
          <Box marginRight="0">
            <Link to="/">
              <Logo style={{ height: "3.5rem", width: "auto" }} />
            </Link>
          </Box>

          <Set
            orientation="horizontal"
            justifyContent={{ default: "flex-start", "max-tablet": "center" }}
          >
            <Box
              use="a"
              href="https://www.linkedin.com/in/daviavmello/"
              target="_blank"
              marginLeft="0.25rem"
            >
              <Linkedin />
            </Box>
            <Box use="a" href="https://github.com/daviavmello" target="_blank">
              <GitHub />
            </Box>
            <Box use="a" href="https://twitter.com/DaviMello" target="_blank">
              <Twitter />
            </Box>
          </Set>
        </Stack>

        <Stack orientation="horizontal" verticalBelow="mobile">
          <Paragraph fontSize="100" marginRight="0">
            &#169;2021 Davi Mello. <br />
            All Rights Reserved.
          </Paragraph>
          <Paragraph
            fontSize="100"
            display={{ default: "block", "max-tablet": "none" }}
          >
            Hey dev! <br />
            There's an easter egg game
            <span role="img" aria-label="emojis">
              {" "}
              🐣
            </span>{" "}
            &nbsp;in the console!
          </Paragraph>
        </Stack>
      </Stack>
    </Container>
  </Box>
);

export default Footer;
