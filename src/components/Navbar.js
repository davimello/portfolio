import React from "react";
import { Link } from "react-router-dom";
import {
  Container,
  Columns
} from "bumbag";

import Logo from "./Logo";
import DarkMode from "./DarkMode";
// import { MoreHorizontal } from "react-feather";

const EasterEgg = () => {
  console.log(
    "Welcome, welcome! There is an easter egg somewhere on this page. Click on it to find it and you will see a message here!"
  );
  return null;
};

const Navbar = () => (
  <Container
    isFluid
    paddingX={{ default: "major-8", "max-tablet": "major-3" }}
    paddingY="major-4"
    display="block"
    position="absolute"
    zIndex="10"
  >
    <EasterEgg />
    <Columns>
      <Columns.Column spread={3} spreadTablet={6} spreadMobile={6}>
        <Link to="/">
          <Logo style={{ height: "4rem", width: "auto" }} />
        </Link>
      </Columns.Column>

      <Columns.Column
        spread={5}
        spreadTablet={6}
        spreadMobile={6}
        textAlign={{ default: "center", "max-tablet": "end" }}
      >
        <DarkMode />
      </Columns.Column>
    </Columns>
  </Container>
);

export default Navbar;
