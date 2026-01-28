import Link from "next/link";

const BlogTagsWidget = ({tags = []}) => {

    return (
        <div className="tj-sidebar-widget widget-tag-cloud">
            <h4 className="widget-title">Tags</h4>
            <nav>
                <div className="tagcloud">
                    {tags?.length
                        ? tags?.map((tag, idx) => (
                            <Link key={idx} href="#">
                                {" "}
                                {tag}
                            </Link>
                        ))
                        : ""}
                </div>
            </nav>
        </div>
    );
};

export default BlogTagsWidget;
