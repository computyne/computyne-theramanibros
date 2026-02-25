import makePath from "@/libs/makePath";
import Image from "next/image";
import Link from "next/link";
import ButtonPrimary from "@/components/shared/buttons/ButtonPrimary";
import React from "react";

const CaseStudyCard = ({casestudy, idx}) => {
    const {title, desc, id, slug, img, category, date, day, month} = casestudy || {};
    return (
        <div className="blog-item wow fadeInUp" data-wow-delay={`0.${idx + 1}s`}>
            <div className="blog-thumb">
                <Link href={`/case-studies/${slug}`}>
                    {" "}
                    {/* <Image
						src={img ? img : "/images/blog/blog-1.webp"}
						alt="Images"
						width={870}
						height={450}
					/> */}
                    <Image
                        src={img}
                        alt="Images"
                        fill
                        style={{objectFit: "cover", objectPosition: "center"}}
                        sizes="(max-width: 768px) 100vw, 870px"
                    />
                </Link>
                {/* <div className="blog-date">
					<span className="date">{modifyNumber(day)}</span>
					<span className="month">{month}</span>
				</div> */}
            </div>
            <div className="blog-content">
                <div className="blog-meta">
                    {/* <span className="categories">
						<Link href={`/case-studies?category=${makePath(category)}`}>
							{" "}
							{category}
						</Link>
					</span> */}
                    {category.map((cat, index) => (
                        <span className="categories" key={cat}>
							<Link href="#">
								{cat}
							</Link>
						</span>
                    ))}
                </div>
                <h4 className="title">
                    <Link href={`/case-studies/${slug}`}>{title}.</Link>
                </h4>
                <ButtonPrimary
                    text={"Read More"}
                    url={`/case-studies/${slug}`}
                    isTextBtn={true}
                />
            </div>
        </div>
    );
};

export default CaseStudyCard;
