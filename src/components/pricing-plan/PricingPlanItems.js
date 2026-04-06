"use client";

import {usePathname} from "next/navigation";
import pricingData from "../../../public/data/hire-service-pricing-data.json";
import ButtonPrimary from "@/components/shared/buttons/ButtonPrimary";

const PricingPlanItems = ({ isYearlyPlan }) => {
	const pathname = usePathname();
	const slug = pathname.split("/").filter(Boolean).pop();
	const serviceData = pricingData[slug];

	if (!serviceData || !serviceData.engagementModels) {
		return null;
	}

	// Determine column class based on number of pricing plans
	const getColClass = (planCount) => {
		switch (planCount) {
			case 1:
				return "col-xl-4 col-md-6 offset-xl-4";
			case 2:
				return "col-xl-5 col-md-6";
			case 3:
				return "col-xl-4 col-md-6";
			case 4:
			default:
				return "col-xl-3 col-md-6";
		}
	};

	const colClass = getColClass(serviceData.engagementModels.length);

	return (
		<>
			{serviceData.engagementModels.map((model, index) => (
				<div key={index} className={colClass}>
					<div className={`pricing-box wow fadeInUp ${model.isActive ? "active" : ""}`} data-wow-delay={`${0.5 + index * 0.2}s`}>
						<div className="pricing-header">
							<h4 className="package-name">{model.model}</h4>
							<div className="package-desc" style={{fontSize: "14px"}}>
								<p>{model.bestFor}</p>
							</div>
							{model.rate !== "0" ? (
								<div className="package-price">
									<span className="package-currency">$</span>
									<span className="price-number">{model.rate}</span>
									<span className="package-period">{model.ratePolicy}</span>
								</div>
							) : (
								<div className="package-price">
									<span className="package-currency"></span>
									<span className="price-number">{model.indicativeRate.split(' ')[0]} </span>
									<span className="package-period">{model.indicativeRate.split(' ')[1]}</span>
								</div>
							)}
							<div className="pricing-btn">
								<ButtonPrimary
									text={"Chose Plan"}
									url={"/contact-us"}
									isTextBtn={true}
								/>
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
							{/* Specialist-specific pricing */}
							{model["Web Researchers"] && (
								<li>
									<i className="tji-list"></i>
									<strong>Web Researchers:</strong> {model["Web Researchers"]}
								</li>
							)}
							{model["Data Entry Specialists"] && (
								<li>
									<i className="tji-list"></i>
									<strong>Data Entry:</strong> {model["Data Entry Specialists"]}
								</li>
							)}
							{model["Virtual Assistants"] && (
								<li>
									<i className="tji-list"></i>
									<strong>Virtual Assistants:</strong> {model["Virtual Assistants"]}
								</li>
							)}
							{model["Data Science Specialists"] && (
								<li>
									<i className="tji-list"></i>
									<strong>Data Science:</strong> {model["Data Science Specialists"]}
								</li>
							)}
						</ul>
					</div>
					</div>
				</div>
			))}
		</>
	);
};

export default PricingPlanItems;
