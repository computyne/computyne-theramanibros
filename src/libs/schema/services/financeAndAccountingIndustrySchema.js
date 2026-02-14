export const financeAndAccountingIndustrySchema = {
    "@context": "https://schema.org",
    "@graph": [
        {
            "@type": "Service",
            "name": "Finance and Accounting Outsourcing Services",
            "serviceType": "Finance and Accounting Process Outsourcing",
            "description": "Computyne delivers compliance-ready Finance and Accounting Outsourcing Services that help organizations streamline financial operations, ensure regulatory compliance, improve accuracy, and achieve sustainable cost efficiency.",
            "provider": {
                "@type": "Organization",
                "name": "Computyne",
                "url": "https://www.computyne.com",
                "logo": "https://www.computyne.com/images/site-logo/blue-logo.svg",
                "contactPoint": {
                    "@type": "ContactPoint",
                    "contactType": "Sales",
                    "email": "info@computyne.com"
                },
                "sameAs": [
                    "https://www.linkedin.com/company/computyne",
                    "https://www.facebook.com/computyne",
                    "https://twitter.com/computyne"
                ]
            },
            "areaServed": [
                "United States",
                "United Kingdom",
                "Australia",
                "Canada",
                "Germany",
                "Ireland",
                "Netherlands",
                "Italy",
                "Singapore",
                "New Zealand",
                "France",
                "Hong Kong",
                "Switzerland",
                "Japan",
                "Spain"
            ],
            "hasOfferCatalog": {
                "@type": "OfferCatalog",
                "name": "Finance and Accounting Outsourcing Services",
                "itemListElement": [
                    {
                        "@type": "Offer",
                        "itemOffered": {
                            "@type": "Service",
                            "name": "Accounts Payable Outsourcing Services"
                        }
                    },
                    {
                        "@type": "Offer",
                        "itemOffered": {
                            "@type": "Service",
                            "name": "Accounts Receivable Outsourcing Services"
                        }
                    },
                    {
                        "@type": "Offer",
                        "itemOffered": {
                            "@type": "Service",
                            "name": "General Ledger Accounting Services"
                        }
                    },
                    {
                        "@type": "Offer",
                        "itemOffered": {
                            "@type": "Service",
                            "name": "Payroll Processing Outsourcing Services"
                        }
                    },
                    {
                        "@type": "Offer",
                        "itemOffered": {
                            "@type": "Service",
                            "name": "Financial Reporting and Compliance Support"
                        }
                    }
                ]
            }
        },
        {
            "@type": "FAQPage",
            "mainEntity": [
                {
                    "@type": "Question",
                    "name": "What are Finance and Accounting Outsourcing services?",
                    "acceptedAnswer": {
                        "@type": "Answer",
                        "text": "Finance and Accounting Outsourcing involves delegating accounting, financial management, and compliance processes to a specialized provider to improve accuracy, reduce costs, and enhance operational efficiency."
                    }
                },
                {
                    "@type": "Question",
                    "name": "Which finance and accounting processes can be outsourced?",
                    "acceptedAnswer": {
                        "@type": "Answer",
                        "text": "Organizations can outsource accounts payable, accounts receivable, general ledger accounting, payroll processing, bank reconciliations, financial reporting, compliance support, and month-end or year-end closing."
                    }
                },
                {
                    "@type": "Question",
                    "name": "How does finance outsourcing reduce costs?",
                    "acceptedAnswer": {
                        "@type": "Answer",
                        "text": "Finance outsourcing reduces costs by eliminating recruitment, training, infrastructure, and technology expenses while providing scalable access to skilled finance professionals."
                    }
                },
                {
                    "@type": "Question",
                    "name": "Is finance and accounting outsourcing secure?",
                    "acceptedAnswer": {
                        "@type": "Answer",
                        "text": "Yes. Secure finance outsourcing uses role-based access controls, encrypted systems, and compliance-driven governance to protect sensitive financial data."
                    }
                },
                {
                    "@type": "Question",
                    "name": "Can finance outsourcing support regulatory compliance?",
                    "acceptedAnswer": {
                        "@type": "Answer",
                        "text": "Yes. Compliance-ready finance outsourcing supports statutory regulations, audit requirements, and documentation controls to ensure audit readiness and reduce risk exposure."
                    }
                },
                {
                    "@type": "Question",
                    "name": "Is finance outsourcing suitable for small and mid-sized businesses?",
                    "acceptedAnswer": {
                        "@type": "Answer",
                        "text": "Yes. Finance outsourcing enables small and mid-sized businesses to access professional accounting expertise without hiring full-time finance staff."
                    }
                }
            ]
        }
    ]
};
