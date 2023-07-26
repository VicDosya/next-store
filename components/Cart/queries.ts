import { gql } from "graphql-request";

export const removeCartItemLine = gql`
  mutation cartLinesRemove($cartId: ID!, $lineIds: [ID!]!) {
    cartLinesRemove(cartId: $cartId, lineIds: $lineIds) {
      cart {
        id
      }
      userErrors {
        field
        message
      }
    }
  }
`;

export const getCartDetailsQuery = gql`
  query getCart($cartId: ID!) {
    cart(id: $cartId) {
      id
      createdAt
      updatedAt
      lines(first: 10) {
        edges {
          node {
            id
            quantity
            merchandise {
              ... on ProductVariant {
                id
                title
                product {
                  title
                  handle
                }
                quantityAvailable
                image {
                  transformedSrc
                }
                priceV2 {
                  amount
                }
              }
            }
          }
        }
      }
      cost {
        totalAmount {
          amount
          currencyCode
        }
        totalAmountEstimated
      }
      checkoutUrl
      totalQuantity
    }
  }
`;
