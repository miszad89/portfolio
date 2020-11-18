import React from "react"
import styled from "styled-components"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import {
  faPhoneSquareAlt,
  faEnvelopeSquare,
} from "@fortawesome/free-solid-svg-icons"
import { faGithubSquare, faLinkedin } from "@fortawesome/free-brands-svg-icons"

import Header from "../components/header"
import Section from "./section"

const StyledSpan = styled.span`
  display: flex;
  flex-direction: column;
`

const Contact = () => (
  <Section>
    <Header>Dane kontaktowe</Header>
    <StyledSpan>
      <a href="tel:535996520">
        <FontAwesomeIcon icon={faPhoneSquareAlt} size="lg" /> +48 535 996 520
      </a>
    </StyledSpan>
    <StyledSpan>
      <a href="mailto:miszad89@gmail.com">
        <FontAwesomeIcon icon={faEnvelopeSquare} size="lg" /> miszad89@gmail.com
      </a>
    </StyledSpan>
    <StyledSpan>
      <a href="https://github.com/miszad89">
        <FontAwesomeIcon icon={faGithubSquare} size="lg" /> Profil na GitHub
      </a>
    </StyledSpan>
    <StyledSpan>
      <a href="https://www.linkedin.com/in/micha%C5%82-drankiewicz-49bba91bb/">
        <FontAwesomeIcon icon={faLinkedin} size="lg" /> Profil na LinkedIn
      </a>
    </StyledSpan>
  </Section>
)

export default Contact
