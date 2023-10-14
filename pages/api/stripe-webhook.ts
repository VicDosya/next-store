import { buffer } from "stream/consumers";
import { stripe } from "./create-payment-intent"; //Stripe instance
import { gql } from "graphql-request";
import { shopifyAdmin } from "../../utils/shopify";

//Important! without this config, the data will be automatically parsed. (We need RAW data in the request)
export const config = {
  api: {
    bodyParser: false,
  },
};

export default async function handler(req: any, res: any) {
  if (req.method !== "POST") {
    res.status(405).end();
    return;
  }
  let event: any;

  //Using buffer to make the req data raw
  const rawBody = await buffer(req);

  try {
    event = stripe.webhooks.constructEvent(
      rawBody,
      req.headers["stripe-signature"],
      process.env.STRIPE_WEBHOOK_SECRET!
    );
  } catch (error: any) {
    console.log("Webhook signature verification failed.", error);
    res.status(400).end();
  }

  //Handle the event
  if (event) {
    switch (event.type) {
      case "payment_intent.created":
        console.log("Payment intent created!", event.data.object);
        break;
      case "payment_intent.succeeded":
        console.log("Payment intent succeeded!", event.data.object);
        let draftOrderId = null;
        // CREATE DRAFT ORDER
        try {
          const createOrderVariables = {
            input: {
              lineItems: {
                variantId: "gid://shopify/ProductVariant/44037568856317",
                quantity: 2,
              },
            },
          };

          const shopifyOrder = await shopifyAdmin(
            createDraftOrderQuery,
            createOrderVariables
          );
          console.log(
            "Shopify order created:",
            shopifyOrder.data.draftOrderCreate.draftOrder.id
          );
          // Apply the order id to a variable
          draftOrderId = shopifyOrder.data.draftOrderCreate.draftOrder.id;

          // COMPLETE DRAFT ORDER
          try {
            const completeOrderVariables = {
              id: draftOrderId,
            };
            const shopifyCompleteOrder = await shopifyAdmin(
              completeDraftOrderQuery,
              completeOrderVariables
            );
            console.log("Shopify draft order completed", shopifyCompleteOrder);
            draftOrderId = null;
          } catch (error: any) {
            console.log("Error completing draft order:", error);
          }
        } catch (error: any) {
          console.log("Error creating shopify draft order:", error);
        }

        break;
      case "charge.succeeded":
        console.log("Charge succeeded!", event.data.object);
        break;

      default:
        console.log("Unhandled event type.", event.type);
    }
    res.status(200).end();
  }
}

const createDraftOrderQuery = gql`
  mutation draftOrderCreate($input: DraftOrderInput!) {
    draftOrderCreate(input: $input) {
      draftOrder {
        id
      }
    }
  }
`;

const completeDraftOrderQuery = gql`
  mutation draftOrderComplete($id: ID!) {
    draftOrderComplete(id: $id) {
      draftOrder {
        id
      }
    }
  }
`;
