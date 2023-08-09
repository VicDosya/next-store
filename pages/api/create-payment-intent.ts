import Stripe from "stripe";

// Stripe initialization
export const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!, {
  typescript: true,
  apiVersion: "2022-11-15",
});

export default async function POST(req: any, res: any) {
  if (req.method === "POST") {
    const { amount } = req.body;
    try {
      const paymentIntent = await stripe.paymentIntents.create({
        amount: Number(amount) * 100,
        currency: "USD",
        automatic_payment_methods: {
          enabled: true,
        },
      });
      res.status(200).json({ clientSecret: paymentIntent.client_secret });
    } catch (error: any) {
      res.status(400).json({ error: error.message });
    }
  } else {
    res.status(405).json({ error: "Method not allowed" });
  }
}
