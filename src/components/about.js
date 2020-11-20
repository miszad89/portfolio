import React from "react"
import { Link } from "gatsby"
import styled from "styled-components"

import Header from "./header"
import Section from "./section"
import HeroImg from "./hero"

const StyledWrapper = styled.div`
  display: flex;
  flex-direction: column;
`

const LinksWrapper = styled.div`
  display: flex;
  flex-direction: column;
`

const StyledP = styled.p`
  margin: 2rem;
`

const About = () => (
  <Section>
    <Header>O mnie</Header>
    <StyledWrapper>
      <HeroImg />
      <StyledP>
        Nazywam się <strong>Michał Drankiewicz</strong>. Zajmuję się tworzeniem
        aplikacji webowych oraz stron internetowych.
      </StyledP>
      <LinksWrapper>
        <Link to="/">Moje projekty</Link>
        <Link to="/">Curriculum vitae</Link>
        <Link to="/">Dane kontaktowe</Link>
      </LinksWrapper>
    </StyledWrapper>
  </Section>
)

export default About
