import React from "react";
import {blogService} from "@/services/blog.service";

export  async  function generateStaticParams() {}


export default async function BlogPage({ params }: { params: Promise<{ id: string }> }) {
    const { id } = await params;
    const { data: blog, error } = await blogService.getBlogById(id);

    if (error || !blog) {
        return (
            <div className="min-h-screen flex items-center justify-center">
                <div className="text-center">
                    <h1 className="text-2xl font-bold text-gray-800 mb-2">Blog Post Not Found</h1>
                    <p className="text-gray-600">Unable to load the blog post. Please try again later.</p>
                </div>
            </div>
        );
    }

    return (
        <div className="min-h-screen py-8 px-4">
            <div className="max-w-4xl mx-auto">
                <h1 className="text-3xl md:text-4xl font-bold text-white mb-4">{blog.title}</h1>

                <div className="flex items-center gap-4 text-gray-600 mb-6">
                    <span>{new Date(blog.createdAt).toLocaleDateString()}</span>
                    <span>•</span>
                    <span>{blog.viewCount} views</span>
                    <span>•</span>
                    <span className={`px-2 py-1 rounded text-sm ${
                        blog.status === 'PUBLISHED'
                            ? 'bg-green-100 text-green-800'
                            : 'bg-gray-100 text-gray-800'
                    }`}>
            {blog.status}
          </span>
                </div>

                {blog.tags && blog.tags.length > 0 && (
                    <div className="flex flex-wrap gap-2 mb-8">
                        {blog.tags.map((tag:any) => (
                            <span
                                key={tag.id || tag}
                                className="px-3 py-1 bg-gray-100 text-gray-700 text-sm rounded"
                            >
                {tag.name || tag}
              </span>
                        ))}
                    </div>
                )}

                <div className="bg-white p-6 rounded-lg shadow">
                    <p className="text-gray-700 leading-relaxed whitespace-pre-line">
                        {blog.content}
                    </p>
                </div>
            </div>
        </div>
    );
}