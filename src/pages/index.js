import React from "react"
import styled from "styled-components"

import Layout from "../components/layout"
import SEO from "../components/seo"
import About from "../components/about"
import Projects from "../components/projects"
import Contact from "../components/contact"

const StyledHeader = styled.h1`
  text-align: center;
`

const IndexPage = () => (
  <Layout>
    <SEO title="Michał Drankiewicz - front-end developer" />
    <StyledHeader>Michał Drankiewicz - front-end developer</StyledHeader>
    <About />
    <Projects />
    <Contact />
  </Layout>
)

export default IndexPage
