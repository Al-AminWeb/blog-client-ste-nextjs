import React from "react";
import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table"
import {BlogPost} from "@/types/blog.types";
export default function HistoryTable({posts}:{posts :BlogPost[]}) {
    return (
        <div className="border rounded-md">
            <Table>
                <TableHeader>
                    <TableRow>
                        <TableHead >Title</TableHead>
                        <TableHead>Tags</TableHead>
                        <TableHead>Views</TableHead>

                    </TableRow>
                </TableHeader>
                <TableBody>
                    {
                        posts.map((item)=> (
                            <TableRow key={item.id}>
                                <TableCell >{item.title}</TableCell>
                                <TableCell>{item.tags?.join(", ")}</TableCell>
                                <TableCell >{item.viewCount}</TableCell>
                            </TableRow>
                        ))
                    }
                </TableBody>
            </Table>
        </div>
    );
}