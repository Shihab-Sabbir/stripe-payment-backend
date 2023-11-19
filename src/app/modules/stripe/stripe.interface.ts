export interface IStripePayment {
  amount: number;
}

export interface IStripePaymentResponse {
  clientSecret: string;
}
