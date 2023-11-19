import Stripe from 'stripe';
import ApiError from '../../../errors/ApiError';

const stripe = new Stripe(process.env.STRIPE_SECRET!);

export class StripeService {
  static async createPaymentIntent(amount: number): Promise<string> {
    try {
      const amountInCents = Math.round(amount * 100);
      const paymentIntent = await stripe.paymentIntents.create({
        amount: amountInCents,
        currency: 'usd',
      });

      return paymentIntent.client_secret as string;
    } catch (error) {
      throw new ApiError(500, 'Error creating payment intent', error as string);
    }
  }
}
