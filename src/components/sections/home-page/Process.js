"use client";

import ProcessCard from "./ProcessCard";

const Process = () => {
    const process = [
        {
            id: 1,
            title: "Requirement Assessment",
            desc: "We analyze workflows, data volumes, compliance needs, and accuracy benchmarks to design an optimized processing strategy.",
        },
        {
            id: 2,
            title: "Secure Data Intake",
            desc: "Data is securely received, encrypted, validated, and standardized to ensure consistency before structured processing begins.",
        },
        {
            id: 3,
            title: "Intelligent Processing",
            desc: "Advanced automation and expert validation ensure high accuracy, faster turnaround, and seamless integration with business systems.",
        },
        {
            id: 4,
            title: "Quality Assurance & Delivery",
            desc: "Multi-level quality checks guarantee precision, timely delivery, and reliable outputs aligned with agreed service levels.",
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
                <img src="/images/shape/pattern-2.svg" alt=""/>
            </div>
            <div className="bg-shape-2">
                <img src="/images/shape/pattern-3.svg" alt=""/>
            </div>
        </section>
    );
};

export default Process;
