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
import {dataHygieneServicesSchema} from "@/libs/schema/services/dataHygieneServicesSchema";
import JsonLd from "@/components/seo/JsonLd";
import SubFooter from "@/components/layout/footer/subFooter";
import Testimonials from "@/components/layout/common/Testimonials";

export const metadata = {
    metadataBase: new URL("https://www.computyne.com"),

    title: "Data Hygiene Services | CRM & Database Hygiene Solutions | Computyne",
    description:
        "Comprehensive data hygiene services by Computyne to clean, verify, and structure business records, ensuring accurate and operational-ready datasets.",

    keywords: [
        "data hygiene services",
        "crm data hygiene",
        "database hygiene solutions",
        "data quality management",
        "data cleansing and verification",
        "business data hygiene",
        "data maintenance services",
    ],

    alternates: {
        canonical: "https://www.computyne.com/data-hygiene-services",
    },
};


export default function dataHydieneServices() {

    return (
        <>
            <JsonLd
                id="data-hygiene-services-schema"
                schema={dataHygieneServicesSchema}
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
                            <Aboutus slug={"data-hygiene-services"} type={1}/>
                            <Subservices/>
                            <Casestudy text="Client Success Stories Powered by Continuous Data Hygiene Services"/>
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
