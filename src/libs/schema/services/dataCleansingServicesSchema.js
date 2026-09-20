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
                            "Data cleansing services involve identifying, correcting, and removing inaccurate, incomplete, duplicate, or outdated records from databases to improve accuracy, consistency, and usability. This covers deduplication, error correction, format standardisation, missing field completion, validation against authoritative sources, and data formatting for system import. The output is a database that works correctly in the CRM, ERP, analytics platform, or marketing system it is used in."
                    }
                },
                {
                    "@type": "Question",
                    "name": "What is B2B data cleansing?",
                    "acceptedAnswer": {
                        "@type": "Answer",
                        "text":
                            "B2B data cleansing involves cleaning business contact and company databases to remove duplicates, correct outdated contact details, standardise formats, and verify that records are still accurate. B2B data can decay over time as professionals change jobs, companies rebrand, and contact details change. Regular B2B data cleansing helps maintain email deliverability, CRM accuracy, and the quality of outbound sales and marketing programmes."
                    }
                },
                {
                    "@type": "Question",
                    "name": "What is the difference between data cleansing and data enrichment?",
                    "acceptedAnswer": {
                        "@type": "Answer",
                        "text":
                            "Data cleansing corrects, validates, and removes inaccurate, duplicate, or outdated records in your existing database. Data enrichment adds new verified information to your existing records from external sources, such as missing email addresses, phone numbers, or firmographic data. Most data management programmes combine both: clean the database first, then enrich it to fill gaps."
                    }
                },
                {
                    "@type": "Question",
                    "name": "How often should data cleansing be performed?",
                    "acceptedAnswer": {
                        "@type": "Answer",
                        "text":
                            "The ideal data cleansing frequency depends on the type of data and how frequently it changes. B2B contact databases may benefit from quarterly cleansing, while CRM data can use continuous validation at the point of entry combined with periodic cleansing. Product and eCommerce data should typically be reviewed when supplier feeds or major imports are processed."
                    }
                },
                {
                    "@type": "Question",
                    "name": "Can you cleanse Salesforce and CRM data specifically?",
                    "acceptedAnswer": {
                        "@type": "Answer",
                        "text":
                            "Yes. Computyne provides CRM data cleansing for Salesforce, HubSpot, Zoho, Microsoft Dynamics, Pipedrive, and other major CRM platforms. This can include account and contact deduplication, email and phone validation, custom field standardisation, lead-to-contact relationship correction, and post-migration data quality audits."
                    }
                },
                {
                    "@type": "Question",
                    "name": "What is product data cleansing?",
                    "acceptedAnswer": {
                        "@type": "Answer",
                        "text":
                            "Product data cleansing involves removing errors, duplicates, and inconsistencies from product catalog databases. This can include SKU deduplication, attribute value standardisation, GTIN and EAN validation, category realignment, pricing field validation, and missing attribute identification. Product data cleansing is often required before eCommerce platform migrations, marketplace onboarding, and PIM system implementations."
                    }
                },
                {
                    "@type": "Question",
                    "name": "Is outsourced data cleansing secure?",
                    "acceptedAnswer": {
                        "@type": "Answer",
                        "text":
                            "Yes. Data cleansing operations can be managed using security controls such as signed NDAs, role-based access controls, encrypted data transfer, and GDPR-aligned handling for applicable clients. Sensitive business data can be subject to documented access restrictions and handled only by authorised members of the engagement team."
                    }
                },
                {
                    "@type": "Question",
                    "name": "Can data cleansing be automated?",
                    "acceptedAnswer": {
                        "@type": "Answer",
                        "text":
                            "Yes. Automated rules can handle standard cleansing tasks such as format validation, duplicate flagging using exact and fuzzy matching, field range checks, and syntax correction. Human review can then be used for flagged records and complex deduplication decisions where automated rules may not be sufficient."
                    }
                },
                {
                    "@type": "Question",
                    "name": "How long does a data cleansing project take?",
                    "acceptedAnswer": {
                        "@type": "Answer",
                        "text":
                            "Project timelines depend on database size, data complexity, and the required level of validation. A data quality assessment and methodology documentation can take 1 to 2 days, followed by a pilot cleansing batch. Larger databases require additional processing time and are typically scoped according to record volume and project requirements."
                    }
                },
                {
                    "@type": "Question",
                    "name": "What types of data can be cleansed?",
                    "acceptedAnswer": {
                        "@type": "Answer",
                        "text":
                            "Data cleansing can be performed on customer and B2B contact data, CRM databases, product catalogs, financial records, marketing lists, eCommerce datasets, operational and logistics data, healthcare records, and other structured or semi-structured business data stored in formats such as CSV, Excel, databases, or cloud platforms."
                    }
                },
                {
                    "@type": "Question",
                    "name": "How do you handle large-volume data cleansing projects?",
                    "acceptedAnswer": {
                        "@type": "Answer",
                        "text":
                            "Large-volume data cleansing projects can be handled through automated pipeline processing, parallel validation streams, rule-based validation, and AI or ML-assisted deduplication where appropriate. Production processing can also include batch monitoring and exception reporting to identify records requiring additional review."
                    }
                },
                {
                    "@type": "Question",
                    "name": "Do you offer ongoing data quality maintenance?",
                    "acceptedAnswer": {
                        "@type": "Answer",
                        "text":
                            "Yes. Scheduled data quality maintenance programmes can help maintain database quality on a defined cadence. The frequency can vary based on data type and business requirements, such as monthly for high-churn B2B contact databases, quarterly for CRM records, or after major import events for product and operational data."
                    }
                }
            ]
        }
    ]
};
