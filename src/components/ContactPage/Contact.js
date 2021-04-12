import React from "react";
import { Button } from "../Button/Button";
import { ContactForm, FormInput } from "../ContactPage/ContactPage.styled";

function Contact() {
  return (
    <>
      <ContactForm action="submit">
        <FormInput type="text" placeholder="Your Name" />
        <FormInput type="text" placeholder="Your Mail" />
        <FormInput type="text" placeholder="Your Message" message="true" />
        <Button primary="true" type="submit">
          submit
        </Button>
      </ContactForm>
    </>
  );
}

export default Contact;
