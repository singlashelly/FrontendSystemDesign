import express from 'express';
import { initTRPC } from '@trpc/server';
import * as trpcExpress from '@trpc/server/adapters/express';

const app = express();
const port = process.env.PORT || 3000;
const t = initTRPC.create();
 
export const router = t.router;
export const publicProcedure = t.procedure;

const appRouter = router({
  greeting: publicProcedure.query(() => 'hello tRPC v10!'),
});
 

app.use(
  '/trpc',
  trpcExpress.createExpressMiddleware({
    router: appRouter,
    
  }),
)
app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});

// Export only the type of a router!
// This prevents us from importing server code on the client.
export type AppRouter = typeof appRouter;