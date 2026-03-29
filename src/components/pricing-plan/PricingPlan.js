"use client";

import {usePathname} from "next/navigation";
import PricingPlanItems from "@/components/pricing-plan/PricingPlanItems";
import ButtonPrimary from "@/components/sections/subservice/ButtonPrimary";
import pricingData from "../../../public/data/hire-service-pricing-data.json";

const PricingPlan = ({ type = 1 }) => {
	const pathname = usePathname();
	const slug = pathname.split("/").filter(Boolean).pop();
	const serviceData = pricingData[slug];

	return (
		<section
			className={`${
				type === 2 || type === 3 ? "tj-pricing-section-2" : "tj-pricing-section"
			} ${type === 3 ? "section-top-gap" : "section-gap"} `}
		>
			<div className="container">
				<div className="row">
					<div className="col-12">
						<div
							className={`sec-heading text-center ${
								type === 2 || type === 3 ? "" : "style-2"
							}`}

							style={{maxWidth: "100%"}}
						>
							<span className="sub-title wow fadeInUp" data-wow-delay=".3s">
								{type === 2 || type === 3 ? <i className="tji-box"></i> : ""}{" "}
								{serviceData?.span || "Engagement Models and Pricing"}
							</span>
							<h2
								className={`sec-title ${
									type === 2 || type === 3 ? "title-anim" : "text-anim"
								}`}
							>
								{serviceData?.h2 || "Flexible Engagement Models for Every Team Size"}
							</h2>
						</div>
					</div>
				</div>
				<div className="row row-gap-4">
					<PricingPlanItems />
				</div>
				{serviceData?.closingLine && (
					<div className="row mt-5">
						<div className="col-12">
							<div className="text-center">
								<p className="mb-4" style={{fontSize: "1.2rem", fontWeight: "500"}}>
									{serviceData.closingLine}
								</p>
								<ButtonPrimary text={serviceData.cta || "Get Started"} className="btn-secondary"/>
							</div>
						</div>
					</div>
				)}
			</div>
			<div className="bg-shape-1">
				<img src="/images/shape/pattern-2.svg" alt="" />
			</div>
			<div className="bg-shape-2">
				<img src="/images/shape/pattern-3.svg" alt="" />
			</div>
		</section>
	);
};

export default PricingPlan;
