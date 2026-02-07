export const imageAnnotationServicesSchema = {
    "@context": "https://schema.org",
    "@graph": [
        {
            "@type": "Service",
            "name": "Image Annotation Services for Computer Vision",
            "serviceType": "Managed Image Annotation and Labeling Services",
            "description":
                "Computyne delivers secure, scalable, and ISO-aligned image annotation services for computer vision and AI models. Services include bounding boxes, semantic segmentation, cuboids, polygons, and keypoint labeling to support production-grade AI systems.",
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
                "name": "Image Annotation Services Portfolio",
                "itemListElement": [
                    {
                        "@type": "Offer",
                        "itemOffered": {
                            "@type": "Service",
                            "name": "2D Bounding Box Image Annotation"
                        }
                    },
                    {
                        "@type": "Offer",
                        "itemOffered": {
                            "@type": "Service",
                            "name": "Semantic Segmentation Image Annotation"
                        }
                    },
                    {
                        "@type": "Offer",
                        "itemOffered": {
                            "@type": "Service",
                            "name": "3D Cuboid Image Annotation"
                        }
                    },
                    {
                        "@type": "Offer",
                        "itemOffered": {
                            "@type": "Service",
                            "name": "Polygon and Polyline Image Annotation"
                        }
                    },
                    {
                        "@type": "Offer",
                        "itemOffered": {
                            "@type": "Service",
                            "name": "Keypoint and Landmark Image Annotation"
                        }
                    }
                ]
            }
        },
        {
            "@type": "Product",
            "name": "Managed Image Annotation Services",
            "image":
                "https://www.computyne.com/images/site-logo/blue-logo.svg",
            "description":
                "Enterprise-grade managed image annotation services designed for scalable computer vision pipelines. Computyne ensures accuracy, security, and operational consistency across large image datasets.",
            "url": "https://www.computyne.com/image-annotation-services",
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
                    "name": "What are image annotation services?",
                    "acceptedAnswer": {
                        "@type": "Answer",
                        "text":
                            "Image annotation services involve labeling visual data such as images and video frames so computer vision and AI models can accurately detect, classify, and segment objects."
                    }
                },
                {
                    "@type": "Question",
                    "name": "What types of image data can Computyne annotate?",
                    "acceptedAnswer": {
                        "@type": "Answer",
                        "text":
                            "Computyne annotates 2D images, video frames, 3D imagery, LiDAR point clouds, thermal images, and medical imaging formats such as DICOM."
                    }
                },
                {
                    "@type": "Question",
                    "name": "How is image annotation quality ensured?",
                    "acceptedAnswer": {
                        "@type": "Answer",
                        "text":
                            "Quality is ensured through multi-tier quality assurance, reviewer validation, documented workflows, and ISO-aligned quality management practices."
                    }
                },
                {
                    "@type": "Question",
                    "name": "Can Computyne use existing image annotation tools?",
                    "acceptedAnswer": {
                        "@type": "Answer",
                        "text":
                            "Yes. Computyne is tool-agnostic and integrates seamlessly with platforms such as CVAT, Labelbox, and SuperAnnotate."
                    }
                },
                {
                    "@type": "Question",
                    "name": "Is image data secure during annotation?",
                    "acceptedAnswer": {
                        "@type": "Answer",
                        "text":
                            "Yes. All workflows operate within environments aligned with ISO/IEC 27001:2022 and GDPR requirements, including strict access controls and data governance."
                    }
                },
                {
                    "@type": "Question",
                    "name": "Can annotation teams scale with demand?",
                    "acceptedAnswer": {
                        "@type": "Answer",
                        "text":
                            "Yes. Managed annotation teams scale based on workload requirements while maintaining consistent accuracy, turnaround time, and process discipline."
                    }
                },
                {
                    "@type": "Question",
                    "name": "Is this suitable for long-term computer vision programs?",
                    "acceptedAnswer": {
                        "@type": "Answer",
                        "text":
                            "Yes. The service is designed for both pilot projects and long-term, production-scale computer vision initiatives."
                    }
                }
            ]
        }
    ]
};
