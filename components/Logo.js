import styled from '@emotion/styled'
import Link from 'next/link'
import React from 'react'

const LogoImage = styled.img`
  width: 70px;

  :hover {
    cursor: pointer;
  }
`
const Logo = () => {
  return (
    <Link href='/'>
      <LogoImage src='../assets/images/bekvamLogo.png' alt='bekvam logo' />
    </Link>
  )
}

export default Logo
