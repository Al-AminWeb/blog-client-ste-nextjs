import React from "react";
import CreateBlogFormServer from "@/components/modules/user/createBlog/CreateBlogFormServer";
import {CreateBlogFormClient} from "@/components/modules/user/createBlog/CreateFormClient";

export default function CreateBlogPage() {
    return (
        <div>
            {/*<CreateBlogFormServer/>*/}
            <CreateBlogFormClient/>
        </div>
    );
}