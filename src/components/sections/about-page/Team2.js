"use client";
import ButtonPrimary from "@/components/shared/buttons/ButtonPrimary";
import getTeamMembers from "@/libs/getTeamMembers";
import { useCallback, useEffect, useRef, useState } from "react";
import TeamCard2 from "./TeamCard2";
import FunfactSingle from "./FunfactSingle";
import BootstrapWrapper from "./BootstrapWrapper";
import FaqItem from "./FaqItem";

const itemsData = [
		{
			title: "Identification Our experts collaborate with you to map the scope of work.",
			desc: "	Getting started is easy! Simply reach out to us through our contact form or give us a call, and we’ll schedule a consultation to discuss your project and how we can best assist you. Our team keeps you informed throughout the process, ensuring quality control and timely delivery.",
			initActive: true,
		},
		{
			title: "Target Operating Model Using data from the identification phase, we build a custom operating model.",
			desc: "	Getting started is easy! Simply reach out to us through our contact form or give us a call, and we’ll schedule a consultation to discuss your project and how we can best assist you. Our team keeps you informed throughout the process, ensuring quality control and timely delivery.",
			initActive: false,
		},
		{
			title: "How do you ensure the success of a project?",
			desc: "	Getting started is easy! Simply reach out to us through our contact form or give us a call, and we’ll schedule a consultation to discuss your project and how we can best assist you. Our team keeps you informed throughout the process, ensuring quality control and timely delivery.",
			initActive: false,
		},
		{
			title: "How long will it take to complete my project?",
			desc: "	Getting started is easy! Simply reach out to us through our contact form or give us a call, and we’ll schedule a consultation to discuss your project and how we can best assist you. Our team keeps you informed throughout the process, ensuring quality control and timely delivery.",
			initActive: false,
		},
		{
			title: "Can I track the progress of my project?",
			desc: "	Getting started is easy! Simply reach out to us through our contact form or give us a call, and we’ll schedule a consultation to discuss your project and how we can best assist you. Our team keeps you informed throughout the process, ensuring quality control and timely delivery.",
			initActive: false,
		},
	];

const Team2 = () => {
	const items = getTeamMembers()?.slice(0, 4);
	const [activeMember, setActiveMember] = useState(items[0]);
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
	setActiveMember(member);
	setFade(false);
	setFade2(false);

	timeout1.current = setTimeout(() => {
		setFade(true);
		setFade2(true);

		timeout2.current = setTimeout(() => {
			setFade2(false);

			timeout3.current = setTimeout(() => {
				setFade2(true);
			}, 300);
		}, 300);
	}, 300);
}, []);


	useEffect(() => {
		return () => {
			clearTimeout(timeout1.current);
			clearTimeout(timeout2.current);
			clearTimeout(timeout3.current);
		};
	}, []);
	return (
		<section className="tj-team-section-2 section-gap">
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
						<div className="team-wrapper">
							<div className="team-item-wrap">
								{items?.length
									? items.map((item, idx) => (
											<TeamCard2
												key={idx}
												teamMember={item}
												activeMember={activeMember}
												// handleMouseEnter={handleMouseEnter}
												handleClick={handleClick}
											/>
									  ))
									: ""}
							</div>
							<div className="team-img-wrap wow fadeInUp" data-wow-delay=".5s">
								<div
									id="team-img"
									className="team-img team-pad-18"
									style={{
										transition: "all .3s ease-in-out",
										opacity: fade ? 1 : 0.3,
									}}
								>
									<p>
										<strong>The Transition Process</strong> Successful outsourcing relies on a smooth transition of business processes. We draw on over a decade of experience transitioning complex <strong>Data Management, KPO, and BPO/BPM solutions</strong> to ensure your move to our environment is seamless.
									</p>
									<p>
										<strong>Data Transfer: Flexible Engagement Models</strong> We offer two secure methods for handling your data:
									</p>
									<div className="row row-gap-4">

										<div className="col-lg-6 col-md-6 order-lg-4 order-4">
											<div
												className="how-we-work-item wow fadeInLeft"
												data-wow-delay=".7s"
											>
												<span className="count-icon">
													<i className="tji-worldwide"></i>
												</span>
												{/* <div className="how-we-work-step-about">
													<span>01</span>
												</div> */}
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
												className="how-we-work-item wow fadeInLeft"
												data-wow-delay=".7s"
											>
												<span className="count-icon">
													<i className="tji-worldwide"></i>
												</span>
												{/* <div className="how-we-work-step-about">
													<span>02</span>
												</div> */}
												<div className="process-content">
													<h5 className="title">Computyne Environment (Managed Secure Server)</h5>
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
										className="how-we-work-item wow fadeInLeft"
										data-wow-delay=".7s"
									>
										<div className="how-we-work-step-about">
											<span>01</span>
										</div>
										
											<div className="process-content">
												<h6 >Identification Our experts collaborate with you to map the scope of work.</h6>
											</div>
											<ul className="wow fadeInUp">
												<li><span><i className="tji-check"></i></span>Analyze: Determine the volume and nature of the business processes to outsource.</li>
												<li><span><i className="tji-check"></i></span>Document: Review current systems and process documentation.</li>
												<li><span><i className="tji-check"></i></span>Align: Connect via video or chat to deeply understand your business model and expectations.</li>
											</ul>
										
									</div>
									<div
										className="how-we-work-item mt-12 wow fadeInLeft"
										data-wow-delay=".7s"
									>
										<div className="how-we-work-step-about">
											<span>02</span>
										</div>
										<div className="process-content">
											<h5 >Target Operating Model Using data from the identification phase, we build a custom operating model.</h5>
										</div>
										<ul className="wow fadeInUp">
											<li><span><i className="tji-check"></i></span>Define Boundaries: Clearly distinguish between Computyne’s responsibilities and your internal operations.</li>
											<li><span><i className="tji-check"></i></span>Set KPIs: Agree on critical performance indicators and reporting timelines.</li>
											<li><span><i className="tji-check"></i></span>Innovate: Develop new processes where necessary to improve efficiency.</li>
										</ul>
									</div>

									<div
										className="how-we-work-item mt-12 wow fadeInLeft"
										data-wow-delay=".7s"
									>
										<div className="how-we-work-step-about">
											<span>03</span>
										</div>
										<div className="process-content">
											<h5>Strategic Planning We design a comprehensive migration plan covering resource deployment, technology infrastructure, and timelines to ensure the project stays on track.</h5>
										</div>
									</div>

									<div
										className="how-we-work-item mt-12 wow fadeInLeft"
										data-wow-delay=".7s"
									>
										<div className="how-we-work-step-about">
											<span>04</span>
										</div>
										<div className="process-content">
											<h5>Implementation We execute the transition based on the project’s size and complexity.</h5>
										</div>
										<ul className="wow fadeInUp">
											<li><span><i className="tji-check"></i></span>Timeline: We customize timelines based on project complexity. We use a rapid deployment strategy to ensure operations start as quickly as possible.</li>
											<li><span><i className="tji-check"></i></span>Documentation: Every process is documented with real-time updates for any changes.</li>
											<li><span><i className="tji-check"></i></span>Training: Our team is educated on your specific process guidelines, data handling standards, and quality requirements.</li>
											<li><span><i className="tji-check"></i></span>Optimization: We perform immediate course corrections to maximize process efficiency from day one.</li>
										</ul>
									</div>

									<div
										className="how-we-work-item mt-12 wow fadeInLeft"
										data-wow-delay=".7s"
									>
										<div className="how-we-work-step-about">
											<span>05</span>
										</div>
										<div className="process-content">
											<h5>Monitoring & Review We maintain strict quality control through constant monitoring.</h5>
										</div>
										<ul className="wow fadeInUp">
											<li><span><i className="tji-check"></i></span>Precision: Extra control checks and rigorous validation ensure high accuracy.</li>
											<li><span><i className="tji-check"></i></span>Agility: Quick fixes and process tweaks are applied immediately.</li>
											<li><span><i className="tji-check"></i></span>Transparency: Regular reporting gives you complete visibility into project quality and progress.</li>
										</ul>
									</div>
									
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default Team2;
