import React from "react";
import { ChevronsDown } from "react-feather";
import { Box, Button, Text } from "bumbag";

const ScrollDown = () => (
  <Box display="flex">
    <Button
      borderRadius="7"
      border="none"
      altitude="300"
      width="3.5rem"
      height="3.5rem"
      display="flex"
    >
      <ChevronsDown />
    </Button>
    <Text alignSelf="center" paddingLeft="1rem">
      Scroll Down
    </Text>
  </Box>
)

export default ScrollDown
