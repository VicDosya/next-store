import React from 'react'
import ProductDetails from '../../components/ProductDetails/ProductDetails'
import { storefront } from '../../utils/shopify';
import { singleProductHandleQuery, singleProductQuery } from '../../queries/productsQueries';

export default function Product({ product, products }: any) {
  const relatedProducts = products.edges.filter((item: any) => item.node.handle !== product.handle).slice(0, 4);
  return (
    <ProductDetails product={product} relatedProducts={relatedProducts} />
  )
}

export async function getStaticPaths() {
  const { data } = await storefront(singleProductHandleQuery);
  return {
    paths: data.products.edges.map((product: any) => ({ params: { handle: product.node.handle } })),
    fallback: false,
  }
}

export async function getStaticProps({ params }: any) {
  const { data } = await storefront(singleProductQuery, { handle: params.handle })
  return {
    props: {
      product: data.productByHandle,
      products: data.products,
    }
  }
}
