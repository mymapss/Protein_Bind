// src/types/next-auth.d.ts
import NextAuth from "next-auth";
import { DefaultSession, DefaultJWT } from "next-auth";

// Extend NextAuth session and JWT types
declare module "next-auth" {
  interface Session extends DefaultSession {
    id: string;
  }

  interface JWT extends DefaultJWT {
    id?: string;
  }
}
