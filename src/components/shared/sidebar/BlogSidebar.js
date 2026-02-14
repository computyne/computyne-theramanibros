import ButtonPrimaryLoading from "@/components/sections/contact-page/ButtonPrimaryLoading";
import BlogTagsWidget from "./widgets/BlogTagsWidget";
import RecentBlogWidget from "./widgets/RecentBlogWidget";
import { useRef, useState, useTransition } from "react";
import { submitContactForm } from "@/app/actions/contactAction";

const BlogSidebar = ({tags = []}) => {

	const handleSelect = option => {
		};
		const [isPending, startTransition] = useTransition();
		const [status, setStatus] = useState(null);
		const formRef = useRef(null);
	
		function handleSubmit(formData) {
			setStatus(null);
	
			startTransition(async () => {
				const result = await submitContactForm(formData);
	
				if (result?.success) {
					setStatus("success");
					formRef.current?.reset();
				} else {
					setStatus("error");
				}
			});
		}

    return (
        <aside className={`tj-main-sidebar`}>
 <div className="tj-sidebar-widget tj-recent-posts">
			 <div
                            className="contact-form contact-form-blog style-4 wow fadeInUp"
                            data-wow-delay=".4s"
                        >
                            <div className="sec-heading style-4">
                                <h3 className="sec-title">Talk with our Experts!</h3>
                            </div>
                            <form id="contact-form-3" action={handleSubmit}>
                                <div className="row wow fadeInUp" data-wow-delay=".5s">
                                    <div className="col-sm-12">
                                        <div className="form-input">
                                            <label className="cf-label">Full Name *</label>
                                            <input type="text" name="cfName"/>
                                        </div>
                                    </div>
                                    <div className="col-sm-12">
                                        <div className="form-input">
                                            <label className="cf-label">Email Address *</label>
                                            <input type="email" name="cfEmail"/>
                                        </div>
                                    </div>
                                    <div className="col-sm-12">
                                        <div className="form-input">
                                            <label className="cf-label">Phone number *</label>
                                            <input type="tel" name="cfPhone"/>
                                        </div>
                                    </div>
                                    <div className="col-sm-12">
                                        <div className="form-input">
                                            <label className="cf-label">Subject *</label>
                                            <input type="text" name="cfSubject"/>
                                        </div>
                                    </div>
                                    <div className="col-sm-12">
                                        <div className="form-input message-input">
                                            <label className="cf-label">Message here... *</label>
                                            <textarea name="cfMessage" id="message"></textarea>
                                        </div>
                                    </div>
                                    <div className="submit-btn">
                                        <ButtonPrimaryLoading
                                            type="submit"
                                            text="Inquire Now"
                                            loading={isPending}
                                        />
                                    </div>
                                    {status === "success" && (
                                        <p className="form-success">
                                            Thank you! Your message has been sent successfully.
                                        </p>
                                    )}

                                    {status === "error" && (
                                        <p className="form-error">
                                            Something went wrong. Please try again.
                                        </p>
                                    )}
                                </div>
                            </form>
                        </div>
						</div>

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
            {/* <RecentBlogWidget/> */}
            {/* <!-- category --> */}
            {/*<BlogCategoriesWidget />*/}
            {/* <!-- tags --> */}
            {/* <BlogTagsWidget tags={tags}/> */}
        </aside>
    );
};

export default BlogSidebar;
