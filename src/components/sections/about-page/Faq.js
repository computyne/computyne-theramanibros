import Image from "next/image";
import Link from "next/link";
import ButtonPrimary from "./ButtonPrimary";
import BootstrapWrapper from "./BootstrapWrapper";
import FaqItem from "./FaqItem";

const Faq = ({type = 1}) => {
    const items = [
        {
            title: "Our Core Competence",
            desc: " Our capabilities define our clients' success, and their success defines our process, knowledge, and domain excellence of 22" +
                " years. ",
            initActive: true,
        },
        {
            title: "Agile Approach",
            desc: "	A business consulting approach driven by a relentless pursuit of success. Our flexible, proven models and methodologies ensure measurable outcomes and long-term success.",
            initActive: false,
        },
        {
            title: "Best Place To Work",
            desc: "	A culture for the employees, by the employees, and of the employees. We thrive and develop under shared values loved by all.",
            initActive: false,
        },
        {
            title: "Our Promise",
            desc: "	Hidden Brains' commitment sets us apart from the rest. We deliver excellence through experience and quality above everything.",
            initActive: false,
        },
        {
            title: "Our Process",
            desc: "	We are in the forefront of digital transformation in ‘Web, Mobile, and Cloud’. Our domain expertise surpasses boundaries, delivering brilliance.",
            initActive: false,
        }
    ];
    return (
        <section
            className={`tj-faq-section section-gap  ${
                type === 3 || type === 4 ? "" : "tj-arrange-container-2"
            }`}
        >
            <div className="container">
                <div className="row justify-content-between">
                    {type === 3 ? (
                        <div className="col-lg-4">
                            <div className="content-wrap">
                                <div className="sec-heading">
									<span className="sub-title wow fadeInUp" data-wow-delay=".3s">
										<i className="tji-box"></i>Common Questions
									</span>
                                    <h2 className="sec-title title-anim">
                                        Need <span>Help?</span> Start Here...
                                    </h2>
                                </div>
                                <p className="desc wow fadeInUp" data-wow-delay=".6s">
                                    We stay ahead of curve, leveraging <br/> cutting-edge are
                                    technologies and <br/> strategies to competitive
                                </p>
                                <div className="wow fadeInUp" data-wow-delay=".8s">
                                    <ButtonPrimary text={"Request a Call"} url={"/contact-us"}/>
                                </div>
                            </div>
                        </div>
                    ) : (
                        <div className="col-lg-6">
                            <div
                                className={`faq-img-area ${
                                    type === 3 ? "" : "tj-arrange-item-2"
                                }`}
                            >
                                <div className="faq-img overflow-hidden">
                                    <Image
                                        src="/images/faq/faqMod.webp"
                                        alt=""
                                        width={585}
                                        height={629}
                                    />
                                    <h2 className={`title ${type === 4 ? "title-anim" : ""}`}>
                                        Our Business Philosophy
                                    </h2>
                                </div>
                                <div className="box-area ">
                                    <div className="call-box">
                                        <h4 className="title">Get Started Free Call? </h4>
                                        <span className="call-icon">
											<i className="tji-phone"></i>
										</span>
                                        <Link className="number" href="tel:18884521505">
                                            <span>1-888-452-1505</span>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    )}

                    <div className={`col-lg-${type === 3 ? "8" : "6"}`}>
                        <BootstrapWrapper>
                            <div
                                className={`accordion tj-faq ${
                                    type === 2 || type === 4 ? "style-2" : ""
                                } ${type === 3 || type === 4 ? "" : "tj-arrange-item-2"}`}
                                id="faqOne"
                            >
                                {items?.length
                                    ? items?.map((item, idx) => (
                                        <FaqItem key={idx} item={item} idx={idx}/>
                                    ))
                                    : ""}
                            </div>
                        </BootstrapWrapper>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Faq;
