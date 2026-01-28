"use client";
import BlogSidebar from "@/components/shared/sidebar/BlogSidebar";
import getHtmlStringData from "@/libs/getHtmlStringData";
import {usePathname} from "next/navigation";
import {useEffect, useState} from "react";


const BlogDetailsPrimary = ({option}) => {
    const {currentItem} = option || {};
    const {tags} = currentItem || {};

    const pathname = usePathname();
    const slug = pathname.split("/").filter(Boolean).pop();


    const [htmlString, setHtmlString] = useState("");

    useEffect(() => {
        if (!slug) return;

        getHtmlStringData(slug).then((data) => {
            setHtmlString(data || "<p>Content not found</p>");
        });
    }, [slug]);
    return (
        <section className="tj-blog-section section-gap slidebar-stickiy-container">
            <div className="container">
                <div className="row row-gap-5">
                    <div className="postBody-module__Mf2ZlW__content col-lg-8"
                         dangerouslySetInnerHTML={{__html: htmlString}}/>
                    <div className="col-lg-4">
                        <BlogSidebar tags={tags}/>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default BlogDetailsPrimary;
