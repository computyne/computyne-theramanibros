// "use client"
import getServiceData from "@/libs/service/getServiceData";
import Image from "next/image";
import DOMPurify from "isomorphic-dompurify";
// import {usePathname} from "next/navigation";

const Aboutus = ({ slug, type }) => {
    // const pathname = usePathname();
    // const slug = pathname.split("/").filter(Boolean).pop();
    // const slug = "data-extraction-services"
    const serviceData = getServiceData(slug);
    if (!serviceData) return null;

    const overviewData = serviceData.overview;


    // const overviewData =
    //     !serviceData || Object.keys(serviceData).length === 0
    //         ? getServiceData("data-extraction-services")?.overview
    //         : serviceData?.overview;

    return (
        <section className="tj-about-section-2 section-gap section-gap-x mt-12">
            <div className="container">
                <div className="row">

                    <div className="col-xl-6 col-lg-6 order-lg-1 order-2">
                        <div className="about-content-area">
                            <div className={`sec-heading ${type === 2 ? "" : "style-3"}`}>
                                <span className="sub-title wow fadeInUp" data-wow-delay=".3s">
                                    <i className="tji-box"></i>Overview
                                </span>
                                <h2 className="sec-title title-anim">
                                    {/* Outsource <span>Resume & CV Formatting</span> to Boost Hiring Speed and Productivity */}
                                    {overviewData.h2}
                                </h2>
                            </div>
                        </div>
                        <div className="about-bottom-area">
                            {overviewData.content.map((text, index) => (
                                <div
                                    key={index}
                                    className="desc mb-0"
                                    data-wow-delay=".8s"
                                    dangerouslySetInnerHTML={{ __html: DOMPurify.sanitize(text) }}
                                />
                            ))}
                        </div>
                    </div>

                    <div className="col-xl-6 col-lg-6 order-lg-2 order-1">
                        <div
                            className="about-img-area style-3 wow fadeInLeft"
                            data-wow-delay=".3s"
                        >
                            <div className="about-img overflow-hidden">
                                <Image
                                    data-speed=".8"
                                    // src={overviewData.image}
                                    src={overviewData?.image?.trim() || "/images/service/overview/data-solutions-overview.webp"}
                                    alt=""
                                    width={791}
                                    height={839}
                                />
                            </div>

                        </div>
                    </div>
                </div>
            </div>
            <div className="bg-shape-1">
                <img src="/images/shape/pattern-2.svg" alt="" />
            </div>
            <div className="bg-shape-2">
                <img src="/images/shape/pattern-3.svg" alt="" />
            </div>
        </section>
    );
};

export default Aboutus;
