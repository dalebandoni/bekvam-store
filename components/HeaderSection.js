import styled from '@emotion/styled'
import React from 'react'
import Button from './Button'
import { theme } from '../Theme'

const StyledHeader = styled.div`
  height: 758px;
  background: ${theme.colors.lightGray};
  display: flex;
  position: relative;

  .pattern {
    position: absolute;
    top: 0;
    right: 0;
    z-index: 1;
  }
`

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
  width: 70%;
  margin: 0 auto;

  .contentWrapper {
    display: flex;
    flex-direction: column;
    z-index: 5000;
    .title {
      font-family: Playfair Display;
      font-weight: bold;
      font-size: 72px;
      line-height: 104%;
      margin-bottom: 30px;
    }

    .subtitle {
      width: 350px;
      font-size: 18px;
      line-height: 170%;
      margin-bottom: 40px;
    }
  }

  .imageWrapper {
    .bookletImage {
      width: 420px;
      position: relative;
      z-index: 100;
    }
  }
`

const HeaderSection = () => {
  return (
    <StyledHeader>
      <Wrapper>
        <div className='contentWrapper'>
          <h1 className='title'>
            Undeniably <br /> Swedish
          </h1>
          <p className='subtitle'>
            View the new spring range of furniture designed and built with the
            best scandinavian materials and methods available.{' '}
          </p>
          <Button className='titleButton'>VIEW CATALOG</Button>
        </div>
        <div className='imageWrapper'>
          <img
            src='../assets/images/headerBookletImage.png'
            alt='booklet image'
            className='bookletImage'
          />
        </div>
        <img
          src='../assets/images/headerPattern.svg'
          alt='header pattern'
          className='pattern'
        />
      </Wrapper>
    </StyledHeader>
  )
}

export default HeaderSection
