export const videoAnnotationServicesSchema = {
    "@context": "https://schema.org",
    "@graph": [
        {
            "@type": "Service",
            "name": "Video Annotation Services",
            "serviceType": "Outsourced Video Annotation and Computer Vision Data Labeling",
            "description":
                "Computyne delivers scalable, secure, and high-precision video annotation services to support computer vision and AI initiatives. Services include object tracking, segmentation, keypoint annotation, and LiDAR point cloud labeling with enterprise-grade security and managed delivery.",
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
                "name": "Video Annotation Capabilities",
                "itemListElement": [
                    {
                        "@type": "Offer",
                        "itemOffered": {
                            "@type": "Service",
                            "name": "2D Bounding Box Video Annotation"
                        }
                    },
                    {
                        "@type": "Offer",
                        "itemOffered": {
                            "@type": "Service",
                            "name": "Polygon and Polyline Video Annotation"
                        }
                    },
                    {
                        "@type": "Offer",
                        "itemOffered": {
                            "@type": "Service",
                            "name": "Semantic Segmentation Video Annotation"
                        }
                    },
                    {
                        "@type": "Offer",
                        "itemOffered": {
                            "@type": "Service",
                            "name": "Keypoint and Landmark Video Annotation"
                        }
                    },
                    {
                        "@type": "Offer",
                        "itemOffered": {
                            "@type": "Service",
                            "name": "Video Object Tracking Annotation"
                        }
                    },
                    {
                        "@type": "Offer",
                        "itemOffered": {
                            "@type": "Service",
                            "name": "LiDAR and 3D Point Cloud Video Annotation"
                        }
                    }
                ]
            }
        },
        {
            "@type": "Product",
            "name": "Managed Video Annotation Services",
            "image":
                "https://www.computyne.com/wp-content/uploads/2023/01/computyne-logo.svg",
            "description":
                "End-to-end managed video annotation services delivering temporally consistent, training-ready datasets for computer vision, autonomous systems, healthcare AI, and video intelligence platforms.",
            "url": "https://www.computyne.com/video-annotation-services",
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
                    "name": "What is video annotation?",
                    "acceptedAnswer": {
                        "@type": "Answer",
                        "text":
                            "Video annotation is the process of labeling objects, actions, and timestamps across video frames to create ground truth datasets for training computer vision and AI models."
                    }
                },
                {
                    "@type": "Question",
                    "name": "How does video annotation differ from image annotation?",
                    "acceptedAnswer": {
                        "@type": "Answer",
                        "text":
                            "Video annotation requires temporal consistency, meaning objects must be tracked across frames with stable identities, unlike image annotation which treats each frame independently."
                    }
                },
                {
                    "@type": "Question",
                    "name": "Can Computyne work with existing video annotation tools?",
                    "acceptedAnswer": {
                        "@type": "Answer",
                        "text":
                            "Yes. Computyne is tool-agnostic and integrates seamlessly with proprietary platforms and third-party tools such as CVAT, Labelbox, and V7."
                    }
                },
                {
                    "@type": "Question",
                    "name": "How is video annotation accuracy ensured?",
                    "acceptedAnswer": {
                        "@type": "Answer",
                        "text":
                            "Accuracy is ensured through Human-in-the-Loop validation, standardized annotation guidelines, calibration phases, and multi-tier quality assurance with senior reviewer audits."
                    }
                },
                {
                    "@type": "Question",
                    "name": "Is video data secure during annotation?",
                    "acceptedAnswer": {
                        "@type": "Answer",
                        "text":
                            "Yes. All video annotation workflows align with ISO/IEC 27001:2022 and GDPR compliance, including secure access controls, NDA-bound teams, and protected environments."
                    }
                },
                {
                    "@type": "Question",
                    "name": "Can video annotation teams scale quickly?",
                    "acceptedAnswer": {
                        "@type": "Answer",
                        "text":
                            "Yes. Computyne supports rapid pilot launches and scalable managed teams to meet high-volume and complex video annotation requirements."
                    }
                },
                {
                    "@type": "Question",
                    "name": "What video formats are supported?",
                    "acceptedAnswer": {
                        "@type": "Answer",
                        "text":
                            "We support standard video formats such as MP4, AVI, and MOV, as well as specialized medical, industrial, and surveillance video formats."
                    }
                }
            ]
        }
    ]
};
