export const documentProcessingServicesSchema = {
    "@context": "https://schema.org",
    "@graph": [
        {
            "@type": "Service",
            "name": "Document Processing Services",
            "serviceType": "Outsourced Document Processing and Data Processing Services",
            "description":
                "Computyne provides secure, scalable document processing services that capture, extract, validate, digitize, and structure data from physical and digital documents into analytics-ready, decision-ready intelligence.",
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
                "name": "Document Processing Solutions",
                "itemListElement": [
                    {
                        "@type": "Offer",
                        "itemOffered": {
                            "@type": "Service",
                            "name": "Freight Audit Services"
                        }
                    },
                    {
                        "@type": "Offer",
                        "itemOffered": {
                            "@type": "Service",
                            "name": "Invoice Processing Services"
                        }
                    },
                    {
                        "@type": "Offer",
                        "itemOffered": {
                            "@type": "Service",
                            "name": "Resume Formatting Services"
                        }
                    },
                    {
                        "@type": "Offer",
                        "itemOffered": {
                            "@type": "Service",
                            "name": "Forms Processing Services"
                        }
                    },
                    {
                        "@type": "Offer",
                        "itemOffered": {
                            "@type": "Service",
                            "name": "Document Digitization Services"
                        }
                    },
                    {
                        "@type": "Offer",
                        "itemOffered": {
                            "@type": "Service",
                            "name": "Data Analytics and Reporting Services"
                        }
                    }
                ]
            }
        },
        {
            "@type": "Product",
            "name": "Outsourced Document Processing Services",
            "image":
                "https://www.computyne.com/images/site-logo/blue-logo.svg",
            "description":
                "Computyne delivers enterprise-grade document processing services that automate data extraction, validation, digitization, and analytics from high-volume documents with accuracy, compliance, and scalability.",
            "url": "https://www.computyne.com/document-processing-services",
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
                    "name": "What are Document Processing Services?",
                    "acceptedAnswer": {
                        "@type": "Answer",
                        "text":
                            "Document processing services capture, extract, validate, and convert data from physical and digital documents into structured formats that support analytics, reporting, and informed decision-making."
                    }
                },
                {
                    "@type": "Question",
                    "name": "Which types of documents can be processed?",
                    "acceptedAnswer": {
                        "@type": "Answer",
                        "text":
                            "Invoices, freight bills, resumes, forms, contracts, statements, reports, and other high-volume unstructured documents can be processed using OCR, AI, and automated extraction tools."
                    }
                },
                {
                    "@type": "Question",
                    "name": "How do outsourced document processing services improve accuracy?",
                    "acceptedAnswer": {
                        "@type": "Answer",
                        "text":
                            "Automation combined with standardized workflows, validation rules, and multi-level quality checks eliminates errors, duplicates, and inconsistencies found in manual processing."
                    }
                },
                {
                    "@type": "Question",
                    "name": "Is document processing secure and compliant?",
                    "acceptedAnswer": {
                        "@type": "Answer",
                        "text":
                            "Yes. Secure document processing follows strict access controls, encryption standards, audit trails, and regulatory-compliant data handling practices."
                    }
                },
                {
                    "@type": "Question",
                    "name": "Can document processing services scale with business growth?",
                    "acceptedAnswer": {
                        "@type": "Answer",
                        "text":
                            "Yes. Outsourced document processing services are designed to scale rapidly to handle fluctuating workloads without infrastructure or hiring constraints."
                    }
                },
                {
                    "@type": "Question",
                    "name": "What output formats are supported?",
                    "acceptedAnswer": {
                        "@type": "Answer",
                        "text":
                            "Processed data can be delivered in Excel, CSV, XML, JSON, database-ready files, dashboards, and customized reporting formats."
                    }
                },
                {
                    "@type": "Question",
                    "name": "How does document processing support better decision-making?",
                    "acceptedAnswer": {
                        "@type": "Answer",
                        "text":
                            "By delivering clean, structured, and analytics-ready data, document processing enables faster reporting, improved visibility, and confident data-driven decisions."
                    }
                }
            ]
        }
    ]
};
