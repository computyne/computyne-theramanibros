import sliceText from "@/libs/sliceText";
import Link from "next/link";
import React from "react";

const HeroInnerBlog = ({title, author, date = [], bgImg}) => {

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
									<i className="tji-user"></i>
								</span>
                                <span>
									{author}
								</span>
                                <span>
									<i style={{
                                        display: "inline-block",
                                        width: "2px",
                                        height: "20px",
                                        backgroundColor: "#D4D4D8"
                                    }}></i>
								</span>
                                <span style={{paddingLeft:"5px", paddingRight:"5px"}}>
									<i className="tji-calendar" style={{color:"#f36523"}}></i>
								</span>
                                <span>
									{date}
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
