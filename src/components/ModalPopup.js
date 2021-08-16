import React from "react";
import { Modal, Card, Box, Button, Heading, Paragraph, Flex } from "bumbag";

const ModalPopup = ({ showModal }) => {
  return (
    <Modal.State animated visible={true}>
      <Modal fade>
        <Card>
          <Box>
            <Heading
              use="h4"
              fontWeight={{ default: "semibold", "max-tablet": "bold" }}
              paddingBottom={"1rem"}
              lineHeight={"1.8rem"}
            >
              Thank you for contacting me
              <span role="img" aria-label="emojis">
                {" "}
                ✨
              </span>
              <br />
            </Heading>
            <Paragraph
              paddingTop="0"
              paddingBottom={{ default: "4rem", "max-tablet": "2rem" }}
              alignItems="baseline"
              color="secondary"
              lineHeight="1.8rem"
            >
              You should expect a response within the next 48 hours.
            </Paragraph>
          </Box>
          <Flex alignX="center">
            <Modal.Disclosure>
              {(modalDisclosureProps) => (
                <Button
                  fontWeight="bold"
                  borderRadius="7"
                  border="none"
                  textTransform="uppercase"
                  color="contrast"
                  backgroundColor="primary"
                  {...modalDisclosureProps}
                >
                  Okay
                </Button>
              )}
            </Modal.Disclosure>
          </Flex>
        </Card>
      </Modal>
    </Modal.State>
  );
};

export default ModalPopup;
