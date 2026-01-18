import { cookies } from "next/headers";
import { env } from "@/env";

const AUTH_URL = env.AUTH_URL;
export const userServices = {
    getSession: async function () {
        try {
            const cookieStore = cookies();

            const res = await fetch(
                `${AUTH_URL}/get-session`,
                {
                    headers: {
                        Cookie: cookieStore.toString(),
                    },
                    cache: "no-cache",
                }
            );

            // No session (401 / 404)
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
