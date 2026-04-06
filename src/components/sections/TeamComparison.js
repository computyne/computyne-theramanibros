"use client";

import {usePathname} from "next/navigation";
import teamComparisonData from "../../../public/data/team-comparison-data.json";

const TeamComparison = ({ type = 1 }) => {
	const pathname = usePathname();
	const slug = pathname.split("/").filter(Boolean).pop();
	const serviceData = teamComparisonData[slug];

	if (!serviceData || !serviceData.comparisonData) {
		return null;
	}

	// Get dynamic image from service data, fallback to a default image
	const comparisonImage = serviceData?.image || "/images/about/about-us-overview.webp";

	const isThreeWayComparison = serviceData.comparisonData[0]?.upwork !== undefined;
	const isInHouseComparison = serviceData.comparisonData[0]?.inhouse !== undefined;
	const isFourWayComparison = isThreeWayComparison && isInHouseComparison;

	return (
		<section
			className={`${
				type === 2 || type === 3 ? "tj-team-comparison-section-2" : "tj-team-comparison-section"
			} ${type === 3 ? "section-top-gap" : "section-gap"} h7-testimonial`}
		>
			<div className="container">
				<div className="row">
					<div className="col-12">
						<div
							className={`sec-heading text-center ${
								type === 2 || type === 3 ? "" : "style-2"
							}`}
						>
							<span className="sub-title wow fadeInUp" data-wow-delay=".3s">
								{type === 2 || type === 3 ? <i className="tji-box"></i> : ""}{" "}
								{serviceData?.span || "MANAGED TEAM VS FREELANCE"}
							</span>
							<h2
								className={`sec-title ${
									type === 2 || type === 3 ? "title-anim" : "text-anim"
								}`}
							>
								{serviceData?.h2 || "Why Businesses Choose Computyne Over Upwork or Fiverr"}
							</h2>
						</div>
					</div>
				</div>
				<div className="row comparison-content-wrapper">
					<div className="col-lg-7 col-md-8 mb-4 mb-lg-0">
						<div
							className="testimonial-wrapper h7-testimonial-wrapper wow fadeInLeftBig"
							data-wow-delay=".3s"
						>
							<div className="comparison-table-wrapper">
								<div className="table-responsive">
									<table className="comparison-table">
										<thead>
											<tr>
												<th className="factor-column">Factor</th>
												{isFourWayComparison ? (
													<>
														<th className="upwork-column">
															<div className="column-header">
																<span>Upwork or Fiverr</span>
															</div>
														</th>
														<th className="belay-column">
															<div className="column-header">
																<span>BELAY or Wing</span>
															</div>
														</th>
														<th className="inhouse-column">
															<div className="column-header">
																<span>In-House Hire</span>
															</div>
														</th>
														<th className="computyne-column">
															<div className="column-header">
																<span className="platform-icon">🏢</span>
																<span>Computyne</span>
															</div>
														</th>
													</>
												) : isInHouseComparison ? (
													<>
														<th className="inhouse-column">
															<div className="column-header">
																<span>Build In-House</span>
															</div>
														</th>
														<th className="computyne-column">
															<div className="column-header">
																<span className="platform-icon">🏢</span>
																<span>Hire Externally via Computyne</span>
															</div>
														</th>
													</>
												) : isThreeWayComparison ? (
													<>
														<th className="upwork-column">
															<div className="column-header">
																<span>Upwork or Fiverr</span>
															</div>
														</th>
														<th className="belay-column">
															<div className="column-header">
																<span>BELAY or Fancy Hands</span>
															</div>
														</th>
														<th className="computyne-column">
															<div className="column-header">
																<span className="platform-icon">🏢</span>
																<span>Computyne Managed VAs</span>
															</div>
														</th>
													</>
												) : (
													<>
														<th className="freelance-column">
															<div className="column-header">
																<span className="platform-icon">👤</span>
																<span>Freelance (Upwork/Fiverr)</span>
															</div>
														</th>
														<th className="computyne-column">
															<div className="column-header">
																<span className="platform-icon">🏢</span>
																<span>Computyne Managed Team</span>
															</div>
														</th>
													</>
												)}
											</tr>
										</thead>
										<tbody>
											{serviceData.comparisonData.map((item, index) => (
												<tr key={index} className="comparison-row">
													<td className="factor-cell">
														<strong>{item.factor}</strong>
													</td>
													{isFourWayComparison ? (
														<>
															<td className="upwork-cell">
																<span className="upwork-text">{item.upwork}</span>
															</td>
															<td className="belay-cell">
																<span className="belay-text">{item.belay}</span>
															</td>
															<td className="inhouse-cell">
																<span className="inhouse-text">{item.inhouse}</span>
															</td>
															<td className="computyne-cell">
																<span className="computyne-text">{item.computyne}</span>
															</td>
														</>
													) : isInHouseComparison ? (
														<>
															<td className="inhouse-cell">
																<span className="inhouse-text">{item.inhouse}</span>
															</td>
															<td className="computyne-cell">
																<span className="computyne-text">{item.computyne}</span>
															</td>
														</>
													) : isThreeWayComparison ? (
														<>
															<td className="upwork-cell">
																<span className="upwork-text">{item.upwork}</span>
															</td>
															<td className="belay-cell">
																<span className="belay-text">{item.belay}</span>
															</td>
															<td className="computyne-cell">
																<span className="computyne-text">{item.computyne}</span>
															</td>
														</>
													) : (
														<>
															<td className="freelance-cell">
																<span className="freelance-text">{item.freelance}</span>
															</td>
															<td className="computyne-cell">
																<span className="computyne-text">{item.computyne}</span>
															</td>
														</>
													)}
												</tr>
											))}
										</tbody>
									</table>
								</div>
							</div>
						</div>
					</div>
					<div className="col-lg-5 col-md-4">
						<div className="comparison-image-wrapper wow fadeInRightBig d-flex align-items-center justify-content-center h-100" data-wow-delay=".5s">
							<div className="comparison-image p-3 d-flex align-items-center justify-content-center">
								<img src={comparisonImage} alt="Service Comparison" className="img-fluid" />
							</div>
							<div className="bg-shape-3">
								<img src="/images/shape/h7-testimonial-shape-blur-mod.svg" alt=""/>
							</div>
						</div>
					</div>
				</div>
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

export default TeamComparison;
