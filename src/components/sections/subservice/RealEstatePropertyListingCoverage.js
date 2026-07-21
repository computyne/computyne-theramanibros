const coverageRows = [
    {
        category: "US MLS Systems",
        platforms: "Matrix, Paragon, Flexmls, Stellar MLS, CRMLS, Bright MLS, MRED, REcolorado, NWMLS",
    },
    {
        category: "US Portals",
        platforms: "Zillow, Realtor.com, Redfin, Trulia, Homes.com, Homesnap",
    },
    {
        category: "Commercial Portals",
        platforms: "LoopNet, CoStar, BizBuySell, Crexi, CommercialCafe",
    },
    {
        category: "UK Portals",
        platforms: "Rightmove, Zoopla, OnTheMarket, PrimeLocation, Residential People",
    },
    {
        category: "Australia and Canada",
        platforms: "Domain, REA Group (realestate.com.au), Realtor.ca, REW",
    },
    {
        category: "Real Estate CRMs",
        platforms: "Salesforce, HubSpot, BoomTown, LionDesk, Follow Up Boss, Wise Agent, Zoho CRM",
    },
    {
        category: "Property Management",
        platforms: "AppFolio, Buildium, Yardi, Rent Manager, ResMan",
    },
];

const tableStyles = {
    wrapper: {
        overflowX: "auto",
        borderRadius: "8px",
        border: "1px solid #e5e7eb",
        boxShadow: "0 10px 30px rgba(12, 29, 54, 0.08)",
    },
    table: {
        width: "100%",
        borderCollapse: "collapse",
        minWidth: "760px",
        backgroundColor: "#ffffff",
    },
    th: {
        backgroundColor: "#0c1d36",
        color: "#ffffff",
        padding: "18px",
        textAlign: "left",
        fontWeight: 700,
        fontSize: "15px",
    },
    td: {
        padding: "18px",
        borderBottom: "1px solid #e5e7eb",
        color: "#334155",
        verticalAlign: "top",
        lineHeight: 1.6,
    },
    category: {
        color: "#0c1d36",
        fontWeight: 700,
        whiteSpace: "nowrap",
    },
};

const RealEstatePropertyListingCoverage = () => {
    return (
        <section className="tj-team-comparison-section section-gap h7-testimonial">
            <div className="container">
                <div className="row">
                    <div className="col-12">
                        <div className="sec-heading text-center style-2">
                            <span className="sub-title wow fadeInUp" data-wow-delay=".3s">
                                MLS SYSTEMS AND PORTAL COVERAGE
                            </span>
                            <h2 className="sec-title text-anim">
                                MLS Systems and Property Portals We Work With
                            </h2>
                        </div>
                    </div>
                </div>

                <div className="row comparison-content-wrapper align-items-stretch">
                    <div className="col-lg-7 col-md-8 mb-4 mb-lg-0">
                        <div className="testimonial-wrapper h7-testimonial-wrapper wow fadeInLeftBig" data-wow-delay=".3s">
                            <div style={tableStyles.wrapper}>
                                <table style={tableStyles.table}>
                                    <thead>
                                        <tr>
                                            <th style={tableStyles.th}>Category</th>
                                            <th style={tableStyles.th}>Platforms</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {coverageRows.map((row, index) => (
                                            <tr key={row.category}>
                                                <td
                                                    style={{
                                                        ...tableStyles.td,
                                                        ...tableStyles.category,
                                                        borderBottom: index === coverageRows.length - 1 ? "none" : tableStyles.td.borderBottom,
                                                    }}
                                                >
                                                    {row.category}
                                                </td>
                                                <td
                                                    style={{
                                                        ...tableStyles.td,
                                                        borderBottom: index === coverageRows.length - 1 ? "none" : tableStyles.td.borderBottom,
                                                    }}
                                                >
                                                    {row.platforms}
                                                </td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>

                    <div className="col-lg-5 col-md-4">
                        <div className="comparison-image-wrapper wow fadeInRightBig d-flex align-items-center justify-content-center h-100" data-wow-delay=".5s">
                            <div
                                className="comparison-image d-flex align-items-center justify-content-center"
                                style={{
                                    backgroundColor: "transparent",
                                    borderRadius: "8px",
                                    boxShadow: "none",
                                    width: "72%",
                                    maxWidth: "72%",
                                }}
                            >
                                <img
                                    src="/images/hireresource/illustration.png"
                                    alt="MLS systems and portal coverage illustration"
                                    className="img-fluid"
                                    style={{
                                        borderRadius: "6px",
                                        width: "100%",
                                        height: "auto",
                                        objectFit: "cover",
                                        opacity: 0.68,
                                    }}
                                />
                            </div>
                            <div className="bg-shape-3">
                                <img src="/images/shape/h7-testimonial-shape-blur-mod.svg" alt="" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="bg-shape-1">
                <img src="/images/shape/pattern-2.svg" alt="" />
            </div>
            <div className="bg-shape-2">
                <img src="/images/shape/pattern-3.svg" alt="" />
            </div>
        </section>
    );
};

export default RealEstatePropertyListingCoverage;
