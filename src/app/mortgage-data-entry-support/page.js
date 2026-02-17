import Footer from "@/components/layout/footer/Footer";
import Header from "@/components/layout/header/Header";
import BackToTop from "@/components/shared/others/BackToTop";
import ClientWrapper from "@/components/shared/wrappers/ClientWrapper";
import Aboutus from "@/components/sections/subservice/Aboutus";
import Subservices from "@/components/sections/subservice/Subservices";
import Banner from "@/components/sections/subservice/Banner";
import Counter from "@/components/sections/subservice/Counter";
import Whychooseus from "@/components/sections/subservice/Whychooseus";
import Faq from "@/components/sections/subservice/Faq";
import Industries from "@/components/sections/subservice/Industries";
import Casestudy from "@/components/sections/subservice/Casestudy";
import SubFooter from "@/components/layout/footer/subFooter";
import Testimonials from "@/components/layout/common/Testimonials";
import JsonLd from "@/components/seo/JsonLd";
import {mortgageDataentrySupportSchema} from "@/libs/schema/services/mortgageDataentrySupportSchema";
export const metadata = {
    metadataBase: new URL("https://www.computyne.com"),

    title: "eCommerce Catalog Management & Data Management Services | Computyne",
    description:
        "Transform fragmented product data into high-performing assets. Computyne offers expert catalog building, data normalization, and PIM synchronization to scale your eCommerce storefront.",

    keywords: [
        "eCommerce catalog management",
        "product data management",
        "catalog indexing services",
        "outsourced catalog management",
        "product taxonomy development",
        "data normalization services",
        "attribute mapping",
        "PIM data synchronization",
        "SKU enrichment",
    ],

    alternates: {
        canonical: "https://www.computyne.com/mortgage-data-entry-support",
    },
};
export default function mortgageDataentrySupport() {

    return (
        <>
            <JsonLd
                id="mortgage-data-entry-support-schema"
                schema={mortgageDataentrySupportSchema}

            />
            <div>
                <BackToTop/>
                <Header headerType={5}/>
                <Header headerType={5} isStickyHeader={true}/>
                <div id="smooth-wrapper">
                    <div id="smooth-content">
                        <main>
                            <div className="top-space-15"></div>
                            <Banner/>
                            <Counter/>
                            <Aboutus slug={"mortgage-data-entry-support"} type={1}/>
                            <Subservices/>
                            <Casestudy text="How We Solve Complex Data Extraction Challenges"/>
                            <Whychooseus/>
                            <Faq type={1}/>
                            <Testimonials/>
                            <Industries/>
                            <SubFooter/>
                        </main>
                        <Footer/>
                    </div>
                </div>

                <ClientWrapper/>
            </div>
        </>
    );
}