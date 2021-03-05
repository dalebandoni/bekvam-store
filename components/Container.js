import styled from '@emotion/styled'
import React from 'react'

const StyledContainer = styled.div`
  width: 1240px;
  margin: 0 auto;
`

const Container = ({ children }) => {
  return <StyledContainer>{children}</StyledContainer>
}

export default Container
