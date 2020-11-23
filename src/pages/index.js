import React from "react"
import styled from "styled-components"

import Layout from "../components/layout"
import SEO from "../components/seo"
import About from "../components/about"
import Projects from "../components/projects"
import Contact from "../components/contact"
import Footer from "../components/footer"

const StyledHeader = styled.h1`
  text-align: center;
  margin: 3rem 3rem 0;
  ${({ theme }) => theme.media.tablet} {
    margin: 5rem auto 0;
  }

`

const StyledSpan = styled.span`
  font-weight: 300;
  font-size: 1.5rem;
`

const IndexPage = () => (
  <Layout>
    <SEO title="Michał Drankiewicz - front-end developer" />
    <StyledHeader>Michał Drankiewicz <br /><StyledSpan>front-end developer</StyledSpan></StyledHeader>
    <About />
    <Projects />
    <Contact />
    <Footer />
  </Layout>
)

export default IndexPage
