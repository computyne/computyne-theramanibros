export const healthCareIndustrySchema = {
    "@context": "https://schema.org",
    "@graph": [
        {
            "@type": "Service",
            "name": "Healthcare BPO Services",
            "serviceType": "Healthcare Business Process Outsourcing",
            "description": "Computyne provides compliant, scalable healthcare BPO services including medical billing, revenue cycle management, insurance claims processing, healthcare data management, provider credentialing, and healthcare administrative support.",
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
                "Ireland",
                "Netherlands",
                "France",
                "Singapore",
                "Japan"
            ],
            "audience": {
                "@type": "Audience",
                "audienceType": "Healthcare Providers, Payers, TPAs, Hospitals, Clinics"
            },
            "hasOfferCatalog": {
                "@type": "OfferCatalog",
                "name": "Healthcare BPO Solutions",
                "itemListElement": [
                    {
                        "@type": "Offer",
                        "itemOffered": {
                            "@type": "Service",
                            "name": "Medical Billing and Revenue Cycle Management"
                        }
                    },
                    {
                        "@type": "Offer",
                        "itemOffered": {
                            "@type": "Service",
                            "name": "Healthcare Data Management and Medical Records Processing"
                        }
                    },
                    {
                        "@type": "Offer",
                        "itemOffered": {
                            "@type": "Service",
                            "name": "Insurance Claims Processing and Payer Operations"
                        }
                    },
                    {
                        "@type": "Offer",
                        "itemOffered": {
                            "@type": "Service",
                            "name": "Provider Credentialing and Enrollment Services"
                        }
                    },
                    {
                        "@type": "Offer",
                        "itemOffered": {
                            "@type": "Service",
                            "name": "Healthcare Administrative and Back-Office Support"
                        }
                    },
                    {
                        "@type": "Offer",
                        "itemOffered": {
                            "@type": "Service",
                            "name": "Healthcare Compliance and Quality Reporting Support"
                        }
                    }
                ]
            }
        },
        {
            "@type": "FAQPage",
            "mainEntity": [
                {
                    "@type": "Question",
                    "name": "What are BPO services for healthcare?",
                    "acceptedAnswer": {
                        "@type": "Answer",
                        "text": "Healthcare BPO services involve outsourcing non-clinical and administrative processes such as medical billing, claims processing, healthcare data management, provider credentialing, and compliance reporting to specialized service providers."
                    }
                },
                {
                    "@type": "Question",
                    "name": "Which healthcare organizations benefit from BPO services?",
                    "acceptedAnswer": {
                        "@type": "Answer",
                        "text": "Hospitals, clinics, physician groups, healthcare networks, insurance payers, TPAs, diagnostic centers, and digital health companies benefit from healthcare BPO through improved efficiency, accuracy, and regulatory compliance."
                    }
                },
                {
                    "@type": "Question",
                    "name": "How do healthcare BPO services support HIPAA compliance?",
                    "acceptedAnswer": {
                        "@type": "Answer",
                        "text": "Healthcare BPO providers follow HIPAA-compliant workflows, secure data handling protocols, access controls, audit trails, and quality assurance measures to protect patient information and meet regulatory standards."
                    }
                },
                {
                    "@type": "Question",
                    "name": "What healthcare processes are commonly outsourced?",
                    "acceptedAnswer": {
                        "@type": "Answer",
                        "text": "Commonly outsourced processes include revenue cycle management, medical billing, insurance claims processing, medical records management, provider credentialing, and healthcare administrative support."
                    }
                },
                {
                    "@type": "Question",
                    "name": "How does healthcare BPO reduce operational costs?",
                    "acceptedAnswer": {
                        "@type": "Answer",
                        "text": "Healthcare BPO reduces costs by minimizing internal staffing, infrastructure, training, and technology expenses while converting fixed costs into scalable, variable operating models."
                    }
                },
                {
                    "@type": "Question",
                    "name": "Can healthcare BPO services scale with organizational growth?",
                    "acceptedAnswer": {
                        "@type": "Answer",
                        "text": "Yes. Healthcare BPO services are designed to scale with patient volumes, payer requirements, and organizational growth while maintaining compliance and service quality."
                    }
                }
            ]
        }
    ]
};
