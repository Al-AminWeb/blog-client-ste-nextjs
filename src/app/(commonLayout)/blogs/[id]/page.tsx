import React from "react";

export default async function BlogsPage({params}:
                                  {
                                      params: Promise<{ id: string }>
                                  }) {
    const {id} = await params;

    return (
        <div>
            <h1>This is dynamic blog page {id}</h1>
        </div>
    );
}