import React from "react"
import styled from "styled-components"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

import Header from "./header"
import Section from "./section"
import ContactData from "../data/contactData"

const StyledSpan = styled.span`
  display: flex;
  flex-direction: column;
`

const Contact = () => (
  <Section>
    <Header>Dane kontaktowe</Header>
    {ContactData.map(i => (
      <StyledSpan key={i.name}>
        <a href={i.href}>
          <FontAwesomeIcon icon={i.icon} size="lg" />
          {i.text}
        </a>
      </StyledSpan>
    ))}
  </Section>
)

export default Contact
