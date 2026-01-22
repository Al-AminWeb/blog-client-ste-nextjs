"use client";

import {useEffect, useState} from "react";
import {blogService} from "@/services/blog.service";

export default function AboutPage() {

    const [data, setData] = useState();
    console.log(data)

    useEffect(() => {
        (async () => {
            const {data} = await blogService.getBlogPosts();
            setData(data);
            console.log("About Page Data:", data);
        })();
    }, []);

    //await new Promise((resolve) => setTimeout(resolve, 4000));

    //* For simulating error
    // throw new Error("Something went wrong");

    return (
        <div>
            <h1> This is about page component </h1>
        </div>
    );
}
