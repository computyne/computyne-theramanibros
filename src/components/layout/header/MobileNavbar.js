import getNavItems from "@/libs/getNavItems";
import Image from "next/image";
import Link from "next/link";
import MobileMenuItem from "./MobileMenuItem";

const MobileNavbar = () => {
    const navItems = getNavItems();

    const servicesNav = navItems[1];
    const hireResourcesNav = navItems[2];
    const industriesNav = navItems[3];
    const aboutNav = navItems[4]
    const insightNav = navItems[5];
    const contactNav = navItems[6];

    return (
        <div className="hamburger_menu">
            <div className="mobile_menu mean-container">
                <div className="mean-bar">
                    <Link
                        href="#nav"
                        className="meanmenu-reveal"
                        style={{right: 0, left: "auto"}}
                    >
						<span>
							<span>
								<span></span>
							</span>
						</span>
                    </Link>
                    <nav className="mean-nav">
                        <ul>
                            <MobileMenuItem
                                text={servicesNav?.name}
                                url={servicesNav?.path}
                                submenuClass={"header__mega-menu mega-menu mega-menu-pages"}
                            >
                                <li>
                                    <div className="mega-menu-wrapper">
                                        {servicesNav?.submenu?.length
                                            ? servicesNav?.submenu?.map((pageItem, idx) => (
                                                <div key={idx} className="mega-menu-pages-single">
                                                    <div className="mega-menu-pages-single-inner">
                                                        <Link href={pageItem?.path} className="mega-menu-title">
                                                            <h6 className="mega-menu-title">
                                                                {pageItem?.name}
                                                            </h6>
                                                        </Link>
                                                        <div className="mega-menu-list">
                                                            {pageItem?.items?.length
                                                                ? pageItem?.items?.map((item, idx2) => (
                                                                    <Link
                                                                        key={100 + idx2}
                                                                        href={item?.path ? item?.path : "/"}
                                                                        className={
                                                                            item?.isActive ? "active" : ""
                                                                        }
                                                                    >
                                                                        {item?.name}
                                                                        {item?.badge ? (
                                                                            <span
                                                                                className={`mega-menu-badge tj-zoom-in-out-anim ${
                                                                                    item?.badge === "HOT"
                                                                                        ? "mega-menu-badge-hot"
                                                                                        : ""
                                                                                }`}
                                                                            >
																						{item?.badge}
																					</span>
                                                                        ) : (
                                                                            ""
                                                                        )}
                                                                    </Link>
                                                                ))
                                                                : ""}
                                                        </div>
                                                    </div>
                                                </div>
                                            ))
                                            : ""}
                                        <div className="col-12 col-lg-3 mega-menu-pages-single">
                                            <div className="mega-menu-pages-single-inner">
                                                <div className="feature-box">
                                                    <div className="feature-content">
                                                        <h2 className="title">Validate</h2>
                                                        <span style={{fontSize: "15px"}}>Quality Before You Commit.</span>
                                                        <Link
                                                            className="read-more feature-contact"
                                                            href="/contact-us"
                                                        >
                                                            <span>Start a Free Pilot Project</span>
                                                        </Link>
                                                    </div>
                                                    <div className="feature-images">
                                                        {/* <img src="/images/service/menu-image.png" alt="" /> */}
                                                        <img src="/images/service/img-menu-3rd.png" alt=""/>
                                                        {/* service-ad */}
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </li>
                            </MobileMenuItem>

                            <MobileMenuItem
                                text={hireResourcesNav?.name}
                                url={hireResourcesNav?.path ? hireResourcesNav?.path : "#"}
                            >
                                {hireResourcesNav?.submenu?.length
                                    ? hireResourcesNav?.submenu?.map((item, idx) => (
                                        <li
                                            key={idx}
                                            className={item?.isActive ? "current-menu-item" : ""}
                                        >
                                            <Link href={item?.path ? item?.path : "#"}>
                                                {item?.name ? item?.name : "Hire Resources"}
                                            </Link>
                                        </li>
                                    ))
                                    : ""}
                            </MobileMenuItem>

                            <MobileMenuItem
                                text={industriesNav?.name}
                                url={industriesNav?.path ? industriesNav?.path : "#"}
                                submenuClass={"mega-menu-service"}
                            >
                                {industriesNav?.submenu?.length
                                    ? industriesNav?.submenu?.map((item, idx) => (
                                        <li key={idx}>
                                            <Link
                                                className="mega-menu-service-single"
                                                href={item?.path ? item?.path : "/"}
                                            >
                                                {" "}
                                                <span className="mega-menu-service-icon">
														<i
                                                            className={
                                                                item?.icon ? item?.icon : "tji-service-1"
                                                            }
                                                        ></i>
													</span>{" "}
                                                <span className="mega-menu-service-title">
														{item?.name
                                                            ? item?.name
                                                            : "Business process optimization"}
													</span>{" "}
                                                <span className="mega-menu-service-nav">
														<i className="tji-arrow-right-long"></i>
														<i className="tji-arrow-right-long"></i>
													</span>
                                            </Link>
                                        </li>
                                    ))
                                    : ""}
                            </MobileMenuItem>

                            <MobileMenuItem
                                text={insightNav?.name}
                                url={insightNav?.path ? insightNav?.path : "#"}
                            >
                                {insightNav?.submenu?.length
                                    ? insightNav?.submenu?.map((item, idx) => (
                                        <li
                                            key={idx}
                                            className={item?.isActive ? "current-menu-item" : ""}
                                        >
                                            <Link href={item?.path ? item?.path : ""}>
                                                {item?.name ? item?.name : ""}
                                            </Link>
                                        </li>
                                    ))
                                    : ""}
                            </MobileMenuItem>
                            <li className="mean-last">
                                <Link href={aboutNav?.path ? aboutNav?.path : "#"}>
                                    {" "}
                                    {aboutNav?.name ? aboutNav?.name : "About Us"}
                                </Link>
                            </li>

                            <li className="mean-last">
                                <Link href={contactNav?.path ? contactNav?.path : "#"}>
                                    {" "}
                                    {contactNav?.name ? contactNav?.name : "Contact"}
                                </Link>
                            </li>
                        </ul>
                    </nav>
                </div>
            </div>
        </div>
    );
};

export default MobileNavbar;
