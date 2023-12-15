import { ClientValidator } from '../lib/validators/client-validator';
import { privateProcedure, publicProcedure, router } from './trpc';
import { db } from '../db';
import { TRPCError } from '@trpc/server';
import { z } from 'zod';

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

      await db.client.create({
        data: {
          age,
          email,
          clientName,
          height,
          phoneNumber,
          userId,
          weight,
        },
      });

      return { success: true };
    }),

  getClients: privateProcedure
    .input(z.object({ adminId: z.string() }))
    .query(async ({ ctx, input }) => {
      const { userId } = ctx;

      const { adminId } = input;

      if (!userId && userId !== adminId)
        throw new TRPCError({ code: 'UNAUTHORIZED' });

      const clients = await db.client.findMany({
        where: {
          userId: adminId,
        },
      });

      if (clients.length === 0) throw new TRPCError({ code: 'NOT_FOUND' });

      return {
        clients,
        success: true,
      };
    }),

  getClientInfo: privateProcedure
    .input(z.object({ clientId: z.string() }))
    .query(async ({ ctx, input }) => {
      const { userId } = ctx;

      const { clientId } = input;

      if (!userId) throw new TRPCError({ code: 'UNAUTHORIZED' });

      const client = await db.client.findFirst({
        where: {
          userId,
          id: clientId,
        },
      });

      if (!client) throw new TRPCError({ code: 'NOT_FOUND' });

      return {
        client,
        success: true,
      };
    }),
});
