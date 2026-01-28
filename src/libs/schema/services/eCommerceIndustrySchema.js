export const eCommerceIndustrySchema = {
    "@context": "https://schema.org",
    "@graph": [
        {
            "@type": "Service",
            "name": "eCommerce BPO Services",
            "serviceType": "eCommerce Business Process Outsourcing",
            "description": "Computyne delivers end-to-end eCommerce BPO services including catalog management, order processing, inventory and pricing support, customer service, and marketplace operations to help brands scale efficiently with accuracy and cost control.",
            "provider": {
                "@type": "Organization",
                "name": "Computyne",
                "url": "https://www.computyne.com",
                "logo": "https://www.computyne.com/wp-content/uploads/2023/01/computyne-logo.svg",
                "contactPoint": {
                    "@type": "ContactPoint",
                    "contactType": "Sales",
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
                "Netherlands",
                "France",
                "Singapore",
                "India"
            ],
            "hasOfferCatalog": {
                "@type": "OfferCatalog",
                "name": "eCommerce Outsourcing Solutions",
                "itemListElement": [
                    {
                        "@type": "Offer",
                        "itemOffered": {
                            "@type": "Service",
                            "name": "eCommerce Catalog Management Services"
                        }
                    },
                    {
                        "@type": "Offer",
                        "itemOffered": {
                            "@type": "Service",
                            "name": "Order Processing and Fulfillment Support"
                        }
                    },
                    {
                        "@type": "Offer",
                        "itemOffered": {
                            "@type": "Service",
                            "name": "Inventory and Pricing Management Services"
                        }
                    },
                    {
                        "@type": "Offer",
                        "itemOffered": {
                            "@type": "Service",
                            "name": "Customer Support and Experience Management"
                        }
                    },
                    {
                        "@type": "Offer",
                        "itemOffered": {
                            "@type": "Service",
                            "name": "Marketplace Seller Operations Support"
                        }
                    }
                ]
            }
        },
        {
            "@type": "Product",
            "name": "eCommerce BPO Services",
            "description": "Scalable and accuracy-driven eCommerce BPO services enabling brands, marketplaces, and D2C businesses to optimize operations, improve customer experience, and reduce costs.",
            "url": "https://www.computyne.com/ecommerce-bpo-services",
            "brand": {
                "@type": "Brand",
                "name": "Computyne",
                "logo": "https://www.computyne.com/wp-content/uploads/2023/01/computyne-logo.svg"
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
                    "name": "What are eCommerce BPO services?",
                    "acceptedAnswer": {
                        "@type": "Answer",
                        "text": "eCommerce BPO services involve outsourcing operational and back-office processes such as catalog management, order processing, inventory support, customer service, and marketplace operations to specialized providers."
                    }
                },
                {
                    "@type": "Question",
                    "name": "Which eCommerce processes can be outsourced?",
                    "acceptedAnswer": {
                        "@type": "Answer",
                        "text": "Product listing and enrichment, order and returns processing, inventory and pricing support, seller account management, customer support, performance reporting, and data management."
                    }
                },
                {
                    "@type": "Question",
                    "name": "How does eCommerce outsourcing reduce costs?",
                    "acceptedAnswer": {
                        "@type": "Answer",
                        "text": "Outsourcing eliminates in-house hiring, training, infrastructure, and technology expenses while converting fixed costs into scalable, usage-based operational models."
                    }
                },
                {
                    "@type": "Question",
                    "name": "Is eCommerce BPO suitable for small and mid-sized businesses?",
                    "acceptedAnswer": {
                        "@type": "Answer",
                        "text": "Yes. eCommerce BPO services are highly scalable and allow SMBs to access skilled resources and enterprise-grade processes without large upfront investments."
                    }
                },
                {
                    "@type": "Question",
                    "name": "Can eCommerce BPO support multiple marketplaces and platforms?",
                    "acceptedAnswer": {
                        "@type": "Answer",
                        "text": "Yes. eCommerce BPO providers typically support platforms such as Amazon, Flipkart, Shopify, Magento, WooCommerce, and custom D2C systems through standardized workflows."
                    }
                },
                {
                    "@type": "Question",
                    "name": "How is performance measured in eCommerce BPO engagements?",
                    "acceptedAnswer": {
                        "@type": "Answer",
                        "text": "Performance is measured using KPIs such as order accuracy, turnaround time, SLA adherence, CSAT scores, error rates, productivity metrics, and regular performance reports."
                    }
                }
            ]
        }
    ]
};
