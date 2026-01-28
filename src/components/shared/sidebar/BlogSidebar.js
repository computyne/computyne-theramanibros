import BlogTagsWidget from "./widgets/BlogTagsWidget";
import RecentBlogWidget from "./widgets/RecentBlogWidget";

const BlogSidebar = ({tags = []}) => {
    return (
        <aside className={`tj-main-sidebar`}>
            {/* <!-- search --> */}
            {/* <div className="tj-sidebar-widget widget-search">
				<h4 className="widget-title">Search here</h4>
				<div className="search-box">
					<form action="#">
						<input
							type="search"
							name="search"
							id="searchTwo"
							placeholder="Search here"
						/>
						<button type="submit" value="search">
							<i className="tji-search"></i>
						</button>
					</form>
				</div>
			</div> */}
            {/* <!-- recent post --> */}
            <RecentBlogWidget/>
            {/* <!-- category --> */}
            {/*<BlogCategoriesWidget />*/}
            {/* <!-- tags --> */}
            <BlogTagsWidget tags={tags}/>
        </aside>
    );
};

export default BlogSidebar;
