import FeatureCard from "./FeatureCard";

const Features = ({type}) => {
    const features = [
        {
            title: "Our Vision",
            desc: "Our vision is to be a global leader in IT solutions and services with impetus on innovation, excellence, and implementation of ethical Business Strategies - with the ultimate aim of giving back to the society.",
            icon: "tji-innovative",
        },
        {
            title: "Our Mission",
            desc: "Our mission is to create innovative products and deliver excellence in services. We strongly believe tech should be more in helping people and building a better environment. That's why we put quality and value ahead.",
            icon: "tji-award",
        },
        {
            title: "Quality Policy",
            desc: "We deliver effective quality solutions and services to our clients - meeting project requirements and achieving continuous excellence in all our products and services – guided by our defined global standards.",
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
