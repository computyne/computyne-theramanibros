import Image from "next/image";

const AboutCard = ({type}) => {
    return (
        <section className="tj-about-section-2 section-gap section-gap-x">
            <div className="container">
                <div className="row">
                    <div className="col-xl-6 col-lg-6 order-lg-1 order-2">
                        <div
                            className="about-img-area style-2 wow fadeInLeft"
                            data-wow-delay=".3s"
                        >
                            <div className="about-img overflow-hidden">
                                <Image
                                    data-speed=".8"
                                    src="/images/about/aboutMod.webp"
                                    alt=""
                                    width={591}
                                    height={639}
                                />
                            </div>
                            <div className={`box-area ${type === 2 ? "style-2" : ""}`}>
                                <div className="progress-box wow fadeInUp" data-wow-delay=".3s">
                                    <h4 className="title">Business Progress</h4>
                                    <ul className="tj-progress-list">
                                        <li>
                                            <h6 className="tj-progress-title">Revenue</h6>
                                            <div className="tj-progress">
                                                <span className="tj-progress-percent">82%</span>
                                                <div
                                                    className="tj-progress-bar"
                                                    data-percent="82"
                                                ></div>
                                            </div>
                                        </li>
                                        <li>
                                            <h6 className="tj-progress-title">Satisfaction</h6>
                                            <div className="tj-progress">
                                                <span className="tj-progress-percent">90%</span>
                                                <div
                                                    className="tj-progress-bar"
                                                    data-percent="90"
                                                ></div>
                                            </div>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-xl-6 col-lg-6 order-lg-2 order-1">
                        <div className="about-content-area">
                            <div className={`sec-heading ${type === 2 ? "" : "style-3"}`}>
								<span className="sub-title wow fadeInUp" data-wow-delay=".3s">
									<i className="tji-box"></i>Get to Know Us
								</span>
                                <h2 className="sec-title title-anim">
                                    {type === 2 ? (
                                        <>
                                            <span>Computyne</span> : Stronger Operations, Smarter Growth
                                        </>
                                    ) : (
                                        "Driving Innovation and Excellence for Sustainable Corporate Success Worldwide."
                                    )}
                                </h2>
                            </div>
                        </div>
                        <div className="about-bottom-area">
                            <p>
                                Computyne partners with medium to large enterprises and MNCs across the USA, Canada,
                                Australia, UK, and Europe,
                                delivering smarter outsourcing solutions that power growth. We take care of the routine,
                                complex, and high-volume
                                back-office and data processing tasks, freeing your teams to focus on innovation and
                                business impact.
                            </p>
                            <p>
                                Our expertise spans data support & capture, data entry, data conversion, document
                                processing, web research & data
                                collection, and data cleansing & validation-delivered with speed, accuracy, and
                                scalability.
                            </p>
                            <p>
                                With Computyne as your backbone, you gain a reliable partner that drives efficiency,
                                reduces costs, and helps your
                                business stay ahead in a competitive market.
                            </p>
                            {/*<div
								className="mission-vision-box wow fadeInLeft"
								data-wow-delay=".5s"
							>
								<h4 className="title">Our Mission</h4>
								<p className="desc">
									our mission is empower businesses through innovate best
									solution, exceptional service.
								</p>
								<ul className="list-items">
									<li>
										<i className="tji-list"></i>Innovation & Excellence
									</li>
									<li>
										<i className="tji-list"></i>Exceptional Customer
									</li>
									<li>
										<i className="tji-list"></i>Business Growth
									</li>
								</ul>
							</div>
							<div
								className="mission-vision-box wow fadeInRight"
								data-wow-delay=".5s"
							>
								<h4 className="title">Our Vision</h4>
								<p className="desc">
									Our vision is to become a global leader in providing
									transformative business solutions.
								</p>
								<ul className="list-items">
									<li>
										<i className="tji-list"></i>Global Leadership
									</li>
									<li>
										<i className="tji-list"></i>Transformative Impact
									</li>
									<li>
										<i className="tji-list"></i>Sustainable Success
									</li>
								</ul>
							</div>*/}
                        </div>
                        {/*<div className="about-btn-area wow fadeInUp" data-wow-delay=".5s">
                            <ButtonPrimary text={"Connect With Us Today"} url={"/contact-us"}/>
                        </div>*/}
                    </div>
                </div>
            </div>
            <div className="bg-shape-1">
                <img src="/images/shape/pattern-2.svg" alt=""/>
            </div>
            <div className="bg-shape-2">
                <img src="/images/shape/pattern-3.svg" alt=""/>
            </div>
        </section>
    );
};

export default AboutCard;
