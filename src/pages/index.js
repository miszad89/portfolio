import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import HeroImg from "../components/hero"
import WelcomeText from "../components/welcome"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <HeroImg />
    <WelcomeText />
  </Layout>
)

export default IndexPage
