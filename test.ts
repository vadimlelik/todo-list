import { PrismaClient } from "@prisma/client";

const db = new PrismaClient();

const main = async () => {
  const user = await db.user.create({
    data: {
      email: "new@mail.ru",
      name: "Test",
      password: "123",
      event: {
        create: {
          date: new Date(),
          title: "new title",
          description: "new description",
        },
      },
    },
    select: {
      id: true,
      name: true,
      event: {
        select: {
          id: true,
          date: true,
        },
      },
    },
  });
  console.log(user);
};

main().then(() => {
  db.$disconnect();
});
