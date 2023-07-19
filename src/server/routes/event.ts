import { date, z } from "zod";
import { prisma } from "../db";
import { router, procedure } from "./../trpc";
import { CreateEventSchema } from "@/shared/api";

export const eventRouter = router({
  findMany: procedure.query(() => {
    return prisma.event.findMany();
  }),
  create: procedure.input(CreateEventSchema).mutation(async ({ input }) => {
    const user = await prisma.user.findFirstOrThrow();

    return prisma.event.create({
      data: {
        authorId: user?.id,
        ...input,
      },
    });
  }),
});
