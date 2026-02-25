import makePath from "@/libs/makePath";
import modifyNumber from "@/libs/modifyNumber";
import Image from "next/image";
import Link from "next/link";
import ButtonPrimary from "../buttons/ButtonPrimary";

const BlogCard1 = ({blog, idx}) => {
    const {title, desc, id, slug, img, category, date, day, month} = blog || {};
    return (
        <div className="blog-item wow fadeInUp" data-wow-delay={`0.${idx + 1}s`}>
            <div className="blog-thumb">
                <Link href={`/blog/${slug}`}>
                    {" "}
                    {/* <Image
						src={img}
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
                <div className="blog-date-sm">
                    <span className="date">{modifyNumber(day)}</span>
                    <span className="month">{month}</span>
                </div>
            </div>
            <div className="blog-content">
                <div className="blog-meta">
					<span className="categories">
						<Link
                          href=""
                          scroll={false}
                        >
                          {category}
                        </Link>
					</span>
                    {/* <span>
						By <Link href={`/blogs/${id}`}>Ellinien Loma</Link>
					</span> */}
                </div>
                <h4 className="title">
                    <Link href={`/blog/${slug}`}>{title}.</Link>
                </h4>
                <ButtonPrimary
                    text={"Read More"}
                    url={`/blog/${slug}`}
                    isTextBtn={true}
                />
            </div>
        </div>
    );
};

export default BlogCard1;
