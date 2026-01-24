"use client";

import {useEffect, useState} from "react";
import {getBlogs} from "@/app/(commonLayout)/actions/blog.action";

export default function AboutPage() {

    const [data, setData] = useState();


    useEffect(() => {
        (async () => {
            const {data} = await getBlogs();
            setData(data);
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
