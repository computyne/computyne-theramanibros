"use client";
import SubserviceCard from "./SubserviceCard";
import {usePathname} from "next/navigation";
import getSubServicesData from "@/libs/service/getSubServicesData";
import Link from "next/link";
import SubserviceCard2 from "./SubserviceCard2";


const Subservices = ({isDefaultSubServiceCard = true}) => {
    // const subservices = getSubservice();
    const pathname = usePathname();
    const slug = pathname.split("/").filter(Boolean).pop();

    const subServices = getSubServicesData(slug);
    const subServicesData =
        !subServices || Object.keys(subServices).length === 0
            ? getSubServicesData("data-extraction-services")
            : subServices;

    const remainder = subServicesData.services.length % 3;
    const emptyCells =
        remainder === 0 ? 0 : 3 - remainder;
    return (
        <section className="tj-blog-section-2 section-gap">
            <div className="container">
                <div className="row">
                    <div className="col-12">
                        <div className="sec-heading-wrap">
							<span className="sub-title wow fadeInUp" data-wow-delay=".3s">
								Our Solution {isDefaultSubServiceCard}
							</span>
                            <div className="heading-wrap-content">
                                <div className="sec-heading-subservice style-2">
                                    <h2 className="sec-title text-anim">
                                        {subServicesData.h2}
                                    </h2>
                                </div>
                                <div className="wow fadeInUp" data-wow-delay=".5s">
                                    <p className="desc tagline">
                                        {subServicesData.desc}
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="row row-gap-4 h6-blog-wrapper">
                    {subServicesData.services?.length
                        ? subServicesData.services?.map((subservice, idx) => (
                            <div key={idx} className="col-xl-4 col-md-6">
                                {isDefaultSubServiceCard
                                    ? <SubserviceCard subservice={subservice} idx={idx}/>
                                    : <SubserviceCard2 subservice={subservice} idx={idx}/>
                                }

                            </div>
                        ))
                        : ""}

                    {/* If 2 empty cells needed (ex: total = 4, 7) */}
                    {emptyCells === 2 && (
                        <>
                            <div className="col-md-6 col-lg-4">
                                <div className="choose-box customers-box h9-choose-box right-swipe">
                                    <h4 className="title">
                                        Providing the Our Best Business Solution Ever.
                                    </h4>
                                    <div className="customers-inner">
                                        <div className="customers">
                                            <ul>
                                                <li className="wow fadeInLeft" data-wow-delay=".5s">
                                                    <img src="/images/testimonial/client-1.webp" alt=""/>
                                                </li>
                                                <li className="wow fadeInLeft" data-wow-delay=".6s">
                                                    <img src="/images/testimonial/client-2.webp" alt=""/>
                                                </li>
                                                <li className="wow fadeInLeft" data-wow-delay=".7s">
                                                    <img src="/images/testimonial/client-3.webp" alt=""/>
                                                </li>
                                                <li className="wow fadeInLeft" data-wow-delay=".8s">
                                                    <img src="/images/testimonial/client-1.webp" alt=""/>
                                                </li>
                                            </ul>
                                        </div>
                                        <div className="rating-area">
                                            <div className="star-ratings">
                                                <div className="fill-ratings">
                                                    <span>★★★★★</span>
                                                </div>
                                                <div className="empty-ratings">
                                                    <span>★★★★★</span>
                                                </div>
                                            </div>
                                        </div>
                                        <h5 className="customers-text">100+ happy customer.</h5>
                                    </div>
                                </div>
                            </div>

                            <div className="col-lg-4">
                                <div
                                    className="choose-box h9-choose-box h9-choose-bg right-swipe"
                                    style={{
                                        backgroundImage: "url('/images/service/Data Collection.webp')",
                                    }}
                                >
                                    <div className="choose-content">
                                        <h4 className="title">Dedicated Support</h4>
                                        <p className="desc">
                                            Our team is always available for address expert concerns,
                                            providing quick and effective solution to keep your business.
                                        </p>
                                        <Link className="text-btn" href="/contact-us">
											<span className="btn-text">
												<span>Contact Us</span>
											</span>
                                            <span className="btn-icon">
												<i className="tji-arrow-right-long"></i>
											</span>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </>
                    )}

                    {/* If 1 empty cell needed (ex: total = 5, 8) */}
                    {emptyCells === 1 && (
                        <div className="col-lg-4">
                            <div
                                className="choose-box h9-choose-box h9-choose-bg right-swipe"
                                style={{
                                    backgroundImage: "url('/images/service/Data Collection.webp')",
                                }}
                            >
                                <div className="choose-content">
                                    <h4 className="title">Dedicated Support</h4>
                                    <p className="desc">
                                        Our team is always available for address expert concerns,
                                        providing quick and effective solution to keep your business.
                                    </p>
                                    <Link className="text-btn" href="/contact-us">
											<span className="btn-text">
												<span>Contact Us</span>
											</span>
                                        <span className="btn-icon">
												<i className="tji-arrow-right-long"></i>
											</span>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    )}

                </div>
            </div>
        </section>
    );
};

export default Subservices;
