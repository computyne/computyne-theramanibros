import useActiveLink from "@/hooks/useActiveLink";
import getNavItems from "@/libs/getNavItems";
import getTechServices from "@/libs/getTechServices";
import Link from "next/link";
import {useEffect, useRef, useState} from "react";

const Navbar = ({headerType, isStickyHeader}) => {
    const makeActiveLink = useActiveLink();
    const navItems = getNavItems();
    const techServices = getTechServices();

    const servicesNav = makeActiveLink(navItems[1]);
    const hireResourcesNav = makeActiveLink(navItems[2]);
    const industriesNav = makeActiveLink(navItems[3]);
    const aboutNav = makeActiveLink(navItems[4]);
    const insightNav = makeActiveLink(navItems[5]);
    const contactNav = makeActiveLink(navItems[6]);

    const [activeTab, setActiveTab] = useState(0);
    const [open, setOpen] = useState(false);
    const menuRef = useRef(null);


    return (
        <div className="menu-area d-none d-lg-inline-flex align-items-center">
            <nav id="mobile-menu" className="mainmenu">
                <ul>
                    <li ref={menuRef}
                        className={`has-dropdown services-dropdown ${open ? "open" : ""} ${servicesNav?.isActive ? "current-menu-ancestor" : ""
                        }`}
                    >
                        {/* <Link href={servicesNav?.path}>{servicesNav?.name}</Link> */}
                        <a className="custom-anchor"
                           onClick={(e) => {
                               e.preventDefault();
                               setOpen(prev => !prev);
                           }}>
                            {servicesNav?.name}
                        </a>
                        <ul className="sub-menu header__mega-menu mega-menu mega-menu-pages">
                            <li>
                                <div className="mega-menu-wrapper tabs-layout">
                                    {/* LEFT SIDE : TAB MENU */}

                                    <div className="mega-menu-left">
                                        <div className="mega-menu-tabs">
                                            {servicesNav?.submenu?.map((pageItem, idx) => (
                                                <button
                                                    key={idx}
                                                    className={`mega-tab ${activeTab === idx ? "active" : ""
                                                    }`}
                                                    onClick={() => setActiveTab(idx)}
                                                >
                                                    {pageItem?.name}
                                                </button>
                                            ))}
                                        </div>

                                        {/* DIVIDER */}
                                        <div className="mega-menu-divider"/>

                                        {/* QUICK TECHNOLOGIES */}
                                        <div className="mega-tech-services">
                                            <h6 className="mega-tech-title">Quick Technologies Services</h6>

                                            <div className="mega-tech-grid">
                                                {techServices.map((tech) => (
                                                    <Link
                                                        key={tech.id}
                                                        href={tech.path}
                                                        className="mega-tech-item"
                                                        title={tech.name}
                                                    >
                                                        <img src={tech.icon} alt={tech.name}/>
                                                    </Link>
                                                ))}
                                            </div>


                                        </div>

                                    </div>


                                    {/* CENTER : TAB CONTENT */}
                                    <div className={`mega-menu-center`}>

                                        {/*  TITLE — NOT GRID */}
                                        <div className="mega-menu-submenu-title">
                                            <Link href={servicesNav.submenu[activeTab].path}>
                                                {servicesNav.submenu[activeTab].name}
                                            </Link>
                                        </div>

                                        <div
                                            className={`mega-menu-content ${servicesNav.submenu[activeTab].items.length <= 7
                                                ? "one-column"
                                                : "two-column"
                                            }`}
                                        >
                                            {servicesNav?.submenu?.[activeTab]?.items?.map((item, idx) => (
                                                <Link
                                                    key={idx}
                                                    href={item?.path || "/"}
                                                    className={`mega-menu-item ${item?.isActive ? "active" : ""
                                                    }`}
                                                >
                                                    <div className="item-head">
                                                        <span className="item-title">{item?.name}</span>

                                                        {/* {item?.badge && (
														<span
															className={`mega-menu-badge ${item.badge === "HOT" ? "mega-menu-badge-hot" : ""
																}`}
														>
															{item?.badge}
														</span>
													)} */}
                                                    </div>

                                                    {item?.desc && (
                                                        <p className="item-desc">{item?.desc}</p>
                                                    )}
                                                </Link>
                                            ))}
                                        </div>
                                    </div>

                                    {/* RIGHT SIDE : FEATURE BOX */}

                                    <div className="col-12 col-lg-3 mega-menu-pages-single">
                                        <div className="mega-menu-pages-single-inner">
                                            <div className="feature-box">
                                                <div className="feature-content">
                                                    <h2 className="title-24">Validate</h2>
                                                    <span>Quality Before You Commit.</span>
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
                        </ul>
                    </li>

                    <li
                        className={`has-dropdown ${
                            hireResourcesNav?.isActive ? "current-menu-ancestor" : ""
                        }`}
                    >
                        <Link href={hireResourcesNav?.path ? hireResourcesNav?.path : "#"}>
                            {hireResourcesNav?.name}
                        </Link>
                        {/* <a className="custom-anchor" onClick={(e) => e.preventDefault()}>
							{hireResourcesNav?.name}
						</a> */}
                        <ul className="sub-menu">
                            {hireResourcesNav?.submenu?.length
                                ? hireResourcesNav?.submenu?.map((item, idx) => (
                                    <li
                                        key={idx}
                                        className={item?.isActive ? "current-menu-item" : ""}
                                    >
                                        <Link href={item?.path ? item?.path : "/portfolios"}>
                                            {item?.name ? item?.name : "Portfolio"}
                                        </Link>
                                    </li>
                                ))
                                : ""}
                        </ul>
                    </li>

                    <li
                        className={`has-dropdown ${
                            industriesNav?.isActive ? "current-menu-ancestor" : ""
                        }`}
                    >
                        <a className="custom-anchor" onClick={(e) => e.preventDefault()}>
                            {industriesNav?.name}
                        </a>
                        <ul className="sub-menu">
                            {industriesNav?.submenu?.length
                                ? industriesNav?.submenu?.map((item, idx) => (
                                    <li
                                        key={idx}
                                        className={item?.isActive ? "current-menu-item" : ""}
                                    >
                                        <Link href={item?.path ? item?.path : "/portfolios"}>
                                            {item?.name ? item?.name : "Portfolio"}
                                        </Link>
                                    </li>
                                ))
                                : ""}
                        </ul>
                    </li>


                    <li className={aboutNav?.isActive ? "current-menu-ancestor" : ""}>
                        <Link href={aboutNav?.path ? aboutNav?.path : "#"}>
                            {aboutNav?.name ? aboutNav?.name : "About US"}
                        </Link>
                    </li>

                    <li
                        className={`has-dropdown ${
                            insightNav?.isActive ? "current-menu-ancestor" : ""
                        }`}
                    >
                        {/* <Link href={insightNav?.path ? insightNav?.path : "#"}>
							{insightNav?.name}
						</Link> */}
                        <a className="custom-anchor" onClick={(e) => e.preventDefault()}>
                            {insightNav?.name}
                        </a>
                        <ul className="sub-menu">
                            {insightNav?.submenu?.length
                                ? insightNav?.submenu?.map((item, idx) => (
                                    <li
                                        key={idx}
                                        className={item?.isActive ? "current-menu-item" : ""}
                                    >
                                        <Link href={item?.path ? item?.path : "/portfolios"}>
                                            {item?.name ? item?.name : "Portfolio"}
                                        </Link>
                                    </li>
                                ))
                                : ""}
                        </ul>
                    </li>

                    <li className={contactNav?.isActive ? "current-menu-ancestor" : ""}>
                        <Link href={contactNav?.path ? contactNav?.path : "#"}>
                            {contactNav?.name ? contactNav?.name : "Contact"}
                        </Link>
                    </li>

                </ul>
            </nav>
        </div>
    );
};

export default Navbar;
