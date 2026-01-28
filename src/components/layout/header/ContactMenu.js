"use client";
import Link from "next/link";

const ContactMenu = ({isContactOpen, setIsContactOpen}) => {
    const handleClick = () => {
        setIsContactOpen(false);
    };

    return (
        <>
            <div
                className={`body-overlay  ${isContactOpen ? "opened" : ""}`}
                onClick={handleClick}
            ></div>
            <div
                className={`tj-offcanvas-area d-none d-lg-block  ${
                    isContactOpen ? "opened" : ""
                }`}
            >
                <div className="hamburger_bg"></div>
                <div className="hamburger_wrapper">
                    <div className="hamburger_inner">
                        <div className="hamburger_top d-flex align-items-center justify-content-between">
                            <div className="hamburger_logo">
                                <Link href="/" className="mobile_logo">
                                    <img src="/images/site-logo/white-logo.svg" alt="Logo"/>
                                </Link>
                            </div>
                            <div className="hamburger_close">
                                <button className="hamburger_close_btn" onClick={handleClick}>
                                    <i className="fa-thin fa-times"></i>
                                </button>
                            </div>
                        </div>
                        <div className="offcanvas-text">
                            <p>
                                Empowering global enterprises with secure, scalable Data Processing and AI
                                Training solutions from India.
                            </p>
                        </div>
                        {/*<div className="hamburger-search-area">
							<h5 className="hamburger-title">Search Now!</h5>
							<div className="hamburger_search">
								<form method="get" action="/">
									<button type="submit">
										<i className="tji-search"></i>
									</button>
									<input
										type="search"
										autoComplete="off"
										name="s"
										placeholder="Search here..."
									/>
								</form>
							</div>
						</div>*/}
                        <div className="hamburger-infos">
                            <h5 className="hamburger-title">Contact Info</h5>
                            <div className="contact-info">
                                <div className="contact-item">
                                    <span className="subtitle">Phone</span>
                                    <Link className="contact-link" href="tel:10095447818">
                                        000-000-0000
                                    </Link>
                                </div>
                                <div className="contact-item">
                                    <span className="subtitle">Email</span>
                                    <Link className="contact-link" href="mailto:info@computyne.com">
                                        info@computyne.com
                                    </Link>
                                </div>
                                <div className="contact-item">
                                    <span className="subtitle">Location</span>
                                    <span className="contact-link">
										3/2, Alpha Arcade,Infocity Circle Gandhinagar 382010, India
									</span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="hamburger-socials">
                        <h5 className="hamburger-title">Follow Us</h5>
                        <div className="social-links style-3">
                            <ul>
                                <li>
                                    <Link href="https://www.facebook.com/profile.php?id=100075815080008"
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
                    </div>
                </div>
            </div>
        </>
    );
};

export default ContactMenu;
