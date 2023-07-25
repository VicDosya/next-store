import { gql } from "graphql-request";

export const addToCartMutation = gql`
  mutation addToCart($cartInput: CartInput!) {
    cartCreate(input: $cartInput) {
      cart {
        id
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
                }
              }
            }
          }
        }
      }
    }
  }
`;

export const updateCartMutation = gql`
  mutation cartLinesAdd($cartId: ID!, $lines: [CartLineInput!]!) {
    cartLinesAdd(cartId: $cartId, lines: $lines) {
      cart {
        id
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
                }
              }
            }
          }
        }
      }
    }
  }
`;
