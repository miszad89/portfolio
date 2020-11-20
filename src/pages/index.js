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
`

const IndexPage = () => (
  <Layout>
    <SEO title="Michał Drankiewicz - front-end developer" />
    <StyledHeader>Michał Drankiewicz <br />front-end developer</StyledHeader>
    <About />
    <Projects />
    <Contact />
    <Footer />
  </Layout>
)

export default IndexPage
