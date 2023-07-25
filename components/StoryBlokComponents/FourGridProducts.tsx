import React from 'react'
import ProductCard from '../ProductCard/ProductCard'

function FourGridProducts() {
  return (
    <div className="grid grid-cols-4">
      <ProductCard />
      <ProductCard />
      <ProductCard />
      <ProductCard />
    </div>
  )
}

export default FourGridProducts