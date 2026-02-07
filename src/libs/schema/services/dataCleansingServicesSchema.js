export const dataCleansingServicesSchema = {
    "@context": "https://schema.org",
    "@graph": [
        {
            "@type": "Service",
            "name": "Data Cleansing Services",
            "serviceType": "Enterprise Data Cleansing and Data Quality Management Services",
            "description":
                "Computyne delivers enterprise-grade data cleansing services that remove errors, duplicates, and inconsistencies, ensuring clean, validated, and decision-ready business intelligence across systems.",
            "provider": {
                "@type": "Organization",
                "name": "Computyne",
                "url": "https://www.computyne.com",
                "logo":
                    "https://www.computyne.com/images/site-logo/blue-logo.svg",
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
                "name": "Data Cleansing and Data Quality Services",
                "itemListElement": [
                    {
                        "@type": "Offer",
                        "itemOffered": {
                            "@type": "Service",
                            "name": "Customer Data Cleansing Services"
                        }
                    },
                    {
                        "@type": "Offer",
                        "itemOffered": {
                            "@type": "Service",
                            "name": "Data Deduplication and Validation Services"
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
                            "name": "Data Accuracy and Error Correction Services"
                        }
                    },
                    {
                        "@type": "Offer",
                        "itemOffered": {
                            "@type": "Service",
                            "name": "Missing Data Enrichment Services"
                        }
                    },
                    {
                        "@type": "Offer",
                        "itemOffered": {
                            "@type": "Service",
                            "name": "Data Formatting and Structuring Services"
                        }
                    }
                ]
            }
        },
        {
            "@type": "Product",
            "name": "Data Cleansing Services",
            "image":
                "https://www.computyne.com/images/site-logo/blue-logo.svg",
            "description":
                "Computyne provides scalable data cleansing and data quality management services that deliver accurate, compliant, and analytics-ready datasets for enterprise decision-making.",
            "url": "https://www.computyne.com/data-cleansing-services",
            "brand": {
                "@type": "Brand",
                "name": "Computyne",
                "logo":
                    "https://www.computyne.com/images/site-logo/blue-logo.svg"
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
                    "name": "What are data cleansing services?",
                    "acceptedAnswer": {
                        "@type": "Answer",
                        "text":
                            "Data cleansing services identify, correct, and remove inaccurate, incomplete, duplicate, or outdated data to improve accuracy, consistency, and usability across business systems."
                    }
                },
                {
                    "@type": "Question",
                    "name": "Why is data cleansing important for businesses?",
                    "acceptedAnswer": {
                        "@type": "Answer",
                        "text":
                            "Data cleansing ensures reliable insights, reduces operational costs, improves CRM and analytics performance, and supports confident, data-driven decision-making."
                    }
                },
                {
                    "@type": "Question",
                    "name": "What types of data can be cleansed?",
                    "acceptedAnswer": {
                        "@type": "Answer",
                        "text":
                            "Customer data, CRM records, financial data, product catalogs, operational datasets, marketing lists, and enterprise data across spreadsheets, databases, and cloud platforms."
                    }
                },
                {
                    "@type": "Question",
                    "name": "What is the difference between data cleansing and data enrichment?",
                    "acceptedAnswer": {
                        "@type": "Answer",
                        "text":
                            "Data cleansing corrects and standardizes existing data, while data enrichment adds verified information to improve completeness and profiling depth."
                    }
                },
                {
                    "@type": "Question",
                    "name": "Is outsourced data cleansing secure?",
                    "acceptedAnswer": {
                        "@type": "Answer",
                        "text":
                            "Yes. Professional data cleansing services follow strict security protocols, NDAs, access controls, and compliance-driven processes to protect sensitive information."
                    }
                },
                {
                    "@type": "Question",
                    "name": "How often should data cleansing be performed?",
                    "acceptedAnswer": {
                        "@type": "Answer",
                        "text":
                            "Data cleansing should be continuous or scheduled regularly to prevent data decay and maintain clean, decision-ready datasets."
                    }
                }
            ]
        }
    ]
};
