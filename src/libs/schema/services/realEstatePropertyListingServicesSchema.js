export const realEstatePropertyListingServicesSchema = {
    "@context": "https://schema.org",
    "@graph": [
        {
            "@type": "Service",
            "name": "Real Estate Property Listing Services",
            "serviceType":
                "Outsourced Real Estate Data Entry and Property Listing Management",
            "description":
                "Computyne provides accurate, scalable, and compliant real estate property listing services, including data entry, listing management, verification, and multi-platform optimization to improve visibility, buyer trust, and transaction speed.",
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
                "name": "Real Estate Listing Services Portfolio",
                "itemListElement": [
                    {
                        "@type": "Offer",
                        "itemOffered": {
                            "@type": "Service",
                            "name": "Property Listing Data Entry Services"
                        }
                    },
                    {
                        "@type": "Offer",
                        "itemOffered": {
                            "@type": "Service",
                            "name": "Property Listing Management Services"
                        }
                    },
                    {
                        "@type": "Offer",
                        "itemOffered": {
                            "@type": "Service",
                            "name": "Real Estate Listing Data Verification"
                        }
                    },
                    {
                        "@type": "Offer",
                        "itemOffered": {
                            "@type": "Service",
                            "name": "Multi-Platform Property Listing Optimization"
                        }
                    }
                ]
            }
        },
        {
            "@type": "Product",
            "name": "Outsourced Real Estate Property Listing Services",
            "image":
                "https://www.computyne.com/wp-content/uploads/2023/01/computyne-logo.svg",
            "description":
                "Enterprise-grade real estate property listing services delivering structured, verified, and SEO-optimized listings for residential, commercial, and mixed-use property portfolios.",
            "url":
                "https://www.computyne.com/real-estate-property-listing-services",
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
                    "name": "What is property listing data entry?",
                    "acceptedAnswer": {
                        "@type": "Answer",
                        "text":
                            "Property listing data entry involves capturing, structuring, and validating real estate information such as location, pricing, specifications, ownership details, amenities, and compliance data into standardized digital formats."
                    }
                },
                {
                    "@type": "Question",
                    "name": "Why is accurate property listing data important?",
                    "acceptedAnswer": {
                        "@type": "Answer",
                        "text":
                            "Accurate property listing data improves transparency, buyer trust, search visibility, and decision-making while reducing listing errors, rework, and transaction delays."
                    }
                },
                {
                    "@type": "Question",
                    "name": "What types of properties are supported?",
                    "acceptedAnswer": {
                        "@type": "Answer",
                        "text":
                            "Residential, commercial, industrial, land, and mixed-use properties including apartments, villas, offices, retail spaces, warehouses, and development projects."
                    }
                },
                {
                    "@type": "Question",
                    "name": "Which data elements are included in listings?",
                    "acceptedAnswer": {
                        "@type": "Answer",
                        "text":
                            "Property descriptions, pricing, square footage, floor plans, amenities, ownership records, zoning details, compliance data, images, and SEO-friendly metadata."
                    }
                },
                {
                    "@type": "Question",
                    "name": "Are property listings MLS-compliant?",
                    "acceptedAnswer": {
                        "@type": "Answer",
                        "text":
                            "Yes. Listings are structured to meet MLS field requirements, formatting standards, and compliance guidelines, reducing rejection rates and publication delays."
                    }
                },
                {
                    "@type": "Question",
                    "name":
                        "How does outsourcing property listing services reduce costs?",
                    "acceptedAnswer": {
                        "@type": "Answer",
                        "text":
                            "Outsourcing eliminates in-house staffing, training, and infrastructure costs while providing scalable resources, predictable pricing, and high accuracy."
                    }
                },
                {
                    "@type": "Question",
                    "name": "Can outsourcing improve turnaround time?",
                    "acceptedAnswer": {
                        "@type": "Answer",
                        "text":
                            "Yes. Standardized workflows and 24×7 processing enable faster listing creation, bulk uploads, and real-time updates across platforms."
                    }
                },
                {
                    "@type": "Question",
                    "name":
                        "Who benefits from real estate property listing services?",
                    "acceptedAnswer": {
                        "@type": "Answer",
                        "text":
                            "Real estate brokers, agencies, developers, property managers, investors, MLS providers, and real estate portals benefit from improved accuracy, speed, scalability, and cost efficiency."
                    }
                }
            ]
        }
    ]
};
