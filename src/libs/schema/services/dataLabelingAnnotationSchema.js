export const dataLabelingAnnotationSchema = {
    "@context": "https://schema.org",
    "@graph": [
        {
            "@type": "Service",
            "name": "Data Labeling & Annotation Services",
            "serviceType": "Enterprise Data Labeling and Managed Annotation Services",
            "description":
                "Computyne provides enterprise-grade data labeling and annotation services for AI and machine learning initiatives. Our managed Human-in-the-Loop workflows deliver accurate, scalable, and secure training datasets across image, video, text, LiDAR, and sensor data.",
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
                "name": "Data Labeling Services Portfolio",
                "itemListElement": [
                    {
                        "@type": "Offer",
                        "itemOffered": {
                            "@type": "Service",
                            "name": "Image Data Labeling Services"
                        }
                    },
                    {
                        "@type": "Offer",
                        "itemOffered": {
                            "@type": "Service",
                            "name": "Video Data Labeling Services"
                        }
                    },
                    {
                        "@type": "Offer",
                        "itemOffered": {
                            "@type": "Service",
                            "name": "Text Labeling and NLP Annotation"
                        }
                    },
                    {
                        "@type": "Offer",
                        "itemOffered": {
                            "@type": "Service",
                            "name": "LiDAR and Sensor Data Annotation"
                        }
                    },
                    {
                        "@type": "Offer",
                        "itemOffered": {
                            "@type": "Service",
                            "name": "Human-in-the-Loop Validation Services"
                        }
                    }
                ]
            }
        },
        {
            "@type": "Product",
            "name": "Enterprise Data Labeling Services",
            "image":
                "https://www.computyne.com/images/site-logo/blue-logo.svg",
            "description":
                "End-to-end managed data labeling services designed to produce accurate, model-ready training data for AI and machine learning systems across regulated and high-scale environments.",
            "url": "https://www.computyne.com/data-labeling-services",
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
                    "name": "What is data labeling?",
                    "acceptedAnswer": {
                        "@type": "Answer",
                        "text":
                            "Data labeling is the process of assigning meaningful tags or categories to raw data so that machine learning models can learn from it and make accurate predictions."
                    }
                },
                {
                    "@type": "Question",
                    "name": "What is the difference between data labeling and data annotation?",
                    "acceptedAnswer": {
                        "@type": "Answer",
                        "text":
                            "Data labeling defines the final classification or outcome, while data annotation refers to the method used to apply labels, such as bounding boxes, polygons, or text tagging."
                    }
                },
                {
                    "@type": "Question",
                    "name": "Which data types do you support for labeling?",
                    "acceptedAnswer": {
                        "@type": "Answer",
                        "text":
                            "We support image, video, text, LiDAR, and sensor data across all standard and proprietary AI training formats."
                    }
                },
                {
                    "@type": "Question",
                    "name": "How do you ensure labeling accuracy?",
                    "acceptedAnswer": {
                        "@type": "Answer",
                        "text":
                            "Accuracy is ensured through Human-in-the-Loop workflows, multi-tier quality checks, gold standard datasets, and domain-specific reviewer validation."
                    }
                },
                {
                    "@type": "Question",
                    "name": "Is data labeling secure?",
                    "acceptedAnswer": {
                        "@type": "Answer",
                        "text":
                            "Yes. All data labeling operations are conducted under ISO/IEC 27001:2022 aligned security controls, GDPR-compliant workflows, NDA-bound teams, and secure access environments."
                    }
                },
                {
                    "@type": "Question",
                    "name": "Can data labeling scale for enterprise AI projects?",
                    "acceptedAnswer": {
                        "@type": "Answer",
                        "text":
                            "Yes. Our managed workforce model allows rapid scaling for large volumes while maintaining consistent quality, turnaround times, and annotation logic."
                    }
                },
                {
                    "@type": "Question",
                    "name": "Do you support industry-specific data labeling?",
                    "acceptedAnswer": {
                        "@type": "Answer",
                        "text":
                            "Yes. We offer specialized workflows for healthcare, autonomous vehicles, finance, retail, agritech, security, and enterprise SaaS platforms."
                    }
                }
            ]
        }
    ]
};
