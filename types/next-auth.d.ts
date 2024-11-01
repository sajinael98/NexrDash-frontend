// types/next-auth.d.ts

import NextAuth, { Session, DefaultUser, DefaultSession } from "next-auth";

type EnhancedUser = {
  fullName: string;
  username: string;
  roles: string[];
  permissions: string[];
};

declare module "next-auth" {
  interface User extends EnhancedUser {}

  interface Session {
    user: EnhancedUser;
  }
}

declare module "next-auth/jwt" {
  interface JWT extends EnhancedUser {
    roles: string[];
    permissions: string[];
  }
}
