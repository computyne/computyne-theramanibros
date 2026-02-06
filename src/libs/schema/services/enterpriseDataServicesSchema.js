export const enterpriseDataServicesSchema = {
    "@context": "https://schema.org",
    "@graph": [
        {
            "@type": "Service",
            "name": "Enterprise Data Services",
            "serviceType": "Outsourced Data Services and Data Operations Management",
            "description":
                "Computyne delivers secure, scalable, and enterprise-grade data services that support the complete data lifecycle, including data collection, management, processing, annotation, web scraping, and CRM optimization.",
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
                "Canada",
                "Australia",
                "Germany",
                "France",
                "Netherlands",
                "Ireland",
                "Singapore",
                "Japan",
                "Switzerland",
                "Spain",
                "New Zealand"
            ],
            "hasOfferCatalog": {
                "@type": "OfferCatalog",
                "name": "Data Services Portfolio",
                "itemListElement": [
                    {
                        "@type": "Offer",
                        "itemOffered": {
                            "@type": "Service",
                            "name": "Data Collection Services"
                        }
                    },
                    {
                        "@type": "Offer",
                        "itemOffered": {
                            "@type": "Service",
                            "name": "Data Management Services"
                        }
                    },
                    {
                        "@type": "Offer",
                        "itemOffered": {
                            "@type": "Service",
                            "name": "Data Entry Services"
                        }
                    },
                    {
                        "@type": "Offer",
                        "itemOffered": {
                            "@type": "Service",
                            "name": "Data Annotation Services"
                        }
                    },
                    {
                        "@type": "Offer",
                        "itemOffered": {
                            "@type": "Service",
                            "name": "Web Scraping Services"
                        }
                    },
                    {
                        "@type": "Offer",
                        "itemOffered": {
                            "@type": "Service",
                            "name": "CRM and Database Services"
                        }
                    }
                ]
            }
        },
        {
            "@type": "Product",
            "name": "Outsourced Data Services",
            "image":
                "https://www.computyne.com/images/site-logo/blue-logo.svg",
            "description":
                "Computyne provides end-to-end outsourced data services that ensure accuracy, scalability, compliance, and operational efficiency for enterprise data environments.",
            "url": "https://www.computyne.com/data-services",
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
                    "name": "What are data services?",
                    "acceptedAnswer": {
                        "@type": "Answer",
                        "text":
                            "Data services include collecting, processing, cleansing, validating, managing, and structuring business data for use in analytics, CRM systems, automation, and enterprise decision-making."
                    }
                },
                {
                    "@type": "Question",
                    "name": "Why should businesses outsource data services?",
                    "acceptedAnswer": {
                        "@type": "Answer",
                        "text":
                            "Outsourcing data services reduces operational costs, eliminates manual workloads, improves accuracy, and provides access to skilled data professionals without in-house hiring."
                    }
                },
                {
                    "@type": "Question",
                    "name": "What data services does Computyne provide?",
                    "acceptedAnswer": {
                        "@type": "Answer",
                        "text":
                            "Computyne offers data collection, data management, data entry, data cleansing, data annotation, web scraping, CRM cleanup, database management, and document digitization services."
                    }
                },
                {
                    "@type": "Question",
                    "name": "How is data accuracy ensured?",
                    "acceptedAnswer": {
                        "@type": "Answer",
                        "text":
                            "Data accuracy is ensured through multi-level validation, deduplication, standardization, automated checks, and structured quality assurance workflows."
                    }
                },
                {
                    "@type": "Question",
                    "name": "Are outsourced data services secure?",
                    "acceptedAnswer": {
                        "@type": "Answer",
                        "text":
                            "Yes. Computyne follows strict security protocols including NDAs, access-controlled environments, encryption, and GDPR-aligned compliance standards."
                    }
                },
                {
                    "@type": "Question",
                    "name": "Can data services scale with business growth?",
                    "acceptedAnswer": {
                        "@type": "Answer",
                        "text":
                            "Yes. Outsourced data services allow instant scaling to handle high-volume processing, migrations, seasonal demand, and multi-location operations."
                    }
                }
            ]
        }
    ]
};
