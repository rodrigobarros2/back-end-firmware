import express, { Router } from "express";
import { PaymentController } from "./controllers/payment.controller";
import Stripe from "stripe";

const router = Router();
const paymentController = new PaymentController();

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY as string);

router.post(
  "/create-checkout-session",
  paymentController.createCheckoutSession
);

router.post(
  "/webhook",
  express.raw({ type: "application/json" }),
  paymentController.handleWebhook
);

router.post("/create-payment-intent", async (req, res) => {
  const { amount } = req.body;
  console.log("🚀 ~ router.post ~ amount:", amount);

  try {
    const paymentIntent = await stripe.paymentIntents.create({
      amount,
      currency: "usd",
    });

    res.status(200).send({
      clientSecret: paymentIntent.client_secret,
    });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

export default router;
