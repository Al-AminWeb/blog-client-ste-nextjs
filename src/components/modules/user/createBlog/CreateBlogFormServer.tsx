import React from "react";
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Field, FieldGroup, FieldLabel } from "@/components/ui/field";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { env } from "@/env";
import { cookies } from "next/headers";

const API_URL = env.API_URL;

export default function CreateBlogFormServer() {
    const createBlog = async (formData: FormData) => {
        "use server";

        const title = formData.get("title") as string;
        const content = formData.get("content") as string;
        const tags = formData.get("tags") as string;
        const authorId = formData.get("authorId") as string;

        const blogData = {
            title,
            content,
            authorId,
            tags: tags
                ? tags
                    .split(",")
                    .map(tag => tag.trim())
                    .filter(tag => tag !== "")
                : [],
        };

        const cookieStore = await cookies();

        const res = await fetch(`${API_URL}/post`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                Cookie: cookieStore.toString(),
            },
            body: JSON.stringify(blogData),
        });

        console.log("Create blog response status:", res);
    };

    return (
        <Card className="max-w-2xl mx-auto">
            <CardHeader>
                <CardTitle>Create Blog Form - Server Component</CardTitle>
                <CardDescription>
                    you can implement the create blog form here.
                </CardDescription>
            </CardHeader>

            <CardContent>
                <form id="blog-form" action={createBlog}>
                    <FieldGroup>
                        <Field>
                            <FieldLabel>Title</FieldLabel>
                            <Input
                                type="text"
                                name="title"
                                placeholder="Enter blog title"
                            />
                        </Field>

                        <Field>
                            <FieldLabel>Content</FieldLabel>
                            <Textarea
                                name="content"
                                placeholder="Write your content here..."
                                rows={5}
                            />
                        </Field>

                        <Field>
                            <FieldLabel>Author ID</FieldLabel>
                            <Input
                                type="text"
                                name="authorId"
                                placeholder="Enter author ID"
                            />
                        </Field>

                        <Field>
                            <FieldLabel>Tags</FieldLabel>
                            <Input
                                type="text"
                                name="tags"
                                placeholder="e.g. react, nextjs, tailwind"
                            />
                        </Field>
                    </FieldGroup>
                </form>
            </CardContent>

            <CardFooter>
                <Button className="w-full" form="blog-form" type="submit">
                    Submit
                </Button>
            </CardFooter>
        </Card>
    );
}
