export const invoiceProcessingServicesSchema = {
    "@context": "https://schema.org",
    "@graph": [
        {
            "@type": "Service",
            "name": "Invoice Processing Services",
            "serviceType":
                "Outsourced Invoice Processing and Accounts Payable Automation",
            "description":
                "Computyne delivers secure, scalable, and automated invoice processing services that manage invoice capture, OCR data extraction, validation, approval workflows, ERP posting, exception handling, and reporting to ensure accuracy, compliance, and faster payment cycles.",
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
                "name": "Invoice Processing Solutions",
                "itemListElement": [
                    {
                        "@type": "Offer",
                        "itemOffered": {
                            "@type": "Service",
                            "name": "Invoice Data Capture and Digitization"
                        }
                    },
                    {
                        "@type": "Offer",
                        "itemOffered": {
                            "@type": "Service",
                            "name": "Invoice Validation and Verification"
                        }
                    },
                    {
                        "@type": "Offer",
                        "itemOffered": {
                            "@type": "Service",
                            "name": "Accounts Payable Invoice Processing"
                        }
                    },
                    {
                        "@type": "Offer",
                        "itemOffered": {
                            "@type": "Service",
                            "name":
                                "Invoice Exception Handling and Discrepancy Resolution"
                        }
                    },
                    {
                        "@type": "Offer",
                        "itemOffered": {
                            "@type": "Service",
                            "name": "Invoice Reporting and Analytics"
                        }
                    }
                ]
            }
        },
        {
            "@type": "Product",
            "name": "Outsourced Invoice Processing Services",
            "image":
                "https://www.computyne.com/images/site-logo/blue-logo.svg",
            "description":
                "End-to-end outsourced invoice processing services that ensure faster approvals, high accuracy, regulatory compliance, reduced processing costs, and scalable performance across global invoice environments.",
            "url": "https://www.computyne.com/invoice-processing-services",
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
                    "name": "What are invoice processing services?",
                    "acceptedAnswer": {
                        "@type": "Answer",
                        "text":
                            "Invoice processing services manage invoice capture, OCR-based data extraction, validation, approval workflows, ERP posting, exception handling, and payment processing to ensure accuracy, compliance, and faster accounts payable cycles."
                    }
                },
                {
                    "@type": "Question",
                    "name": "Why should businesses outsource invoice processing?",
                    "acceptedAnswer": {
                        "@type": "Answer",
                        "text":
                            "Outsourcing invoice processing reduces manual effort, minimizes errors, lowers operational costs, improves compliance, and accelerates invoice approvals and payments."
                    }
                },
                {
                    "@type": "Question",
                    "name": "What types of invoices can you process?",
                    "acceptedAnswer": {
                        "@type": "Answer",
                        "text":
                            "We process standard, proforma, debit, credit, and commercial invoices across paper, scanned, PDF, and digital formats."
                    }
                },
                {
                    "@type": "Question",
                    "name": "How is invoice accuracy ensured?",
                    "acceptedAnswer": {
                        "@type": "Answer",
                        "text":
                            "Accuracy is ensured through OCR automation, business rule validation, three-way invoice matching, duplicate detection, and multi-level quality assurance checks."
                    }
                },
                {
                    "@type": "Question",
                    "name": "Can invoice processing integrate with ERP systems?",
                    "acceptedAnswer": {
                        "@type": "Answer",
                        "text":
                            "Yes. Our invoice processing services integrate with SAP, Oracle, NetSuite, and other leading ERP and accounting systems."
                    }
                },
                {
                    "@type": "Question",
                    "name": "Is outsourced invoice processing secure?",
                    "acceptedAnswer": {
                        "@type": "Answer",
                        "text":
                            "Yes. We follow strict security controls, access restrictions, encrypted environments, and GDPR- and SOX-aligned compliance standards."
                    }
                },
                {
                    "@type": "Question",
                    "name": "Who can benefit from invoice processing services?",
                    "acceptedAnswer": {
                        "@type": "Answer",
                        "text":
                            "Enterprises, SMEs, shared services centers, and organizations managing high-volume, multi-format invoices across regions benefit significantly."
                    }
                }
            ]
        }
    ]
};
