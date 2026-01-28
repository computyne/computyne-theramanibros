import ButtonPrimary from "./ButtonPrimary";
import FunfactSingle2 from "./FunfactSingle2";

const PortfolioCard = ({casestudy}) => {
    const {
        title,
        img,
        desc,
        id,
        dataFilter,
        category = "Connect",
        kpiData, slug
    } = casestudy ? casestudy : {};
    return (
        <div className="h5-project-item-wrapper tj-scroll-slider-item">
            <div className="project-item h4-project-item  h5-project-item">
                <div className="project-img">
                    <img src={img} alt="Image"/>
                </div>

                <div className="h9-about-content-port-card-mod">
                    <h3>{title}</h3>
                    <p className="desc wow fadeInUp" data-wow-delay=".4s">
                        {desc}
                    </p>
                    <div
                        className="about-btn-area-2 wow fadeInUp"
                        data-wow-delay=".7s"
                    >
                        <ButtonPrimary text={"Explore Now"} url={`case-studies/${slug}`}/>
                    </div>
                    <div
                        className="h9-about-funfact-port-card-mod wow fadeInUp"
                        data-wow-delay=".6s"
                    >
                        {kpiData.map((item, index) => (
                            <div className="countup-item" key={index}>
                                <FunfactSingle2
                                    currentValue={item.value}
                                    symbol={item.symbol}
                                />

                                <span className="count-text">
                                        {item.label}
                                    </span>

                            </div>
                        ))}
                        {/* <div className="countup-item">
							<FunfactSingle2 currentValue={20} symbol={"M"} />
							<span className="count-text">
								Reduced Manual Errors
							</span>
						</div>
						<div className="countup-item">
							<FunfactSingle2 currentValue={8.5} symbol={"X"} />
							<span className="count-text">
								Reduced Order Processing Time
							</span>
						</div>
						<div className="countup-item">
							<FunfactSingle2 currentValue={8.5} symbol={"X"} />
							<span className="count-text">
								Boost in Shipping Efficiency
							</span>
						</div> */}
                    </div>

                </div>
            </div>
            {/* </div> */}
        </div>
    );
};

export default PortfolioCard;
