import modifyNumber from "@/libs/modifyNumber";
import Image from "next/image";
import Link from "next/link";
import ButtonPrimary from "../buttons/ButtonPrimary";

const BlogCard1 = ({ blog, idx }) => {
    const {
        title,
        desc,
        id,
        slug,
        img,
        smallImg,
        category,
        date,
        day,
        month,
    } = blog || {};

    return (
        <div
            className="blog-item wow fadeInUp"
            data-wow-delay={`0.${idx + 1}s`}
        >
            <div className="blog-thumb">
                <Link
                    href={`/blog/${slug}`}
                    style={{ display: "block" }}
                >
                    <Image
                        src={smallImg || img || "/images/blog/blog-1.webp"}
                        alt={title || "Blog thumbnail"}
                        width={870}
                        height={450}
                        style={{
                            width: "100%",
                            height: "auto",
                            objectFit: "cover",
                        }}
                        sizes="(max-width: 768px) 100vw, 870px"
                    />
                </Link>

                <div className="blog-date-sm">
                    <span className="date">
                        {modifyNumber(day)}
                    </span>
                    <span className="month">{month}</span>
                </div>
            </div>

            <div className="blog-content">
                <div className="blog-meta">
                    <span className="categories">
                        <Link href="" scroll={false}>
                            {category}
                        </Link>
                    </span>
                </div>

                <h4 className="title">
                    <Link href={`/blog/${slug}`}>
                        {title}.
                    </Link>
                </h4>

                <ButtonPrimary
                    text="Read More"
                    url={`/blog/${slug}`}
                    isTextBtn={true}
                />
            </div>
        </div>
    );
};

export default BlogCard1;
