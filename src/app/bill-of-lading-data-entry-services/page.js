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
import JsonLd from "@/components/seo/JsonLd";
import {freightBillOfLadingSchema} from "@/libs/schema/services/freightBillOfLadingSchema";
import SubFooter from "@/components/layout/footer/subFooter";
import Testimonials from "@/components/layout/common/Testimonials";

export const metadata = {
    metadataBase: new URL("https://www.computyne.com"),

    title: "Outsourced Bill of Lading Data Entry Services | BOL Processing UK & USA | Computyne",
    description:
        "Accurate bill of lading data entry services for freight carriers, 3PLs & forwarders. OCR-powered BOL processing. 99.5% accuracy. Get a free quote.",

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


export default function billOfLadingDataEntryServices() {
    return (
        <>
            <JsonLd
                id="freight-bill-of-lading-schema"
                schema={freightBillOfLadingSchema}
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
                            <Aboutus slug={"bill-of-lading-data-entry-services"} type={1}/>
                            <Subservices/>
                            <Casestudy text="Freight Documentation Optimization Case Studies"/>
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
