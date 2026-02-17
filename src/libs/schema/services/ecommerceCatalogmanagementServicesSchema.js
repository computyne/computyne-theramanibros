export const ecommerceCatalogmanagementServicesSchema = {
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
            "@id": "https://www.computyne.com/ecommerce-catalog-management-services#service",
            "name": "eCommerce Catalog Management Services",
            "serviceType": "Enterprise eCommerce Catalog Governance and Management",
            "description": "Computyne provides governance-first eCommerce catalog management services including taxonomy design, content enrichment, lifecycle maintenance, PIM synchronization, and data migration to ensure accurate, searchable, and conversion-optimized product catalogs.",
            "provider": {
                "@type": "Organization",
                "@id": "https://www.computyne.com/#organization"
            },
            "areaServed": [
                "United States",
                "United Kingdom",
                "Australia",
                "Canada",
                "Germany",
                "Ireland",
                "Netherlands",
                "Italy",
                "Singapore",
                "New Zealand",
                "France",
                "Hong Kong",
                "Switzerland",
                "Japan",
                "Spain",
                "India"
            ],
            "hasOfferCatalog": {
                "@type": "OfferCatalog",
                "name": "eCommerce Catalog Management Solutions",
                "itemListElement": [
                    {
                        "@type": "Offer",
                        "itemOffered": {
                            "@type": "Service",
                            "name": "Catalog Building and Taxonomy Indexing"
                        }
                    },
                    {
                        "@type": "Offer",
                        "itemOffered": {
                            "@type": "Service",
                            "name": "Catalog Content Enrichment and Normalization"
                        }
                    },
                    {
                        "@type": "Offer",
                        "itemOffered": {
                            "@type": "Service",
                            "name": "Catalog Image and Multimedia Processing"
                        }
                    },
                    {
                        "@type": "Offer",
                        "itemOffered": {
                            "@type": "Service",
                            "name": "Ongoing Catalog Maintenance and Support"
                        }
                    },
                    {
                        "@type": "Offer",
                        "itemOffered": {
                            "@type": "Service",
                            "name": "Data Conversion and Catalog Migration Services"
                        }
                    }
                ]
            }
        },
        {
            "@type": "Product",
            "name": "eCommerce Catalog Management Services",
            "image": "https://www.computyne.com/images/site-logo/blue-logo.svg",
            "description": "Enterprise eCommerce catalog management services focused on taxonomy governance, product data enrichment, lifecycle updates, PIM synchronization, and multi-channel catalog integrity.",
            "url": "https://www.computyne.com/ecommerce-catalog-management-services",
            "brand": {
                "@type": "Brand",
                "name": "Computyne",
                "logo": "https://www.computyne.com/images/site-logo/blue-logo.svg"
            }
        },
        {
            "@type": "FAQPage",
            "mainEntity": [
                {
                    "@type": "Question",
                    "name": "What are catalog management services?",
                    "acceptedAnswer": {
                        "@type": "Answer",
                        "text": "Catalog management involves the strategic building, enriching, and maintaining of your digital product database to ensure accuracy, searchability, and cross-channel consistency."
                    }
                },
                {
                    "@type": "Question",
                    "name": "How does catalog management differ from simple data entry?",
                    "acceptedAnswer": {
                        "@type": "Answer",
                        "text": "While data entry focuses on initial uploads, catalog management includes taxonomy design, data governance, normalization, and ongoing catalog health audits for long-term performance."
                    }
                },
                {
                    "@type": "Question",
                    "name": "Can you build a product taxonomy from scratch?",
                    "acceptedAnswer": {
                        "@type": "Answer",
                        "text": "Yes. We design logical category structures and attribute hierarchies to improve storefront navigation and internal search relevance."
                    }
                },
                {
                    "@type": "Question",
                    "name": "Do you support PIM systems?",
                    "acceptedAnswer": {
                        "@type": "Answer",
                        "text": "Yes. We work within PIM, CMS, and ERP environments to maintain a unified and governed master product record."
                    }
                },
                {
                    "@type": "Question",
                    "name": "How do you ensure catalog consistency across multiple channels?",
                    "acceptedAnswer": {
                        "@type": "Answer",
                        "text": "We use standardized master templates and mapping protocols to keep product data consistent across web stores, marketplaces, and internal systems."
                    }
                },
                {
                    "@type": "Question",
                    "name": "Can you handle seasonal catalog refreshes in bulk?",
                    "acceptedAnswer": {
                        "@type": "Answer",
                        "text": "Yes. Our scalable delivery model supports high-volume updates during seasonal transitions, promotions, and pricing changes."
                    }
                },
                {
                    "@type": "Question",
                    "name": "Is our vendor and product data kept confidential?",
                    "acceptedAnswer": {
                        "@type": "Answer",
                        "text": "All operations run within secure environments aligned with ISO/IEC 27001:2022 standards and governed by strict confidentiality protocols."
                    }
                },
                {
                    "@type": "Question",
                    "name": "What is the typical turnaround time for catalog updates?",
                    "acceptedAnswer": {
                        "@type": "Answer",
                        "text": "Turnaround time depends on volume and complexity, with accelerated options available for urgent pricing and inventory updates."
                    }
                },
                {
                    "@type": "Question",
                    "name": "Do you assist with product data cleansing?",
                    "acceptedAnswer": {
                        "@type": "Answer",
                        "text": "Yes. We resolve duplicates, incomplete attributes, and inconsistent formatting to maintain a clean, reliable catalog."
                    }
                },
                {
                    "@type": "Question",
                    "name": "Can you manage cross-selling and up-selling data?",
                    "acceptedAnswer": {
                        "@type": "Answer",
                        "text": "Yes. We map related and premium products within your catalog to support higher average order value and better merchandising."
                    }
                }
            ]
        }
    ]
};
