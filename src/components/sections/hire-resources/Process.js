"use client";

import Image from "next/image";
import ProcessCard from "./ProcessCard";

const Process = () => {
    const process = [
        {
            id: 1,
            title: "Share Your Requirements",
            desc: "Tell us the role type, tools, hours, and workflows. We ask the right questions to match you with the right specialist.",
            day: "Day 1"
        },
        {
            id: 2,
            title: "Specialist Matching",
            desc: "We identify the right specialist from our trained team based on your stack, industry, and task requirements.",
            day: "Day 1 to 2"
        },
        {
            id: 3,
            title: "Introduce and Align",
            desc: "You meet your specialist, review their profile, and confirm alignment on SOPs, communication, and tools access.",
            day: "Day 2 to 3"
        },
        {
            id: 4,
            title: "Onboarding and Setup",
            desc: "System access, documentation review, and a structured onboarding session to get your specialist fully briefed.",
            day: "Day 3 to 5"
        },
        {
            id: 5,
            title: "Go Live",
            desc: "Your specialist starts working. You receive a weekly report and have a direct line to your account manager.",
            day: "Day 5+"
        },
    ];
    return (
        <section className="tj-working-process h6-about section-gap section-gap-x">
            <div className="container">
                {/* <div className="row">
					<div className="col-12">
						<div className="sec-heading-wrap">
							<span className="sub-title wow fadeInUp" data-wow-delay=".3s">
								Our Process
							</span>
							<div className="heading-wrap-content">
								<div className="sec-heading style-2">
									<h2 className="sec-title text-anim">
										Seamless Process, Great <span>Results.</span>
									</h2>
								</div>
								
							</div>
						</div>
					</div>
				</div> */}

                {/* style-1  */}
                <div
                    className="about-content-area  h6-about-content wow fadeInLeft"
                    data-wow-delay=".2s">
                    <div className="sec-heading style-2 style-6">
                        <span className="sub-title  wow fadeInUp" data-wow-delay=".3s">
                            Our Process
                        </span>
                        <h2 className="sec-title title-anim">
                            Seamless Process, Great <span>Results.</span>
                        </h2>

                    </div>
                </div>
                <div className="row">
                    <div className="col-12">
                        <div className="working-process-area-mod">
                            {process?.length
                                ? process?.map((processSingle, idx) => (
                                    <ProcessCard
                                        key={idx}
                                        processSingle={processSingle}
                                        idx={idx}
                                    />
                                ))
                                : ""}
                        </div>
                    </div>
                </div>
            </div>
            <div className="bg-shape-1">
                <Image src="/images/shape/pattern-2.svg" alt="" width={370} height={590} aria-hidden="true" />
            </div>
            <div className="bg-shape-2">
                <Image src="/images/shape/pattern-3.svg" alt="" width={370} height={590} aria-hidden="true" />
            </div>
        </section>
    );
};

export default Process;
