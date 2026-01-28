export const virtualAssistantServicesSchema = {
    "@context": "https://schema.org",
    "@graph": [
        {
            "@type": "Service",
            "name": "Virtual Assistant Services",
            "serviceType": "Outsourced Virtual Assistant and Business Support Services",
            "description":
                "Computyne provides dedicated virtual assistant services delivering secure, scalable, and process-driven administrative, operational, customer support, research, marketing, and e-commerce assistance to businesses worldwide.",
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
                "name": "Virtual Assistant Services Portfolio",
                "itemListElement": [
                    {
                        "@type": "Offer",
                        "itemOffered": {
                            "@type": "Service",
                            "name": "Administrative & Executive Virtual Assistant Services"
                        }
                    },
                    {
                        "@type": "Offer",
                        "itemOffered": {
                            "@type": "Service",
                            "name": "Data Entry & Document Management Services"
                        }
                    },
                    {
                        "@type": "Offer",
                        "itemOffered": {
                            "@type": "Service",
                            "name": "Customer Support Virtual Assistant Services"
                        }
                    },
                    {
                        "@type": "Offer",
                        "itemOffered": {
                            "@type": "Service",
                            "name": "Research & Reporting Virtual Assistant Services"
                        }
                    },
                    {
                        "@type": "Offer",
                        "itemOffered": {
                            "@type": "Service",
                            "name": "Social Media & Marketing Virtual Assistant Services"
                        }
                    },
                    {
                        "@type": "Offer",
                        "itemOffered": {
                            "@type": "Service",
                            "name": "E-commerce Virtual Assistant Services"
                        }
                    }
                ]
            }
        },
        {
            "@type": "Product",
            "name": "Dedicated Virtual Assistant Solutions",
            "image":
                "https://www.computyne.com/wp-content/uploads/2023/01/computyne-logo.svg",
            "description":
                "Computyne’s dedicated virtual assistant solutions provide cost-effective, secure, and scalable remote support for administrative, operational, customer service, marketing, and e-commerce workflows.",
            "url": "https://www.computyne.com/virtual-assistant-services",
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
                    "name": "What is a virtual assistant?",
                    "acceptedAnswer": {
                        "@type": "Answer",
                        "text":
                            "A virtual assistant is a remote professional who supports administrative, operational, and business tasks using secure systems, structured workflows, and collaboration tools to improve efficiency and reduce costs."
                    }
                },
                {
                    "@type": "Question",
                    "name": "What tasks can virtual assistants handle?",
                    "acceptedAnswer": {
                        "@type": "Answer",
                        "text":
                            "Virtual assistants handle administrative support, data entry, document management, customer support, research, reporting, social media coordination, marketing assistance, and e-commerce operations."
                    }
                },
                {
                    "@type": "Question",
                    "name": "How does hiring a virtual assistant benefit businesses?",
                    "acceptedAnswer": {
                        "@type": "Answer",
                        "text":
                            "Hiring virtual assistants reduces operational costs, improves productivity, enhances scalability, and allows internal teams to focus on strategic and revenue-generating activities."
                    }
                },
                {
                    "@type": "Question",
                    "name": "Are virtual assistant services secure?",
                    "acceptedAnswer": {
                        "@type": "Answer",
                        "text":
                            "Yes. Virtual assistant services follow strict security protocols, including NDAs, access controls, confidentiality agreements, and secure data handling processes."
                    }
                },
                {
                    "@type": "Question",
                    "name": "How quickly can a virtual assistant be hired?",
                    "acceptedAnswer": {
                        "@type": "Answer",
                        "text":
                            "Dedicated virtual assistants can typically be onboarded within a few days, depending on task complexity and engagement requirements."
                    }
                },
                {
                    "@type": "Question",
                    "name": "Can virtual assistants integrate with existing business tools?",
                    "acceptedAnswer": {
                        "@type": "Answer",
                        "text":
                            "Yes. Virtual assistants work within existing CRMs, project management tools, communication platforms, and business systems to ensure seamless integration."
                    }
                },
                {
                    "@type": "Question",
                    "name": "Are virtual assistants suitable for small and large businesses?",
                    "acceptedAnswer": {
                        "@type": "Answer",
                        "text":
                            "Virtual assistant services support businesses of all sizes by offering flexible engagement models aligned with workload, growth stage, and operational complexity."
                    }
                }
            ]
        }
    ]
};
