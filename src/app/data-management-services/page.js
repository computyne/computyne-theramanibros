import Footer from "@/components/layout/footer/Footer";
import Header from "@/components/layout/header/Header";
import BackToTop from "@/components/shared/others/BackToTop";
import ClientWrapper from "@/components/shared/wrappers/ClientWrapper";
import Subservices from "@/components/sections/subservice/Subservices";
import Whychooseus from "@/components/sections/subservice/Whychooseus";
import Faq from "@/components/sections/subservice/Faq";
import Industries from "@/components/sections/subservice/Industries";
import Casestudy from "@/components/sections/subservice/Casestudy";
import {dataManagementServicesSchema} from "@/libs/schema/services/dataManagementServicesSchema";
import JsonLd from "@/components/seo/JsonLd";
import SubFooter from "@/components/layout/footer/subFooter";
import Testimonials from "@/components/layout/common/Testimonials";
import HeroBanner from "@/components/sections/subservice/HeroBanner";
import CounterHireResource from "@/components/sections/subservice/CounterHireResource";
import AboutusHireResource from "@/components/sections/subservice/AboutusHireResource";
import TeamComparison from "@/components/sections/TeamComparison";
import Process from "@/components/sections/how-work/Process";
import ToolsAndTech from "../../components/sections/toolsandtech/ToolsAndTech";

export const metadata = {
    metadataBase: new URL("https://www.computyne.com"),

    title: "Outsourced Data Management Services | Cleansing, Enrichment and Governance | Computyne",
    description:
        "Outsourced data management services from India. Data cleansing, enrichment, validation, standardisation and eCommerce catalogue management. 99.99% accuracy. ISO 27001. Free pilot.",

    keywords: [
        "data management services",
        "outsource data management",
        "data cleansing services",
        "data enrichment services",
        "data quality management",
        "CRM data management",
        "eCommerce catalogue management",
        "data governance outsourcing India",
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
                            <HeroBanner/>
                            <CounterHireResource/>
                            <AboutusHireResource slug={"data-management-services"} type={1}/>
                            <Subservices/>
                            <Casestudy text="Proven Data Management Results Across Industries"/>
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
