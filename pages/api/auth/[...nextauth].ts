import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import axios from "axios";


export default NextAuth({
  providers: [
    CredentialsProvider({
      name: "credentials",
      credentials: {
        email: {
          label: "Email",
          type: "email",
        },
        password: { label: "Password", type: "password" },
      },
      async authorize(
        credentials: Record<"email" | "password", string> | undefined
      ) {
        if (!credentials) return null;
        console.log(credentials.email);
        console.log(credentials.password);
        try {
          const user = await axios.post(
            `${process.env.BACKEND_URL}login`,
            {
              password: credentials?.password,
              email: credentials?.email,
            },
            {
              headers: {
                accept: "*/*",
                "Content-Type": "application/json",
              },
            }
          );
          if (user) {
            return user.data;
          }
        } catch (e: any) {
          const errorMessage = e.response.data.message;
          throw new Error(errorMessage + " &email=" + credentials.email);
        }
        return null;
      },
    }),
  ],
  callbacks: {
    async jwt({ token, user }) {
      if (user) {
        token.user = user;
      }
      return token;
    },
    async session({ session, token }) {
      session.data = token.user;
      return session;
    },
  },
  secret: "test",
  jwt: {
    secret: "test",
  },
  pages: {
    signIn: "/auth/login",
  },
});
