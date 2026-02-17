export const mortgageDataentrySupportSchema = {
    "@context": "https://schema.org",
    "@graph": [
        {
            "@type": "Organization",
            "@id": "https://www.computyne.com/#organization",
            "name": "Computyne",
            "url": "https://www.computyne.com",
            "logo": "https://www.computyne.com/images/site-logo/blue-logo.svg",
            "sameAs": [
                "https://www.linkedin.com/company/computyne",
                "https://www.facebook.com/computyne",
                "https://twitter.com/computyne"
            ],
            "contactPoint": {
                "@type": "ContactPoint",
                "contactType": "Customer Support",
                "email": "info@computyne.com"
            }
        },
        {
            "@type": "Service",
            "@id": "https://www.computyne.com/mortgage-data-entry-services#service",
            "name": "Mortgage Data Entry Support",
            "serviceType": "Outsourced Mortgage Data Entry and Loan Processing Support Services",
            "url": "https://www.computyne.com/mortgage-data-entry-services",
            "description": "Computyne provides secure, scalable mortgage data entry support including loan application data capture, document indexing, underwriting data verification, foreclosure data management, and post-closing processing for institutional lenders.",
            "provider": {
                "@id": "https://www.computyne.com/#organization"
            },
            "areaServed": [
                "United States",
                "United Kingdom",
                "Canada",
                "Australia",
                "Ireland",
                "Netherlands",
                "Germany",
                "France",
                "Spain",
                "Italy",
                "Singapore",
                "New Zealand",
                "Japan",
                "Switzerland",
                "Hong Kong"
            ],
            "hasOfferCatalog": {
                "@type": "OfferCatalog",
                "name": "Mortgage Data Processing Services",
                "itemListElement": [
                    {
                        "@type": "Offer",
                        "itemOffered": {
                            "@type": "Service",
                            "name": "Mortgage Loan Application Data Entry Services"
                        }
                    },
                    {
                        "@type": "Offer",
                        "itemOffered": {
                            "@type": "Service",
                            "name": "Mortgage Document Data Entry and Indexing Services"
                        }
                    },
                    {
                        "@type": "Offer",
                        "itemOffered": {
                            "@type": "Service",
                            "name": "Mortgage Underwriting and Financial Verification Support"
                        }
                    },
                    {
                        "@type": "Offer",
                        "itemOffered": {
                            "@type": "Service",
                            "name": "Foreclosure Data Entry and Default Management Support"
                        }
                    },
                    {
                        "@type": "Offer",
                        "itemOffered": {
                            "@type": "Service",
                            "name": "Closing and Post-Closing Data Processing Services"
                        }
                    },
                    {
                        "@type": "Offer",
                        "itemOffered": {
                            "@type": "Service",
                            "name": "Mortgage Back Office and Loan Boarding Support"
                        }
                    }
                ]
            }
        },
        {
            "@type": "FAQPage",
            "@id": "https://www.computyne.com/mortgage-data-entry-services#faq",
            "mainEntity": [
                {
                    "@type": "Question",
                    "name": "What are mortgage data entry services?",
                    "acceptedAnswer": {
                        "@type": "Answer",
                        "text": "Mortgage data entry services involve structured ingestion and organization of borrower, property, and loan documentation into system-ready records for loan origination and servicing platforms."
                    }
                },
                {
                    "@type": "Question",
                    "name": "How do you ensure data accuracy for institutional audits?",
                    "acceptedAnswer": {
                        "@type": "Answer",
                        "text": "Accuracy is ensured through trained specialists, standardized workflows, and multi-layer quality review protocols designed to meet institutional and secondary market audit standards."
                    }
                },
                {
                    "@type": "Question",
                    "name": "Do you provide post-closing or foreclosure support?",
                    "acceptedAnswer": {
                        "@type": "Answer",
                        "text": "Yes. Services include post-closing documentation, foreclosure data management, indexing, and extraction of legal descriptions from verified county records."
                    }
                },
                {
                    "@type": "Question",
                    "name": "Can you integrate with our Loan Origination System?",
                    "acceptedAnswer": {
                        "@type": "Answer",
                        "text": "Yes. The team integrates with proprietary and widely used mortgage platforms, adapting to required fields and formatting for direct system ingestion."
                    }
                },
                {
                    "@type": "Question",
                    "name": "Is borrower data secure throughout the process?",
                    "acceptedAnswer": {
                        "@type": "Answer",
                        "text": "Yes. Operations align with ISO/IEC 27001:2022 standards and include encrypted data transfers, strict access controls, and secure workstations."
                    }
                },
                {
                    "@type": "Question",
                    "name": "Can you handle high loan volumes during peak cycles?",
                    "acceptedAnswer": {
                        "@type": "Answer",
                        "text": "Yes. The delivery model is scalable and supports seasonal surges while maintaining defined turnaround times and quality benchmarks."
                    }
                },
                {
                    "@type": "Question",
                    "name": "Can you manage foreclosure property listings and county data?",
                    "acceptedAnswer": {
                        "@type": "Answer",
                        "text": "Yes. Foreclosure property data is extracted and structured from verified county records, including VA, HUD, and bank foreclosure listings."
                    }
                },
                {
                    "@type": "Question",
                    "name": "What turnaround times can you support for daily pipelines?",
                    "acceptedAnswer": {
                        "@type": "Answer",
                        "text": "Turnaround times are defined during onboarding, with accelerated and overnight processing options available where applicable."
                    }
                }
            ]
        }
    ]
};