"use client";

import getHtmlStringData from "@/libs/getHtmlStringData";
import Image from "next/image";
import Link from "next/link";
import {usePathname} from "next/navigation";
import {useEffect, useState} from "react";

const defaultTocItems = [
    {id: "what-is-resume-processing", label: "What Is Resume Processing?"},
    {id: "evaluation-criteria", label: "Evaluation Criteria"},
    {id: "top-services", label: "Top 7 Compared"},
    {id: "comparison-table", label: "Comparison Table"},
    {id: "why-computyne", label: "Why Computyne"},
    {id: "pricing", label: "Pricing Breakdown"},
    {id: "who-needs-it", label: "Who Needs It"},
    {id: "faq", label: "FAQ"},
];
const defaultSidebarCta = {
    label: "Free Consultation",
    title: "Improve Your Business Data Operations",
    description:
        "Explore how Computyne can help streamline time-consuming back-office processes with dedicated data support.",
    buttonText: "Discuss Your Project",
    buttonLink: "/contact-us",
};

const sidebarCtaBySlug = {
    "freight-invoice-audit-checklist": {
        label: "Freight Audit Support",
        title: "Catch Freight Billing Errors Before Payment",
        description:
            "Get support with freight invoice validation, carrier rate checks, duplicate billing identification, and discrepancy reporting.",
        buttonText: "Explore Freight Audit Services",
        buttonLink: "/freight-audit-services",
    },

    "resume-processing-outsourcing": {
        label: "Free Pilot",
        title: "Validate Resume Processing Quality",
        description:
            "Test your own resume formats and review the output quality before committing to a larger project.",
        buttonText: "Request a Free Pilot",
        buttonLink: "/contact-us",
    },

    "invoice-processing-outsourcing": {
        label: "Invoice Processing",
        title: "Reduce Month-End Invoice Delays",
        description:
            "Streamline invoice data entry, document processing, and verification with dedicated operational support.",
        buttonText: "Get an Invoice Processing Quote",
        buttonLink: "/contact-us",
    },
};
const BlogDetailsModern = ({currentItem}) => {
    const tocItems = currentItem?.toc?.length ? currentItem.toc : defaultTocItems;
    const pathname = usePathname();
    const slug = pathname.split("/").filter(Boolean).pop();
    const sidebarCta =
        currentItem?.sidebarCta ||
        sidebarCtaBySlug[slug] ||
        defaultSidebarCta;
    const [htmlString, setHtmlString] = useState("");
    const [activeSection, setActiveSection] = useState(tocItems[0]?.id);

    useEffect(() => {
        if (!slug) return;

        getHtmlStringData(slug).then((data) => {
            setHtmlString(data || "<p>Content not found</p>");
        });
    }, [slug]);

    useEffect(() => {
        if (!htmlString) return;
        window.dispatchEvent(new Event("resize"));
    }, [htmlString]);

    useEffect(() => {
        if (!htmlString) return;

        const getActiveSection = () => {
            const scrollPosition = window.scrollY + 180;
            const sectionPositions = tocItems
                .map(({id}) => {
                    const section = document.getElementById(id);
                    return section ? {id, top: section.offsetTop} : null;
                })
                .filter(Boolean);

            const currentSection = sectionPositions
                .filter(({top}) => top <= scrollPosition)
                .at(-1);

            setActiveSection(currentSection?.id || tocItems[0].id);
        };

        getActiveSection();
        window.addEventListener("scroll", getActiveSection, {passive: true});
        window.addEventListener("resize", getActiveSection);

        return () => {
            window.removeEventListener("scroll", getActiveSection);
            window.removeEventListener("resize", getActiveSection);
        };
    }, [htmlString]);

    const {
        title,
        subtitle,
        author = "By: Computyne",
        date,
        category,
        img,
        readTime = "10 min read",
        tags = [],
    } = currentItem || {};

    return (
        <div className="modern-blog-details">
            <section className="modern-blog-hero">
                <div className="container">
                    <div className="modern-blog-breadcrumb">
                        <Link href="/blog">Blog</Link>
                        <span>/</span>
                        <span>{category}</span>
                    </div>
                    <div className="modern-blog-title-grid">
                        <div>
                            <span className="modern-blog-kicker">2026 Buyer's Guide</span>
                            <h1>{title}</h1>
                            {subtitle ? <p>{subtitle}</p> : null}
                            <div className="modern-blog-meta">
                                <div className="modern-blog-author">
                                    <span>C</span>
                                    <div>
                                        <strong>{author.replace("By:", "").trim()}</strong>
                                        <small>Research Team</small>
                                    </div>
                                </div>
                                <span>{date}</span>
                                <span>{readTime}</span>
                            </div>
                        </div>
                    </div>
                    <div className="modern-blog-featured-image">
                        <Image
                            src={img || "/images/orgBlogs/main/what-is-resume-parsing-a-beginners-guide.webp"}
                            alt={title || "Blog image"}
                            width={1280}
                            height={560}
                            priority
                        />
                    </div>
                </div>
            </section>

            <section className="modern-blog-content-section">
                <div className="container">
                    <div className="modern-blog-layout">
                        <article
                            className="modern-blog-content"
                            dangerouslySetInnerHTML={{__html: htmlString}}
                        />
                        <aside className="modern-blog-aside">
                            <div className="modern-blog-aside-inner">
                                <div className="modern-blog-toc">
                                    <h3>In this article</h3>
                                    <nav>
                                        {tocItems.map(({id, label}, idx) => (
                                            <a
                                                key={id}
                                                href={`#${id}`}
                                                className={activeSection === id ? "active" : ""}
                                            >
                                                <span>{String(idx + 1).padStart(2, "0")}</span>
                                                {label}
                                            </a>
                                        ))}
                                    </nav>
                                </div>
                                <div className="modern-blog-side-cta">
                                    <span>{sidebarCta.label}</span>
                                    <h3>{sidebarCta.title}</h3>
                                    <p>{sidebarCta.description}</p>
                                    <Link href={sidebarCta.buttonLink}>
                                        {sidebarCta.buttonText}
                                    </Link>
                                </div>
                            </div>
                        </aside>
                    </div>
                    {tags?.length ? (
                        <div className="modern-blog-tags">
                            {tags.map((tag) => (
                                <Link href="#" key={tag}>
                                    {tag}
                                </Link>
                            ))}
                        </div>
                    ) : null}
                </div>
            </section>
        </div>
    );
};

export default BlogDetailsModern;
