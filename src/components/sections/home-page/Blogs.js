import getBlogs from "@/libs/getBlogs";
import BlogCard from "./BlogCard";

const Blogs = () => {
    const blogs = getBlogs().slice(0, 3);
    return (
        <section className="tj-blog-section section-gap">
            <div className="container">
                <div className="row">
                    <div className="col-12">
                        <div className="sec-heading-wrap">
							<span className="sub-title wow fadeInUp" data-wow-delay=".3s">
								<i className="tji-box"></i>Insights & Ideas
							</span>
                            <div className="heading-wrap-content">
                                <div className="sec-heading style-2">
                                    <h2 className="sec-title text-anim">
                                        The Ultimate <span>Resource.</span>
                                    </h2>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row row-gap-4">
                    {blogs?.length
                        ? blogs?.map((blog, idx) => (
                            <div key={idx} className="col-xl-4 col-md-6">
                                <BlogCard blog={blog} idx={idx}/>
                            </div>
                        ))
                        : ""}
                </div>
            </div>
        </section>
    );
};

export default Blogs;
