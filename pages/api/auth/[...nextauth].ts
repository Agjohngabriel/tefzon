import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import { client } from "../../../libs/axiosClient";
import GoogleProvider from "next-auth/providers/google";
import { Session } from "next-auth";

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
        try {
          const user = await client.post("login", {
            email: credentials.email,
            password: credentials.password,
          });
          console.log(user.statusText);
          if (user.data["statusCode"] == 200) {
            return user.data;
          }
          if (user.data["statusCode"] == 422) {
            throw new Error("Authentication failed");
          }
        } catch (e: any) {
          const errorMessage = e.response.data.errors;
          throw new Error(errorMessage);
        }
        return null;
      },
    }),
    GoogleProvider({
      clientId: `${process.env.GOOGLE_CLIENT_ID}`,
      clientSecret: `${process.env.GOOGLE_CLIENT_SECRET}`,
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
      const sessionWithUser = session as Session & { data: any };
      if (!sessionWithUser.data && token?.user) {
        sessionWithUser.data = token.user;
      }
      return sessionWithUser;
    },

    // async session({ session, token }) 
    //    if (session) {
    //      session.data = token.user;
    //    }
    //   return session;
    // },
  },
  secret: "test",
  jwt: {
    secret: "test",
  },
  pages: {
    signIn: "/auth/login",
  },
});
