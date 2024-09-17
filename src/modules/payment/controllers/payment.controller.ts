import { Request, Response } from "express";
import { PaymentService } from "../services/payment.service";

const paymentService = new PaymentService();

export class PaymentController {
  async createCheckoutSession(req: Request, res: Response): Promise<Response> {
    try {
      const { priceId } = req.body;
      const session = await paymentService.createCheckoutSession(priceId);
      return res.status(200).json({ sessionId: session.id });
    } catch (error) {
      return res
        .status(500)
        .json({ message: "Error creating checkout session", error });
    }
  }

  // Webhook de pagamento
  async handleWebhook(req: Request, res: Response): Promise<Response> {
    try {
      const sig = req.headers["stripe-signature"] as string;
      const event = await paymentService.handleWebhook(req.body, sig);
      return res.status(200).json({ received: true });
    } catch (error) {
      return res.status(400).json({ message: "Webhook Error", error });
    }
  }
}
