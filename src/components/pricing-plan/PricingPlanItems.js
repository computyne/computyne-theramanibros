"use client";

import {usePathname} from "next/navigation";
import pricingData from "../../../public/data/hire-service-pricing-data.json";

const PricingPlanItems = ({ isYearlyPlan }) => {
	const pathname = usePathname();
	const slug = pathname.split("/").filter(Boolean).pop();
	const serviceData = pricingData[slug];

	if (!serviceData || !serviceData.engagementModels) {
		return null;
	}

	return (
		<>
			{serviceData.engagementModels.map((model, index) => (
				<div className="col-xl-3 col-md-6">
					<div className="pricing-box wow fadeInUp" data-wow-delay={`${0.5 + index * 0.2}s`}>
						<div className="pricing-header">
							<h4 className="package-name">{model.model}</h4>
							<div className="package-desc" style={{fontSize: "14px"}}>
								<p>{model.bestFor}</p>
							</div>
							<div className="package-price" style={{fontSize: "25px"}}>
								<span className="price-number" style={{color: "#f47920"}}>{model.indicativeRate}</span>
							</div>
						</div>

					<div className="list-items">
						<ul>
							<li>
								<i className="tji-list"></i>{model.commitment} commitment
							</li>
							<li>
								<i className="tji-list"></i>Best for {model.bestFor}
							</li>
						</ul>
					</div>
					</div>
				</div>
			))}
		</>
	);
};

export default PricingPlanItems;
