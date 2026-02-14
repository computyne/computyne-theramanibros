export const freightBillOfLadingSchema = {
    "@context": "https://schema.org",
    "@graph": [
        {
            "@type": "Service",
            "name": "Freight Bill of Lading Services",
            "serviceType": "Freight Bill of Lading Data Entry and Management Services",
            "description":
                "Computyne delivers secure, accurate, and scalable Freight Bill of Lading (BOL) services that streamline freight documentation, tracking, compliance validation, and billing reconciliation for domestic and international shipments.",
            "provider": {
                "@type": "Organization",
                "name": "Computyne",
                "url": "https://www.computyne.com",
                "logo":
                    "https://www.computyne.com/images/site-logo/blue-logo.svg",
                "contactPoint": {
                    "@type": "ContactPoint",
                    "contactType": "Freight Documentation Support",
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
                "name": "Freight Bill of Lading Service Portfolio",
                "itemListElement": [
                    {
                        "@type": "Offer",
                        "itemOffered": {
                            "@type": "Service",
                            "name": "Freight Bill of Lading Data Processing"
                        }
                    },
                    {
                        "@type": "Offer",
                        "itemOffered": {
                            "@type": "Service",
                            "name": "Automated Freight BOL Data Capture"
                        }
                    },
                    {
                        "@type": "Offer",
                        "itemOffered": {
                            "@type": "Service",
                            "name": "Freight Compliance and BOL Validation"
                        }
                    },
                    {
                        "@type": "Offer",
                        "itemOffered": {
                            "@type": "Service",
                            "name": "Shipment Tracking and BOL Visibility"
                        }
                    },
                    {
                        "@type": "Offer",
                        "itemOffered": {
                            "@type": "Service",
                            "name": "Freight Billing and BOL Reconciliation"
                        }
                    }
                ]
            }
        },
        {
            "@type": "Product",
            "name": "Outsourced Freight Bill of Lading Services",
            "image":
                "https://www.computyne.com/images/site-logo/blue-logo.svg",
            "description":
                "End-to-end outsourced Freight Bill of Lading services ensuring documentation accuracy, regulatory compliance, real-time shipment visibility, and efficient freight billing.",
            "url": "https://www.computyne.com/freight-bill-of-lading-services",
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
                    "name": "What is Bill of Lading data entry?",
                    "acceptedAnswer": {
                        "@type": "Answer",
                        "text":
                            "Bill of Lading data entry involves capturing and validating shipment information from BOL documents into digital systems for tracking, billing, compliance, and freight visibility."
                    }
                },
                {
                    "@type": "Question",
                    "name": "Why is accurate Bill of Lading data entry important?",
                    "acceptedAnswer": {
                        "@type": "Answer",
                        "text":
                            "Accurate BOL data entry prevents billing discrepancies, shipment delays, carrier disputes, and compliance violations while ensuring smooth freight movement."
                    }
                },
                {
                    "@type": "Question",
                    "name": "What information is captured during Bill of Lading data entry?",
                    "acceptedAnswer": {
                        "@type": "Answer",
                        "text":
                            "Captured data includes shipper and consignee details, carrier information, shipment descriptions, weight, quantity, freight class, origin, destination, and handling instructions."
                    }
                },
                {
                    "@type": "Question",
                    "name": "How does automation improve Bill of Lading processing?",
                    "acceptedAnswer": {
                        "@type": "Answer",
                        "text":
                            "Automation leverages OCR, AI, and validation rules to extract data faster, minimize manual errors, and improve processing speed and accuracy."
                    }
                },
                {
                    "@type": "Question",
                    "name": "Can Bill of Lading services support compliance requirements?",
                    "acceptedAnswer": {
                        "@type": "Answer",
                        "text":
                            "Yes. BOL services validate documentation against carrier, customs, and trade regulations, reducing audits, penalties, and cross-border risks."
                    }
                },
                {
                    "@type": "Question",
                    "name": "Is Bill of Lading data entry scalable for high shipment volumes?",
                    "acceptedAnswer": {
                        "@type": "Answer",
                        "text":
                            "Yes. Automated and outsourced BOL data entry services scale efficiently to handle high volumes without compromising accuracy or turnaround time."
                    }
                },
                {
                    "@type": "Question",
                    "name": "How does Bill of Lading data improve freight billing?",
                    "acceptedAnswer": {
                        "@type": "Answer",
                        "text":
                            "Validated BOL data aligns with invoicing systems, enabling accurate freight charges, faster billing cycles, and reduced disputes."
                    }
                },
                {
                    "@type": "Question",
                    "name": "Which industries benefit from Bill of Lading services?",
                    "acceptedAnswer": {
                        "@type": "Answer",
                        "text":
                            "Freight carriers, logistics providers, 3PLs, shipping lines, air cargo operators, trucking companies, manufacturers, and distributors benefit from BOL services."
                    }
                },
                {
                    "@type": "Question",
                    "name": "How secure are outsourced Bill of Lading services?",
                    "acceptedAnswer": {
                        "@type": "Answer",
                        "text":
                            "Professional providers follow strict security protocols, access controls, NDAs, and compliance standards to protect sensitive shipment data."
                    }
                },
                {
                    "@type": "Question",
                    "name": "What are the key benefits of outsourcing Bill of Lading data entry?",
                    "acceptedAnswer": {
                        "@type": "Answer",
                        "text":
                            "Key benefits include cost savings, faster turnaround, higher accuracy, improved compliance, scalability, and reduced administrative workload."
                    }
                }
            ]
        }
    ]
};
