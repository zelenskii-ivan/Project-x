import NextAuth from "next-auth";
import { JWT } from "next-auth/jwt";
import { User as PrismaUser } from "@prisma/client";

declare module "next-auth" {
  interface User {
    id: string;
    name: string | null;
    email: string | null;
    role: string;
    phone: string | null;
    address: string | null;
    birthDate: string | null;
    bonusPoints: number;
  }

  interface Session {
    user: User;
  }
}

declare module "next-auth/jwt" {
  interface JWT {
    id: string;
    role: string;
    phone: string | null;
    address: string | null;
    birthDate: string | null;
    bonusPoints: number;
  }
} 