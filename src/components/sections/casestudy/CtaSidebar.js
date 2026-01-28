import Link from "next/link";

const CtaSidebar = () => {
    return (
        <div className="feature-box">
            <div className="feature-content">
                <h2 className="title-24">Validate</h2>
                <span>Quality Before You Commit.</span>
                <Link className="read-more feature-contact" href="/contact-us">
                    {/* <i className="tji-phone-3"></i> */}
                    <span>Start a Free Pilot Project</span>
                </Link>
            </div>
            <div className="feature-images">
                {/* <img src="/images/service/service-ad.webp" alt="" /> */}
                <img src="/images/service/img-menu-3rd.png" alt=""/>
            </div>
        </div>
    );
};

export default CtaSidebar;
