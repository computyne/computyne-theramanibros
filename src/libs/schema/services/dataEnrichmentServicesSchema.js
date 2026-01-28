export const dataEnrichmentServicesSchema = {
    "@context": "https://schema.org",
    "@graph": [
        {
            "@type": "Service",
            "name": "Data Enrichment Services",
            "serviceType": "B2B and Enterprise Data Enrichment Services",
            "description":
                "Computyne provides scalable data enrichment services that enhance existing datasets with verified, accurate, and actionable intelligence to support sales, marketing, analytics, and business growth.",
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
                "name": "Data Enrichment Solutions",
                "itemListElement": [
                    {
                        "@type": "Offer",
                        "itemOffered": {
                            "@type": "Service",
                            "name": "B2B Data Enrichment Services"
                        }
                    },
                    {
                        "@type": "Offer",
                        "itemOffered": {
                            "@type": "Service",
                            "name": "CRM Data Enrichment Services"
                        }
                    },
                    {
                        "@type": "Offer",
                        "itemOffered": {
                            "@type": "Service",
                            "name": "Contact and Email Data Enrichment Services"
                        }
                    },
                    {
                        "@type": "Offer",
                        "itemOffered": {
                            "@type": "Service",
                            "name": "Firmographic and Demographic Data Enrichment"
                        }
                    },
                    {
                        "@type": "Offer",
                        "itemOffered": {
                            "@type": "Service",
                            "name": "Sales and Marketing Data Enrichment Services"
                        }
                    },
                    {
                        "@type": "Offer",
                        "itemOffered": {
                            "@type": "Service",
                            "name": "Data Cleansing and Enrichment Services"
                        }
                    }
                ]
            }
        },
        {
            "@type": "Product",
            "name": "Data Enrichment Services",
            "image":
                "https://www.computyne.com/wp-content/uploads/2023/01/computyne-logo.svg",
            "description":
                "Computyne delivers enterprise-grade data enrichment services that transform raw data into enriched, accurate, and decision-ready business intelligence.",
            "url": "https://www.computyne.com/data-enrichment-services",
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
                    "name": "What are data enrichment services?",
                    "acceptedAnswer": {
                        "@type": "Answer",
                        "text":
                            "Data enrichment services enhance existing datasets by appending accurate, verified information from trusted sources, improving completeness, usability, and data-driven decision-making."
                    }
                },
                {
                    "@type": "Question",
                    "name": "Why should businesses outsource data enrichment?",
                    "acceptedAnswer": {
                        "@type": "Answer",
                        "text":
                            "Outsourcing data enrichment reduces operational costs, improves accuracy, ensures scalability, and provides access to skilled professionals and advanced enrichment tools without internal infrastructure management."
                    }
                },
                {
                    "@type": "Question",
                    "name": "What types of data can be enriched?",
                    "acceptedAnswer": {
                        "@type": "Answer",
                        "text":
                            "Customer data, B2B contact records, CRM databases, firmographic and demographic data, email and phone records, sales intelligence, and marketing datasets can be enriched."
                    }
                },
                {
                    "@type": "Question",
                    "name": "How does data enrichment improve sales and marketing performance?",
                    "acceptedAnswer": {
                        "@type": "Answer",
                        "text":
                            "Enriched data enables better targeting, accurate segmentation, improved personalization, and higher engagement by eliminating incomplete, outdated, or inaccurate records."
                    }
                },
                {
                    "@type": "Question",
                    "name": "Is data enrichment compliant with data protection regulations?",
                    "acceptedAnswer": {
                        "@type": "Answer",
                        "text":
                            "Yes. Professional data enrichment providers follow strict security protocols, ethical data sourcing practices, and global data protection regulations such as GDPR."
                    }
                },
                {
                    "@type": "Question",
                    "name": "How often should data enrichment be performed?",
                    "acceptedAnswer": {
                        "@type": "Answer",
                        "text":
                            "Data enrichment should be conducted regularly or continuously to prevent data decay and maintain accuracy, relevance, and reliability across business systems."
                    }
                }
            ]
        }
    ]
};
