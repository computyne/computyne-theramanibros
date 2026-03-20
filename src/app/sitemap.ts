import { MetadataRoute } from 'next'

const BASE_URL = 'https://www.computyne.com'

export default function sitemap(): MetadataRoute.Sitemap {
  const today = new Date().toISOString()

  // --- Core Pages ---
  const corePages: MetadataRoute.Sitemap = [
    { url: `${BASE_URL}/`,           lastModified: today, changeFrequency: 'weekly',  priority: 1.0 },
    { url: `${BASE_URL}/about-us`,   lastModified: today, changeFrequency: 'monthly', priority: 0.8 },
    { url: `${BASE_URL}/contact-us`, lastModified: today, changeFrequency: 'monthly', priority: 0.8 },
  ]

  // --- Service Category Pages ---
  const servicePages: MetadataRoute.Sitemap = [
    'data-collection-services',
    'data-management-services',
    'data-annotation-services',
    'document-processing-services',
    'data-entry-services',
    'data-solutions-services',
  ].map((slug) => ({
    url: `${BASE_URL}/${slug}`,
    lastModified: today,
    changeFrequency: 'monthly',
    priority: 0.9,
  }))

  // --- Data Collection Sub-Services ---
  const dataCollectionPages: MetadataRoute.Sitemap = [
    'data-extraction-services',
    'data-mining-services',
    'web-research-services',
    'list-building-services',
    'web-scraping-services',
    'property-data-collection-services',
  ].map((slug) => ({
    url: `${BASE_URL}/${slug}`,
    lastModified: today,
    changeFrequency: 'monthly',
    priority: 0.7,
  }))

  // --- Data Management Sub-Services ---
  const dataManagementPages: MetadataRoute.Sitemap = [
    'data-enrichment-services',
    'data-cleansing-services',
    'data-appending-services',
    'data-validation-services',
    'data-standarization-services',
    'data-hygiene-services',
    'competitor-analysis-services',
    'ecommerce-catalog-management-services',
  ].map((slug) => ({
    url: `${BASE_URL}/${slug}`,
    lastModified: today,
    changeFrequency: 'monthly',
    priority: 0.7,
  }))

  // --- Document Processing Sub-Services ---
  const documentProcessingPages: MetadataRoute.Sitemap = [
    'freight-audit-services',
    'invoice-processing-services',
    'resume-formatting-services',
    'forms-processing-services',
    'document-digitization-services',
  ].map((slug) => ({
    url: `${BASE_URL}/${slug}`,
    lastModified: today,
    changeFrequency: 'monthly',
    priority: 0.7,
  }))

  // --- Data Solutions Sub-Services ---
  const dataSolutionPages: MetadataRoute.Sitemap = [
    'image-data-entry-services',
    'logistics-data-entry-services',
    'bill-of-lading-data-entry-services',
    'appraisal-data-entry-services',
    'mortgage-data-entry-support',
    'real-estate-property-listing-services',
    'ecommerce-product-data-entry-services',
  ].map((slug) => ({
    url: `${BASE_URL}/${slug}`,
    lastModified: today,
    changeFrequency: 'monthly',
    priority: 0.7,
  }))

  // --- Data Annotation Sub-Services ---
  const dataAnnotationPages: MetadataRoute.Sitemap = [
    'text-annotation-services',
    'image-annotation-services',
    'data-labeling-services',
    'video-annotation-services',
    'multimodal-annotation-services',
  ].map((slug) => ({
    url: `${BASE_URL}/${slug}`,
    lastModified: today,
    changeFrequency: 'monthly',
    priority: 0.7,
  }))

  // --- Hire Resources Pages ---
  const hirePages: MetadataRoute.Sitemap = [
    { slug: 'hire-resources',            priority: 0.8 },
    { slug: 'hire-web-researchers',      priority: 0.7 },
    { slug: 'hire-data-entry-specialists', priority: 0.7 },
    { slug: 'hire-virtual-assistants',   priority: 0.7 },
    { slug: 'hire-data-science-specialist', priority: 0.7 },
  ].map(({ slug, priority }) => ({
    url: `${BASE_URL}/${slug}`,
    lastModified: today,
    changeFrequency: 'monthly',
    priority,
  }))

  // --- Industry Pages ---
  const industryPages: MetadataRoute.Sitemap = [
    'real-estate',
    'logistics-and-transportation',
    'ecommerce',
    'ites',
    'finance-and-accounting',
    'energy-and-utilities',
    'healthcare',
  ].map((slug) => ({
    url: `${BASE_URL}/${slug}`,
    lastModified: today,
    changeFrequency: 'monthly',
    priority: 0.8,
  }))

  // --- Insight Index Pages ---
  const insightPages: MetadataRoute.Sitemap = [
    { url: `${BASE_URL}/blog`,         lastModified: today, changeFrequency: 'weekly',  priority: 0.8 },
    { url: `${BASE_URL}/case-studies`, lastModified: today, changeFrequency: 'monthly', priority: 0.8 },
  ]

  // --- Blog Posts ---
  // TODO: Replace with a dynamic fetch from your CMS/DB when available
  const blogPosts: MetadataRoute.Sitemap = [
    { slug: 'what-is-a-prompt-engineer-and-why-hire-one',        lastModified: '2026-03-18' },
    { slug: 'human-oversight-in-automated-invoice-processing',    lastModified: '2026-02-26' },
    { slug: 'how-to-cleanse-data-in-excel',                       lastModified: '2026-02-16' },
  ].map(({ slug, lastModified }) => ({
    url: `${BASE_URL}/blog/${slug}`,
    lastModified: new Date(lastModified).toISOString(),
    changeFrequency: 'monthly',
    priority: 0.6,
  }))

  // --- Case Studies ---
  // TODO: Replace with a dynamic fetch from your CMS/DB when available
  const caseStudies: MetadataRoute.Sitemap = [
    'resume-formatting-services-staffing-recruitment',
    'invoice-processing-automation-for-global-logistics-company',
    'real-estate-property-data-collection-and-market-research',
    'transforming-raw-resume-into-structure-resume',
    'automating-resume-data-collection-from-handshake',
  ].map((slug) => ({
    url: `${BASE_URL}/case-studies/${slug}`,
    lastModified: today,
    changeFrequency: 'monthly',
    priority: 0.6,
  }))

  return [
    ...corePages,
    ...servicePages,
    ...dataCollectionPages,
    ...dataManagementPages,
    ...documentProcessingPages,
    ...dataSolutionPages,
    ...dataAnnotationPages,
    ...hirePages,
    ...industryPages,
    ...insightPages,
    ...blogPosts,
    ...caseStudies,
  ]
}
