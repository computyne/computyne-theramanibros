import React from "react";
import ButtonPrimary from "./ButtonPrimary";

const Hero = ({title, text, isShowButton = false, buttonLabel, buttonLink, cta}) => {
    return (
        <section
            className="tj-page-header-mod section-gap-x"
            style={{backgroundImage: `url('/images/bg/pheader-bg.webp')`}}
        >
            <div className="container">
                <div className="row">
                    <div className="col-lg-12">
                        <div className="tj-page-header-content text-center">
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
