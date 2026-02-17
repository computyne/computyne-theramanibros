export const ecommerceProductdataentryServicesSchema = {
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
            "@id": "https://www.computyne.com/product-data-entry-services#service",
            "name": "Product Data Entry Services",
            "serviceType": "eCommerce Product Listing and Data Management Services",
            "description": "Computyne provides scalable product data entry services including multi-platform uploads, content optimization, pricing and inventory maintenance, taxonomy mapping, and image data processing to deliver accurate, search-ready, and conversion-focused product listings.",
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
                "name": "Product Data Entry Solutions",
                "itemListElement": [
                    {
                        "@type": "Offer",
                        "itemOffered": {
                            "@type": "Service",
                            "name": "eCommerce Product Listing and Upload Services"
                        }
                    },
                    {
                        "@type": "Offer",
                        "itemOffered": {
                            "@type": "Service",
                            "name": "Product Description and Content Management"
                        }
                    },
                    {
                        "@type": "Offer",
                        "itemOffered": {
                            "@type": "Service",
                            "name": "Price and Inventory Data Maintenance"
                        }
                    },
                    {
                        "@type": "Offer",
                        "itemOffered": {
                            "@type": "Service",
                            "name": "Product Categorization and Taxonomy Support"
                        }
                    },
                    {
                        "@type": "Offer",
                        "itemOffered": {
                            "@type": "Service",
                            "name": "Image and Multimedia Data Processing"
                        }
                    }
                ]
            }
        },
        {
            "@type": "Product",
            "name": "Product Data Entry Services",
            "image": "https://www.computyne.com/images/site-logo/blue-logo.svg",
            "description": "Enterprise product data entry and listing management services covering content optimization, SKU mapping, pricing and inventory updates, taxonomy classification, and multimedia data processing for eCommerce platforms.",
            "url": "https://www.computyne.com/product-data-entry-services",
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
                    "name": "What are product data entry services?",
                    "acceptedAnswer": {
                        "@type": "Answer",
                        "text": "Product data entry services involve capturing, structuring, and uploading product information into ecommerce platforms and marketplaces to ensure accuracy, consistency, and search readiness."
                    }
                },
                {
                    "@type": "Question",
                    "name": "Can you upload products directly to our ecommerce platform?",
                    "acceptedAnswer": {
                        "@type": "Answer",
                        "text": "Yes. We work within your backend systems or prepare bulk upload files aligned with your platform’s requirements."
                    }
                },
                {
                    "@type": "Question",
                    "name": "Do you handle bulk product uploads?",
                    "acceptedAnswer": {
                        "@type": "Answer",
                        "text": "Yes. We manage large-scale SKU uploads using structured templates, CSV or API workflows, and validation processes."
                    }
                },
                {
                    "@type": "Question",
                    "name": "Can you standardize inconsistent product attributes?",
                    "acceptedAnswer": {
                        "@type": "Answer",
                        "text": "Yes. We normalize attributes to maintain filter consistency and improve internal search and navigation."
                    }
                },
                {
                    "@type": "Question",
                    "name": "Is product data handled securely?",
                    "acceptedAnswer": {
                        "@type": "Answer",
                        "text": "All workflows operate within secure environments aligned with ISO/IEC 27001:2022 standards, using strict access controls and confidentiality protocols."
                    }
                },
                {
                    "@type": "Question",
                    "name": "Can you migrate product data between platforms?",
                    "acceptedAnswer": {
                        "@type": "Answer",
                        "text": "Yes. We extract, transform, and map product data for seamless migrations between ecommerce platforms and marketplaces."
                    }
                },
                {
                    "@type": "Question",
                    "name": "Do you provide ongoing catalog update support?",
                    "acceptedAnswer": {
                        "@type": "Answer",
                        "text": "Yes. We support pricing changes, inventory updates, promotional updates, and seasonal catalog refreshes."
                    }
                },
                {
                    "@type": "Question",
                    "name": "Which platforms do you support?",
                    "acceptedAnswer": {
                        "@type": "Answer",
                        "text": "We support major marketplaces such as Amazon, eBay, and Walmart, as well as platforms like Magento, Shopify, WooCommerce, and BigCommerce."
                    }
                },
                {
                    "@type": "Question",
                    "name": "Can you help with product categorization?",
                    "acceptedAnswer": {
                        "@type": "Answer",
                        "text": "Yes. We map products to logical taxonomies, categories, and marketplace browse nodes to enable faceted search and intuitive navigation."
                    }
                },
                {
                    "@type": "Question",
                    "name": "What turnaround times can you support?",
                    "acceptedAnswer": {
                        "@type": "Answer",
                        "text": "Turnaround times are defined during onboarding and optimized based on catalog volume, complexity, and delivery SLAs."
                    }

                }
            ]
        }
    ]
};
