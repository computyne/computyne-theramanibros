export const itesIndustrySchema = {
    "@context": "https://schema.org",
    "@graph": [
        {
            "@type": "Service",
            "name": "ITES BPO Support Services",
            "serviceType": "IT-Enabled Services Business Process Outsourcing",
            "description": "Computyne delivers precision-driven BPO support services for ITES organizations, including data processing, document management, validation, reporting, and SLA-driven back-office operations designed for high-volume, accuracy-critical environments.",
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
                "Netherlands",
                "Ireland",
                "Singapore",
                "New Zealand"
            ],
            "hasOfferCatalog": {
                "@type": "OfferCatalog",
                "name": "ITES BPO Service Offerings",
                "itemListElement": [
                    {
                        "@type": "Offer",
                        "itemOffered": {
                            "@type": "Service",
                            "name": "Data Processing and Management Services"
                        }
                    },
                    {
                        "@type": "Offer",
                        "itemOffered": {
                            "@type": "Service",
                            "name": "Document Management and Digitization Services"
                        }
                    },
                    {
                        "@type": "Offer",
                        "itemOffered": {
                            "@type": "Service",
                            "name": "Data Validation and Quality Assurance Services"
                        }
                    },
                    {
                        "@type": "Offer",
                        "itemOffered": {
                            "@type": "Service",
                            "name": "Reporting and MIS Support Services"
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
                    "name": "What are BPO services for ITES?",
                    "acceptedAnswer": {
                        "@type": "Answer",
                        "text": "BPO services for ITES involve outsourcing data processing, document management, reporting, quality assurance, and back-office operations to improve efficiency, accuracy, scalability, and cost control for IT-enabled service providers."
                    }
                },
                {
                    "@type": "Question",
                    "name": "How do ITES companies benefit from BPO services?",
                    "acceptedAnswer": {
                        "@type": "Answer",
                        "text": "ITES companies benefit through reduced operational costs, improved turnaround times, higher data accuracy, standardized processes, enhanced compliance, and scalable delivery models."
                    }
                },
                {
                    "@type": "Question",
                    "name": "Which ITES processes can be outsourced?",
                    "acceptedAnswer": {
                        "@type": "Answer",
                        "text": "Commonly outsourced ITES processes include data entry and validation, transaction processing, document digitization, reporting support, quality control, and compliance-driven back-office functions."
                    }
                },
                {
                    "@type": "Question",
                    "name": "How is data security maintained in ITES BPO services?",
                    "acceptedAnswer": {
                        "@type": "Answer",
                        "text": "Data security is ensured through role-based access controls, secure infrastructure, audit trails, governed workflows, NDAs, and adherence to global data protection standards."
                    }
                },
                {
                    "@type": "Question",
                    "name": "Can ITES BPO services scale with business growth?",
                    "acceptedAnswer": {
                        "@type": "Answer",
                        "text": "Yes. ITES BPO services are designed to scale rapidly, enabling organizations to manage workload spikes, seasonal demand, and business expansion without increasing internal overhead."
                    }
                }
            ]
        }
    ]
};
