import { adminRouter } from './adminRouter';
import { router } from './trpc';

export const appRouter = router({
  admin: adminRouter,
});

export type AppRouter = typeof appRouter;
