import React from "react";
import Contact from "../ContactPage/Contact";
import { ContactContainer, ContactText } from "./ContactSection.styled";
import { Title } from "../../layout/Layout";

const ContactSection = () => {
  return (
    <ContactContainer>
      <ContactText>
        <Title>Contact us!</Title>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque sequi
          obcaecati commodi officiis maiores velit exercitationem id.
          Reprehenderit dicta quia tempora odio, cumque ad temporibus, laborum
          odit qui, autem hic!
        </p>
      </ContactText>
      <Contact />
    </ContactContainer>
  );
};

export default ContactSection;
