import { RequestHandler } from 'express';
import httpStatus from 'http-status';
import { StripeService } from './stripe.service';
import sendResponse from '../../../shared/utils/sendResponse';
import { IStripePaymentResponse } from './stripe.interface';

const createPaymentIntent: RequestHandler = async (
  req,
  res,
  next
): Promise<void> => {
  try {
    const { amount } = req.body;

    // Call a service method to create a payment intent using the Stripe API
    const clientSecret = await StripeService.createPaymentIntent(amount);

    sendResponse<IStripePaymentResponse>(res, {
      success: true,
      statusCode: httpStatus.OK,
      data: { clientSecret },
      message: 'Payment intent created successfully!',
    });
  } catch (error) {
    next(error);
  }
};

export const StripeController = {
  createPaymentIntent,
};
