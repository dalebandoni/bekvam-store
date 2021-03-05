import styled from '@emotion/styled'
import React from 'react'
import { theme } from '../Theme'
import Container from './Container'

const Section = styled.div`
  background: ${theme.colors.primary};
  height: 249px;
  position: relative;
  z-index: 55;
`
const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  padding: 65px 0;
  .logo {
    width: 70px;
    margin-bottom: 29px;
  }

  .footerLinks {
    display: flex;
    list-style: none;
    margin-bottom: 23px;
    margin-right: 25px;

    .link {
      color: ${theme.colors.white};
      margin-right: 25px;

      :hover {
        text-decoration: underline;
        cursor: pointer;
      }
    }
  }

  .copyright {
    font-size: 14px;
    color: ${theme.colors.white};
  }
`

const Footer = () => {
  return (
    <Section>
      <Container>
        <Wrapper>
          <img
            src='../assets/images/bekvamLogoWhite.svg'
            alt='bekvam logo'
            className='logo'
          />
          <ul className='footerLinks'>
            <li className='link'>About Us</li>
            <li className='link'>Products</li>
            <li className='link'>Careers</li>
            <li className='link'>Help</li>
            <li className='link'>Privacy Policy</li>
            <li className='link'>Returns</li>
          </ul>
          <p className='copyright'>© 2021 Bekväm. All rights reserved</p>
        </Wrapper>
      </Container>
    </Section>
  )
}

export default Footer
