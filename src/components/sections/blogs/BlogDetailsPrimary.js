"use client";
import BlogSidebar from "@/components/shared/sidebar/BlogSidebar";
import BlogTagsWidget from "@/components/shared/sidebar/widgets/BlogTagsWidget";
import RecentBlogWidgetGrid from "@/components/shared/sidebar/widgets/RecentBlogWidgetGrid";
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

      // 🔥 KEY FIX
  useEffect(() => {
    if (!htmlString) return;
    window.dispatchEvent(new Event("resize"));
  }, [htmlString]);

    return (
        <section className="tj-blog-section section-gap ">
            <div className="container">
                <div className="row row-gap-5">
                    <div className="col-lg-8">
                         <div className="postBody-module__Mf2ZlW__content"
                               dangerouslySetInnerHTML={{__html: htmlString}}/>
                               <BlogTagsWidget tags={tags}/>
                               <RecentBlogWidgetGrid/>
                    </div>
                    
                    <div className="col-lg-4 slidebar-stickiy-container">
                        <div className="slidebar-stickiy">
                            <BlogSidebar tags={tags} />
                        </div>
                    </div> 
                </div>
            </div>
        </section>
    );
};

export default BlogDetailsPrimary;
