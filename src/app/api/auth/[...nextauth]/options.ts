import { credentialsProvider } from "@providers/credentials-provider";
import { AuthOptions } from "next-auth";

const authOptions: AuthOptions = {
  providers: [
    credentialsProvider
  ],
  session: {
    strategy: 'jwt',
    maxAge: 1 * 24 * 60 * 60, // 1 day
  },
  callbacks: {
    session({ session, token }) {
      if (session.user && token.roles) {
        session.user.username = token.username
        session.user.fullName = token.fullName
        session.user.roles = token.roles
        session.user.permissions = token.permissions
      }
      return session
    },
    jwt({ token, user }) {
      if (user) {
        token.username = user.username
        token.fullName = user.fullName
        token.roles = user.roles
        token.permissions = user.permissions
      }
      return token
    },
  },
  secret: `UItTuD1HcGXIj8ZfHUswhYdNd40Lc325R8VlxQPUoR0=`,
};

export default authOptions;
