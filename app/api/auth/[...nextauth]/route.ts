import { NextAuthOptions } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import { PrismaClient, User as PrismaUser } from "@prisma/client";
import { compare } from "bcryptjs";
import NextAuth from "next-auth/next";
import { Prisma } from '@prisma/client'

const prisma = new PrismaClient();

// Extend the built-in types
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

declare global {
  namespace PrismaJson {
    type UserType = Prisma.UserGetPayload<{
      select: {
        id: true;
        name: true;
        email: true;
        password: true;
        role: true;
        phone: true;
        address: true;
        birthDate: true;
        bonusPoints: true;
      }
    }>
  }
}

export const authOptions: NextAuthOptions = {
  providers: [
    CredentialsProvider({
      name: "credentials",
      credentials: {
        email: { label: "Email", type: "email" },
        password: { label: "Password", type: "password" }
      },
      async authorize(credentials) {
        try {
          if (!credentials?.email || !credentials?.password) {
            return null;
          }

          const user = await prisma.user.findUnique({
            where: {
              email: credentials.email
            }
          }) as PrismaUser;

          if (!user || !user.password) {
            return null;
          }

          const isPasswordValid = await compare(
            credentials.password,
            user.password
          );

          if (!isPasswordValid) {
            return null;
          }

          return {
            id: user.id,
            name: user.name,
            email: user.email,
            role: user.role,
            phone: user.phone,
            address: user.address,
            birthDate: user.birthDate?.toISOString() ?? null,
            bonusPoints: user.bonusPoints
          };
        } catch (error) {
          console.error('Auth error:', error);
          return null;
        }
      }
    })
  ],
  callbacks: {
    async jwt({ token, user }) {
      if (user) {
        return {
          ...token,
          id: user.id,
          role: user.role,
          phone: user.phone,
          address: user.address,
          birthDate: user.birthDate,
          bonusPoints: user.bonusPoints
        };
      }
      return token;
    },
    async session({ session, token }) {
      return {
        ...session,
        user: {
          ...session.user,
          id: token.id as string,
          role: token.role as string,
          phone: token.phone as string | null,
          address: token.address as string | null,
          birthDate: token.birthDate as string | null,
          bonusPoints: token.bonusPoints as number
        },
      };
    },
  },
  session: {
    strategy: "jwt"
  },
  secret: process.env.NEXTAUTH_SECRET,
  pages: {
    signIn: "/login",
  },
};

const handler = NextAuth(authOptions);
export { handler as GET, handler as POST }; 