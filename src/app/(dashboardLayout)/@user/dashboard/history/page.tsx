import React from "react";
import {blogService} from "@/services/blog.service";
import HistoryTable from "@/components/modules/user/histotyTable/HistoryTable";

export default async function HistoryPage() {
    const response = await blogService.getBlogPosts();
    console.log(response);
    const posts = response.data?.data;
    console.log(posts);
    return (
        <div className="p-4">
            <h1>blog post history</h1>
            <HistoryTable posts={posts}/>
        </div>
    );
}