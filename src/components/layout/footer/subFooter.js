import Link from "next/link";

const CallSchedule = () => {
    return (
        <section className="tj-countup-section">
            <div className="container">
                <div className="row">
                    <div className="col-12">
                        <Link className="circle-icon" href="/contact-us">
                            <div className="cta-area">
                                <div className="cta-content-mod">
                                    <h2 className="title title-anim">
                                        Turn Your Results Into Our Next Milestone !
                                    </h2>
                                </div>
                                <div className="col-lg-3 col-sm-6 ">
                                    <div
                                        className="h8-team-action wow fadeInRightBig"
                                        data-wow-delay=".8s"
                                    >
                                        <div className="circle-text-wrap-mod">
                                        <span
                                            className="circle-text"
                                            style={{
                                                backgroundImage:
                                                    "url('/images/logos/logo_badge.png')",
                                            }}
                                        ></span>
                                            {/*<Link className="circle-icon" href="/team">
                                             <i className="tji-arrow-right-long"></i>
                                        </Link>*/}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </Link>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default CallSchedule;
