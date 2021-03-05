import styled from '@emotion/styled'
import React from 'react'
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
const ProductDetail = ({ img, name, price, description, extraDescription }) => {
  return (
    <>
      <Section>
        <Container>
          <Button small>GO BACK</Button>
          {name && (
            <ContentWrapper>
              <div className='imageContainer'>
                {img && (
                  <img src={img} alt='product image' className='productImage' />
                )}
              </div>
              <div className='infoContainer'>
                <div className='mainDetails'>
                  <div className='nameAndPrice'>
                    <p className='name'>{name}</p>
                    <p className='price'>${price}</p>
                  </div>
                  <p className='description'>{description}</p>
                  <CardButton>ADD TO CART</CardButton>
                </div>
                {extraDescription && (
                  <div className='moreDetails'>
                    <p className='title'>More Details</p>
                    <p className='description'>{extraDescription}</p>
                  </div>
                )}
              </div>
            </ContentWrapper>
          )}
          {!name && <h1 className='errorTag'>Product not found.</h1>}
        </Container>
      </Section>
      <Footer />
    </>
  )
}

export default ProductDetail
