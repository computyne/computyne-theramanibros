import FeatureCard from "./FeatureCard";

const Features = ({type}) => {
    const features = [
        {
            title: "Our Vision",
            desc: "Our vision is to become a globally recognized leader in intelligent data solutions and KPO services, driving innovation and operational excellence through ethical business practices. We aim to set industry benchmarks for sustainable enterprise growth by integrating advanced technology with a human-centric operating model. By empowering global organizations through smarter decision-making and responsible innovation, we strive to deliver long-term value to the businesses and societies we serve.",
            icon: "tji-innovative",
        },
        {
            title: "Our Mission",
            desc: "Our mission is to design intelligent solutions and deliver execution excellence across our BPO, BPM, and KPO service ecosystem. We believe technology should serve people and the environment, which is why we embed quality, accountability, and purpose in every engagement. By delivering scalable, precision-driven outsourcing, we help our partners optimize operations and build a resilient, technology-enabled future for a global market.",
            icon: "tji-award",
        },
        {
            title: "Quality Policy",
            desc: "Computyne is committed to delivering effective, enterprise-grade solutions that consistently exceed client expectations and project benchmarks. Our operations are governed by the ISO/IEC 27001:2022 standard, ensuring world-class information security, data integrity, and continuous improvement across all services. Through disciplined delivery models and globally aligned standards, we provide the reliability, accuracy, and control required for sustainable enterprise-grade outcomes.",
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

                                    <div className="wow fadeInUp" data-wow-delay=".5s">
                                        <p className="desc tagline text-black">
                                            Our specialists deliver scalable data outsourcing to manage, optimize, and
                                            leverage your data for real business results.
                                        </p>
                                    </div>
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
