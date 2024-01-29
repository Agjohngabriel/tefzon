import NextAuth, { DefaultSession } from "next-auth";

declare module "next-auth" {
  /**
   * Returned by `useSession`, `getSession` and received as a prop on the `SessionProvider` React Context
   */
  interface Session {
    user: {
      data: any; // Replace 'any' with the actual type of 'data'
      // ... other properties
    } & DefaultSession["user"];
  }
}
