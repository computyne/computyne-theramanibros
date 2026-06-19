import BlogDetailsPrimary from "@/components/sections/blogs/BlogDetailsPrimary";
import BlogDetailsModern from "@/components/sections/blogs/BlogDetailsModern";
import getBlogs from "@/libs/getBlogs";
import getPreviousNextItem from "@/libs/getPreviousNextItem";
import HeroInnerBlog from "@/components/sections/hero/HeroInnerBlog";

const BlogDetailsMain = ({currentItem}) => {
    const items = getBlogs();
    const option = getPreviousNextItem(items, currentItem);

    const {title, img, author, date, layout = "classic"} = currentItem || {};

    if (layout === "modern") {
        return <BlogDetailsModern currentItem={currentItem}/>;
    }

    return (
        <div>
            <HeroInnerBlog
                title={title}
                author={author}
                date={date}
                bgImg={img}
            />
            <BlogDetailsPrimary option={option}/>
        </div>
    );
};


export default BlogDetailsMain;
