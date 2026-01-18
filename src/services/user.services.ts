import { cookies } from "next/headers";

export const userServices = {
    getSession: async function () {
        try {
            const cookieStore = cookies();

            const res = await fetch(
                "http://localhost:5000/api/auth/get-session",
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
