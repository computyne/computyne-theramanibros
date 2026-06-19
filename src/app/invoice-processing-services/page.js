import Footer from "@/components/layout/footer/Footer";
import Header from "@/components/layout/header/Header";
import BackToTop from "@/components/shared/others/BackToTop";
import ClientWrapper from "@/components/shared/wrappers/ClientWrapper";
import Aboutus from "@/components/sections/subservice/Aboutus";
import Subservices from "@/components/sections/subservice/Subservices";
import Whychooseus from "@/components/sections/subservice/Whychooseus";
import Faq from "@/components/sections/subservice/Faq";
import Industries from "@/components/sections/subservice/Industries";
import Casestudy from "@/components/sections/subservice/Casestudy";
import JsonLd from "@/components/seo/JsonLd";
import {invoiceProcessingServicesSchema} from "@/libs/schema/services/invoiceProcessingServicesSchema";
import SubFooter from "@/components/layout/footer/subFooter";
import Testimonials from "@/components/layout/common/Testimonials";
import HeroBanner from "@/components/sections/subservice/HeroBanner";
import CounterHireResource from "@/components/sections/subservice/CounterHireResource";
import InvoiceProcessingPlatforms from "@/components/sections/subservice/InvoiceProcessingPlatforms";
import Process from "@/components/sections/how-work/Process";

export const metadata = {
    metadataBase: new URL("https://www.computyne.com"),

    title: "Outsource Invoice Processing Services | Validation, AP Automation and ERP Integration | Computyne",
    description:
        "Outsource invoice processing and validation services. Three-way matching, AP automation, ERP integration. 99%+ accuracy. SOX and GDPR compliant. Get a free pilot.",

    keywords: [
        "outsource invoice processing services",
        "invoice processing outsourcing",
        "invoice validation services",
        "invoice data entry services",
        "accounts payable invoice processing",
        "three-way invoice matching",
        "AP automation outsourcing India",
        "high volume invoice processing",
    ],

    alternates: {
        canonical: "https://www.computyne.com/invoice-processing-services",
    },
};


export default function invoiceProcessingServices() {

    return (
        <>
            <JsonLd
                id="invoice-processing-services-schema"
                schema={invoiceProcessingServicesSchema}
            />
            <div>
                <BackToTop/>
                <Header headerType={5}/>
                <Header headerType={5} isStickyHeader={true}/>
                <div id="smooth-wrapper">
                    <div id="smooth-content">
                        <main>
                            <div className="top-space-15"></div>
                            
                            <HeroBanner dataSource="service"/>
                            <CounterHireResource dataSource="service"/>
                            <Aboutus slug={"invoice-processing-services"} type={1}/>
                            <Subservices/>
                            <InvoiceProcessingPlatforms/>
                            <Process/>
                            <Casestudy text="Proven Invoice Processing Results"/>
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
