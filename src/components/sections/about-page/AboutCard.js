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

                        </div>
                    </div>
                    <div className="col-xl-6 col-lg-6 order-lg-2 order-1">
                        <div className="about-content-area">
                            <div className={`sec-heading ${type === 2 ? "" : "style-3"}`}>
								<span className="sub-title wow fadeInUp" data-wow-delay=".3s">
									<i className="tji-box"></i>Get to Know Us
								</span>
                                <h2 className="sec-title title-anim">
                                   Computyne: Global Enterprise Data Solutions Partner
                                </h2>
                            </div>
                        </div>
                        <div className="about-bottom-area">
                            <p>
                                Computyne is a trusted global provider of BPO, BPM, and KPO services, supporting enterprises across the USA, UK, Europe, Canada, Australia, Singapore, and the GCC countries. Since 2009, we have specialized in high-volume back-office operations that allow internal teams to focus on innovation, strategy, and measurable business outcomes. Serving as a dependable operational backbone for Fortune 500 organizations, Computyne improves efficiency, optimizes cost structures, and delivers scalable outsourcing built on execution excellence.
                            </p>
                            <p>
                                Our capabilities span a full spectrum of enterprise data services organized into specialized solution clusters. These include high-accuracy Data Annotation Services for AI training, reliable Data Collection Services for structured and unstructured datasets, and intelligent Document Processing Services that digitize records into usable intelligence. We also provide advanced Data Management Services, Data Entry Services, and compliant web scraping solutions. Each service is engineered to transform raw data into actionable insights, enabling speed, precision, and enterprise-grade scalability for sustainable growth.
                            </p>
                            <p>
                               Certified under ISO/IEC 27001:2022, Computyne operates with a strong commitment to information security, data confidentiality, and quality assurance. Our mature delivery frameworks support consistent performance, regulatory compliance, and controlled execution across every engagement. By combining technical depth with global delivery strength, we help organizations scale with confidence, enhance digital operations, and strengthen decision-making through trusted, secure, and intelligent data solutions that drive measurable business advantage.
                            </p>
                        </div>
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
