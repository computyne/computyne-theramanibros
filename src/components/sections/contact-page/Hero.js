import React from "react";
import Funfact from "./Funfact";

const Hero = ({title, text, breadcrums = []}) => {
    return (
        <section
            className="tj-page-header-mod section-gap-x"
            style={{backgroundImage: `url('/images/bg/contact-us.webp')`}}
        >
            <div className="container">
                <div className="row">
                    <div className="col-lg-6">
                        <div className="tj-page-header-content">
                            <h1 className={`tj-page-title`}>{title}</h1>
                            <div className="tagline mt">
                                {text}
                            </div>
                        </div>
                        <div
                            className="h9-about-funfact-port-card-mod wow fadeInUp"
                            data-wow-delay=".6s"
                        >
                            <div className="countup-item">
                                <Funfact type={3} currentValue={100} symbol={"+"}/>
                                <span className="count-text-mod-2">Inc5000 Client</span>
                                <span
                                    className="count-separator"
                                    style={{
                                        backgroundImage: "url('/images/shape/separator.svg')",
                                    }}
                                ></span>
                            </div>
                            <div className="countup-item">
                                <Funfact type={3} currentValue={15} symbol={"+"}/>
                                <span className="count-text-mod-2">Years Completed</span>
                                <span
                                    className="count-separator"
                                    style={{
                                        backgroundImage: "url('/images/shape/separator.svg')",
                                    }}
                                ></span>
                            </div>
                            <div className="countup-item">
                                <Funfact type={3} currentValue={18} symbol={"+"}/>
                                <span className="count-text-mod-2">Awards</span>
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
