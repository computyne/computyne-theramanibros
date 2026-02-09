"use client";
import ButtonPrimary from "@/components/shared/buttons/ButtonPrimary";
import getTeamMembers from "@/libs/getTeamMembers";
import { useCallback, useEffect, useRef, useState } from "react";
import BootstrapWrapper from "./BootstrapWrapper";
import FaqItem from "./FaqItem";
import HowWeWorkLeftCard from "./HowWeWorkLeftCard";
import Faq from "./Faq";

const itemsDataEngagementModelsOne = [
	{
		title: "Fixed Budgeting",
		desc: "Eliminate cost overruns with fixed monthly pricing agreed upon before the project begins.",
		initActive: false,
	},
	{
		title: "Global Flexibility",
		desc: "We operate 24/7 to align with your local time zone. We can also scale resources up or down rapidly.",
		initActive: false,
	},
	{
		title: "Strategic Partnership",
		desc: "We act as partners to your organization to aid in better decision-making and superior results.",
		initActive: false,
	},
	{
		title: "Economies of Scale",
		desc: "For medium-to-high volume workflows, this model is significantly more economical than hourly billing.",
		initActive: false,
	},
	{
		title: "Rapid Deployment",
		desc: "We can deploy additional resources instantly to meet urgent project deadlines without administrative bottlenecks.",
		initActive: false,
	}
];

const itemsDataEngagementModelsTwo = [
	{
		title: "Pay-Per-Use",
		desc: "Enjoy maximum pricing flexibility by paying only for the volume processed as defined in the SLA.",
		initActive: false,
	},
	{
		title: "Cost Visibility",
		desc: "Gain total clarity on unit costs. This allows you to forecast expenses accurately as your business grows.",
		initActive: false,
	},
	{
		title: "Efficiency Savings",
		desc: "This model incentivizes efficiency. It reduces the cost per transaction and lowers your total cost of ownership.",
		initActive: false,
	},
];

const itemsDataSecurityInfrastructureOne = [
	{
		title: "Client Confidentiality",
		desc: "We respect strict anonymity. Your identity and data are never disclosed without explicit consent.",
		initActive: false,
	},
	{
		title: "Privacy Policy",
		desc: "Any contact information provided is used solely for business communication. We strictly adhere to anti-spam regulations and never share your details for personal use.",
		initActive: false,
	},
];

const itemsDataSecurityInfrastructureTwo = [
	{
		title: "Legal Safeguards",
		desc: "Every Computyne employee is contractually bound by strict Non-Disclosure Agreements (NDAs) and Non-Compete clauses to protect your intellectual property.",
		initActive: false,
	},
	{
		title: "Restricted Access",
		desc: "Our production facilities are strictly controlled. Biometric or card-based access ensures only authorized staff can enter specific work zones. We strictly prohibit unauthorized visitor entry.",
		initActive: false,
	},
	{
		title: "Logical Access Control",
		desc: "Workstations are locked down with individual user credentials. Staff access is restricted solely to the files and applications required for their specific tasks.",
		initActive: false,
	},
	{
		title: "Segregation of Duties",
		desc: "We define clear responsibilities for all staff members to ensure checks and balances. This eliminates conflicting roles.",
		initActive: false,
	},
	{
		title: "Secure Infrastructure",
		desc: "Our data servers are housed in a restricted zone accessible only to authorized IT administrators.",
		initActive: false,
	},
	{
		title: "Cybersecurity Defense",
		desc: "All networks, servers, and workstations are fortified with enterprise-grade firewalls and anti-malware systems. This prevents cyber threats and data breaches.",
		initActive: false,
	},
];

const itemMainHowWeWork = [
  {
    "id": 1,
    "name": "The Transition Process ",
  },
  {
    "id": 2,
    "name": "Engagement Models",
  },
  {
    "id": 3,
    "name": "Data Security & Infrastructure",
  }
]


const HowWeWork = () => {
	const items = getTeamMembers()?.slice(0, 4);
	const [activeMember, setActiveMember] = useState(itemMainHowWeWork[0]);
	const [activeHww, setActiveHww] = useState(itemMainHowWeWork[0]);
	const [fade, setFade] = useState(true);
	const [fade2, setFade2] = useState(true);
	const timeout1 = useRef(null);
	const timeout2 = useRef(null);
	const timeout3 = useRef(null);
	// const handleMouseEnter = useCallback(member => {
	// 	setActiveMember(member);
	// 	setFade(false);
	// 	setFade2(false);
	// 	timeout1.current = setTimeout(() => {
	// 		setFade(true);
	// 		setFade2(true);
	// 		timeout2.current = setTimeout(() => {
	// 			setFade2(false);
	// 			timeout3.current = setTimeout(() => {
	// 				setFade2(true);
	// 			}, 300);
	// 		}, 300);
	// 	}, 300);
	// });
	const handleClick = useCallback(member => {
		setActiveHww(member);
		setFade(false);
		setFade2(false);

		timeout1.current = setTimeout(() => {
			setFade(true);
			setFade2(true);

			timeout2.current = setTimeout(() => {
				setFade2(false);

				timeout3.current = setTimeout(() => {
					setFade2(true);
				}, 100);
			}, 100);
		}, 100);
	}, []);

	useEffect(() => {
		// Recalculate sticky AFTER content & animations update
		const timeout = setTimeout(() => {
			window.dispatchEvent(new Event("resize"));
		}, 10); // small delay = layout finalized

		return () => clearTimeout(timeout);
	}, [activeHww?.id]);



	useEffect(() => {
		return () => {
			clearTimeout(timeout1.current);
			clearTimeout(timeout2.current);
			clearTimeout(timeout3.current);
		};
	}, []);
	return (
		<section className="tj-hww-section-2 section-gap">
			<div className="container">
				<div className="row">
					<div className="col-12">
						<div className="sec-heading-wrap">
							<span className="sub-title wow fadeInUp" data-wow-delay=".3s">
								<i className="tji-box"></i>How we Work
							</span>
							<div className="heading-wrap-content">
								<div className="sec-heading-about style-3">
									<h2 className="sec-title title-anim">We follow a structured, transparent approach that takes you from onboarding to delivery with confidence.</h2>
								</div>
								{/* <div className="btn-wrap wow fadeInUp" data-wow-delay=".5s">
									<ButtonPrimary text="More Members" url="/team" />
								</div> */}
							</div>
						</div>
					</div>
				</div>
				<div className="row">
					<div className="col-12">
						<div className="how-we-work-wrapper">
							<div className="how-we-work-item-wrap slidebar-stickiy-container" >
								<div className="slidebar-stickiy">

								{itemMainHowWeWork?.length
									? itemMainHowWeWork.map((item, idx) => (
										<HowWeWorkLeftCard
											key={idx}
											hwwMain={item}
											activeHww={activeHww}
											// handleMouseEnter={handleMouseEnter}
											handleClick={handleClick}
										/>
									))
									: ""}
								</div>
							</div>

							{activeHww.id === 1 && (<div className="how-we-work-right-wrap wow fadeInUp" data-wow-delay=".1s">
								<div
									id="how-we-work-right"
									className="how-we-work-right team-pad-18"
									style={{
										transition: "all .3s ease-in-out",
										opacity: fade ? 1 : 0.3,
									}}
								>
									<h4>
										The Transition Process
									</h4>
									<p>
										Successful outsourcing relies on a smooth transition of business processes. We draw on over a decade of experience transitioning complex <strong>Data Management, KPO, and BPO/BPM solutions</strong> to ensure your move to our environment is seamless.
									</p>
									<h5>
										Data Transfer: Flexible Engagement Models
									</h5>
									<p>
										We offer two secure methods for handling your data:
									</p>
									<div className="row row-gap-4">

										<div className="col-lg-6 col-md-6 order-lg-4 order-4">
											<div
												className="hww-item wow fadeInLeft"
												data-wow-delay=".7s"
											>
												<span className="count-icon">
													<i className="tji-worldwide"></i>
												</span>
												<div className="process-content">
													<h5 className="title">Client Environment (Remote Access)</h5>
													<p className="desc">Computyne works directly on your system within your network environment via secure remote desktop login.</p>
												</div>
												<ul className="wow fadeInUp">
													<li><span><i className="tji-check"></i></span>Benefit: Your data never leaves your secure infrastructure.</li>
													<li><span><i className="tji-check"></i></span>Security: Access is restricted to specific files and folders.</li>
												</ul>
											</div>
										</div>
										<div className="col-lg-6 col-md-6 order-lg-5 order-5">
											<div
												className="hww-item wow fadeInLeft"
												data-wow-delay=".7s"
											>
												<span className="count-icon">
													<i className="tji-worldwide"></i>
												</span>
												<div className="process-content">
													<h5 className="title">Computyne Environment (Secure Server)</h5>
													<p className="desc">We create a dedicated, secure network environment for you at our facilities.</p>
												</div>
												<ul className="wow fadeInUp">
													<li><span><i className="tji-check"></i></span>Benefit: A fully managed infrastructure tailored to your needs.</li>
													<li><span><i className="tji-check"></i></span>Security: Our staff accesses information via secure servers with strict authentication protocols.</li>
												</ul>
											</div>
										</div>
									</div>
									<h4 className="mt-24 mb-12">Our 5-Step Transition Framework</h4>
									<div
										className="hww-item wow fadeInLeft"
										data-wow-delay=".7s"
									>
										<div className="hww-step">
											<span>01</span>
										</div>

										<div className="process-content">
											<h5 >Identification</h5>
											<p>Our experts collaborate with you to map the scope of work.</p>
										</div>
										<ul className="wow fadeInUp">
											<li><span><i className="tji-check"></i></span>Analyze: Determine the volume and nature of the business processes to outsource.</li>
											<li><span><i className="tji-check"></i></span>Document: Review current systems and process documentation.</li>
											<li><span><i className="tji-check"></i></span>Align: Connect via video or chat to deeply understand your business model and expectations.</li>
										</ul>

									</div>
									<div
										className="hww-item mt-12 wow fadeInLeft"
										data-wow-delay=".7s"
									>
										<div className="hww-step">
											<span>02</span>
										</div>
										<div className="process-content">
											<h5 >Target Operating Model</h5>
											<p>Using data from the identification phase, we build a custom operating model.</p>
										</div>
										<ul className="wow fadeInUp">
											<li><span><i className="tji-check"></i></span>Define Boundaries: Clearly distinguish between Computyne’s responsibilities and your internal operations.</li>
											<li><span><i className="tji-check"></i></span>Set KPIs: Agree on critical performance indicators and reporting timelines.</li>
											<li><span><i className="tji-check"></i></span>Innovate: Develop new processes where necessary to improve efficiency.</li>
										</ul>
									</div>

									<div
										className="hww-item mt-12 wow fadeInLeft"
										data-wow-delay=".7s"
									>
										<div className="hww-step">
											<span>03</span>
										</div>
										<div className="process-content">
											<h5>Strategic Planning</h5>
											<p>We design a comprehensive migration plan covering resource deployment, technology infrastructure, and timelines to ensure the project stays on track.</p>
										</div>
										<ul className="wow fadeInUp">
											<li><span><i className="tji-check"></i></span>Architecting the Roadmap: Developing a detailed migration blueprint that aligns resource allocation with technical infrastructure requirements.</li>
											<li><span><i className="tji-check"></i></span>Phased Implementation: Establishing rigorous timelines and milestones to maintain project momentum and minimize operational downtime.</li>
											<li><span><i className="tji-check"></i></span>Infrastructure Optimization: Orchestrating the deployment of hardware and software assets to ensure a seamless transition to the new environment.</li>
										</ul>
									</div>

									<div
										className="hww-item mt-12 wow fadeInLeft"
										data-wow-delay=".7s"
									>
										<div className="hww-step">
											<span>04</span>
										</div>
										<div className="process-content">
											<h5>Implementation</h5>
											<p>We execute the transition based on the project’s size and complexity.</p>
										</div>
										<ul className="wow fadeInUp">
											<li><span><i className="tji-check"></i></span>Timeline: We customize timelines based on project complexity. We use a rapid deployment strategy to ensure operations start as quickly as possible.</li>
											<li><span><i className="tji-check"></i></span>Documentation: Every process is documented with real-time updates for any changes.</li>
											<li><span><i className="tji-check"></i></span>Training: Our team is educated on your specific process guidelines, data handling standards, and quality requirements.</li>
											<li><span><i className="tji-check"></i></span>Optimization: We perform immediate course corrections to maximize process efficiency from day one.</li>
										</ul>
									</div>

									<div
										className="hww-item mt-12 wow fadeInLeft"
										data-wow-delay=".7s"
									>
										<div className="hww-step">
											<span>05</span>
										</div>
										<div className="process-content">
											<h5>Monitoring & Review</h5>
											<p>We maintain strict quality control through constant monitoring.</p>
										</div>
										<ul className="wow fadeInUp">
											<li><span><i className="tji-check"></i></span>Precision: Extra control checks and rigorous validation ensure high accuracy.</li>
											<li><span><i className="tji-check"></i></span>Agility: Quick fixes and process tweaks are applied immediately.</li>
											<li><span><i className="tji-check"></i></span>Transparency: Regular reporting gives you complete visibility into project quality and progress.</li>
										</ul>
									</div>

								</div>
							</div>)}

							{activeHww.id === 2 && (<div className="how-we-work-right-wrap wow fadeInUp" data-wow-delay=".1s">
								<div
									id="how-we-work-right"
									className="how-we-work-right team-pad-18"
									style={{
										transition: "all .3s ease-in-out",
										opacity: fade ? 1 : 0.3,
									}}
								>
									<p>
										We help clients drive efficiency and reduce operational costs by providing high-quality, precise <strong>Data Management, KPO, and BPO/BPM solutions.</strong> We offer flexible engagement models tailored to your specific business needs.
									</p>
									<h5>
										Dedicated Resource (FTE) Model
									</h5>
									<p> This model acts as an extension of your team. You are assigned dedicated resources or a full team solely focused on your project. If you opt for a team, a dedicated Project Manager serves as your single point of contact. You receive daily or monthly reports to track output and status transparently.</p>
									<p>
										This model is ideal for both large enterprises and startups seeking predictability. Fixed monthly fees and clear SLAs ensure you know exactly what is being delivered and at what cost.
									</p>
									<div className={`col-lg-12`}>
										<BootstrapWrapper>
											<div
												className={`accordion hww-tj-faq`}
												id="itemsDataEngagementModelsOne"
											>
												{itemsDataEngagementModelsOne?.length
													? itemsDataEngagementModelsOne?.map((item, idx) => (
														<FaqItem key={idx} item={item} idx={idx} />
													))
													: ""}
											</div>
										</BootstrapWrapper>
									</div>
									<p></p>
									<h5>
										Volume-Based Pricing Model
									</h5>
									<p>Designed for clients with established outsourcing processes, this model links costs directly to output. Success relies on a clear understanding of data volumes and processing time. Pricing is determined by the volume handled (e.g., per record or per form). We use a tiered pricing system where the cost per unit drops as your volume grows.</p>
									<p>
										We recommend this model for businesses with predictable volume patterns. Alternatively, we can start with an FTE model to establish benchmarks before transitioning to volume-based pricing.
									</p>
									<div className={`col-lg-12 mt-24`}>
										<BootstrapWrapper>
											<div
												className={`accordion hww-tj-faq`}
												id="itemsDataEngagementModelsTwo"
											>
												{itemsDataEngagementModelsTwo?.length
													? itemsDataEngagementModelsTwo?.map((item, idx) => (
														<FaqItem key={idx} item={item} idx={idx} />
													))
													: ""}
											</div>
										</BootstrapWrapper>
									</div>

								</div>
							</div>)}

							{activeHww.id === 3 && (<div className="how-we-work-right-wrap wow fadeInUp" data-wow-delay=".1s">
								<div
									id="how-we-work-right"
									className="how-we-work-right team-pad-18"
									style={{
										transition: "all .3s ease-in-out",
										opacity: fade ? 1 : 0.3,
									}}
								>
									<p>
										At Computyne, security is more than just compliance. It is the foundation of our business. We are proud to be <strong>ISO/IEC 27001:2022 certified and GDPR compliant.</strong> This ensures our Information Security Management Systems meet the highest global standards. We employ a multi-layered security approach to protect our <strong>Data Management, KPO, and BPO</strong> operations.
									</p>
									<h5>
										Our Data Protection Commitment
									</h5>
									<p></p>
									<div className={`col-lg-12`}>
										<BootstrapWrapper>
											<div
												className={`accordion hww-tj-faq`}
												id="itemsDataSecurityInfrastructureOne"
											>
												{itemsDataSecurityInfrastructureOne?.length
													? itemsDataSecurityInfrastructureOne?.map((item, idx) => (
														<FaqItem key={idx} item={item} idx={idx} />
													))
													: ""}
											</div>
										</BootstrapWrapper>
									</div>
									<p></p>
									<h5>
										Operational & Physical Security
									</h5>
									<p>Our facilities are designed to be secure environments. This ensures that your data remains safe at rest and in transit.</p>
									<div className={`col-lg-12 mt-24`}>
										<BootstrapWrapper>
											<div
												className={`accordion hww-tj-faq`}
												id="itemsDataSecurityInfrastructureTwo"
											>
												{itemsDataSecurityInfrastructureTwo?.length
													? itemsDataSecurityInfrastructureTwo?.map((item, idx) => (
														<FaqItem key={idx} item={item} idx={idx} />
													))
													: ""}
											</div>
										</BootstrapWrapper>
									</div>

								</div>
							</div>)}

						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default HowWeWork;
