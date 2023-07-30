import React, { useContext } from 'react'
import ProductCard from '../ProductCard/ProductCard'
import { ProductsContext } from '../ProductsContext'

function ProductList() {
  const { products } = useContext(ProductsContext);
  return (
    <div className="grid grid-cols-1 mx-5 md:grid-cols-2 2xl:grid-cols-4">
      {products.edges.map((product: any) => (
        <ProductCard key={product.node.id} item={product} />
      ))}
    </div>
  )
}

export default ProductList