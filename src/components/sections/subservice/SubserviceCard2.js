import Link from "next/link";
import Image from "next/image";

const SubserviceCard2 = ({subservice, idx}) => {
    const {title, desc, id, data, url, img = "/images/blog/blog-1.webp"} = subservice || {};
    const isValidUrl = url?.trim().length > 0 && url?.trim() !== '#';

    return (
        <div className="blog-item wow fadeInUp" data-wow-delay=".3s">
            <div className="blog-thumb">
                {isValidUrl ? (
                    <Link href={url}>
                        <Image src={img} alt="Images" width={870} height={450}/>
                    </Link>
                ) : (
                    <Image src={img} alt="Images" width={870} height={450}/>
                )}
            </div>

            <div className="blog-content">
                <h4 className="title">
                    {isValidUrl ? (
                        <Link href={url}>{title}</Link>
                    ) : (
                        title
                    )}
                </h4>

                <p className="desc">{desc}</p>

                {isValidUrl && (
                    <Link className="text-btn" href={url}>
                <span className="btn-text">
                    <span>Read More</span>
                </span>
                        <span className="btn-icon">
                    <i className="tji-arrow-right-long"></i>
                </span>
                    </Link>
                )}
            </div>
        </div>

    );
};

export default SubserviceCard2;
