import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Section from "../components/section"
import HeroImg from "../components/hero"
import WelcomeText from "../components/welcome"
import Projects from "../components/projects"
import Contact from "../components/contact"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <Section>
      <HeroImg />
      <WelcomeText />
    </Section>
    <Section>
      <Projects />
    </Section>
    <Section>
      <Contact />
    </Section>
  </Layout>
)

export default IndexPage
