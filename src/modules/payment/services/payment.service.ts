import stripe from "../config/stripe";

export class PaymentService {
  async createCheckoutSession(priceId: string) {
    return stripe.checkout.sessions.create({
      payment_method_types: ["card"],
      mode: "payment",
      line_items: [{ price: priceId, quantity: 1 }],
      success_url: `${process.env.CLIENT_URL}/success`,
      cancel_url: `${process.env.CLIENT_URL}/cancel`,
    });
  }

  // Método para lidar com o webhook de pagamentos
  async handleWebhook(payload: Buffer, sig: string) {
    const webhookSecret = process.env.STRIPE_WEBHOOK_SECRET;

    let event;

    try {
      event = stripe.webhooks.constructEvent(
        payload,
        sig,
        webhookSecret as string
      );
      // Lógica para lidar com o evento, ex: pagamento bem-sucedido
      if (event.type === "checkout.session.completed") {
        const session = event.data.object;
        console.log("Payment successful!", session);
      }
      if (event.type === "payment_intent.succeeded") {
        const paymentIntent = event.data.object;
        console.log(`Pagamento bem-sucedido: ${paymentIntent.id}`);
        // Faça algo com os dados do pagamento (ex: salvar no banco)
      }
      return event;
    } catch (error) {
      throw new Error(`Webhook Error: ${error.message}`);
    }
  }
}
