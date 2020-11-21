import React from "react"
import styled from "styled-components"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

import Header from "./header"
import Section from "./section"
import ContactData from "../data/contactData"

const StyledSpan = styled.span`
  display: flex;
  flex-direction: column;
  ${({ theme }) => theme.media.tablet} {
    display: inline-block;
    margin: 2rem 0;
  }
`

const Contact = () => (
  <Section>
    <div id="contact">
      <Header>Dane kontaktowe</Header>
    </div>
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
