import express from 'express';
import { StripeController } from './stripe.controller';
import validateRequest from '../../middlewares/validateRequest';
import { createPaymentIntentZodSchema } from './stripe.validation';
import auth from '../../middlewares/auth';

const stripeRoutes = express.Router();

stripeRoutes.post(
  '/create-payment-intent',
  auth(),
  validateRequest(createPaymentIntentZodSchema),
  StripeController.createPaymentIntent
);

export default stripeRoutes;
