import { prisma } from '../db';
import { router, procedure } from './../trpc';

export const eventRouter = router({
    findMany: procedure.query(() => {
        return prisma.event.findMany();
    }),
});
