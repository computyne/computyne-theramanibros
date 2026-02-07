export const realEstateIndustrySchema = {
    "@context": "https://schema.org",
    "@graph": [
        {
            "@type": "Service",
            "name": "Real Estate and Property Management Solutions",
            "serviceType": "Real Estate Data Management and Property Operations Outsourcing",
            "description": "Computyne delivers end-to-end real estate and property management solutions including property data management, listing management, lease digitization, valuation data entry, and compliance-ready documentation support for residential and commercial portfolios.",
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
                "Canada",
                "Australia",
                "Germany",
                "Ireland",
                "Netherlands",
                "France",
                "Singapore",
                "New Zealand",
                "Japan",
                "Switzerland",
                "Spain"
            ],
            "hasOfferCatalog": {
                "@type": "OfferCatalog",
                "name": "Real Estate and Property Management Services",
                "itemListElement": [
                    {
                        "@type": "Offer",
                        "itemOffered": {
                            "@type": "Service",
                            "name": "Real Estate Data Management Services"
                        }
                    },
                    {
                        "@type": "Offer",
                        "itemOffered": {
                            "@type": "Service",
                            "name": "Property Data Entry and Processing"
                        }
                    },
                    {
                        "@type": "Offer",
                        "itemOffered": {
                            "@type": "Service",
                            "name": "Digital Document and Lease Management"
                        }
                    },
                    {
                        "@type": "Offer",
                        "itemOffered": {
                            "@type": "Service",
                            "name": "Property Data Collection Services"
                        }
                    },
                    {
                        "@type": "Offer",
                        "itemOffered": {
                            "@type": "Service",
                            "name": "Appraisal and Valuation Data Entry"
                        }
                    },
                    {
                        "@type": "Offer",
                        "itemOffered": {
                            "@type": "Service",
                            "name": "Property Listing Management Services"
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
                    "name": "What is real estate and property management outsourcing?",
                    "acceptedAnswer": {
                        "@type": "Answer",
                        "text": "Real estate and property management outsourcing involves delegating property data processing, listing management, lease digitization, appraisal data entry, and record maintenance to specialized service providers."
                    }
                },
                {
                    "@type": "Question",
                    "name": "How does outsourcing real estate data management benefit property businesses?",
                    "acceptedAnswer": {
                        "@type": "Answer",
                        "text": "Outsourcing reduces operational costs, improves data accuracy, ensures regulatory compliance, accelerates processing timelines, and allows teams to focus on sales and portfolio growth."
                    }
                },
                {
                    "@type": "Question",
                    "name": "What types of real estate data can be outsourced?",
                    "acceptedAnswer": {
                        "@type": "Answer",
                        "text": "Property listings, lease and contract records, appraisal and valuation data, client databases, floor plans, legal documentation, and portfolio-level property data can be outsourced."
                    }
                },
                {
                    "@type": "Question",
                    "name": "Is outsourced real estate data management secure?",
                    "acceptedAnswer": {
                        "@type": "Answer",
                        "text": "Yes. Secure outsourcing providers follow strict data protection protocols, access controls, NDAs, and compliance-aligned governance frameworks."
                    }
                },
                {
                    "@type": "Question",
                    "name": "Can outsourcing support large real estate portfolios?",
                    "acceptedAnswer": {
                        "@type": "Answer",
                        "text": "Yes. Scalable real estate outsourcing services support enterprise portfolios, multi-location properties, new developments, and fluctuating demand volumes."
                    }
                },
                {
                    "@type": "Question",
                    "name": "How do outsourced services integrate with existing systems?",
                    "acceptedAnswer": {
                        "@type": "Answer",
                        "text": "Outsourced teams integrate seamlessly with CRMs, property management platforms, ERPs, and real estate listing portals using standardized data formats and workflows."
                    }
                }
            ]
        }
    ]
};
