import React from "react";
import { Minus } from "react-feather";
import ButtonUI from "./ButtonUI";
import { Link } from "react-scroll";
import { Box, Image, Heading, Container, Columns, Text } from "bumbag";

const EasterEgg = () =>
  console.log("Ha! You found the easter egg! Thanks for visiting my website!");

const Header = () => (
  <Container isFluid paddingX="0" margin="0" height="100vh">
    <Columns margin="0" height="100vh">
      <Columns.Column
        spreadMobile={12}
        spreadTablet={12}
        spreadDesktop={6}
        spreadWidescreen={6}
        textAlign="center"
        alignSelf="center"
        justifyContent={{ default: "center", "max-tablet": "unset" }}
        display="flex"
      >
        <Box
          textAlign="left"
          paddingX={{ default: "major-6", "max-tablet": "major-2" }}
          marginY={{ default: "major-14", "max-tablet": "major-22" }}
        >
          <Text
            use="h3"
            fontWeight="bold"
            color="terciary"
            marginBottom="1rem"
            display="flex"
          >
            <Minus />
            &nbsp;Davi Mello&nbsp;
            <span role="img" aria-label="emojis" onClick={EasterEgg}>
              {" "}
              👋
            </span>{" "}
          </Text>{" "}
          <Heading
            use="h2"
            marginBottom={{ default: "major-10", "max-tablet": "major-10" }}
            lineHeight={{ default: "3.5rem", "max-tablet": "2.4rem" }}
          >
            Commit more.
            <br />
            Stay current.
            <br />
            Grow every day.
          </Heading>
          <Link to="about" spy={true} smooth={false} offset={-50}>
            <ButtonUI name={"see more"} showButton />
          </Link>
        </Box>
      </Columns.Column>

      <Columns.Column
        spreadMobile={0}
        spreadTablet={6}
        spreadDesktop={6}
        spreadWidescreen={6}
        padding="0"
        display={{
          default: "block",
          "max-tablet": "none",
        }}
      >
        <Image
          src={`/img/profile.webp`}
          alt=""
          fit="cover"
          width="100vw"
          height="100vh"
        />
      </Columns.Column>
    </Columns>
  </Container>
);

export default Header;
