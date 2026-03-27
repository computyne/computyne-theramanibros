import React from "react";
import Link from "next/link";
import ButtonPrimary from "./ButtonPrimary";

const Hero = ({title, text, isShowButton = false, buttonLabel, buttonLink, cta}) => {
    return (
        <section
            className="tj-page-header-mod section-gap-x"
            style={{backgroundImage: `url('/images/bg/about-us-banner.webp')`}}
            role="img"
            aria-label="Aerial view of the city skyline at sunset - Computyne About Us Banner"

        >
            <div className="container">
                <div className="row">
                    <div className="col-lg-10 mx-auto">
                        <div
                            className="tj-page-header-content text-center"
                            style={{maxWidth: "920px", marginInline: "auto"}}
                        >
                            <div
                                className="tj-page-link"
                                style={{
                                    display: "flex",
                                    flexWrap: "wrap",
                                    justifyContent: "center",
                                    alignItems: "center",
                                    gap: "10px",
                                    marginBottom: "18px",
                                }}
                            >
                                <span>
                                    <Link href="/" style={{color: "#D4D4D8"}}>Home</Link>
                                </span>
                                <span>
                                    <i className="tji-arrow-right" style={{color: "#D4D4D8"}}></i>
                                </span>
                                <span style={{color: "#FFFFFF"}}>{title}</span>
                            </div>
                            <h1 className={`tj-page-title`}>{title}</h1>
                            <div className="tagline mt tj-page-header-tagline">
                                {text}
                            </div>
                            <div className="btn-area wow fadeInUp mt-4" data-wow-delay=".8s">
                                <ButtonPrimary text={cta} url={"/contact-us"}/>
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
export default Hero;
