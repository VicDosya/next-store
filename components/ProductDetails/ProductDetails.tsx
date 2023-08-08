import React, { useContext, useState, useEffect } from 'react'
import Link from 'next/link';
import Image from 'next/image'
import { CartContext } from '../Cart/CartContext';
import { addToCartMutation, updateCartMutation } from './queries';
import { storefront } from '../../utils/shopify';

function ProductDetails({ product, relatedProducts }: any) {
  const [selectedVariantId, setSelectedVariantId] = useState(product.variants.edges[0].node.id);
  const { cartId, setCartId }: any = useContext(CartContext);

  //Select the first variant option
  useEffect(() => {
    setSelectedVariantId(product.variants.edges[0].node.id);
  }, [product.handle]);

  //Function to create a cart and add an item to the cart
  const addToCart = async (itemId: any) => {
    try {
      if (!cartId) {
        return await cartCreation(itemId);
      } else {
        const variables = {
          cartId: cartId,
          lines: [
            {
              merchandiseId: itemId,
            }
          ]
        };
        await storefront(updateCartMutation, variables);
      }
    } catch (error: any) {
      console.error("Error with Cart:", error);
    }
  };

  const cartCreation = async (itemId: any) => {
    const variables = {
      cartInput: {
        lines: [
          {
            merchandiseId: itemId,
          },
        ],
      },
    };
    const cart = await storefront(addToCartMutation, variables);
    setCartId(cart.data.cartCreate.cart.id);
  };
  return (
    <>
      <div className='flex flex-row items-center mt-5'>
        <div className='flex justify-center flex-1'>
          <Image src={product.images.edges[0].node.transformedSrc} width={300} height={300} alt='Alt Text' />
        </div>
        <div className='flex items-center flex-1 flex-col'>
          <div className='font-bold text-4xl'>{product.title}</div>
          <div className='font-bold text-xl mt-5'>${product.priceRange.minVariantPrice.amount}</div>
          <div className='font-bold text-lg text-gray-700 mt-5'>{product.description}</div>
          <div className='flex justify-center my-5'>
            <p className='mx-5'>Meal size:</p>
            <div>
              {product.variants.edges.map((variant: any) => (
                <div key={variant.node.id}>
                  <input
                    type='radio'
                    value={variant.node.id}
                    checked={selectedVariantId === variant.node.id}
                    onChange={(e) => setSelectedVariantId(e.target.value)}
                  ></input>
                  <label className='ml-5'>{variant.node.selectedOptions[0].value}</label>
                </div>
              ))}
            </div>
          </div>
          <div className='flex justify-center'>
            <button
              className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full'
              onClick={() => addToCart(selectedVariantId)}
            >Add to cart</button>
          </div>
        </div>
      </div>

      <div className='my-6 border-b-2 opacity-50'></div>

      {/* Related Products */}
      <div className='mb-10 flex justify-center text-2xl'>
        You may also like:
      </div>
      <div className='flex justify-center'>
        <div className='flex'>
          {relatedProducts.map((product: any) => (
            <div className='mx-20 p-5 flex justify-center items-center bg-slate-100 w-48 shadow-md hover:shadow-lg' key={product.node.handle}>
              <Link href={`/products/${product.node.handle}`}>
                <div className='flex justify-center'>
                  <Image src={product.node.images.edges[0].node.transformedSrc} alt='alt Text' width={100} height={100} />
                </div>
                <div className='flex justify-center text-md text-gray-900'>
                  {product.node.title}
                </div>
                <div className='flex justify-center font-bold'>${product.node.priceRange.minVariantPrice.amount}</div>
              </Link>
            </div>
          ))}
        </div>
      </div >
    </>
  )
}


export default ProductDetails