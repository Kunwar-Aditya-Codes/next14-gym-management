import { TRPCError, initTRPC } from '@trpc/server';
import type { Context } from '@/clerk/context';
import superjson from 'superjson';

const t = initTRPC.context<Context>().create({
  transformer: superjson,
  errorFormatter({ shape }) {
    return shape;
  },
});

const middleware = t.middleware;

const isAuth = middleware(async ({ ctx, next }) => {
  if (!ctx.auth.userId) {
    throw new TRPCError({ code: 'UNAUTHORIZED' });
  }
  return next({
    ctx: {
      user: ctx.auth.user,
    },
  });
});

export const router = t.router;
export const publicProcedure = t.procedure;
export const privateProcedure = t.procedure.use(isAuth);
