"use client";
import ButtonPrimary from "./ButtonPrimary";
import PortfolioCard from "./PortfolioCard";
import getCaseStudy from "@/libs/getCaseStudies";
import {usePathname} from "next/navigation";

const Casestudy = ({text}) => {

    const pathname = usePathname();
    const slug = pathname.split("/").filter(Boolean).pop();

    const items = getCaseStudy();
    const filteredCaseStudies = items.filter(caseStudy =>
        caseStudy.showedIn?.includes(slug)
    );

    if (!filteredCaseStudies?.length) return null;

    return (
        <section className="h5-project">
            <div className="tj-scroll-slider section-gap">
                <div className="container">
                    <div className="row">
                        <div className="col-12">
                            <div className="sec-heading-wrap style-3">
								<span className="sub-title wow fadeInUp" data-wow-delay=".3s">
									<i className="tji-box"></i>Case Studies
								</span>
                                <div className="heading-wrap-content">
                                    <div className="sec-heading style-3">
                                        <h2 className="sec-title text-anim">
                                            {text ?? "Breaking Boundaries, Building Dreams."}
                                        </h2>
                                    </div>
                                    <div className="btn-area wow fadeInUp" data-wow-delay=".8s">
                                        <ButtonPrimary text={"Explore More"} url={"/case-studies"}/>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="row ">
                        <div className="col-12">
                            <div className="project-wrapper h5-project-wrapper">
                                {filteredCaseStudies?.length
                                    ? filteredCaseStudies?.map((caseStudySingle, idx) => (
                                        <PortfolioCard key={idx} casestudy={caseStudySingle}/>
                                    ))
                                    : ""}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Casestudy;
