"use client";
import ButtonPrimary from "./ButtonPrimary";
import BootstrapWrapper from "./BootstrapWrapper";
import FaqItem from "./FaqItem";
import {usePathname} from "next/navigation";
import getFaqsData from "@/libs/service/getFaqsData";

const Faq = () => {

    const pathname = usePathname();
    const slug = pathname.split("/").filter(Boolean).pop();

    const faqs = getFaqsData(slug);

    const faqsData =
        !faqs || Object.keys(faqs).length === 0
            ? getFaqsData("data-extraction-services")
            : faqs;

    return (
        <section className="h7-faq section-gap slidebar-stickiy-container">
            <div className="container">
                <div className="row justify-content-between">
                    <div className="col-12 col-lg-4">
                        <div className="sec-heading style-2 style-7 slidebar-stickiy">
							<span className="sub-title wow fadeInUp" data-wow-delay=".3s">
								<i className="tji-box"></i> FAQs
							</span>
                            <h2 className="sec-title text-anim">
                                Frequently Asked Questions
                            </h2>
                            <div className="btn-area wow fadeInUp mt-30" data-wow-delay=".8s">
                                <ButtonPrimary text={faqsData.cta} url={"/contact-us"}/>
                            </div>
                        </div>
                    </div>
                    <div className="col-12 col-lg-8">
                        <BootstrapWrapper>
                            <div
                                className="accordion tj-faq style-2 h7-faq-wrapper"
                                id="faqTwo"
                            >
                                {faqsData.faq?.length
                                    ? faqsData.faq?.map((item, idx) => (
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
