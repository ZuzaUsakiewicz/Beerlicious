import React from "react";
import {
  AboutSectionContainer,
  TitleSection,
  HistorySection,
  FutureSection,
} from "../components/AboutPage/AboutPage.styled";
import { Title } from "../layout/Layout";

const AboutPage = () => {
  return (
    <AboutSectionContainer>
      <TitleSection>
        <Title>About</Title>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum facilis
          cumque earum, natus molestiae ad ipsa sit neque ipsum recusandae.
        </p>
      </TitleSection>
      <HistorySection>
        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Accusantium,
          adipisci exercitationem. Perferendis magni voluptatem repudiandae
          temporibus. Error ipsa placeat nesciunt tempora doloremque ullam animi
          ea, saepe, doloribus reiciendis rerum! Cum, nemo soluta! Adipisci,
          tempore corrupti. Dolorem dolores rerum tempora doloribus.
        </p>
      </HistorySection>
      <FutureSection>
        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Corporis,
          repellat! Facilis, repudiandae accusantium aliquam ratione, quod ipsam
          iusto voluptatem reiciendis aspernatur voluptates omnis rerum
          voluptatum tenetur dolorem consequuntur nisi enim eius id fuga,
          laborum pariatur est maxime neque velit. Sequi aut aliquid
          reprehenderit et magnam illum, autem accusantium! Vitae, minima.
        </p>
      </FutureSection>
    </AboutSectionContainer>
  );
};

export default AboutPage;
