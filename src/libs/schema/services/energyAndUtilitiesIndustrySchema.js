export const energyAndUtilitiesIndustrySchema = {
    "@context": "https://schema.org",
    "@graph": [
        {
            "@type": "Service",
            "name": "BPO Services for Energy & Utilities",
            "serviceType": "Energy and Utilities Business Process Outsourcing",
            "description": "Computyne delivers scalable, compliance-ready BPO services for energy and utility enterprises, including meter-to-cash operations, customer support, regulatory reporting, and asset data management.",
            "provider": {
                "@type": "Organization",
                "name": "Computyne",
                "url": "https://www.computyne.com",
                "logo": "https://www.computyne.com/wp-content/uploads/2023/01/computyne-logo.svg",
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
                "Canada",
                "Australia",
                "Germany",
                "Netherlands",
                "France",
                "Ireland",
                "Singapore",
                "New Zealand"
            ],
            "hasOfferCatalog": {
                "@type": "OfferCatalog",
                "name": "Energy & Utilities BPO Solutions",
                "itemListElement": [
                    {
                        "@type": "Offer",
                        "itemOffered": {
                            "@type": "Service",
                            "name": "Meter-to-Cash BPO Services"
                        }
                    },
                    {
                        "@type": "Offer",
                        "itemOffered": {
                            "@type": "Service",
                            "name": "Utility Customer Operations Outsourcing"
                        }
                    },
                    {
                        "@type": "Offer",
                        "itemOffered": {
                            "@type": "Service",
                            "name": "Regulatory Compliance & Reporting Services"
                        }
                    },
                    {
                        "@type": "Offer",
                        "itemOffered": {
                            "@type": "Service",
                            "name": "Asset & Field Data Management Services"
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
                    "name": "What are BPO services for the energy and utilities industry?",
                    "acceptedAnswer": {
                        "@type": "Answer",
                        "text": "BPO services for energy and utilities involve outsourcing non-core processes such as meter-to-cash operations, customer service, regulatory compliance, and asset data management to improve efficiency, accuracy, and governance."
                    }
                },
                {
                    "@type": "Question",
                    "name": "Which utility processes can be outsourced?",
                    "acceptedAnswer": {
                        "@type": "Answer",
                        "text": "Commonly outsourced processes include billing and collections, customer operations, regulatory reporting, audit support, asset and field data management, and operational analytics."
                    }
                },
                {
                    "@type": "Question",
                    "name": "How do BPO services support regulatory compliance in utilities?",
                    "acceptedAnswer": {
                        "@type": "Answer",
                        "text": "Energy BPO providers apply standardized workflows, validation controls, audit-ready documentation, and timely regulatory reporting to ensure adherence to statutory and industry regulations."
                    }
                },
                {
                    "@type": "Question",
                    "name": "Are BPO services suitable for renewable energy companies?",
                    "acceptedAnswer": {
                        "@type": "Answer",
                        "text": "Yes. Renewable energy companies use BPO services for compliance reporting, project data management, customer operations, sustainability reporting, and scalable back-office support."
                    }
                },
                {
                    "@type": "Question",
                    "name": "How does BPO reduce operational costs for energy enterprises?",
                    "acceptedAnswer": {
                        "@type": "Answer",
                        "text": "BPO reduces costs by eliminating internal overheads, optimizing workflows, leveraging shared delivery models, and providing predictable pricing while maintaining service quality."
                    }
                },
                {
                    "@type": "Question",
                    "name": "How is data security handled in energy and utilities BPO?",
                    "acceptedAnswer": {
                        "@type": "Answer",
                        "text": "Energy BPO services use role-based access controls, encrypted systems, audit trails, and strict data governance protocols to protect sensitive operational and customer information."
                    }
                }
            ]
        }
    ]
};
