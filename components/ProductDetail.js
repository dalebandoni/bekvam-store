import styled from '@emotion/styled'
import React, { useEffect, useState } from 'react'
import useLocalStorage from '../hooks/useLocalStorage'
import { theme } from '../Theme'
import Button from './Button'
import Container from './Container'
import CardButton from './CardButton'
import Footer from './Footer'

const Section = styled.div`
  height: 833px;
  background: ${theme.colors.lightGray};
  padding: 60px 0 126px;

  .errorTag {
    margin-top: 50px;
  }
`
const ContentWrapper = styled.div`
  display: flex;
  margin-top: 65px;

  .productImage {
    height: 540px;
    width: 540px;
    object-fit: cover;
    object-position: 10% 0;
  }

  .infoContainer {
    padding: 0 70px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;

    .mainDetails {
      display: flex;
      flex-direction: column;

      .nameAndPrice {
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin-bottom: 30px;
        font-weight: bold;
        font-size: 40px;
      }

      .description {
        font-weight: normal;
        font-size: 18px;
        line-height: 32px;
        width: 444px;
        margin-bottom: 40px;
      }
    }

    .moreDetails {
      .title {
        margin-bottom: 30px;
        font-weight: bold;
        font-size: 40px;
      }
      .description {
        font-weight: normal;
        font-size: 18px;
        line-height: 32px;
        width: 444px;
      }
    }
  }

  .errorTag {
    margin-top: 50px;
  }
`
const ProductDetail = ({ product }) => {
  return (
    <>
      <Section>
        <Container>
          <Button small>GO BACK</Button>
          {product.name && (
            <ContentWrapper>
              <div className='imageContainer'>
                {product.image && (
                  <img
                    src={product.image}
                    alt='product image'
                    className='productImage'
                  />
                )}
              </div>
              <div className='infoContainer'>
                <div className='mainDetails'>
                  <div className='nameAndPrice'>
                    <p className='name'>{product.name}</p>
                    <p className='price'>${product.price}</p>
                  </div>
                  <p className='description'>{product.description}</p>
                  <CardButton>ADD TO CART</CardButton>
                </div>
                {product.extraDescription && (
                  <div className='moreDetails'>
                    <p className='title'>More Details</p>
                    <p className='description'>{extraDescription}</p>
                  </div>
                )}
              </div>
            </ContentWrapper>
          )}
          {!product.name && <h1 className='errorTag'>Product not found.</h1>}
        </Container>
      </Section>
      <Footer />
    </>
  )
}

export default ProductDetail
