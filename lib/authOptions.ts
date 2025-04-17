import { AuthOptions } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import { compare } from "bcrypt";

export const authOptions: AuthOptions = {
  providers: [
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        username: { label: "Username", type: "text" },
        password: { label: "Password", type: "password" },
      },
      authorize(credentials) {
        const name = process.env.USERNAME || "";
        const hashedPassword = process.env.PASSWORD || "";

        if (!credentials?.username || !credentials?.password) return null;

        const isValid = compare(credentials.password, hashedPassword);

        if (!isValid) return null;

        return { id: "1", name };
      },
    }),
  ],
  pages: {
    signIn: "/login",
  },
  secret: process.env.NEXTAUTH_SECRET,
  session: {
    strategy: "jwt",
  },
};
