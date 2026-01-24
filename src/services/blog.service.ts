import { env } from "@/env";
import {cookies} from "next/headers";

const API_URL = env.API_URL;

interface ServiceOptions {
    cache?: RequestCache;
    revalidate?: number;
}

interface GetBlogsParams {
    isFeatured?: boolean;
    search?: string;
}


 export interface blogData{
    title: string;
    content: string;
    authorId: string;
    tags?: string[];
}

export const blogService = {
    getBlogPosts: async function (
        params?: GetBlogsParams,
        options?: ServiceOptions
    ) {
        try {
            const url = new URL(`${API_URL}/post`);

            if (params) {
                Object.entries(params).forEach(([key, value]) => {
                    if (value !== undefined && value !== null && value !== "") {
                        url.searchParams.append(key, String(value));
                    }
                });
            }

            const config: RequestInit & { next?: { revalidate?: number } } = {};

            if (options?.cache) {
                config.cache = options.cache;
            }

            if (options?.revalidate) {
                config.next = { revalidate: options.revalidate };
            }

            const res = await fetch(url.toString(),{
                next:{
                  tags: ['blogPosts'],
                },
                });
            const data = await res.json();

            return { data, error: null };
        } catch (err) {
            return { data: null, error: { message: "Something Went Wrong" } };
        }
    },

    getBlogById: async function (id: string) {
        try {
            const res = await fetch(`${API_URL}/post/${id}`);
            const data = await res.json();
            return { data, error: null };
        } catch (err) {
            return { data: null, error: { message: "Something Went Wrong" } };
        }
    },



    createBlogPost: async  (blogData: blogData)=> {
        try {
            const cookieStore = await cookies();

            const res = await fetch(`${API_URL}/post`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    Cookie: cookieStore.toString(),
                },
                body: JSON.stringify(blogData),
            });
            const data = await res.json();
            if(data.error){
                return {
                    data: null,
                    error: { message: data.error.message}
                }
            }


            return { data:data, error: null };


        }
        catch (err) {
            return { data: null, error: "Something Went Wrong" };
        }
 },
}