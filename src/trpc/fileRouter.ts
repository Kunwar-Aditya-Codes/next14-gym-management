import { z } from 'zod';
import { privateProcedure, router } from './trpc';
import { db } from '@/db';
import { TRPCError } from '@trpc/server';

export const fileRouter = router({
  getFile: privateProcedure
    .input(z.object({ key: z.string() }))
    .mutation(async ({ ctx, input }) => {
      const { userId } = ctx;

      const file = await db.file.findFirst({
        where: {
          key: input.key,
          userId,
        },
      });

      if (!file) throw new TRPCError({ code: 'NOT_FOUND' });

      return file;
    }),
});
