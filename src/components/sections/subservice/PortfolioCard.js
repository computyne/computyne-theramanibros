import ButtonPrimary from "./ButtonPrimary";
import FunfactSingle from "./FunfactSingle";
import Image from "next/image";

const PortfolioCard = ({casestudy}) => {
    const {
        title,
        img,
        desc,
        kpiData, slug
    } = casestudy ? casestudy : {};
    return (
        <div className="h5-project-item-wrapper tj-scroll-slider-item">
            <div className="project-item h4-project-item  h5-project-item">
                <div className="project-img">
                    <Image src={img} alt="Image" height={1000} width={1000}/>
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
                                <FunfactSingle
                                    currentValue={item.value}
                                    symbol={item.symbol}
                                />

                                <span className="count-text">
                                        {item.label}
                                    </span>

                            </div>
                        ))}
                    </div>

                </div>
            </div>
            {/* </div> */}
        </div>
    );
};

export default PortfolioCard;
