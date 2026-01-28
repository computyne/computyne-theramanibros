export const documentDigitizationSchema = {
    "@context": "https://schema.org",
    "@graph": [
        {
            "@type": "Service",
            "name": "Document Digitization Services",
            "serviceType": "Paper to Digital Document Conversion and OCR Services",
            "description":
                "Computyne provides secure, scalable, and enterprise-grade document digitization services, converting physical records into searchable, compliant, and audit-ready digital assets using advanced scanning, OCR, indexing, validation, and digital archiving workflows.",
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
                "name": "Document Digitization Solutions",
                "itemListElement": [
                    {
                        "@type": "Offer",
                        "itemOffered": {
                            "@type": "Service",
                            "name": "Document Scanning and Imaging Services"
                        }
                    },
                    {
                        "@type": "Offer",
                        "itemOffered": {
                            "@type": "Service",
                            "name": "OCR and Text Recognition Services"
                        }
                    },
                    {
                        "@type": "Offer",
                        "itemOffered": {
                            "@type": "Service",
                            "name": "Indexing and Metadata Tagging Services"
                        }
                    },
                    {
                        "@type": "Offer",
                        "itemOffered": {
                            "@type": "Service",
                            "name": "File Conversion and Digital Formatting Services"
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
                            "name": "Secure Digital Archiving Services"
                        }
                    }
                ]
            }
        },
        {
            "@type": "Product",
            "name": "Enterprise Document Digitization Solutions",
            "image":
                "https://www.computyne.com/wp-content/uploads/2023/01/computyne-logo.svg",
            "description":
                "End-to-end document digitization solutions delivering secure scanning, OCR-based data extraction, indexing, validation, and compliant digital archiving for large-volume and enterprise document environments.",
            "url": "https://www.computyne.com/document-digitization-services",
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
                    "name": "What are document digitization services?",
                    "acceptedAnswer": {
                        "@type": "Answer",
                        "text":
                            "Document digitization services convert physical paper records into secure, searchable digital formats using high-resolution scanning, OCR, indexing, and quality validation to enable efficient digital document management."
                    }
                },
                {
                    "@type": "Question",
                    "name": "Which document types can be digitized?",
                    "acceptedAnswer": {
                        "@type": "Answer",
                        "text":
                            "Document digitization supports business records, contracts, invoices, books, newspapers, medical records, legal files, engineering drawings, and large-format documents across industries."
                    }
                },
                {
                    "@type": "Question",
                    "name": "How accurate is OCR-based document digitization?",
                    "acceptedAnswer": {
                        "@type": "Answer",
                        "text":
                            "OCR-based document digitization combined with automated and manual validation processes delivers accuracy levels exceeding 99.99%, depending on document condition and complexity."
                    }
                },
                {
                    "@type": "Question",
                    "name": "Is document digitization secure?",
                    "acceptedAnswer": {
                        "@type": "Answer",
                        "text":
                            "Yes. Secure document digitization includes encrypted storage, role-based access controls, audit trails, and compliance with GDPR, HIPAA, and ISO-certified security standards."
                    }
                },
                {
                    "@type": "Question",
                    "name": "What output formats are supported?",
                    "acceptedAnswer": {
                        "@type": "Answer",
                        "text":
                            "Digitized documents can be delivered in PDF, searchable PDF/A, TIFF, JPEG, XML, CSV, and structured formats compatible with enterprise systems."
                    }
                },
                {
                    "@type": "Question",
                    "name": "Can document digitization support audits and compliance?",
                    "acceptedAnswer": {
                        "@type": "Answer",
                        "text":
                            "Yes. Digitized records enable controlled access, version control, retention management, and rapid retrieval for regulatory audits and legal reviews."
                    }
                },
                {
                    "@type": "Question",
                    "name": "How long does a document digitization project take?",
                    "acceptedAnswer": {
                        "@type": "Answer",
                        "text":
                            "Project timelines depend on document volume, condition, and complexity; however, scalable workflows and automation ensure faster turnaround times."
                    }
                },
                {
                    "@type": "Question",
                    "name": "Can document digitization scale for large volumes?",
                    "acceptedAnswer": {
                        "@type": "Answer",
                        "text":
                            "Yes. Large-volume document digitization services are designed to handle enterprise-scale backlogs while maintaining accuracy, security, and consistent quality."
                    }
                }
            ]
        }
    ]
};
