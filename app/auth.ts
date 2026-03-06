import NextAuth from "next-auth";
import Credentials from "next-auth/providers/credentials";

export const { handlers, signIn, signOut, auth } = NextAuth({
  providers: [
    Credentials({
      name: "Credentials",
      credentials: {
        username: { label: "Username", type: "text" },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials) {
        // This is where you'd normally check a database.
        // For now, let's just let "admin" in.
        if (
          credentials?.username === "admin" &&
          credentials?.password === "password"
        ) {
          return { id: "1", name: "Meor Admin", email: "admin@meor.com" };
        }
        return null;
      },
    }),
  ],
});
