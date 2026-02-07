export const multimodalAnnotationServicesSchema = {
    "@context": "https://schema.org",
    "@graph": [
        {
            "@type": "Service",
            "name": "Multimodal Annotation Services for Advanced AI",
            "serviceType":
                "Multimodal Data Annotation and AI Training Data Services",
            "description":
                "Computyne provides enterprise-grade multimodal annotation services that synchronize image, video, text, audio, and sensor data to train Generative AI, Large Multimodal Models (LMMs), autonomous systems, and perception-based AI solutions.",
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
                "name": "Multimodal Annotation Capabilities",
                "itemListElement": [
                    {
                        "@type": "Offer",
                        "itemOffered": {
                            "@type": "Service",
                            "name": "Multimodal Image–Text Annotation",
                            "description":
                                "Image annotation synchronized with textual labels to support vision-language models, OCR grounding, and instruction-tuning datasets."
                        }
                    },
                    {
                        "@type": "Offer",
                        "itemOffered": {
                            "@type": "Service",
                            "name": "Multimodal Audio–Text Annotation",
                            "description":
                                "Audio and text alignment including transcription, sentiment analysis, and multilingual NLP annotation for conversational AI and speech models."
                        }
                    },
                    {
                        "@type": "Offer",
                        "itemOffered": {
                            "@type": "Service",
                            "name": "Multimodal Video–Audio Annotation",
                            "description":
                                "Frame-level video annotation aligned with audio streams for object tracking, event detection, and temporal reasoning."
                        }
                    },
                    {
                        "@type": "Offer",
                        "itemOffered": {
                            "@type": "Service",
                            "name": "Sensor Fusion and 3D Point Cloud Annotation",
                            "description":
                                "LiDAR and camera data alignment with 3D point clouds to enable depth perception and spatial understanding for autonomous systems."
                        }
                    },
                    {
                        "@type": "Offer",
                        "itemOffered": {
                            "@type": "Service",
                            "name": "Multimodal Entity and Event Annotation",
                            "description":
                                "Cross-modal entity, action, and event linking across image, video, text, audio, and sensor datasets for advanced AI reasoning."
                        }
                    }
                ]
            }
        },
        {
            "@type": "Product",
            "name": "Enterprise Multimodal Annotation Services",
            "image":
                "https://www.computyne.com/images/site-logo/blue-logo.svg",
            "description":
                "Computyne delivers secure, scalable, and accuracy-driven multimodal annotation services designed to power Generative AI, autonomous systems, and foundation models.",
            "url": "https://www.computyne.com/multimodal-annotation-services",
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
                    "name": "What is multimodal annotation?",
                    "acceptedAnswer": {
                        "@type": "Answer",
                        "text":
                            "Multimodal annotation is the process of synchronizing and labeling multiple data types such as images, video, text, audio, and sensor data into unified datasets for training context-aware AI models."
                    }
                },
                {
                    "@type": "Question",
                    "name": "Why is multimodal annotation critical for Generative AI?",
                    "acceptedAnswer": {
                        "@type": "Answer",
                        "text":
                            "Precise alignment between vision, language, and audio prevents model hallucinations and enables Generative AI systems to reason accurately across multiple inputs."
                    }
                },
                {
                    "@type": "Question",
                    "name": "Do you support audio-video synchronization?",
                    "acceptedAnswer": {
                        "@type": "Answer",
                        "text":
                            "Yes. Audio timestamps are aligned with video frames and transcripts to ensure temporal accuracy and reliable event recognition."
                    }
                },
                {
                    "@type": "Question",
                    "name": "Can you annotate LiDAR and sensor fusion data?",
                    "acceptedAnswer": {
                        "@type": "Answer",
                        "text":
                            "Yes. We calibrate 2D camera imagery with 3D LiDAR point clouds to enable depth perception and object recognition for autonomous and robotics systems."
                    }
                },
                {
                    "@type": "Question",
                    "name": "Is multimodal data annotation secure?",
                    "acceptedAnswer": {
                        "@type": "Answer",
                        "text":
                            "All annotation workflows operate within ISO/IEC 27001:2022 and GDPR-aligned secure environments, with strict access controls and data governance."
                    }
                },
                {
                    "@type": "Question",
                    "name": "Do you provide RLHF for multimodal models?",
                    "acceptedAnswer": {
                        "@type": "Answer",
                        "text":
                            "Yes. We deliver Reinforcement Learning from Human Feedback (RLHF) services to evaluate and rank multimodal model outputs for improved safety and alignment."
                    }
                },
                {
                    "@type": "Question",
                    "name": "Can you handle regulated and medical data?",
                    "acceptedAnswer": {
                        "@type": "Answer",
                        "text":
                            "Yes. We annotate DICOM images linked with clinical text using secure healthcare workflows, anonymization, and compliance-ready processes."
                    }
                },
                {
                    "@type": "Question",
                    "name": "How quickly can teams scale?",
                    "acceptedAnswer": {
                        "@type": "Answer",
                        "text":
                            "We begin with a pilot team to validate guidelines and rapidly scale managed annotation teams to support high-volume multimodal datasets."
                    }
                }
            ]
        }
    ]
};
