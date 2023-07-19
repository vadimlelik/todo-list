import { prisma } from "../../../server/db";
import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";

export const authOptions = {
  // Configure one or more authentication providers
  providers: [
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        email: { label: "email", type: "text", placeholder: "email" },
        password: { label: "password", type: "text", placeholder: "password" },
      },
      async authorize(credentials, req) {
        if (!credentials) {
          return null;
        }
        const user = await prisma.user.findUnique({
          where: { email: credentials.email },
        });
        // const user = { id: "1", name: "J Smith", email: "jsmith@example.com" };

        if (user?.password === credentials.password) {
          return user;
        } else {
          return null;
        }
      },
    }),
    // ...add more providers here
  ],
};
export default NextAuth(authOptions);
