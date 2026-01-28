import getBlogs from "@/libs/getBlogs";
import sliceText from "@/libs/sliceText";
import Image from "next/image";
import Link from "next/link";

const RecentBlogWidget = () => {
    const recentBlogs = getBlogs()
        ?.filter(({isBlogQuote}) => !isBlogQuote)
        ?.slice(0, 5);

    return (
        <div className="tj-sidebar-widget tj-recent-posts">
            <h4 className="widget-title">Recent Blogs</h4>
            <ul>
                {recentBlogs?.length
                    ? recentBlogs?.map(
                        (
                            {
                                id,
                                slug,
                                smallImg = "/images/blog/post-1.webp",
                                title,
                                blogTopList,
                                comments,
                                date,
                            },
                            idx
                        ) => (
                            <li key={idx}>
                                <div className="post-thumb">
                                    <Link href={`${slug}`}>
                                        {" "}
                                        <Image
                                            src={smallImg}
                                            alt="Blog"
                                            width={150}
                                            height={150}
                                        />
                                    </Link>
                                </div>
                                <div className="post-content">
                                    <h6 className="post-title">
                                        <Link href={`${slug}`}>
                                            {sliceText(title, 32, true)}
                                        </Link>
                                    </h6>
                                    <div className="blog-meta">
                                        <ul>
                                            <li>{date}</li>
                                        </ul>
                                    </div>
                                </div>
                            </li>
                        )
                    )
                    : ""}
            </ul>
        </div>
    );
};

export default RecentBlogWidget;
