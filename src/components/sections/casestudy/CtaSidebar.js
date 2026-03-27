import Image from "next/image";
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
                <Image
                    src="/images/service/img-menu-3rd.png"
                    alt="Computyne pilot project support illustration"
                    width={464}
                    height={426}
                    style={{width: "100%", height: "auto"}}
                    sizes="(max-width: 991px) 100vw, 380px"
                />
            </div>
        </div>
    );
};

export default CtaSidebar;
