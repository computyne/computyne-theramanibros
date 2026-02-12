import CaseStudiesClient from "./caseStudiesClient";

export const metadata = {
    metadataBase: new URL("https://www.computyne.com"),

    title: "BPO Success Stories & Data Solutions Case Studies | Computyne",
    description:
        "Explore Computyne’s case studies to see how our data-driven BPO services help global clients improve operational efficiency, reduce costs, and achieve faster processing.",

    keywords: [
        "BPO case studies",
        "Outsourcing success stories",
        "Data collection case studies",
        "Logistics outsourcing results",
        "Real estate data solutions case study",
        "Invoice processing efficiency",
        "Business process optimization cases",
        "Data extraction project results",
        "Operational efficiency improvements",
        "Offshore data services success",
    ],

    alternates: {
        canonical: "https://www.computyne.com/case-studies",
    },
};

export default function Page() {
    return <CaseStudiesClient />;
}