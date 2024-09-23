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

router.post("/create-subscription-intent", async (req, res) => {
  try {
    const { priceId } = req.body;

    const priceMap = {
      monthly: "price_1Q29IOI9OwHmBWHRgiEDUSZ6", // Substitua pelo ID real do Stripe para o plano mensal
      quarterly: "price_1Q29K6I9OwHmBWHRW7e05RPn", // Substitua pelo ID real do Stripe para o plano anual (se aplicável)
      yearly: "price_1Q29LzI9OwHmBWHRh4o1aHtc", // Substitua pelo ID real do Stripe para o plano anual (se aplicável)
    };
    
    const mappedPriceId = priceMap[priceId];
    console.log("🚀 ~ router.post ~ mappedPriceId:", mappedPriceId)

    // Crie um cliente (você pode querer armazenar isso no seu banco de dados)
    const customer = await stripe.customers.create();

    // Crie uma assinatura
    const subscription = await stripe.subscriptions.create({
      customer: customer.id,
      items: [{ price: mappedPriceId }],
      payment_behavior: "default_incomplete",
      expand: ["latest_invoice.payment_intent"],
    });

    res.send({
      subscriptionId: subscription.id,
      clientSecret: subscription.latest_invoice.payment_intent.client_secret,
    });
  } catch (error) {
    res.status(400).send({ error: error.message });
  }
});

export default router;
