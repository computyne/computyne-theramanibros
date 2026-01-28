export const freightAuditSchema = {
    "@context": "https://schema.org",
    "@graph": [
        {
            "@type": "Service",
            "name": "Freight Audit Services",
            "serviceType": "Freight Invoice Audit and Payment Services",
            "description":
                "Computyne delivers accurate, compliant, and technology-enabled freight audit services that validate carrier invoices, eliminate overcharges, recover freight costs, and provide end-to-end freight audit and payment management with complete transportation spend visibility.",
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
                "name": "Freight Audit Service Portfolio",
                "itemListElement": [
                    {
                        "@type": "Offer",
                        "itemOffered": {
                            "@type": "Service",
                            "name": "Freight Invoice Auditing"
                        }
                    },
                    {
                        "@type": "Offer",
                        "itemOffered": {
                            "@type": "Service",
                            "name": "Freight Cost Validation and Rate Verification"
                        }
                    },
                    {
                        "@type": "Offer",
                        "itemOffered": {
                            "@type": "Service",
                            "name": "Carrier Payment Management"
                        }
                    },
                    {
                        "@type": "Offer",
                        "itemOffered": {
                            "@type": "Service",
                            "name": "Audit Discrepancy Resolution"
                        }
                    },
                    {
                        "@type": "Offer",
                        "itemOffered": {
                            "@type": "Service",
                            "name": "Freight Cost Allocation and Reporting"
                        }
                    },
                    {
                        "@type": "Offer",
                        "itemOffered": {
                            "@type": "Service",
                            "name": "Transportation Spend Analytics"
                        }
                    }
                ]
            }
        },
        {
            "@type": "Product",
            "name": "Outsourced Freight Audit and Payment Services",
            "image":
                "https://www.computyne.com/wp-content/uploads/2023/01/computyne-logo.svg",
            "description":
                "Computyne provides enterprise-grade outsourced freight audit and payment services that ensure accurate billing, cost recovery, regulatory compliance, and real-time visibility into transportation spend across multi-modal logistics operations.",
            "url": "https://www.computyne.com/freight-audit-services",
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
                    "name": "What are freight audit services?",
                    "acceptedAnswer": {
                        "@type": "Answer",
                        "text":
                            "Freight audit services systematically review carrier invoices to validate freight charges, accessorial fees, fuel surcharges, and services rendered against contracted rates, tariffs, and shipment data to ensure billing accuracy."
                    }
                },
                {
                    "@type": "Question",
                    "name": "Why are freight audit services important for businesses?",
                    "acceptedAnswer": {
                        "@type": "Answer",
                        "text":
                            "Freight audit services eliminate overbilling, improve invoice accuracy, control logistics costs, enhance financial governance, and provide transparency across complex transportation networks."
                    }
                },
                {
                    "@type": "Question",
                    "name": "What types of freight invoices can be audited?",
                    "acceptedAnswer": {
                        "@type": "Answer",
                        "text":
                            "Freight audit services cover parcel, LTL, FTL, ocean freight, air freight, and intermodal invoices for both domestic and international shipments."
                    }
                },
                {
                    "@type": "Question",
                    "name": "How are freight billing discrepancies identified?",
                    "acceptedAnswer": {
                        "@type": "Answer",
                        "text":
                            "Discrepancies are identified through automated contract rate validation, tariff matching, accessorial verification, shipment data reconciliation, and exception-based invoice analysis."
                    }
                },
                {
                    "@type": "Question",
                    "name": "How much cost savings can freight audit services deliver?",
                    "acceptedAnswer": {
                        "@type": "Answer",
                        "text":
                            "Organizations typically recover between 5% and 25% of total freight spend by identifying billing errors, duplicate charges, incorrect surcharges, and non-compliant carrier invoices."
                    }
                },
                {
                    "@type": "Question",
                    "name": "Do freight audit services include freight payment?",
                    "acceptedAnswer": {
                        "@type": "Answer",
                        "text":
                            "Yes. Freight audit and payment services include invoice approval workflows, cost allocation, dispute management, carrier payment processing, and detailed transportation spend reporting."
                    }
                },
                {
                    "@type": "Question",
                    "name": "Can freight audit services integrate with existing systems?",
                    "acceptedAnswer": {
                        "@type": "Answer",
                        "text":
                            "Freight audit solutions integrate with Transportation Management Systems (TMS), ERP platforms, accounting systems, and carrier portals using secure APIs and data connectors."
                    }
                },
                {
                    "@type": "Question",
                    "name": "How is data security and compliance ensured?",
                    "acceptedAnswer": {
                        "@type": "Answer",
                        "text":
                            "Data security is ensured through access-controlled environments, encryption, audit trails, standardized compliance workflows, and adherence to financial and data protection regulations."
                    }
                },
                {
                    "@type": "Question",
                    "name": "How long does freight audit implementation take?",
                    "acceptedAnswer": {
                        "@type": "Answer",
                        "text":
                            "Most organizations are onboarded within a few weeks, depending on shipment volumes, carrier complexity, system integrations, and historical invoice data requirements."
                    }
                },
                {
                    "@type": "Question",
                    "name": "Who should use freight audit services?",
                    "acceptedAnswer": {
                        "@type": "Answer",
                        "text":
                            "Freight audit services are ideal for manufacturers, retailers, distributors, 3PLs, healthcare organizations, and enterprises managing high-volume or multi-modal transportation operations."
                    }
                }
            ]
        }
    ]
};
