import { buffer } from "stream/consumers";
import { stripe } from "./create-payment-intent"; //Stripe instance

export default async function handler(req: any, res: any) {
  if (req.method !== "POST") {
    res.status(405).end();
    return;
  }
  let event: any;

  try {
    const rawBody = await buffer(req);
    event = stripe.webhooks.constructEvent(
      rawBody.toString(),
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
      case "payment_intent.succeeded":
        console.log("Payment intent succeeded!", event.data.object);
        break;
      default:
        console.log("Unhandled event type.", event.type);
    }
    res.status(200).end();
  }
}
