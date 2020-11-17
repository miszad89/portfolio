import React from "react"
import styled from "styled-components"

const StyledWrapper = styled.div`
margin: 3rem auto;
`

const Section = ({ children }) => <StyledWrapper>{children}</StyledWrapper>

export default Section
