import styled from '@emotion/styled'
import React from 'react'

import { theme } from '../Theme'

const StyledButton = styled.button`
  width: 134px;
  height: 43.2px;
  color: ${theme.colors.black};
  background: ${theme.colors.secondary};
  border: none;
  font-style: normal;
  font-weight: 500;
  font-size: 15.2;

  :hover {
    cursor: pointer;
    background: ${theme.colors.secondaryButtonHover};
  }
`

const CardButton = ({ children }) => {
  return <StyledButton>{children}</StyledButton>
}

export default CardButton
