export const enterpriseDataAnnotationSchema = {
    "@context": "https://schema.org",
    "@graph": [
        {
            "@type": "Service",
            "name": "Enterprise Data Annotation Services",
            "serviceType":
                "Managed Data Annotation and Labeling Services for AI and Machine Learning",
            "description":
                "Computyne delivers enterprise-grade data annotation services that provide high-precision labeled datasets for Computer Vision, NLP, multimodal AI, and production-scale machine learning systems. Services are governed by strict quality controls, ISO-certified security, and scalable workflows.",
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
                "name": "Data Annotation Services Portfolio",
                "itemListElement": [
                    {
                        "@type": "Offer",
                        "itemOffered": {
                            "@type": "Service",
                            "name": "Text Annotation and NLP Services"
                        }
                    },
                    {
                        "@type": "Offer",
                        "itemOffered": {
                            "@type": "Service",
                            "name": "Image Annotation for Computer Vision"
                        }
                    },
                    {
                        "@type": "Offer",
                        "itemOffered": {
                            "@type": "Service",
                            "name": "Video Annotation and Object Tracking"
                        }
                    },
                    {
                        "@type": "Offer",
                        "itemOffered": {
                            "@type": "Service",
                            "name": "Multimodal Data Annotation"
                        }
                    },
                    {
                        "@type": "Offer",
                        "itemOffered": {
                            "@type": "Service",
                            "name": "Structured and Unstructured Data Labeling"
                        }
                    }
                ]
            }
        },
        {
            "@type": "Product",
            "name": "Managed Data Annotation Services",
            "image":
                "https://www.computyne.com/wp-content/uploads/2023/01/computyne-logo.svg",
            "description":
                "Enterprise-ready data annotation services delivering consistent, auditable, and high-accuracy labeled datasets to support AI model training, retraining, and continuous learning at scale.",
            "url": "https://www.computyne.com/data-annotation-services",
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
                    "name": "What are data annotation services?",
                    "acceptedAnswer": {
                        "@type": "Answer",
                        "text":
                            "Data annotation services involve labeling raw datasets such as text, images, audio, and video to create ground-truth training data required for machine learning and AI models."
                    }
                },
                {
                    "@type": "Question",
                    "name": "What data types can be annotated?",
                    "acceptedAnswer": {
                        "@type": "Answer",
                        "text":
                            "Computyne supports annotation for text, images, audio, video, LiDAR, and multimodal datasets across both structured and unstructured formats."
                    }
                },
                {
                    "@type": "Question",
                    "name": "How is annotation quality ensured?",
                    "acceptedAnswer": {
                        "@type": "Answer",
                        "text":
                            "Quality is ensured through Human-in-the-Loop workflows, multi-stage validation, automated accuracy checks, audit trails, and strict adherence to client-defined labeling guidelines."
                    }
                },
                {
                    "@type": "Question",
                    "name": "Can annotation scale for large AI projects?",
                    "acceptedAnswer": {
                        "@type": "Answer",
                        "text":
                            "Yes. Managed annotation teams and parallel workflows enable rapid scaling to handle large datasets, frequent retraining cycles, and evolving model requirements."
                    }
                },
                {
                    "@type": "Question",
                    "name": "How is data security handled?",
                    "acceptedAnswer": {
                        "@type": "Answer",
                        "text":
                            "All data is handled under ISO/IEC 27001:2022-certified security controls and GDPR-compliant practices, including access restrictions, PII masking, and secure environments."
                    }
                },
                {
                    "@type": "Question",
                    "name": "Do annotation services support continuous learning?",
                    "acceptedAnswer": {
                        "@type": "Answer",
                        "text":
                            "Yes. Annotation workflows support active learning, model retraining, dataset updates, and long-term AI lifecycle management."
                    }
                }
            ]
        }
    ]
};
