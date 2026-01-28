export const propertyDataCollectionServicesSchema = {
    "@context": "https://schema.org",
    "@graph": [
        {
            "@type": "Service",
            "name": "Property Data Collection Services",
            "serviceType": "Real Estate and Property Data Collection Services",
            "description":
                "Computyne delivers automated property data collection services that gather, validate, and structure real estate listings, transactions, pricing, ownership, and regulatory data to support accurate analysis and informed decision-making.",
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
                "name": "Property Data Collection Solutions",
                "itemListElement": [
                    {
                        "@type": "Offer",
                        "itemOffered": {
                            "@type": "Service",
                            "name": "Property Listing Data Collection Services"
                        }
                    },
                    {
                        "@type": "Offer",
                        "itemOffered": {
                            "@type": "Service",
                            "name": "Real Estate Transaction Data Collection"
                        }
                    },
                    {
                        "@type": "Offer",
                        "itemOffered": {
                            "@type": "Service",
                            "name": "Property Pricing and Valuation Data Collection"
                        }
                    },
                    {
                        "@type": "Offer",
                        "itemOffered": {
                            "@type": "Service",
                            "name": "Rental and Lease Data Collection Services"
                        }
                    },
                    {
                        "@type": "Offer",
                        "itemOffered": {
                            "@type": "Service",
                            "name": "Property Ownership and Title Data Collection"
                        }
                    },
                    {
                        "@type": "Offer",
                        "itemOffered": {
                            "@type": "Service",
                            "name": "Property Tax and Compliance Data Collection"
                        }
                    },
                    {
                        "@type": "Offer",
                        "itemOffered": {
                            "@type": "Service",
                            "name": "Commercial Real Estate Data Collection"
                        }
                    },
                    {
                        "@type": "Offer",
                        "itemOffered": {
                            "@type": "Service",
                            "name": "Geospatial and Location Intelligence Data Collection"
                        }
                    },
                    {
                        "@type": "Offer",
                        "itemOffered": {
                            "@type": "Service",
                            "name": "Property Market Research Data Collection"
                        }
                    }
                ]
            }
        },
        {
            "@type": "Product",
            "name": "Property Data Collection Services",
            "image":
                "https://www.computyne.com/wp-content/uploads/2023/01/computyne-logo.svg",
            "description":
                "Scalable and secure property data collection services delivering validated real estate datasets for analytics, valuation, compliance, and investment decisions.",
            "url": "https://www.computyne.com/property-data-collection-services",
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
                    "name": "What is property data collection?",
                    "acceptedAnswer": {
                        "@type": "Answer",
                        "text":
                            "Property data collection involves gathering, validating, and structuring real estate listings, pricing, transactions, ownership, tax, zoning, and location intelligence from multiple online and offline sources."
                    }
                },
                {
                    "@type": "Question",
                    "name": "What types of property data can be collected?",
                    "acceptedAnswer": {
                        "@type": "Answer",
                        "text":
                            "Residential and commercial listings, transaction records, valuation and pricing data, rental and lease details, ownership and title records, tax data, zoning information, and geospatial intelligence."
                    }
                },
                {
                    "@type": "Question",
                    "name": "How do you ensure property data accuracy?",
                    "acceptedAnswer": {
                        "@type": "Answer",
                        "text":
                            "Accuracy is ensured through automated validation, source verification, normalization rules, and multi-level manual quality audits before delivery."
                    }
                },
                {
                    "@type": "Question",
                    "name": "Is property data collection compliant with regulations?",
                    "acceptedAnswer": {
                        "@type": "Answer",
                        "text":
                            "Yes. All property data collection services follow ethical sourcing practices, applicable data protection laws, and regulatory compliance standards."
                    }
                },
                {
                    "@type": "Question",
                    "name": "Can property data be collected across regions and sources?",
                    "acceptedAnswer": {
                        "@type": "Answer",
                        "text":
                            "Yes. Data is collected from MLS platforms, real estate portals, government registries, municipal records, and offline documents across multiple regions."
                    }
                },
                {
                    "@type": "Question",
                    "name": "How is collected property data delivered?",
                    "acceptedAnswer": {
                        "@type": "Answer",
                        "text":
                            "Property data is delivered in Excel, CSV, JSON, XML, database-ready formats, or through direct system integration based on business requirements."
                    }
                },
                {
                    "@type": "Question",
                    "name": "Can property data collection scale for large portfolios?",
                    "acceptedAnswer": {
                        "@type": "Answer",
                        "text":
                            "Yes. Enterprise-grade automation and workflows support high-volume, recurring, and real-time property data collection at scale."
                    }
                }
            ]
        }
    ]
};
