import { NextApiRequest, NextApiResponse } from "next";
import { prisma } from "@/server/db";
import { User } from "@prisma/client";

type Data = User[];

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  const users = await prisma.user.findMany();
  res.status(200).json(users);
}
