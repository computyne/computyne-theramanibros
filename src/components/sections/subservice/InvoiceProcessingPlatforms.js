import styles from "./InvoiceProcessingPlatforms.module.css";

const platformRows = [
    {
        category: "ERP Systems",
        systems: ["SAP (S/4HANA, ECC)", "Oracle Financials Cloud", "Oracle EBS", "NetSuite", "Microsoft Dynamics 365", "Sage Intacct"],
        note: "Direct posting and import-ready outputs for enterprise finance teams.",
    },
    {
        category: "Accounting Platforms",
        systems: ["QuickBooks Online", "QuickBooks Desktop", "Xero", "Sage 50", "FreeAgent"],
        note: "Validated invoice data prepared for small-business and mid-market accounting workflows.",
    },
    {
        category: "AP Automation Tools",
        systems: ["Coupa", "Basware", "Tipalti", "Stampli", "Medius", "Yooz", "Chrome River"],
        note: "Exception-ready AP records aligned to approval and automation rules.",
    },
    {
        category: "P2P Platforms",
        systems: ["SAP Ariba", "Oracle Procurement Cloud", "Ivalua", "Jaggaer", "GEP SMART"],
        note: "Purchase-to-pay matching support across PO, GRN, and supplier data.",
    },
    {
        category: "Document Management",
        systems: ["SharePoint", "DocuWare", "Hyland OnBase", "OpenText", "M-Files"],
        note: "Structured intake and controlled document handoff for audit-ready processing.",
    },
    {
        category: "Output Formats",
        systems: ["CSV", "XML", "EDI (EDIFACT, ANSI X12)", "JSON", "PDF", "Flat file ERP imports"],
        note: "Delivery formats matched to your ERP, AP, or reporting environment.",
    },
];

const InvoiceProcessingPlatforms = () => {
    return (
        <section className={`${styles.section} section-gap section-gap-x`}>
            <div className="container">
                <div className={styles.heading}>
                    <span className={styles.eyebrow}>
                        <i className="tji-box"></i> ERP and AP Integrations
                    </span>
                    <h2 className={styles.title}>
                        Invoice Processing Integration Across Major ERP and AP Platforms
                    </h2>
                    <p className={styles.intro}>
                        Computyne prepares validated invoice data for the finance systems your team already uses, from enterprise ERPs to AP automation tools and flat-file imports.
                    </p>
                </div>

                <div className={styles.grid}>
                    {platformRows.map((row) => (
                        <article className={styles.card} key={row.category}>
                            <div className={styles.cardHeader}>
                                <span className={styles.icon}>
                                    <i className="tji-check"></i>
                                </span>
                                <h3>{row.category}</h3>
                            </div>
                            <p>{row.note}</p>
                            <div className={styles.tags}>
                                {row.systems.map((system) => (
                                    <span key={system}>{system}</span>
                                ))}
                            </div>
                        </article>
                    ))}
                </div>

                <div className={styles.summary}>
                    <div>
                        <strong>Built for clean AP handoff</strong>
                        <span>Capture, validation, matching, exception notes, and ERP-ready export data in one controlled workflow.</span>
                    </div>
                    <a className="tj-primary-btn" href="/contact-us">
                        <span className="btn-text"><span>Discuss Your ERP Setup</span></span>
                        <span className="btn-icon"><i className="tji-arrow-right-long"></i></span>
                    </a>
                </div>
            </div>
        </section>
    );
};

export default InvoiceProcessingPlatforms;
