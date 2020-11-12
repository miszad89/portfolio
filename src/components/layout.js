import React from "react"
import styled from "styled-components"

const StyledWrapper = styled.div`
  background: #d9d9d9;
  color: #0d0d0d;
  width: 100vw;
  height: 100vh;
`

const Layout = ({ children }) => <StyledWrapper>{children}</StyledWrapper>

export default Layout
