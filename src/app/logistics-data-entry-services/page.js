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
import {logisticsDataEntryServicesSchema} from "@/libs/schema/services/logisticsDataEntryServicesSchema";
import SubFooter from "@/components/layout/footer/subFooter";
import Testimonials from "@/components/layout/common/Testimonials";

export const metadata = {
    metadataBase: new URL("https://www.computyne.com"),

    title: "Logistics Data Entry Services | Transport & Shipping Data Processing | Computyne",
    description:
        "Specialized logistics data entry services by Computyne for managing transport, shipment, and supply chain records with accuracy, speed, and reliability.",

    keywords: [
        "logistics data entry services",
        "transport data processing",
        "shipping data entry",
        "supply chain data management",
        "freight data entry",
        "logistics documentation services",
        "shipping record management",
    ],

    alternates: {
        canonical: "https://www.computyne.com/logistics-data-entry-services",
    },
};


export default function logisticsDataEntryServices() {

    return (
        <>
            <JsonLd
                id="logistics-data-entry-services-schema"
                schema={logisticsDataEntryServicesSchema}
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
                            <Aboutus slug={"logistics-data-entry-services"} type={1}/>
                            <Subservices/>
                            <Casestudy text="Proven Results from Logistics Data Entry Engagements"/>
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
