export const textAnnotationServicesSchema = {
    "@context": "https://schema.org",
    "@graph": [
        {
            "@type": "Service",
            "name": "Text Annotation Services",
            "serviceType": "Enterprise Text Annotation and NLP Training Data Services",
            "description":
                "Computyne provides enterprise-grade text annotation services delivering accurate, scalable, and secure labeled datasets for training production-ready NLP and AI models.",
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
                "name": "Text Annotation Solutions",
                "itemListElement": [
                    {
                        "@type": "Offer",
                        "itemOffered": {
                            "@type": "Service",
                            "name": "Text Categorization and Classification"
                        }
                    },
                    {
                        "@type": "Offer",
                        "itemOffered": {
                            "@type": "Service",
                            "name": "Named Entity Recognition (NER) Annotation"
                        }
                    },
                    {
                        "@type": "Offer",
                        "itemOffered": {
                            "@type": "Service",
                            "name": "Sentiment Analysis Annotation"
                        }
                    },
                    {
                        "@type": "Offer",
                        "itemOffered": {
                            "@type": "Service",
                            "name": "Intent Classification Annotation"
                        }
                    },
                    {
                        "@type": "Offer",
                        "itemOffered": {
                            "@type": "Service",
                            "name": "Semantic Annotation and Entity Linking"
                        }
                    }
                ]
            }
        },
        {
            "@type": "Product",
            "name": "Managed Text Annotation for NLP",
            "image":
                "https://www.computyne.com/wp-content/uploads/2023/01/computyne-logo.svg",
            "description":
                "A fully managed text annotation solution designed for scalable NLP model training, ensuring linguistic accuracy, domain expertise, security, and predictable delivery.",
            "url": "https://www.computyne.com/text-annotation-services",
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
                    "name": "What is text annotation in AI?",
                    "acceptedAnswer": {
                        "@type": "Answer",
                        "text":
                            "Text annotation is the process of labeling text data with metadata so NLP and machine learning models can accurately understand language, context, intent, and sentiment."
                    }
                },
                {
                    "@type": "Question",
                    "name": "How do you ensure text annotation accuracy?",
                    "acceptedAnswer": {
                        "@type": "Answer",
                        "text":
                            "Accuracy is ensured through structured annotator training, multi-tier quality checks, automated validation, and senior reviewer oversight to maintain high inter-annotator agreement."
                    }
                },
                {
                    "@type": "Question",
                    "name": "Can you handle domain-specific text annotation?",
                    "acceptedAnswer": {
                        "@type": "Answer",
                        "text":
                            "Yes. Computyne assigns domain-trained annotators and subject matter experts for legal, medical, financial, and technical text to ensure contextual and regulatory accuracy."
                    }
                },
                {
                    "@type": "Question",
                    "name": "How is sensitive text data secured?",
                    "acceptedAnswer": {
                        "@type": "Answer",
                        "text":
                            "All text annotation workflows operate within ISO/IEC 27001:2022 and GDPR-aligned environments using access controls, NDAs, secure VPNs, and encrypted data handling."
                    }
                },
                {
                    "@type": "Question",
                    "name": "Do you provide annotation tools?",
                    "acceptedAnswer": {
                        "@type": "Answer",
                        "text":
                            "Computyne is tool-agnostic and works within client platforms or deploys leading third-party annotation tools based on project requirements."
                    }
                },
                {
                    "@type": "Question",
                    "name": "How quickly can annotation teams scale?",
                    "acceptedAnswer": {
                        "@type": "Answer",
                        "text":
                            "Pilot teams can be launched within days, with scalable expansion completed in weeks depending on volume and annotation complexity."
                    }
                },
                {
                    "@type": "Question",
                    "name": "Do you support multilingual text annotation?",
                    "acceptedAnswer": {
                        "@type": "Answer",
                        "text":
                            "Yes. Multilingual annotation is performed by native-language specialists to ensure linguistic accuracy and cultural relevance."
                    }
                },
                {
                    "@type": "Question",
                    "name": "What pricing models are available?",
                    "acceptedAnswer": {
                        "@type": "Answer",
                        "text":
                            "Pricing models include dedicated managed teams and volume-based annotation pricing tailored to dataset size, complexity, and project duration."
                    }
                }
            ]
        }
    ]
};
