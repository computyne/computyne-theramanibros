"use client";

const ContactLocation = () => {
    return (
        <section className="tj-contact-section-2 section-bottom-gap">
            <div className="container">
                <div className="row">
                    <div className="col-12">
                        <div className="sec-heading-wrap">
							<span className="sub-title wow fadeInUp" data-wow-delay=".3s">
								Our Presense
							</span>
                            <div className="heading-wrap-content">
                                <div className="sec-heading style-2">
                                    <h2 className="sec-title text-anim">
                                        Global <span>Locations</span>
                                    </h2>
                                </div>
                                <div className="wow fadeInUp" data-wow-delay=".5s">
                                    <p className="desc tagline">
                                        Strategically positioned to address the toughest challenges and meet the demand
                                        of fastest-growing economies through technology innovation.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-lg-6">
                        <div className="map-area wow fadeInUp" data-wow-delay=".3s">
                            <iframe
                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3072.665196074582!2d-105.1085721237703!3d39.63474170286189!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x876b7f5c50d44bb7%3A0xd422e16a37c6c7cb!2s4035%20S%20Iris%20St%2C%20Denver%2C%20CO%2080123%2C%20USA!5e0!3m2!1sen!2sin!4v1766919729236!5m2!1sen!2sin"></iframe>
                        </div>
                        <div className="row mt-10">
                            <div className="col-12">
                                <div className="sec-heading text-center">
                                    <h2 className="sec-title title-anim">
                                        <span>UNITED</span> STATES
                                    </h2>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="col-lg-6">
                        <div className="map-area wow fadeInUp" data-wow-delay=".3s">
                            <iframe
                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3667.2921595577604!2d72.63042977571452!3d23.19602100983241!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x395c2a30a910f001%3A0x6d376395b8c3d9c1!2sInfocity%20Rd%2C%20Infocity%2C%20Gandhinagar%2C%20Gujarat%20382007!5e0!3m2!1sen!2sin!4v1766919834131!5m2!1sen!2sin"></iframe>
                        </div>
                        <div className="row mt-10">
                            <div className="col-12">
                                <div className="sec-heading text-center">
                                    <h2 className="sec-title title-anim">
                                        <span>INDIA</span>
                                    </h2>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ContactLocation;
