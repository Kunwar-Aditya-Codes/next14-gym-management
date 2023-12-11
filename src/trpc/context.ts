import * as trpc from '@trpc/server';
import { FetchCreateContextFnOptions } from '@trpc/server/adapters/fetch';
import { auth } from '@clerk/nextjs';

export const createContext = async (_opts: FetchCreateContextFnOptions) => {
  const { userId } = auth();
  return {
    userId,
  };
};

export type Context = Awaited<trpc.inferAsyncReturnType<typeof createContext>>;
