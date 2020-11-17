import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"
import styled from "styled-components"

const HeroWrapper = styled.div`
  width: 50%;
  mask-image: linear-gradient(0deg, rgba(0,0,0,0) 0%, rgba(0,0,0,1) 25%, rgba(0,0,0,1) 100%);
`

const Hero = () => {
  const data = useStaticQuery(graphql`
    query {
      file(relativePath: { eq: "me.png" }) {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)

  return (
    <HeroWrapper>
      <Img fluid={data.file.childImageSharp.fluid} alt="Hero image" />
    </HeroWrapper>
  )
}

export default Hero
