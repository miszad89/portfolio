import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Section from "../components/section"
import HeroImg from "../components/hero"
import WelcomeText from "../components/welcome"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <Section>
      <HeroImg />
      <WelcomeText />
    </Section>
  </Layout>
)

export default IndexPage
