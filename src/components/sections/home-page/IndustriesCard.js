import Link from "next/link";

const IndustriesCard = ({industry, idx}) => {
    const {title, desc, id, img, url, subData} = industry || {};
    return (
        <div className="blog-item style-2">
            <div className="blog-thumb">
                <Link href={url}>
                    <img src={img} alt=""/>
                </Link>
            </div>
            <div className="blog-content">
                <div className="title-area">

                    <h4 className="title">
                        {title}
                    </h4>
                    <p className="desc  wow fadeInUp" data-wow-delay=".8s">
                        {desc}
                    </p>
                    <div className="desc blog-text wow fadeInUp" data-wow-delay=".8s">
                        <ul className="wow fadeInUp">
                            {/* <li><span><i className="tji-check"></i></span>Personalization at Scale</li>
							<li><span><i className="tji-check"></i></span>Improved Customer Retention</li>
							<li><span><i className="tji-check"></i></span>Data-Driven Insights</li>
							<li><span><i className="tji-check"></i></span>Omni-channel Integration</li>
							<li><span><i className="tji-check"></i></span>Customer Retention</li>
							<li><span><i className="tji-check"></i></span>Support Optimization</li>
							<li><span><i className="tji-check"></i></span>Proactive Engagement</li> */}
                            {subData.map((item, index) => (
                                <li key={index}>
									<span>
										<i className="tji-check"></i>
									</span>
                                    {item}
                                </li>
                            ))}
                        </ul>
                    </div>

                </div>

            </div>
        </div>
    );
};

export default IndustriesCard;
