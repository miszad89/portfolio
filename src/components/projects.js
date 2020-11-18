import React from "react"
import styled from "styled-components"
import { Markup } from "interweave"

import Header from "./header"
import Section from "./section"
import Project from "./project"
import ProjectsData from "../data/projectsData"

const StyledWrapper = styled.div`
  display: flex;
  flex-direction: column;
`

const Projects = () => (
  <Section>
    <Header>Moje projekty</Header>
    <StyledWrapper>
      {ProjectsData.map(i => (
        <Project
          key={i.name}
          name={i.name}
          pageURL={i.pageURL}
          description={<Markup content={i.description} />}
          repositoryURL={i.repositoryURL}
          imgURL={i.imgURL}
        />
      ))}
    </StyledWrapper>
  </Section>
)

export default Projects
