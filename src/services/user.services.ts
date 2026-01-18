import { cookies } from "next/headers";
import { env } from "@/env";

const AUTH_URL = env.AUTH_URL;

export const userServices = {
    getSession: async function () {
        try {
            const cookieStore = await cookies();

            // serialize cookies
            const cookieHeader = cookieStore
                .getAll()
                .map(c => `${c.name}=${c.value}`)
                .join("; ");

            const res = await fetch(`${AUTH_URL}/get-session`, {
                headers: {
                    Cookie: cookieHeader,
                },
                cache: "no-store",
            });

            if (!res.ok) {
                return { data: null, error: "No active session" };
            }

            const session = await res.json();

            return { data: session, error: null };
        } catch (err) {
            console.error("Session fetch failed:", err);
            return { data: null, error: "Session fetch error" };
        }
    },
};
