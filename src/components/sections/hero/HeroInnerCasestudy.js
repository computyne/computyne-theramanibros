import Link from "next/link";
import React from "react";

const HeroInnerBlog = ({title, text, breadcrums = [], bgImg}) => {
    // img ? img : "/images/blog/blog-1.webp"

    return (
        <section
            className="tj-page-header section-gap-x case-study-hero"
            style={{
                backgroundImage: bgImg
                    ? `url(${bgImg})`
                    : `url('/images/bg/pheader-bg.webp')`
            }}
        >
            <div className="container">
                <div className="row">
                    <div className="col-lg-8">
                        <div
                            className="tj-page-header-content text-start case-study-hero__content"
                        >
                            <div
                                className="tj-page-link case-study-hero__breadcrumb"
                            >
                                <span>
									<Link href="/" style={{color: "#D4D4D8"}}>Home</Link>
								</span>
                                <span>
									<i className="tji-arrow-right" style={{color: "#D4D4D8"}}></i>
								</span>
                                <span>
									<Link href="/case-studies" style={{color: "#D4D4D8"}}>Case Studies</Link>
								</span>
                                <span>
									<i className="tji-arrow-right" style={{color: "#D4D4D8"}}></i>
								</span>
                                <span className="case-study-hero__breadcrumb-current" style={{color: "#FFFFFF"}}>{text}</span>
                            </div>
                            <h1 className="tj-page-title case-study-hero__title">{title}</h1>
                        </div>
                    </div>
                </div>
            </div>
            <div
                className="page-header-overlay"
                style={{
                    backgroundImage:
                        "linear-gradient(90deg, rgba(12, 29, 54, 0.92) 10%, rgba(12, 29, 54, 0.76) 55%, rgba(12, 29, 54, 0.52) 100%)",
                }}
            ></div>
        </section>
    );
};

export default HeroInnerBlog;
