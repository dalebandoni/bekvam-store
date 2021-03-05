import styled from '@emotion/styled'
import React from 'react'

import { theme } from '../Theme'

const StyledButton = styled.button`
  width: ${({ small }) => (!small ? '161px' : '143px')};
  height: ${({ small }) => (!small ? '52px' : '43.2px')};
  color: ${theme.colors.white};
  background: ${theme.colors.darkGray};
  border: none;
  font-style: normal;
  font-weight: 500;
  font-size: ${({ small }) => (!small ? '18.3px' : '15.2px')};

  :hover {
    cursor: pointer;
    background: ${theme.colors.grayButtonHover};
  }
`

const Button = ({ children, small }) => {
  return <StyledButton small={small ? small : null}>{children}</StyledButton>
}

export default Button
