import styled from '@emotion/styled'
import { useEffect, useState } from 'react'
import React from 'react'
import Container from './Container'
import ItemCard from './ItemCard'

const Section = styled.div`
  max-height: 1075px;
  padding-bottom: 67px;
  position: relative;

  .pattern {
    position: absolute;
    width: 100%;
    overflow: hidden;
    z-index: 1;
  }
`

const TitleWrapper = styled.div`
  width: 100%;
  margin: 50px auto 75px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  .textSerif {
    font-family: Playfair Display;
    font-size: 24px;
    margin-bottom: 15px;
  }

  .textSansSerif {
    font-weight: 600;
    font-size: 36px;
    letter-spacing: 0.12em;
  }
`

const CardGrid = styled.div`
  display: flex;
  justify-content: space-between;
  width: 1030px;
  margin: 0 auto;
  position: relative;
  z-index: 5;
`

const Column = styled.div`
  display: flex;
  flex-direction: column;
`

const BestSellerSection = () => {
  const [products, setProducts] = useState([])
  useEffect(() => {
    const fetchProducts = async () => {
      const data = await fetch('/.netlify/functions/get-products')
        .then(res => res.json())
        .catch(err => console.error(err))
      setProducts(data)
    }

    fetchProducts()
  }, [])
  return (
    <Section>
      <img
        src='../assets/images/bestSellersPattern.svg'
        alt='best seller pattern'
        className='pattern'
      />
      <Container>
        <TitleWrapper>
          <p className='textSerif'>Here's some of our</p>
          <h3 className='textSansSerif'>BESTSELLERS</h3>
        </TitleWrapper>
        <CardGrid>
          <Column>
            {products.slice(0, 2).map(product => (
              <ItemCard
                key={product.name}
                img={product.image}
                name={product.name}
                price={product.price}
              />
            ))}
          </Column>
          <Column>
            {products.slice(2, 4).map(product => (
              <ItemCard
                key={product.name}
                img={product.image}
                name={product.name}
                price={product.price}
              />
            ))}
          </Column>
        </CardGrid>
      </Container>
    </Section>
  )
}

export default BestSellerSection
