import { useEffect, useState } from 'react'
import ProductDetail from '../../../components/ProductDetail'
import Navbar from '../../../components/Navbar'
import { useRouter } from 'next/router'

const product = () => {
  const [product, setProduct] = useState({})
  const router = useRouter()
  const { id } = router.query

  useEffect(() => {
    const savedProduct = JSON.parse(window.localStorage.getItem('product'))
    if (savedProduct) {
      setProduct(savedProduct)
      return
    }
    const fetchProduct = async () => {
      const data = await fetch(`/.netlify/functions/get-product?id=${id}`)
        .then(res => res.json())
        .catch(err => console.error(err))
      setProduct(data)
      window.localStorage.setItem('product', JSON.stringify(data))
    }
    fetchProduct()
  }, [product])

  return (
    <div>
      <Navbar />
      <ProductDetail product={product} />
    </div>
  )
}

export default product
