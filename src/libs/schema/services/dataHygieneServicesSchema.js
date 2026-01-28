export const dataHygieneServicesSchema = {
    "@context": "https://schema.org",
    "@graph": [
        {
            "@type": "Service",
            "name": "Data Hygiene Services",
            "serviceType": "Continuous Data Hygiene and Data Quality Management Services",
            "description":
                "Computyne delivers continuous data hygiene services that ensure long-term data accuracy, consistency, compliance, and reliability across enterprise systems, supporting analytics, operations, and digital transformation initiatives.",
            "provider": {
                "@type": "Organization",
                "name": "Computyne",
                "url": "https://www.computyne.com",
                "logo":
                    "https://www.computyne.com/wp-content/uploads/2023/01/computyne-logo.svg",
                "contactPoint": {
                    "@type": "ContactPoint",
                    "contactType": "Customer Support",
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
                "name": "Data Hygiene Solutions",
                "itemListElement": [
                    {
                        "@type": "Offer",
                        "itemOffered": {
                            "@type": "Service",
                            "name": "Continuous Data Monitoring and Maintenance"
                        }
                    },
                    {
                        "@type": "Offer",
                        "itemOffered": {
                            "@type": "Service",
                            "name": "Data Validation and Accuracy Management"
                        }
                    },
                    {
                        "@type": "Offer",
                        "itemOffered": {
                            "@type": "Service",
                            "name": "Duplicate Detection and Data Deduplication Services"
                        }
                    },
                    {
                        "@type": "Offer",
                        "itemOffered": {
                            "@type": "Service",
                            "name": "Data Standardization and Format Consistency Services"
                        }
                    },
                    {
                        "@type": "Offer",
                        "itemOffered": {
                            "@type": "Service",
                            "name": "Data Governance and Compliance Support"
                        }
                    },
                    {
                        "@type": "Offer",
                        "itemOffered": {
                            "@type": "Service",
                            "name": "Ongoing Data Quality Management Services"
                        }
                    }
                ]
            }
        },
        {
            "@type": "Product",
            "name": "Data Hygiene Services",
            "image":
                "https://www.computyne.com/wp-content/uploads/2023/01/computyne-logo.svg",
            "description":
                "Computyne provides enterprise-grade data hygiene services that maintain clean, accurate, compliant, and analytics-ready data environments at scale.",
            "url": "https://www.computyne.com/data-hygiene-services",
            "brand": {
                "@type": "Brand",
                "name": "Computyne",
                "logo":
                    "https://www.computyne.com/wp-content/uploads/2023/01/computyne-logo.svg"
            },
            "aggregateRating": {
                "@type": "AggregateRating",
                "ratingValue": "4.9",
                "ratingCount": "150"
            }
        },
        {
            "@type": "FAQPage",
            "mainEntity": [
                {
                    "@type": "Question",
                    "name": "What are Data Hygiene Services?",
                    "acceptedAnswer": {
                        "@type": "Answer",
                        "text":
                            "Data hygiene services provide continuous monitoring, validation, and maintenance of enterprise data to ensure accuracy, consistency, and compliance across systems."
                    }
                },
                {
                    "@type": "Question",
                    "name": "How do Data Hygiene Services differ from Data Cleansing?",
                    "acceptedAnswer": {
                        "@type": "Answer",
                        "text":
                            "Data cleansing addresses existing data issues periodically, while data hygiene continuously prevents data decay through ongoing validation, monitoring, and standardization."
                    }
                },
                {
                    "@type": "Question",
                    "name": "Why are Data Hygiene Services important for enterprises?",
                    "acceptedAnswer": {
                        "@type": "Answer",
                        "text":
                            "They prevent duplicates, outdated records, and inconsistencies, ensuring reliable analytics, smoother operations, and consistent customer experiences."
                    }
                },
                {
                    "@type": "Question",
                    "name": "What types of data are covered by Data Hygiene Services?",
                    "acceptedAnswer": {
                        "@type": "Answer",
                        "text":
                            "Customer, product, vendor, financial, marketing, and operational data across CRM, ERP, cloud platforms, and enterprise systems."
                    }
                },
                {
                    "@type": "Question",
                    "name": "Are Data Hygiene Services automated?",
                    "acceptedAnswer": {
                        "@type": "Answer",
                        "text":
                            "Yes. Automated rules, validations, and continuous monitoring workflows maintain enterprise data quality efficiently at scale."
                    }
                },
                {
                    "@type": "Question",
                    "name": "Can Data Hygiene Services support compliance?",
                    "acceptedAnswer": {
                        "@type": "Answer",
                        "text":
                            "Yes. Data hygiene enforces governance controls, validation standards, and audit-ready processes aligned with regulatory requirements."
                    }
                },
                {
                    "@type": "Question",
                    "name": "How often are Data Hygiene Services performed?",
                    "acceptedAnswer": {
                        "@type": "Answer",
                        "text":
                            "Data hygiene services operate continuously or at scheduled intervals depending on data volume, systems, and business needs."
                    }
                }
            ]
        }
    ]
};
