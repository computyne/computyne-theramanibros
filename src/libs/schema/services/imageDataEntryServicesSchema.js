export const imageDataEntryServicesSchema = {
    "@context": "https://schema.org",
    "@graph": [
        {
            "@type": "Service",
            "name": "Image Data Entry Services",
            "serviceType":
                "Outsourced Image Data Entry and Image-to-Data Conversion Services",
            "description":
                "Computyne delivers secure, scalable, and accuracy-driven image data entry services that convert image-based information into structured, searchable, and enterprise-ready digital data using OCR technology, validation workflows, and secure processing environments.",
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
                "name": "Image Data Entry Solutions",
                "itemListElement": [
                    {
                        "@type": "Offer",
                        "itemOffered": {
                            "@type": "Service",
                            "name": "Image Data Extraction Services"
                        }
                    },
                    {
                        "@type": "Offer",
                        "itemOffered": {
                            "@type": "Service",
                            "name": "Image Data Validation and Cleansing"
                        }
                    },
                    {
                        "@type": "Offer",
                        "itemOffered": {
                            "@type": "Service",
                            "name": "Image Data Categorization and Indexing"
                        }
                    },
                    {
                        "@type": "Offer",
                        "itemOffered": {
                            "@type": "Service",
                            "name": "Image Data Integration Services"
                        }
                    }
                ]
            }
        },
        {
            "@type": "Product",
            "name": "Outsourced Image Data Entry Services",
            "image":
                "https://www.computyne.com/images/site-logo/blue-logo.svg",
            "description":
                "Computyne provides end-to-end outsourced image data entry services that ensure high accuracy, data security, scalability, and seamless integration with enterprise systems.",
            "url": "https://www.computyne.com/image-data-entry-services",
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
                    "name": "What is image data entry and why is it important?",
                    "acceptedAnswer": {
                        "@type": "Answer",
                        "text":
                            "Image data entry converts information from images into structured digital formats, enabling better data accessibility, improved accuracy, and faster business decision-making."
                    }
                },
                {
                    "@type": "Question",
                    "name": "How is image data entry different from document digitization?",
                    "acceptedAnswer": {
                        "@type": "Answer",
                        "text":
                            "Image data entry extracts specific data fields from images, while document digitization focuses on converting physical documents into digital image files."
                    }
                },
                {
                    "@type": "Question",
                    "name": "Which image formats are supported?",
                    "acceptedAnswer": {
                        "@type": "Answer",
                        "text":
                            "Supported formats include scanned images, photographs, handwritten documents, PDFs, charts, graphs, and complex image-based layouts."
                    }
                },
                {
                    "@type": "Question",
                    "name": "How is accuracy ensured in image data entry projects?",
                    "acceptedAnswer": {
                        "@type": "Answer",
                        "text":
                            "Accuracy is ensured through OCR technology, template-based extraction, multi-level validation, automated quality checks, and manual reviews."
                    }
                },
                {
                    "@type": "Question",
                    "name": "Can poor-quality or complex images be processed?",
                    "acceptedAnswer": {
                        "@type": "Answer",
                        "text":
                            "Yes. Advanced preprocessing techniques and expert validation enable accurate data extraction from low-quality or unstructured images."
                    }
                },
                {
                    "@type": "Question",
                    "name": "Is outsourced image data entry secure?",
                    "acceptedAnswer": {
                        "@type": "Answer",
                        "text":
                            "Yes. Computyne applies encrypted data transfers, access-controlled environments, NDAs, and compliance-driven security protocols."
                    }
                },
                {
                    "@type": "Question",
                    "name": "Which industries benefit most from image data entry services?",
                    "acceptedAnswer": {
                        "@type": "Answer",
                        "text":
                            "Industries such as banking, healthcare, insurance, retail, logistics, manufacturing, publishing, and government benefit significantly from image data entry services."
                    }
                },
                {
                    "@type": "Question",
                    "name": "Can image data entry services scale for enterprise volumes?",
                    "acceptedAnswer": {
                        "@type": "Answer",
                        "text":
                            "Yes. Image data entry services are designed for high-volume, enterprise-scale processing with flexible capacity and rapid turnaround."
                    }
                }
            ]
        }
    ]
};
