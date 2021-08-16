import React, { useState, useEffect } from "react";
import {
  Input,
  Flex,
  Heading,
  Container,
  Columns,
  Textarea,
  Stack,
} from "bumbag";
import emailjs from "emailjs-com";

import ButtonUI from "./ButtonUI";
import { Formik, Form, Field } from "formik";
import ModalPopup from "./ModalPopup";

const Contact = () => {
  const [showButton, setShowButton] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  useEffect(() => {
    if (name.length > 0 && email.length > 0 && message.length > 0) {
      setShowButton(true);
    } else {
      setShowButton(false);
    }
  }, [email, message, name]);

  const sendEmail = (values, resetForm) => {
    if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
      alert("Please enter a valid email.");
    }
    emailjs
      .send(
        "service_eq4k8nu",
        "template_d7xhn8q",
        values,
        "user_PXcI30CjdFLTla1cHZFoV"
      )
      .then(
        (result) => {
          console.log(result.text);
          setShowModal(true);
          resetForm();
          setShowButton(false);
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  console.log(name, email, message);

  return (
    <Container padding="2rem 1rem">
      <Flex
        display={{ default: "flex", "max-tablet": "block" }}
        alignX="center"
        alignY="center"
        alignItems="baseline"
      >
        <Columns.Column spread={6}>
          <Heading
            use="h4"
            fontWeight={{ default: "semibold", "max-tablet": "bold" }}
            paddingBottom={{ default: "0rem", "max-tablet": "2rem" }}
          >
            Contact
          </Heading>
        </Columns.Column>
        <Columns.Column spread={6}>
          <Formik
            initialValues={{ name: "", email: "", message: "" }}
            onSubmit={(values, { resetForm }) => sendEmail(values, resetForm)}
          >
            <Form>
              {showModal && <ModalPopup showModal={showModal} />}
              <Stack spacing="major-6">
                <Field
                  component={Input.Formik}
                  onChange={(e) => setName(e.target.value)}
                  variant="underline"
                  value={name}
                  name="name"
                  type="text"
                  label="Name"
                  color="contrast"
                  style={{
                    background: "none",
                  }}
                />
                <Field
                  component={Input.Formik}
                  onChange={(e) => setEmail(e.target.value)}
                  variant="underline"
                  value={email}
                  name="email"
                  type="email"
                  label="Email"
                  color="contrast"
                  style={{
                    background: "none",
                  }}
                />
                <Field
                  component={Textarea.Formik}
                  onChange={(e) => setMessage(e.target.value)}
                  variant="underline"
                  value={message}
                  name="message"
                  type="text"
                  placeholder="Message"
                  spellCheck={true}
                  color="contrast"
                  style={{
                    background: "none",
                    padding: "4rem 0 0 0",
                  }}
                />
                <ButtonUI
                  name={"Send"}
                  value="Send"
                  isSend
                  showButton={showButton}
                />
              </Stack>
            </Form>
          </Formik>
        </Columns.Column>
      </Flex>
    </Container>
  );
};

export default Contact;
