import { Awaitable, User } from "next-auth"
import CredentialsProvider from "next-auth/providers/credentials"

export const credentialsProvider = CredentialsProvider({
    name: 'Credentials',
    credentials: {
        username: { label: "Username", type: "text", placeholder: "jsmith" },
        password: { label: "Password", type: "password" }
    },
    async authorize(credentials, req) {
        const user: Awaitable<User | null> = {
            id: "1",
            fullName: "saji nael",
            username: "saji_nael",
            email: "saji.nael.98@gmail.com",
            image: "https://www.erpmaxsolutions.com/images/team/saji.jpeg",
            roles: ["admin"],
            permissions: ["POSTS_CREATE", "POSTS_READ", "POSTS_UPDATE", "POSTS_DELETE"]
        }
        return user
    },
})