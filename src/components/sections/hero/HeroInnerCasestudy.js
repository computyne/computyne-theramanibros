import sliceText from "@/libs/sliceText";
import Link from "next/link";
import React from "react";

const HeroInnerBlog = ({title, text, breadcrums = [], bgImg}) => {
    // img ? img : "/images/blog/blog-1.webp"

    return (
        <section
            className="tj-page-header section-gap-x"
            style={{
                backgroundImage: bgImg
                    ? `url(${bgImg})`
                    : `url('/images/bg/pheader-bg.webp')`
            }}
        >
            <div className="container">
                <div className="row">
                    <div className="col-lg-12">
                        <div className="tj-page-header-content text-center">
                            <h1 className={`tj-page-title`}>{title}</h1>
                            <div className="tj-page-link">
								<span>
									<i className="tji-home"></i>
								</span>
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
                                <span>
									<span>{sliceText(text, 28, true)}</span>
								</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div
                className="page-header-overlay"
                style={{backgroundImage: `linear-gradient(90deg, #0c1d36 20%, #0c1d3666 60%, #0c1d361a 100%)`}}
            ></div>
        </section>
    );
};

export default HeroInnerBlog;
