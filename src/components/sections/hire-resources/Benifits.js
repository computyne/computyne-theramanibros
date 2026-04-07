import BenifitsCard from "@/components/sections/hire-resources/BenifitsCard";

const Benifits = () => {
	const features = [
		{
			id: 1,
			title: "Cost savings of 40 to 60%",
			desc: "Replace expensive in-house hires or unpredictable freelancers with fixed, transparent pricing from $4/hr.",
		},
		{
			id: 2,
			title: "3 to 5 day deployment",
			desc: "No 60-day hiring cycles. Your specialist is briefed and working within a week.",
		},
		{
			id: 3,
			title: "99%+ accuracy across data functions",
			desc: "Multi-layer QA and standardised SOPs mean fewer errors, less rework, and cleaner data.",
		},
		{
			id: 4,
			title: "ISO 27001 security",
			desc: "Your business data is governed by enterprise-grade security protocols at every stage.",
		},
		{
			id: 5,
			title: "Scalable up or down",
			desc: "Add capacity for a product launch or scale back in a quiet period. No re-hiring required.",
		},
		{
			id: 6,
			title: "Dedicated account management",
			desc: "One point of contact who knows your account, your requirements, and your standards.",
		},
		{
			id: 7,
			title: "Free pilot on every engagement",
			desc: "Test the quality before you commit. No risk, no upfront cost.",
		},
	];
	return (
		<section id="choose" className="tj-choose-section section-gap">
			<div className="container">
				<div className="row">
					<div className="col-12">
						<div className="sec-heading style-3 text-center">
							<span className="sub-title wow fadeInUp" data-wow-delay=".3s">
								<i className="tji-box"></i> Benefits for You
							</span>
							<h2 className="sec-title title-anim">
								What You Get When You Hire Through <span>Computyne</span>
							</h2>
						</div>
					</div>
				</div>
				<div className="row row-gap-4 rightSwipeWrap">
					{features?.length
						? features?.map((feature, idx) => (
								<div key={idx} className="col-xl-3 col-md-6">
									<BenifitsCard feature={feature} idx={idx} />
								</div>
						  ))
						: ""}
				</div>
			</div>
		</section>
	);
};

export default Benifits;
