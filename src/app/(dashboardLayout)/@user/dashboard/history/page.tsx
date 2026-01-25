import React from "react";
import { blogService } from "@/services/blog.service";
import HistoryTable from "@/components/modules/user/histotyTable/HistoryTable";
import PaginationControls from "@/components/ui/pagination-controls";

export default async function HistoryPage({ searchParams }: { searchParams: { page?: string } }) {
    const { page } = await searchParams;
    console.log("page param:", page);
    const response = await blogService.getBlogPosts({ page });
    const posts = response.data?.data || [];
    const pagination = response.data?.pagination || {
        limit: 10,
        page: 1,
        total: 0,
        totalPages: 1,
    };

    return (
        <div className="p-4">
            <h1>blog post history</h1>
            <HistoryTable posts={posts} />
            <PaginationControls meta={pagination}/>
        </div>
    );
}