import React from "react"
import { Link } from "gatsby"
 
import Layout from "../components/layout"
import SEO from "../components/seo"

const NotFoundPage = () => (
  <Layout>
    <SEO title="404: Not found" />
    <h1>404: Not Found</h1>
    <p>Strona nie istnieje!</p>
    <Link to="/">Powrót do strony głównej.</Link>
  </Layout>
)

export default NotFoundPage
