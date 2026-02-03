import Link from "next/link";

const Footer = () => {
    return (
        <footer className="tj-footer-section footer-2 section-gap-x">
            <div className="footer-main-area">
                <div className="container">
                    <div className="row justify-content-between">
                        <div className="col-xl-3 col-lg-4 col-md-6">
                            <div className="footer-widget wow fadeInUp" data-wow-delay=".1s">
                                <div className="footer-logo">
                                    <Link href="/">
                                        <img src="/images/site-logo/white-logo.svg" alt="Logos"/>
                                    </Link>
                                </div>
                                <div className="footer-text-mod">
                                    <p>
                                        Empowering global enterprises with secure, scalable Data Processing and AI
                                        Training solutions from India.
                                    </p>
                                </div>
                                <div className="award-logo-area-mod">
                                    <div className="award-logo-mod">
                                        <img src="/images/footer/google.svg" alt=""/>
                                    </div>
                                    <div className="award-logo-mod">
                                        <img src="/images/footer/goodfirm.svg" alt=""/>
                                    </div>
                                    <div className="award-logo-mod">
                                        <img
                                            src="/images/footer/iso.png"
                                            alt=""/>
                                    </div>
                                    <div className="award-logo-mod">
                                        <img src="/images/footer/clutch.svg" alt=""/>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-2 col-lg-4 col-md-6">
                            <div
                                className="footer-widget widget-nav-menu wow fadeInUp"
                                data-wow-delay=".3s"
                            >
                                <h5 className="title">Services</h5>
                                <ul>
                                    <li>
                                        <Link href="/data-collection-services">Data Collection</Link>
                                    </li>
                                    <li>
                                        <Link href="/data-management-services">Data Management</Link>
                                    </li>
                                    <li>
                                        <Link href="/data-annotation-services">Data Annotation</Link>
                                    </li>
                                    <li>
                                        <Link href="/document-processing-services">Document Processing</Link>
                                    </li>
                                    <li>
                                        <Link href="/data-entry-services">Data Entry</Link>
                                    </li>
                                    <li>
                                        <Link href="/data-solutions-services">Data Solutions</Link>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-xl-2 col-lg-4 col-md-6">
                            <div
                                className="footer-widget widget-nav-menu wow fadeInUp"
                                data-wow-delay=".5s"
                            >
                                <h5 className="title">Industries</h5>
                                <ul>
                                    <li>
                                        <Link href="/real-estate">Real Estate</Link>
                                    </li>
                                    <li>
                                        <Link href="/logistics-and-transportation">Logistics & Transportation</Link>
                                    </li>
                                    <li>
                                        <Link href="/ecommerce">Ecommerce</Link>
                                    </li>
                                    <li>
                                        <Link href="/ites">ITES</Link>
                                    </li>
                                    <li>
                                        <Link href="/finance-and-accounting">Finance & Accounting</Link>
                                    </li>
                                    <li>
                                        <Link href="/energy-and-utilities">Energy & Utilities</Link>
                                    </li>
                                    <li>
                                        <Link href="/healthcare">Healthcare</Link>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-xl-2 col-lg-4 col-md-6">
                            <div
                                className="footer-widget widget-nav-menu wow fadeInUp"
                                data-wow-delay=".5s"
                            >
                                <h5 className="title">Resources</h5>
                                <ul>
                                    <li>
                                        <Link href="/about-us">About Us</Link>
                                    </li>
                                    <li>
                                        <Link href="/case-studies">Case Studies</Link>
                                    </li>
                                    <li>
                                        <Link href="/blog">Blogs</Link>
                                    </li>
                                    <li>
                                        <Link href="/contact-us">Contact us</Link>
                                    </li>
                                </ul>
                            </div>
                        </div>

                        <div className="col-xl-3 col-md-6">
                            <div
                                className="footer-widget widget-contact wow fadeInUp"
                                data-wow-delay=".7s"
                            >
                                <h5 className="title">Our Office</h5>
                                <div className="footer-contact-info">
                                    <div className="contact-item">
										<span>
											3/2, Alpha Arcade,Infocity Circle Gandhinagar 382010, India
										</span>
                                    </div>
                                    <div className="contact-item">
                                        <Link href="tel:+1 402-513-7304">
											<span>
													<i className="tji-phone"></i> +1 402-513-7304
											</span>
                                        </Link>
                                    </div>
                                    <div className="contact-item">
                                        <Link href="mailto:info@computyne.com">
											<span>
													<i className="tji-envelop"></i> info@computyne.com
											</span>
                                        </Link>
                                    </div>
                                    <div className="contact-item">
										<span>
											<i className="tji-clock"></i> Mon to Sun 24x7
										</span>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
            <div className="tj-copyright-area">
                <div className="container">
                    <div className="row">
                        <div className="col-12">
                            <div className="copyright-content-area">
                                <div className="footer-contact-mod">
                                    <ul>
                                        <li>
                                            <Link href="tel:+1 402-513-7304">
												<span className="icon">
													<i className="tji-phone-2"></i>
												</span>
                                                <span className="text">+1 402-513-7304</span>
                                            </Link>
                                        </li>
                                        <li>
                                            <Link href="mailto:info@computyne.com">
												<span className="icon">
													<i className="tji-envelop-2"></i>
												</span>
                                                <span className="text">info@computyne.com</span>
                                            </Link>
                                        </li>
                                    </ul>
                                </div>
                                <div className="social-links-mod">
                                    <ul>
                                        <li>
                                            <Link href="https://www.facebook.com/computyne/"
                                                  target="_blank">
                                                <i className="fa-brands fa-facebook-f"></i>
                                            </Link>
                                        </li>
                                        <li>
                                            <Link href="https://www.youtube.com/@computyne" target="_blank">
                                                <i className="fa-brands fa-youtube"></i>
                                            </Link>
                                        </li>
                                        <li>
                                            <Link href="https://x.com/computyne" target="_blank">
                                                <i className="fa-brands fa-x-twitter"></i>
                                            </Link>
                                        </li>
                                        <li>
                                            <Link href="https://www.linkedin.com/company/computyne/" target="_blank">
                                                <i className="fa-brands fa-linkedin-in"></i>
                                            </Link>
                                        </li>
                                    </ul>
                                </div>
                                <div className="copyright-text-mod">
                                    <p>
                                        &copy; 2025
                                        {" "}<Link
                                        href="https://www.computyne.com/"
                                        target="_blank"
                                    >
                                        Computyne
                                    </Link>{" "}
                                        All right reserved
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="bg-shape-1">
                <img src="/images/shape/pattern-2.svg" alt=""/>
            </div>
            <div className="bg-shape-2">
                <img src="/images/shape/pattern-3.svg" alt=""/>
            </div>
        </footer>
    );
};

export default Footer;
