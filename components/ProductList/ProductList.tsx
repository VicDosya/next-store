import React, { useContext } from 'react'
import ProductCard from '../ProductCard/ProductCard'
import { ProductsContext } from '../ProductsContext'

function ProductList() {
  const { products } = useContext(ProductsContext);
  return (
    <div className="grid grid-cols-4 mx-16">
      {products.edges.map((product: any) => (
        <ProductCard key={product.node.id} item={product} />
      ))}
    </div>
  )
}

export default ProductList