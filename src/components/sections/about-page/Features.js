import FeatureCard from "./FeatureCard";

const Features = ({type}) => {
    const features = [
        {
            title: "Our Vision",
            desc: "To be a globally recognized leader in intelligent data and KPO services, we drive innovation and operational excellence through ethical practices. By blending advanced technology with human-centric models, we empower organizations with smart, responsible solutions that create long-term value for global society.",
            icon: "tji-innovative",
        },
        {
            title: "Our Mission",
            desc: "We design intelligent solutions and deliver execution excellence across our BPO, BPM, and KPO ecosystem. By embedding quality, accountability, and purpose, we provide scalable, precision-driven outsourcing. Our mission is to help partners optimize operations and build a resilient, technology-enabled future.",
            icon: "tji-award",
        },
        {
            title: "Quality Policy",
            desc: "Computyne delivers enterprise-grade solutions that exceed client expectations through disciplined delivery. Governed by ISO/IEC 27001:2022, we ensure world-class information security and data integrity. Our commitment to globally aligned standards provides the reliability and accuracy required for sustainable, high-impact business outcomes.",
            icon: "tji-support",
        },
    ];

    return (
        <section id="choose" className="tj-choose-section section-gap">
            <div className="container">
                <div className="row">
                    <div className="col-12">
                        {type == 2 ? (
                            <div className="sec-heading-wrap">
								<span className="sub-title wow fadeInUp" data-wow-delay=".3s">
									<i className="tji-box"></i>Choose the Best
								</span>
                                <div className="heading-wrap-content">
                                    <div className="sec-heading">
                                        <h2 className="sec-title title-anim">
                                            Our Core <span>Values</span>
                                        </h2>
                                    </div>
                                    {/* <div className="btn-wrap wow fadeInUp" data-wow-delay=".6s">
										<ButtonPrimary text="Request a Call" url="/contact-us" />
									</div> */}


                                </div>
                            </div>
                        ) : (
                            <div className="sec-heading text-center">
								<span className="sub-title wow fadeInUp" data-wow-delay=".3s">
									<i className="tji-box"></i>Choose the Best
								</span>
                                <h2 className="sec-title title-anim">
                                    Empowering Business with <span>Expertise.</span>
                                </h2>
                            </div>
                        )}
                    </div>
                </div>
                <div className="row row-gap-4 rightSwipeWrap">
                    {features.map((feature, idx) => (
                        <div key={idx} className="col-lg-4">
                            <FeatureCard feature={feature} idx={idx}/>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};
export default Features;
