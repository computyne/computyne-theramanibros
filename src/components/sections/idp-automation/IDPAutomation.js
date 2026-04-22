"use client";

import {usePathname} from "next/navigation";
import idpAutomationData from "../../../../public/data/service/idp-automation-data.json";

const IDPAutomation = () => {
	const pathname = usePathname();
	const slug = pathname.split("/").filter(Boolean).pop();
	const serviceData = idpAutomationData[slug];

	if (!serviceData) {
		return null;
	}

	return (
		<section className="tj-idp-automation-section section-gap">
			<div className="container">
				<div className="row">
					<div className="col-12">
						<div className="sec-heading text-center style-2">
							<span className="sub-title wow fadeInUp" data-wow-delay=".3s">
								<i className="tji-box"></i> {serviceData?.span}
							</span>
							<h2 className="sec-title text-anim">
								{serviceData?.h2}
							</h2>
						</div>
					</div>
				</div>

				{/* Description */}
				<div className="row">
					<div className="col-lg-10 offset-lg-1">
						<div className="idp-description-wrapper text-center wow fadeInUp" data-wow-delay=".4s">
							<p className="idp-description">
								{serviceData?.description}
							</p>
						</div>
					</div>
				</div>

				{/* Performance Table */}
				{serviceData?.performanceTable && (
					<div className="row mt-5">
						<div className="col-12">
							<div className="idp-table-card wow fadeInUp" data-wow-delay=".3s">
								<div className="idp-card-header">
									<h3 className="idp-card-title">Document Processing Performance</h3>
								</div>
								<div className="idp-card-body">
									<div className="table-responsive">
										<table className="idp-table">
											<thead>
												<tr>
													{serviceData.performanceTable.headers.map((header, index) => (
														<th key={index}>{header}</th>
													))}
												</tr>
											</thead>
											<tbody>
												{serviceData.performanceTable.rows.map((row, rowIndex) => (
													<tr key={rowIndex}>
														<td className="idp-document-type">{row.documentType}</td>
														<td className="idp-extraction-method">{row.extractionMethod}</td>
														<td className="idp-accuracy">
															<span className="accuracy-badge">{row.accuracy}</span>
														</td>
														<td className="idp-tat">{row.tat}</td>
													</tr>
												))}
											</tbody>
										</table>
									</div>
								</div>
							</div>
						</div>
					</div>
				)}

				{/* Technology Table */}
				{serviceData?.technologyTable && (
					<div className="row mt-5">
						<div className="col-12">
							<div className="idp-table-card wow fadeInUp" data-wow-delay=".5s">
								<div className="idp-card-header">
									<h3 className="idp-card-title">Technology Stack</h3>
								</div>
								<div className="idp-card-body">
									<div className="table-responsive">
										<table className="idp-table">
											<thead>
												<tr>
													{serviceData.technologyTable.headers.map((header, index) => (
														<th key={index}>{header}</th>
													))}
												</tr>
											</thead>
											<tbody>
												{serviceData.technologyTable.rows.map((row, rowIndex) => (
													<tr key={rowIndex}>
														<td className="idp-technology-name">
															<strong>{row.technology}</strong>
														</td>
														<td className="idp-technology-desc">{row.description}</td>
													</tr>
												))}
											</tbody>
										</table>
									</div>
								</div>
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

export default IDPAutomation;
