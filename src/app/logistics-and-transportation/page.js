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
import Casestudy from "@/components/sections/subservice/Casestudy";
import JsonLd from "@/components/seo/JsonLd";
import {multimodalAnnotationServicesSchema} from "@/libs/schema/services/multimodalAnnotationServicesSchema";
import SubFooter from "@/components/layout/footer/subFooter";
import Testimonials from "@/components/layout/common/Testimonials";
import {logisticAndTransportationIndustrySchema} from "@/libs/schema/services/logisticAndTransportationIndustrySchema";
export const metadata = {
    metadataBase: new URL("https://www.computyne.com"),

    title: "Logistics BPO & Transportation Data Services | Computyne",
    description:
        "Streamline your supply chain with Computyne’s logistics BPO services. We offer freight audit, bill of lading data entry, document digitization, and back-office support to improve operational accuracy.",

    keywords: [
        "Logistics BPO services",
        "Transportation data management",
        "Freight audit services",
        "Bill of lading data entry",
        "Logistics back-office support",
        "Supply chain data solutions",
        "Freight invoice processing",
        "Shipment data verification",
        "Logistics document digitization",
        "3PL data entry services",
    ],

    alternates: {
        canonical: "https://www.computyne.com/logistics-and-transportation",
    },
};
export default function logisticsAndTransportation() {

    return (
        <>
            <JsonLd
                id="logistic-transportation-industry-schema"
                schema={logisticAndTransportationIndustrySchema}
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
                            <Aboutus slug={"logistics-and-transportation"} type={1}/>
                            <Subservices/>
                            <Whychooseus/>
                            <Casestudy text="Proven Results from Logistics BPO Engagements"/>
                            <Faq type={1}/>
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
