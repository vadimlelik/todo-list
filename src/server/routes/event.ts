import { date, z } from "zod";
import { prisma } from "../db";
import { router, procedure, isAuth } from "./../trpc";
import { CreateEventSchema, JoinEventSchema, UniqueEvent } from "@/shared/api";

export const eventRouter = router({
  findMany: procedure.query(() => {
    return prisma.event.findMany();
  }),
  findUnique: procedure.input(UniqueEvent).query(({ input, ctx: { user } }) => {
    return prisma.event.findUnique({
      where: input,
      select: {
        id: true,
        title: true,
        description: true,
        date: true,
        participations: {
          select: {
            user: {
              select: {
                name: true,
              },
            },
          },
        },
      },
    });
  }),
  create: procedure
    .input(CreateEventSchema)
    .use(isAuth)
    .mutation(({ input, ctx: { user } }) => {
      return prisma.event.create({
        data: {
          authorId: user?.id,
          ...input,
        },
      });
    }),
  join: procedure
    .input(JoinEventSchema)
    .use(isAuth)
    .mutation(({ input, ctx: { user } }) => {
      return prisma.participation.create({
        data: {
          eventId: input.id,
          userId: user.id,
        },
      });
    }),
});
