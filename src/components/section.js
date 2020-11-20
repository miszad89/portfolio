import React from "react"
import styled from "styled-components"

const StyledWrapper = styled.div`
text-align: center;
margin: 6rem 2rem 0;
`

const Section = ({ children }) => <StyledWrapper>{children}</StyledWrapper>

export default Section
