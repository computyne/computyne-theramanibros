export const logisticsDataEntryServicesSchema = {
    "@context": "https://schema.org",
    "@graph": [
        {
            "@type": "Service",
            "name": "Logistics Data Entry Services",
            "serviceType":
                "Outsourced Logistics Data Entry and Supply Chain Data Management",
            "description":
                "Computyne provides secure, accurate, and scalable logistics data entry services including order processing, inventory management, shipment tracking, freight billing, and logistics document digitization to improve supply chain visibility and operational efficiency.",
            "provider": {
                "@type": "Organization",
                "name": "Computyne",
                "url": "https://www.computyne.com",
                "logo":
                    "https://www.computyne.com/wp-content/uploads/2023/01/computyne-logo.svg",
                "contactPoint": {
                    "@type": "ContactPoint",
                    "contactType": "Customer Support",
                    "email": "info@computyne.com",
                    "availableLanguage": ["English"]
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
                "name": "Logistics Data Entry Solutions",
                "itemListElement": [
                    {
                        "@type": "Offer",
                        "itemOffered": {
                            "@type": "Service",
                            "name": "Customer Order Data Entry Services"
                        }
                    },
                    {
                        "@type": "Offer",
                        "itemOffered": {
                            "@type": "Service",
                            "name": "Inventory Data Entry and Management"
                        }
                    },
                    {
                        "@type": "Offer",
                        "itemOffered": {
                            "@type": "Service",
                            "name": "Shipment and Tracking Data Entry"
                        }
                    },
                    {
                        "@type": "Offer",
                        "itemOffered": {
                            "@type": "Service",
                            "name": "Freight Billing and Logistics Documentation"
                        }
                    }
                ]
            }
        },
        {
            "@type": "Product",
            "name": "Outsourced Logistics Data Entry Services",
            "image":
                "https://www.computyne.com/wp-content/uploads/2023/01/computyne-logo.svg",
            "description":
                "End-to-end outsourced logistics data entry services delivering high-accuracy, standardized, and compliant logistics data to support supply chain operations, reporting, and system integrations.",
            "url": "https://www.computyne.com/logistics-data-entry-services",
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
                    "name": "What is logistics data entry?",
                    "acceptedAnswer": {
                        "@type": "Answer",
                        "text":
                            "Logistics data entry involves capturing, validating, and digitizing logistics information such as orders, shipments, inventory, and freight documents into structured systems for efficient supply chain management."
                    }
                },
                {
                    "@type": "Question",
                    "name": "Why is logistics data entry important for supply chains?",
                    "acceptedAnswer": {
                        "@type": "Answer",
                        "text":
                            "It ensures real-time visibility, accurate documentation, inventory control, regulatory compliance, and timely deliveries across logistics operations."
                    }
                },
                {
                    "@type": "Question",
                    "name": "What data is included in logistics data entry services?",
                    "acceptedAnswer": {
                        "@type": "Answer",
                        "text":
                            "Customer orders, inventory records, shipment and tracking details, freight bills, bills of lading, proof of delivery, and purchase orders."
                    }
                },
                {
                    "@type": "Question",
                    "name": "How does logistics data entry improve efficiency?",
                    "acceptedAnswer": {
                        "@type": "Answer",
                        "text":
                            "Standardized workflows, automation, and validation reduce errors, accelerate processing, improve system integration, and enhance data accessibility."
                    }
                },
                {
                    "@type": "Question",
                    "name": "Which industries benefit from logistics data entry services?",
                    "acceptedAnswer": {
                        "@type": "Answer",
                        "text":
                            "Transportation and logistics, retail, eCommerce, manufacturing, warehousing, distribution, freight forwarding, customs brokerage, and third-party logistics providers."
                    }
                },
                {
                    "@type": "Question",
                    "name": "What technologies are used in logistics data entry?",
                    "acceptedAnswer": {
                        "@type": "Answer",
                        "text":
                            "OCR, automated data capture, AI-driven validation tools, and ERP, WMS, TMS, and CRM system integrations."
                    }
                },
                {
                    "@type": "Question",
                    "name": "Is logistics data entry secure and compliant?",
                    "acceptedAnswer": {
                        "@type": "Answer",
                        "text":
                            "Yes. Professional logistics data entry services follow strict security controls, access governance, NDAs, and regulatory compliance standards."
                    }
                }
            ]
        }
    ]
};
