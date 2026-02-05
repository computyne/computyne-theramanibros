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
import {dataAppendingServicesSchema} from "@/libs/schema/services/dataAppendingServicesSchema";
import JsonLd from "@/components/seo/JsonLd";
import SubFooter from "@/components/layout/footer/subFooter";
import Testimonials from "@/components/layout/common/Testimonials";

export const metadata = {
    metadataBase: new URL("https://www.computyne.com"),

    title: "Data Appending Services: Customer Data, Phone & Email Append | Computyne",
    description:
        "Custom data appending services by Computyne that enrich and update datasets with missing information to improve data completeness and campaign results.",

    keywords: [
        "data appending services",
        "customer data append",
        "phone data append",
        "email data append",
        "data enrichment services",
        "dataset update services",
        "business data appending",
    ],

    alternates: {
        canonical: "https://www.computyne.com/data-appending-services",
    },
};


export default function dataAppendingServices() {
    return (
        <>
            <JsonLd
                id="data-appending-services-schema"
                schema={dataAppendingServicesSchema}
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
                            <Aboutus slug={"data-appending-services"} type={1}/>
                            <Subservices/>
                            <Casestudy text="How Our Data Appending Services Deliver Measurable Business Impact"/>
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
