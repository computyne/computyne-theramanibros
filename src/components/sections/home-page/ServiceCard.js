import Image from "next/image";
import Link from "next/link";

const ServiceCard = ({blog, idx}) => {
    const {
        title,
        desc,
        id,
        img,
        link
    } = blog || {};
    return (
        <div className="blog-item wow fadeInUp" data-wow-delay=".3s">
            <div className="blog-thumb">
                <Link href={link}>
                    {" "}
                    <Image src={img} alt="Images" width={870} height={450}/>
                </Link>
            </div>
            <div className="blog-content">
                <h4 className="title">
                    <Link href={link}>{title}</Link>
                </h4>
                <p className="desc">{desc}</p>
                <Link className="text-btn" href={link}>
					<span className="btn-text">
						<span>Read More</span>
					</span>
                    <span className="btn-icon">
						<i className="tji-arrow-right-long"></i>
					</span>
                </Link>
            </div>
        </div>
    );
};

export default ServiceCard;
