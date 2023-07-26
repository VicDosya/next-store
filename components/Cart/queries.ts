import { gql } from "graphql-request";

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
    }
  }
`;
