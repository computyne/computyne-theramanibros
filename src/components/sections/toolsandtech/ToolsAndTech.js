"use client";

import {usePathname} from "next/navigation";
import BlogTagsWidget from "../../shared/sidebar/widgets/BlogTagsWidget";
import ToolCategoriesWidget from "./ToolCategoriesWidget";
import toolsTechData from "../../../../public/data/tools-tech-data.json";

const ToolsAndTech = ({ type = 1 }) => {
	const pathname = usePathname();
	const slug = pathname.split("/").filter(Boolean).pop();
	const serviceData = toolsTechData[slug];

	if (!serviceData || (!serviceData.tags && !serviceData.toolCategories && !serviceData.platformCategories)) {
		return null;
	}

	const hasToolCategories = serviceData.toolCategories && serviceData.toolCategories.length > 0;
	const hasPlatformCategories = serviceData.platformCategories && serviceData.platformCategories.length > 0;

	return (
		<section
			className={`${
				type === 2 || type === 3 ? "tj-tools-section-2" : "tj-tools-section"
			} ${type === 3 ? "section-top-gap" : "section-gap"} `}
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
								{serviceData?.span || "Tools & Technologies"}
							</span>
							<h2
								className={`sec-title ${
									type === 2 || type === 3 ? "title-anim" : "text-anim"
								}`}
							>
								{serviceData?.h2 || "Our Technology Stack"}
							</h2>
						</div>
					</div>
				</div>
				<div className="row">
					{hasToolCategories ? (
						<ToolCategoriesWidget toolCategories={serviceData.toolCategories} />
					) : hasPlatformCategories ? (
						<ToolCategoriesWidget toolCategories={serviceData.platformCategories} />
					) : (
						<div className="col-md-4">
							<BlogTagsWidget tags={serviceData.tags} />
						</div>
					)}
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

export default ToolsAndTech;
