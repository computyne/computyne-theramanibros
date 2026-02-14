import ButtonPrimary from "./ButtonPrimary";

const IndustriesCard = ({industry, idx}) => {
    const {title, desc, id, img, url} = industry || {};
    const isValidUrl = !!url && url.trim() !== "" && url.trim() !== "#";
    return (
        <div className="blog-item style-2">
            <div className="blog-thumb wd-30-custom">
                <img src={img ? img : "/images/blog/blog-4.webp"} alt=""/>
            </div>
            <div className="blog-content">
                <div className="title-area">
                    <h4 className="title">
                        {title}
                    </h4>
                    <p className="desc  wow fadeInUp" data-wow-delay=".8s">
                        {desc}
                    </p>
                </div>

                {isValidUrl && (
                    <ButtonPrimary
                        text={"Read More"}
                        url={url}
                        isTextBtn={true}
                    />
                )}
            </div>
        </div>
    );
};

export default IndustriesCard;
