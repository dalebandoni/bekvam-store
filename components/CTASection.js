import styled from '@emotion/styled'
import React from 'react'
import { theme } from '../Theme'
import CardButton from './CardButton'
import Container from './Container'

const Section = styled.div`
  height: 342px;
  background: ${theme.colors.darkGray};
  position: relative;
  z-index: 50;
  border-top: 10px solid ${theme.colors.secondary};

  .title {
    font-weight: bold;
    color: ${theme.colors.white};
    font-size: 48px;
    line-height: 64px;
    text-align: center;
    margin-bottom: 40px;
  }
`

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 62px 0;
`

const CTASection = () => {
  return (
    <Section>
      <Container>
        <Wrapper>
          <h2 className='title'>
            Explore our catalog of finely <br />
            crafted products
          </h2>
          <CardButton>VIEW CATALOG</CardButton>
        </Wrapper>
      </Container>
    </Section>
  )
}

export default CTASection
