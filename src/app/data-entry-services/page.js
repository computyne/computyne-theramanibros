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
import {dataEntryServicesSchema} from "@/libs/schema/services/dataEntryServicesSchema";
import SubFooter from "@/components/layout/footer/subFooter";
import Testimonials from "@/components/layout/common/Testimonials";


export const metadata = {
    metadataBase: new URL("https://www.computyne.com"),

    title: "Data Entry Services | Accurate Business Data Entry | Computyne",
    description:
        "Dependable data entry services by Computyne, handling large volumes of business information with precision, verification, and secure processing for organized and error-free data.",

    keywords: [
        "data entry services",
        "business data entry",
        "outsourced data entry",
        "high volume data entry",
        "data verification services",
        "secure data entry",
        "accurate data processing",
    ],

    alternates: {
        canonical: "https://www.computyne.com/data-entry-services",
    },
};


export default function dataEntryServices() {

    return (
        <>
            <JsonLd
                id="data-entry-services-schema"
                schema={dataEntryServicesSchema}
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
                            <Aboutus type={1}/>
                            <Subservices/>
                            <Casestudy text="Outsourced Data Entry Solutions - Real Client Success Stories"/>
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
