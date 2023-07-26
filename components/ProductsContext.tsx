import React, { createContext } from 'react'

export const ProductsContext = createContext<any>({});

function ProductsProvider({ children, value }: any) {
  return (
    <ProductsContext.Provider value={value}>
      {children}
    </ProductsContext.Provider>
  )
}

export default ProductsProvider