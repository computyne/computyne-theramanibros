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
import {dataManagementServicesSchema} from "@/libs/schema/services/dataManagementServicesSchema";
import JsonLd from "@/components/seo/JsonLd";
import SubFooter from "@/components/layout/footer/subFooter";
import Testimonials from "@/components/layout/common/Testimonials";

export const metadata = {
    metadataBase: new URL("https://www.computyne.com"),

    title: "Data Management Services | Enterprise Information Management | Computyne",
    description:
        "Professional data management services by Computyne to organize, standardize, and maintain business data so it is accurate, consistent, and ready for decision-making.",

    keywords: [
        "data management services",
        "enterprise information management",
        "data governance services",
        "data standardization",
        "data quality management",
        "master data management",
        "business data services",
    ],

    alternates: {
        canonical: "https://www.computyne.com/data-management-services",
    },
};


export default function dataManagementServices() {

    return (
        <>
            <JsonLd
                id="data-management-services-schema"
                schema={dataManagementServicesSchema}
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
                            <Casestudy text="Proven Data Management Results Across Industries"/>
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
