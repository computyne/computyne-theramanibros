export const resumeCvFormattingServicesSchema = {
    "@context": "https://schema.org",
    "@graph": [
        {
            "@type": "Service",
            "name": "Resume and CV Formatting Services",
            "serviceType": "Professional Resume and CV Formatting Outsourcing Services",
            "description":
                "Computyne delivers ATS-optimized, corporate-grade resume and CV formatting services that standardize, brand, and prepare candidate profiles for faster screening, improved placements, and scalable recruitment operations.",
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
                "Australia",
                "Singapore",
                "United Arab Emirates",
                "Canada",
                "Ireland",
                "New Zealand"
            ],
            "hasOfferCatalog": {
                "@type": "OfferCatalog",
                "name": "Resume and CV Formatting Solutions",
                "itemListElement": [
                    {
                        "@type": "Offer",
                        "itemOffered": {
                            "@type": "Service",
                            "name": "ATS-Optimized Resume Formatting"
                        }
                    },
                    {
                        "@type": "Offer",
                        "itemOffered": {
                            "@type": "Service",
                            "name": "Professional Resume Formatting"
                        }
                    },
                    {
                        "@type": "Offer",
                        "itemOffered": {
                            "@type": "Service",
                            "name": "Resume Data Capture and Structuring"
                        }
                    },
                    {
                        "@type": "Offer",
                        "itemOffered": {
                            "@type": "Service",
                            "name": "Industry-Specific Resume Formatting"
                        }
                    },
                    {
                        "@type": "Offer",
                        "itemOffered": {
                            "@type": "Service",
                            "name": "Bulk Resume Formatting for Enterprises"
                        }
                    },
                    {
                        "@type": "Offer",
                        "itemOffered": {
                            "@type": "Service",
                            "name": "Resume Parsing Services"
                        }
                    }
                ]
            }
        },
        {
            "@type": "Product",
            "name": "Resume and CV Formatting Services",
            "image":
                "https://www.computyne.com/wp-content/uploads/2023/01/computyne-logo.svg",
            "description":
                "Scalable resume and CV formatting services delivering ATS-friendly, branded, and recruiter-ready candidate profiles for staffing firms, HR teams, and job portals.",
            "url": "https://www.computyne.com/resume-formatting-services",
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
                    "name": "What are resume and CV formatting services?",
                    "acceptedAnswer": {
                        "@type": "Answer",
                        "text":
                            "Resume and CV formatting services transform candidate resumes into clean, branded, and ATS-compliant documents with consistent layouts, structure, and professional presentation."
                    }
                },
                {
                    "@type": "Question",
                    "name": "Why should recruitment agencies outsource resume formatting?",
                    "acceptedAnswer": {
                        "@type": "Answer",
                        "text":
                            "Outsourcing reduces turnaround time, lowers internal workload, improves consistency, and enables recruiters to focus on sourcing, engagement, and placements."
                    }
                },
                {
                    "@type": "Question",
                    "name": "Are formatted resumes ATS-friendly?",
                    "acceptedAnswer": {
                        "@type": "Answer",
                        "text":
                            "Yes. All resumes are formatted using ATS-compatible fonts, layouts, and structures to ensure accurate parsing and improved keyword visibility."
                    }
                },
                {
                    "@type": "Question",
                    "name": "What file formats are supported?",
                    "acceptedAnswer": {
                        "@type": "Answer",
                        "text":
                            "Resumes are delivered in MS Word, PDF, or Google Docs. Scanned resumes can be converted into fully editable formats."
                    }
                },
                {
                    "@type": "Question",
                    "name": "Do you support bulk resume formatting?",
                    "acceptedAnswer": {
                        "@type": "Answer",
                        "text":
                            "Yes. We handle high-volume resume formatting for bulk hiring, seasonal recruitment, and enterprise staffing programs with scalable capacity."
                    }
                },
                {
                    "@type": "Question",
                    "name": "Can you work with custom resume templates?",
                    "acceptedAnswer": {
                        "@type": "Answer",
                        "text":
                            "Absolutely. We follow existing templates or create custom, branded resume layouts aligned with agency or client guidelines."
                    }
                },
                {
                    "@type": "Question",
                    "name": "What is the turnaround time for resume formatting?",
                    "acceptedAnswer": {
                        "@type": "Answer",
                        "text":
                            "Turnaround ranges from same-day to 24 hours depending on volume. Express delivery options are available for urgent submissions."
                    }
                },
                {
                    "@type": "Question",
                    "name": "Is resume data handled securely?",
                    "acceptedAnswer": {
                        "@type": "Answer",
                        "text":
                            "Yes. All candidate data is protected through secure systems, encrypted transfers, controlled access, and NDA-backed workflows."
                    }
                },
                {
                    "@type": "Question",
                    "name": "Do you provide white-label resume formatting services?",
                    "acceptedAnswer": {
                        "@type": "Answer",
                        "text":
                            "Yes. All resumes can be delivered fully white-labeled with your agency’s branding and no third-party references."
                    }
                }
            ]
        }
    ]
};
