import { z } from 'zod';

export const createPaymentIntentZodSchema = z.object({
  body: z
    .object({
      amount: z.number({
        required_error: 'Amount is required and must be a number',
      }),
    })
    .strict(),
});
