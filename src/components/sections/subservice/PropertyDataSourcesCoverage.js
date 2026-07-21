const sourceRows = [
    {
        market: "United Kingdom",
        sources: "Rightmove, Zoopla, OnTheMarket, PrimeLocation, Land Registry, EPC Register, Planning Portal, VOA",
        dataTypes: "Listings, sold prices, ownership, EPC ratings, planning, valuations",
    },
    {
        market: "United States",
        sources: "Zillow, Realtor.com, Redfin, Trulia, LoopNet, CoStar (licensed), county assessors, FEMA",
        dataTypes: "Listings, transactions, tax, ownership, flood zones, commercial",
    },
    {
        market: "Australia",
        sources: "Domain, REA Group (realestate.com.au), CoreLogic, PriceFinder, state land titles offices",
        dataTypes: "Listings, sold prices, ownership, valuation, and rental data",
    },
    {
        market: "Canada",
        sources: "REW, Realtor.ca, Centris, provincial land registries, CMHC, Statistics Canada",
        dataTypes: "Listings, ownership, mortgage, market data, demographics",
    },
    {
        market: "Europe",
        sources: "Immobilienscout24, Seloger, Idealista, Funda, Imovirtual, and cadastre databases by country",
        dataTypes: "Listings, transaction data, ownership records, market trends",
    },
    {
        market: "Global Commercial",
        sources: "CoStar, EGi, MSCI Real Estate, national land registries, planning portals",
        dataTypes: "CRE transactions, lease data, valuations, planning",
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
        minWidth: "840px",
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
    market: {
        color: "#0c1d36",
        fontWeight: 700,
        whiteSpace: "nowrap",
    },
};

const PropertyDataSourcesCoverage = () => {
    return (
        <section className="tj-team-comparison-section section-gap h7-testimonial">
            <div className="container">
                <div className="row">
                    <div className="col-12">
                        <div className="sec-heading text-center style-2">
                            <span className="sub-title wow fadeInUp" data-wow-delay=".3s">
                                DATA SOURCES AND PLATFORM COVERAGE
                            </span>
                            <h2 className="sec-title text-anim">
                                Property Data Collected From Every Major Source
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
                                            <th style={tableStyles.th}>Market</th>
                                            <th style={tableStyles.th}>Portal and Registry Sources</th>
                                            <th style={tableStyles.th}>Data Types Covered</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {sourceRows.map((row, index) => (
                                            <tr key={row.market}>
                                                <td
                                                    style={{
                                                        ...tableStyles.td,
                                                        ...tableStyles.market,
                                                        borderBottom: index === sourceRows.length - 1 ? "none" : tableStyles.td.borderBottom,
                                                    }}
                                                >
                                                    {row.market}
                                                </td>
                                                <td
                                                    style={{
                                                        ...tableStyles.td,
                                                        borderBottom: index === sourceRows.length - 1 ? "none" : tableStyles.td.borderBottom,
                                                    }}
                                                >
                                                    {row.sources}
                                                </td>
                                                <td
                                                    style={{
                                                        ...tableStyles.td,
                                                        borderBottom: index === sourceRows.length - 1 ? "none" : tableStyles.td.borderBottom,
                                                    }}
                                                >
                                                    {row.dataTypes}
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
                                    alt="Property data sources and platform coverage illustration"
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

export default PropertyDataSourcesCoverage;
