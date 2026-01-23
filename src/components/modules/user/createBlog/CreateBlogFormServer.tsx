import React from "react";
import {Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle} from "@/components/ui/card";
import {Button} from "@/components/ui/button";
import {Field, FieldGroup, FieldLabel} from "@/components/ui/field";
import {Input} from "@/components/ui/input";


export default function CreateBlogFormServer() {
    const createBlog = async (formData: FormData) => {
        "use server";

        console.log("Form Data:", formData.get("title"));
    }

    return (
        <Card className="max-w-2xl mx-auto">
            <CardHeader>
                <CardTitle>
                    Create Blog Form - Server Component
                </CardTitle>
                <CardDescription>
                    you can implement the create blog form here.
                </CardDescription>
            </CardHeader>
            <CardContent>
                {/* Create Blog Form Implementation Goes Here */}
                <form id="blog-form" action={createBlog}>
                    <FieldGroup>
                        <Field>
                            <FieldLabel>Title</FieldLabel>
                            <Input type="text" name="title"/>
                        </Field>
                        <Field>
                            <FieldLabel>Content</FieldLabel>
                            <Input type="text" name="title"/>
                        </Field>
                        <Field>
                            <FieldLabel>Tags</FieldLabel>
                            <Input type="text" name="title"/>
                        </Field>

                    </FieldGroup>
                </form>
            </CardContent>
            <CardFooter>
                <Button className="w-full" form="blog-form" type="submit">Submit</Button>
            </CardFooter>
        </Card>
    );
}