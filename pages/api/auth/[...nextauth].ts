import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import { client } from "../../../libs/axiosClient";
import GoogleProvider from "next-auth/providers/google";
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
        try {
          const result = await client.post("login", {
            email: credentials.email,
            password: credentials.password,
          });
          if (result.data["statusCode"] == 200) {
            return result.data['data'];
          }
          if (result.data["statusCode"] == 422) {
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
      console.log("sessions", user);
      if (user) {
        token.user = user;
      }
      return token;
    },
    async session({ session, token }) {
      console.log("sessions value", token);
      // @ts-ignore
      session.user = token.user;
      console.log("sessions token", session);
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
