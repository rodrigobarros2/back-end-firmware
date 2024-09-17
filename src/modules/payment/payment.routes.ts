import express, { Router } from "express";
import { PaymentController } from "./controllers/payment.controller";

const router = Router();
const paymentController = new PaymentController();

router.post("/create-checkout-session", paymentController.createCheckoutSession);
router.post("/webhook", express.raw({ type: 'application/json' }), paymentController.handleWebhook);

export default router;