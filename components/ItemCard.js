import styled from '@emotion/styled'
import React from 'react'
import CardButton from './CardButton'
import Link from 'next/link'

const Card = styled.div`
  width: 472px;
  padding: 7px;
  margin-bottom: 60px;
  box-shadow: 0px 10px 20px rgba(0, 0, 0, 0.05);
  transition: 0.3s cubic-bezier(0.17, 0.67, 0.83, 0.67);

  :hover {
    transform: translateY(-10px);
    cursor: pointer;
  }

  .titleImage {
    max-width: 458px;
    object-fit: cover;
  }
`

const CardInfo = styled.div`
  width: 95%;
  margin: 20px auto;
  display: flex;
  justify-content: space-between;
  align-items: center;

  .name,
  .price {
    font-weight: 500;
    font-size: 18px;
  }
`

const ItemCard = ({ img, name, price }) => {
  return (
    <Link href={`/product/${encodeURIComponent(name)}`}>
      <Card>
        <img src={img} alt={`picture of ${name}`} className='titleImage' />
        <CardInfo>
          <p className='name'>{name}</p>
          <p className='price'>{`from $${price}`}</p>
          <CardButton>ADD TO CART</CardButton>
        </CardInfo>
      </Card>
    </Link>
  )
}

export default ItemCard
