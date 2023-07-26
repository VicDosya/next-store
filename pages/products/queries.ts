import { gql } from "graphql-request";

export const singleProductHandleQuery = gql`
  {
    products(first: 4) {
      edges {
        node {
          handle
        }
      }
    }
  }
`;

export const singleProductQuery = gql`
  query SingleProduct($handle: String!) {
    productByHandle(handle: $handle) {
      #Product id
      id
      title
      handle
      description
      updatedAt
      tags
      priceRange {
        minVariantPrice {
          amount
        }
      }
      variants(first: 5) {
        edges {
          node {
            #Product variant id
            id
            selectedOptions {
              name
              value
            }
          }
        }
      }
      images(first: 1) {
        edges {
          node {
            transformedSrc
            altText
          }
        }
      }
    }
    products(first: 4) {
      edges {
        node {
          title
          handle
          tags
          priceRange {
            minVariantPrice {
              amount
            }
          }
          images(first: 1) {
            edges {
              node {
                transformedSrc
                altText
              }
            }
          }
        }
      }
    }
  }
`;
