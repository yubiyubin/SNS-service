import CredentialsProvider from "next-auth/providers/credentials";
import { NextAuthOptions } from "next-auth";

export const authOptions: NextAuthOptions = {
  pages: {
    signIn: "/i/flow/login",
    newUser: "/i/flow/signup",
  },
  providers: [
    CredentialsProvider({
      credentials: {
        username: { label: "ID", type: "text" },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials) {
        const authResponse = await fetch(
          `${process.env.NEXT_PUBLIC_BASE_URL}/api/login`,
          {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({
              id: credentials?.username,
              password: credentials?.password,
            }),
          },
        );

        if (!authResponse.ok) {
          return null;
        }

        const user = await authResponse.json();
        console.log("user", user);
        return {
          ...user,
          email: user.id,
          name: user.nickname,
          image: user.image,
        };
      },
    }),
  ],
};
