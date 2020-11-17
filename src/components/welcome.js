import React from "react"
import { Link } from "gatsby"
import styled from "styled-components"

const StyledWrapper = styled.div`
  text-align: center;
`

const LinksWrapper = styled.div`
  margin: 2rem;
  display: flex;
  flex-direction: column;
`

const StyledHeader = styled.h1`
  margin: 3rem;
`

const StyledParagraph = styled.p`
  margin: 2rem;
`

const WelcomeText = () => (
  <StyledWrapper>
    <StyledHeader>Witaj!</StyledHeader>
    <StyledParagraph>
      Nazywam się <strong>Michał Drankiewicz</strong>. Zajmuję się tworzeniem
      aplikacji webowych oraz stron internetowych.
    </StyledParagraph>
    <LinksWrapper>
      <Link to="/">Moje projekty</Link>
      <Link to="/">Curriculum vitae</Link>
      <Link to="/">Dane kontaktowe</Link>
    </LinksWrapper>
  </StyledWrapper>
)

export default WelcomeText
