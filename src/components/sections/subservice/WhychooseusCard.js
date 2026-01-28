const WhychooseusCard = ({whychooseus}) => {
    const {
        title,
        desc,
    } = whychooseus ? whychooseus : {};
    return (
        <div className="testimonial-item">
            <div className="testimonial-author-mod">
                <div className="author-inner">
                    <div className="author-header">
                        <h3 className="title">{title}</h3>
                    </div>
                </div>
            </div>
            <div className="desc-mod">
                <p>{desc}</p>
            </div>
        </div>
    );
};

export default WhychooseusCard;
