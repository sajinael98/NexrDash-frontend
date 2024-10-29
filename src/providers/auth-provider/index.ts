import { AuthProvider } from "@refinedev/core";
import { getSession, signIn, signOut } from "next-auth/react";

export const authProvider: AuthProvider = {
    async login(params) {
        await signIn("credentials", { username: "", password: "", redirect: false })
        return {
            success: true,
            redirectTo: "/dashboard",
            successNotification: {
                message: "welcome"
            }
        }
    },
    async check(params) {
        const session = await getSession()
        if (session === null) {
            return {
                authenticated: false,
                redirectTo: "/login"
            }
        }
        return {
            authenticated: false,
            redirectTo: "/dashboard"
        }
    },
    async logout(params) {
        await signOut({ redirect: false })
        return {
            success: true,
            redirectTo: "/login"
        }
    },
    async onError(error) {
        return {

        }
    },
    async getIdentity(params) {
        const session = await getSession()
        return session?.user
    },
    async getPermissions(params) {
        const session = await getSession()
        return {
            roles: session?.user.roles,
            permissions: session?.user.permissions
        }
    },
}