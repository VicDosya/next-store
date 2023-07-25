import React, { useContext, useState } from 'react'
import Link from 'next/link';
import Image from 'next/image'
import { CartContext } from '../Cart/CartContext';
import { addToCartMutation, updateCartMutation } from './queries';
import { storefront } from '../../utils/shopify';

function ProductDetails({ product, relatedProducts }: any) {
  const [selectedVariantId, setSelectedVariantId] = useState(product.variants.edges[0].node.id);
  const { cartId, setCartId, cartItems, setCartItems }: any = useContext(CartContext);

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
        const cart = await storefront(updateCartMutation, variables);
      }
      // await fetchCartDetails(cartId);
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
      <div className='flex justify-center flex-col items-center'>
        <div>
          <Image src={product.images.edges[0].node.transformedSrc} width={300} height={300} alt='Alt Text' />
        </div>
        <div>{product.title}</div>
        <div>{product.description}</div>
        <div>{product.priceRange.minVariantPrice.amount}</div>
        <div>{product.updatedAt}</div>
      </div>
      <div className='flex justify-center my-5'>
        <p className='mx-5'>Variants:</p>
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

      {/* Related Products */}
      <div className='mt-24 mb-10 flex justify-center'>
        You may also like:
      </div>
      <div className='flex justify-center'>
        <div className='flex'>
          {relatedProducts.map((product: any) => (
            <div className='mx-20 flex' key={product.node.handle}>
              <Link href={`/products/${product.node.handle}`}>
                <div className='flex justify-center'>
                  <Image src={product.node.images.edges[0].node.transformedSrc} alt='alt Text' width={100} height={100} />
                </div>
                <div className='flex justify-center'>
                  {product.node.title}
                </div>
                <div className='flex justify-center'>{product.node.priceRange.minVariantPrice.amount}</div>
              </Link>
            </div>
          ))}
        </div>
      </div >
    </>
  )
}


export default ProductDetails