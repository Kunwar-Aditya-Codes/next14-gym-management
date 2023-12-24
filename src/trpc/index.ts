import { adminRouter } from './adminRouter';
import { fileRouter } from './fileRouter';
import { router } from './trpc';

export const appRouter = router({
  admin: adminRouter,

  file: fileRouter,
});

export type AppRouter = typeof appRouter;
