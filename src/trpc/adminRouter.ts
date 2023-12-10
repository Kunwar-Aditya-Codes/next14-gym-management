import { ClientValidator } from '@/lib/validators/client-validator';
import { privateProcedure, router } from './trpc';

export const adminRouter = router({
  createClient: privateProcedure
    .input(ClientValidator)
    .mutation(async ({ ctx, input }) => {
      const { user: admin } = ctx;
      const { age, clientName, email, height, phoneNumber, weight } = input;
    }),
});
