import FunfactSingle from "./FunfactSingle";
import ProgressBar from "./ProgressBar";

const Funfact = () => {
    return (
        <section className="tj-funfact-section section-gap section-gap-x">
            <div className="container">
                <div className="row">
                    <div className="col-lg-12">
                        <div className="heading-wrap-content">
                            <div className="sec-heading style-4">
								<span className="sub-title wow fadeInUp" data-wow-delay=".3s">
									<i className="tji-box"></i>OUR PERFORMANCE
								</span>
                                <h2 className="sec-title title-anim">
                                    Numbers and facts that define performance.
                                </h2>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row row-gap-4">
                    <div className="col-lg-4 col-md-6">
                        <div
                            className="countup-item style-2 wow fadeInUp"
                            data-wow-delay=".7s"
                        >
							<span className="count-icon">
								<i className="tji-growth"></i>
							</span>
                            <span className="steps">01.</span>
                            <div className="count-inner">
                                <span className="count-text">Project Delivered</span>
                                <FunfactSingle currentValue={1200} symbol={"+"}/>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-6">
                        <div
                            className="countup-item style-2 wow fadeInUp"
                            data-wow-delay=".5s"
                        >
							<span className="count-icon">
								<i className="tji-worldwide"></i>
							</span>
                            <span className="steps">02.</span>
                            <div className="count-inner">
                                <span className="count-text">Year Experience</span>
                                <FunfactSingle currentValue={15} symbol={"+"}/>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-6">
                        <div
                            className="countup-item style-2 wow fadeInUp"
                            data-wow-delay=".1s"
                        >
							<span className="count-icon">
								<i className="tji-complete"></i>
							</span>
                            <span className="steps">03.</span>
                            <div className="count-inner">
                                <span className="count-text">Empowered Employees</span>
                                <FunfactSingle currentValue={250} symbol={"+"}/>
                            </div>
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

export default Funfact;
