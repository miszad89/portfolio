import React from "react"
import styled from "styled-components"

const StyledWrapper = styled.div`
text-align: center;
`

const Section = ({ children }) => <StyledWrapper>{children}</StyledWrapper>

export default Section
