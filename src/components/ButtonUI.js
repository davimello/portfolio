import React from "react";
import { Button } from "bumbag";
import { Send } from "react-feather";

const ButtonUI = ({ name, isSend, showButton }) => (
  <Button
    fontWeight="bold"
    borderRadius="7"
    border="none"
    textTransform="uppercase"
    color="contrast"
    backgroundColor="primary"
    type={isSend ? "submit" : "button"}
    disabled={showButton ? false : true}
  >
    {name}
    {isSend && (
      <>
        <span>&nbsp;</span>
        <Send style={{ width: "1.3rem" }} />
      </>
    )}
  </Button>
);

export default ButtonUI;
