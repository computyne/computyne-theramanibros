import Footer from "@/components/layout/footer/Footer";
import Header from "@/components/layout/header/Header";
import BackToTop from "@/components/shared/others/BackToTop";
import ClientWrapper from "@/components/shared/wrappers/ClientWrapper";
import Subservices from "@/components/sections/subservice/Subservices";
import Whychooseus from "@/components/sections/subservice/Whychooseus";
import Faq from "@/components/sections/subservice/Faq";
import Industries from "@/components/sections/subservice/Industries";
import Casestudy from "@/components/sections/subservice/Casestudy";
import {dataCleansingServicesSchema} from "@/libs/schema/services/dataCleansingServicesSchema";
import JsonLd from "@/components/seo/JsonLd";
import SubFooter from "@/components/layout/footer/subFooter";
import Testimonials from "@/components/layout/common/Testimonials";
import HeroBanner from "@/components/sections/subservice/HeroBanner";
import CounterHireResource from "@/components/sections/subservice/CounterHireResource";
import AboutusHireResource from "@/components/sections/subservice/AboutusHireResource";
import PricingPlan from "@/components/pricing-plan/PricingPlan";
import Process from "@/components/sections/how-work/Process";
import ToolsAndTech from "@/components/sections/toolsandtech/ToolsAndTech";
import TeamComparison from "@/components/sections/TeamComparison";

export const metadata = {
    metadataBase: new URL("https://www.computyne.com"),

    title: "Outsource Data Cleansing Services | B2B, CRM, Product and eCommerce Data Cleaning | Computyne",
    description:
        "Outsource data cleansing services for B2B data cleansing, CRM and Salesforce data cleaning, product data cleansing, eCommerce data cleaning. Deduplication, validation, standardisation. 99.99% accuracy. ISO 27001. Free pilot.",

    keywords: [
        "data cleansing services",
        "outsource data cleansing services",
        "b2b data cleansing services",
        "data cleansing outsourcing",
        "b2b data cleansing",
        "product data cleansing services",
        "ecommerce data cleansing services",
        "outsource data cleansing",
        "Salesforce data cleansing",
        "CRM data cleansing services",
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
                            <HeroBanner dataSource="service"/>
                            <CounterHireResource dataSource="service"/>
                            <AboutusHireResource slug={"data-cleansing-services"} type={1}/>
                            <Subservices/>
                            <Casestudy text="Data Cleansing Results"/>
                            <Whychooseus/>
                            <PricingPlan/>
                            <Process/>
                            <ToolsAndTech/>
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
