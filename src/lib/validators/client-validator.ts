import { z } from 'zod';

export const ClientValidator = z.object({
  email: z.string().email(),
  clientName: z.string(),
  age: z.number(),
  height: z.number(),
  weight: z.number(),
  phoneNumber: z.string().refine((value) => /^\d{10}$/g.test(value), {
    message: 'Invalid phone number format (should be 10 digits)',
  }),
  profileImage: z.string().optional().nullable(),
});

export type TClientValidator = z.infer<typeof ClientValidator>;
