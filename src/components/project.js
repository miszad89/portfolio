import React from "react"
import styled from "styled-components"

const ImgWrapper = styled.div`
  max-width: 80%;
  margin: auto;
  filter: grayscale(100%);
  transition: filter 0.15s ease-out;

  &:hover {
    filter: grayscale(0%);
  }
`

const StyledWrapper = styled.div``

const Project = props => {
  const { name, pageURL, description, repositoryURL, imgURL } = props
  return (
    <StyledWrapper>
      <h3>{name}</h3>
      <a href={pageURL}>
        <ImgWrapper>
          <img src={imgURL} alt={name} width="100%" />
        </ImgWrapper>
      </a>
      {description}
      <p>
        <a href={repositoryURL}>Zobacz repozytorium</a>
      </p>
    </StyledWrapper>
  )
}

export default Project
