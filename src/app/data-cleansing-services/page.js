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
import {dataCleansingServicesSchema} from "@/libs/schema/services/dataCleansingServicesSchema";
import JsonLd from "@/components/seo/JsonLd";
import SubFooter from "@/components/layout/footer/subFooter";
import Testimonials from "@/components/layout/common/Testimonials";

export const metadata = {
    metadataBase: new URL("https://www.computyne.com"),

    title: "Data Cleansing Services: B2B & CRM Data Cleaning Company | Computyne",
    description:
        "Accurate data cleansing services by Computyne to remove errors, correct inconsistencies, and prepare reliable, structured information for business use.",

    keywords: [
        "data cleansing services",
        "data cleaning company",
        "b2b data cleansing",
        "crm data cleaning",
        "data accuracy services",
        "data quality management",
        "structured data preparation",
    ],

    alternates: {
        canonical: "https://www.computyne.com/data-cleansing-services",
    },
};


export default function dataCleansingServices() {
    return (
        <>
            <JsonLd
                id="data-cleansing-services-schema"
                schema={dataCleansingServicesSchema}
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
                            <Casestudy text="Real-World Data Cleansing Use Cases and Outcomes"/>
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
