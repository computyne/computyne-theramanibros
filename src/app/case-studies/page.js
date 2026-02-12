import CaseStudiesClient from "./caseStudiesClient";

export const metadata = {
    metadataBase: new URL("https://www.computyne.com"),

    title: "Bill of Lading Data Entry Services | Shipping Document Processing | Computyne",
    description:
        "Reliable bill of lading data entry services by Computyne ensuring accurate capture of freight, consignee, and shipment details for efficient logistics operations.",

    keywords: [
        "bill of lading data entry services",
        "bill of lading processing",
        "shipping document data entry",
        "freight documentation services",
        "logistics document processing",
        "shipment data entry",
        "transport document management",
    ],

    alternates: {
        canonical: "https://www.computyne.com/bill-of-lading-data-entry-services",
    },
};

export default function Page() {
    return <CaseStudiesClient />;
}