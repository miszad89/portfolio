import React from "react"
import styled from "styled-components"
import { AnchorLink } from "gatsby-plugin-anchor-links";

import Header from "./header"
import Section from "./section"
import HeroImg from "./hero"

const StyledWrapper = styled.div`
  display: flex;
  flex-direction: column;
  ${({ theme }) => theme.media.tablet} {
    display: grid;
    grid-template-columns: 50% 50%;
  }
`

const LinksWrapper = styled.div`
  display: flex;
  flex-direction: column;
`

const TextWrapper = styled.p`
  margin: auto;
`

const About = () => (
  <Section>
    <Header>O mnie</Header>
    <StyledWrapper>
      <HeroImg />
      <TextWrapper>
        <p>
          Nazywam się <strong>Michał Drankiewicz</strong>. Zajmuję się
          tworzeniem aplikacji webowych oraz stron internetowych. 
        </p>
        <LinksWrapper>
          <AnchorLink to="/#projects">Moje projekty</AnchorLink>
          <a href={`CV Michał Drankiewicz.pdf`}>Curriculum vitae</a>
          <AnchorLink to="/#contact">Dane kontaktowe</AnchorLink>
        </LinksWrapper>
      </TextWrapper>
    </StyledWrapper>
  </Section>
)

export default About
