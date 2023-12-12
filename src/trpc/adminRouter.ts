import { ClientValidator } from '../lib/validators/client-validator';
import { privateProcedure, router } from './trpc';
import { db } from '../db';
import { TRPCError } from '@trpc/server';

export const adminRouter = router({
  createClient: privateProcedure
    .input(ClientValidator)
    .mutation(async ({ ctx, input }) => {
      const { age, clientName, email, height, phoneNumber, weight } = input;

      const { userId } = ctx;

      if (!userId) throw new TRPCError({ code: 'UNAUTHORIZED' });

      const validEmail = await db.client.findFirst({
        where: {
          email,
        },
      });

      if (validEmail) throw new TRPCError({ code: 'CONFLICT' });

      // await db.client.create({
      //   data: {
      //     age,
      //     email,
      //     clientName,
      //     height,
      //     phoneNumber,
      //     userId,
      //     weight,
      //   },
      // });

      return { success: true };
    }),
});
