import axios from "axios";
import { useSession } from "next-auth/react";

export const client = axios.create({
  baseURL: process.env.BASE_URL,
  headers: {
    accept: "application/json",
    "Content-Type": "application/json",
  },
});
