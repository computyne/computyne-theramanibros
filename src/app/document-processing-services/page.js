import Footer from "@/components/layout/footer/Footer";
import Header from "@/components/layout/header/Header";
import BackToTop from "@/components/shared/others/BackToTop";
import ClientWrapper from "@/components/shared/wrappers/ClientWrapper";
import Subservices from "@/components/sections/subservice/Subservices";
import Whychooseus from "@/components/sections/subservice/Whychooseus";
import Faq from "@/components/sections/subservice/Faq";
import Industries from "@/components/sections/subservice/Industries";
import Casestudy from "@/components/sections/subservice/Casestudy";
import {documentProcessingServicesSchema} from "@/libs/schema/services/documentProcessingServicesSchema";
import JsonLd from "@/components/seo/JsonLd";
import SubFooter from "@/components/layout/footer/subFooter";
import Testimonials from "@/components/layout/common/Testimonials";
import HeroBanner from "@/components/sections/subservice/HeroBanner";
import CounterHireResource from "@/components/sections/subservice/CounterHireResource";
import AboutusHireResource from "@/components/sections/subservice/AboutusHireResource";
import ToolsAndTech from "@/components/sections/toolsandtech/ToolsAndTech";
import TeamComparison from "@/components/sections/TeamComparison";
import Process from "@/components/sections/how-work/Process";

export const metadata = {
    metadataBase: new URL("https://www.computyne.com"),

    title: "Outsourced Document Processing Services | OCR, AI and IDP | Computyne",
    description:
        "Outsourced document processing services from India. Invoice processing, freight audit, resume formatting, forms processing, document digitisation and OCR. ISO 27001. Free pilot.",

    keywords: [
        "document processing services",
        "outsource document processing",
        "intelligent document processing",
        "invoice processing outsourcing",
        "document digitisation services",
        "OCR data extraction",
        "forms processing services",
        "freight audit services",
    ],

    alternates: {
        canonical: "https://www.computyne.com/document-processing-services",
    },
};


export default function documentProcessingServices() {

    return (
        <>
            <JsonLd
                id="document-processing-services-schema"
                schema={documentProcessingServicesSchema}
            />
            <div>
                <BackToTop/>
                <Header headerType={5}/>
                <Header headerType={5} isStickyHeader={true}/>
                <div id="smooth-wrapper">
                    <div id="smooth-content">
                        <main>
                            <div className="top-space-15"></div>
                            <HeroBanner/>
                            <CounterHireResource/>
                            <AboutusHireResource slug={"document-processing-services"} type={1}/>
                            <Subservices/>
                            <Casestudy text="Real Document Processing Results Across Industries"/>
                            <Whychooseus/>
                            <ToolsAndTech/>
                            <Process/>
                            <TeamComparison/>
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
