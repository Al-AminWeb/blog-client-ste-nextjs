"use server";

import {blogData, blogService} from "@/services/blog.service";
import {updateTag} from "next/cache";

export const getBlogs = async () => {
    return await blogService.getBlogPosts();
}

export const createBlogPost = async (data:blogData)=>{
    const res = await blogService.createBlogPost(data)

    updateTag("blogPosts");

    return res;
}