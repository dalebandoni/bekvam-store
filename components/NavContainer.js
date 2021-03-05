import React from 'react'
import styled from '@emotion/styled'

const StyledContainer = styled.div`
  width: 1240px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
`

const NavContainer = ({ children }) => {
  return <StyledContainer>{children}</StyledContainer>
}

export default NavContainer
