export const dataManagementServicesSchema = {
    "@context": "https://schema.org",
    "@graph": [
        {
            "@type": "Service",
            "name": "Data Management Services",
            "serviceType": "Enterprise Data Management and Governance Services",
            "description":
                "Computyne delivers secure, compliant, and scalable data management services that centralize, cleanse, enrich, validate, and govern enterprise data for analytics-ready, decision-driven business operations.",
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
                "name": "Enterprise Data Management Solutions",
                "itemListElement": [
                    {
                        "@type": "Offer",
                        "itemOffered": {
                            "@type": "Service",
                            "name": "Data Enrichment Services"
                        }
                    },
                    {
                        "@type": "Offer",
                        "itemOffered": {
                            "@type": "Service",
                            "name": "Data Cleansing Services"
                        }
                    },
                    {
                        "@type": "Offer",
                        "itemOffered": {
                            "@type": "Service",
                            "name": "Data Appending Services"
                        }
                    },
                    {
                        "@type": "Offer",
                        "itemOffered": {
                            "@type": "Service",
                            "name": "Data Validation Services"
                        }
                    },
                    {
                        "@type": "Offer",
                        "itemOffered": {
                            "@type": "Service",
                            "name": "Data Standardization Services"
                        }
                    },
                    {
                        "@type": "Offer",
                        "itemOffered": {
                            "@type": "Service",
                            "name": "Data Hygiene Management Services"
                        }
                    },
                    {
                        "@type": "Offer",
                        "itemOffered": {
                            "@type": "Service",
                            "name": "Competitor Analysis and Intelligence Data Services"
                        }
                    }
                ]
            }
        },
        {
            "@type": "Product",
            "name": "Data Management Services",
            "image":
                "https://www.computyne.com/wp-content/uploads/2023/01/computyne-logo.svg",
            "description":
                "Comprehensive data management services delivering centralized, secure, compliant, and analytics-ready enterprise data for improved performance, governance, and strategic decision-making.",
            "url": "https://www.computyne.com/data-management-services",
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
                    "name": "What are Data Management Services?",
                    "acceptedAnswer": {
                        "@type": "Answer",
                        "text":
                            "Data Management Services include collecting, cleansing, enriching, validating, standardizing, securing, and maintaining enterprise data to ensure accuracy, compliance, and analytics readiness."
                    }
                },
                {
                    "@type": "Question",
                    "name": "Why should businesses outsource data management services?",
                    "acceptedAnswer": {
                        "@type": "Answer",
                        "text":
                            "Outsourcing reduces internal workload, lowers operational costs, improves accuracy, accelerates delivery, and provides access to skilled experts and secure, scalable technology."
                    }
                },
                {
                    "@type": "Question",
                    "name": "Why choose Computyne for data management?",
                    "acceptedAnswer": {
                        "@type": "Answer",
                        "text":
                            "Computyne offers 15+ years of experience, 24×7 support, 99.99% accuracy, scalable delivery models, and secure, compliance-driven data workflows."
                    }
                },
                {
                    "@type": "Question",
                    "name": "Is outsourced data management secure?",
                    "acceptedAnswer": {
                        "@type": "Answer",
                        "text":
                            "Yes. Computyne follows encrypted data handling, NDA-backed access controls, restricted environments, and global data governance standards."
                    }
                },
                {
                    "@type": "Question",
                    "name": "Can Computyne manage large-volume or ongoing data projects?",
                    "acceptedAnswer": {
                        "@type": "Answer",
                        "text":
                            "Yes. Our enterprise-grade data management services scale instantly to support daily processing, bulk datasets, seasonal spikes, and long-term programs."
                    }
                }
            ]
        }
    ]
};
