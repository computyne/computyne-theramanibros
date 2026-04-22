import Footer from "@/components/layout/footer/Footer";
import Header from "@/components/layout/header/Header";
import BackToTop from "@/components/shared/others/BackToTop";
import ClientWrapper from "@/components/shared/wrappers/ClientWrapper";
import Subservices from "@/components/sections/subservice/Subservices";
import Whychooseus from "@/components/sections/subservice/Whychooseus";
import Faq from "@/components/sections/subservice/Faq";
import Industries from "@/components/sections/subservice/Industries";
import Casestudy from "@/components/sections/subservice/Casestudy";
import {enterpriseDataServicesSchema} from "@/libs/schema/services/enterpriseDataServicesSchema";
import JsonLd from "@/components/seo/JsonLd";
import SubFooter from "@/components/layout/footer/subFooter";
import Testimonials from "@/components/layout/common/Testimonials";
import HeroBanner from "@/components/sections/subservice/HeroBanner";
import CounterHireResource from "@/components/sections/subservice/CounterHireResource";
import AboutusHireResource from "@/components/sections/subservice/AboutusHireResource";
import PricingPlan from "@/components/pricing-plan/PricingPlan";
import ToolsAndTech from "@/components/sections/toolsandtech/ToolsAndTech";
import TeamComparison from "@/components/sections/TeamComparison";
import Process from "@/components/sections/how-work/Process";


export const metadata = {
    metadataBase: new URL("https://www.computyne.com"),

    title: "Outsourced Data Solutions Services | Data Entry, Entry Management and More | Computyne",
    description:
        "Outsourced data solutions from India. Data entry, eCommerce product data, logistics data entry, real estate listing, mortgage data support and more. 99.99% accuracy. ISO 27001. Free pilot.",

    keywords: [
        "data solutions services",
        "outsource data entry services",
        "eCommerce product data entry",
        "logistics data entry outsourcing",
        "bill of lading data entry",
        "real estate data entry",
        "mortgage data entry support",
        "offshore data entry India",
    ],

    alternates: {
        canonical: "https://www.computyne.com/data-solutions-services",
    },
};


export default function dataSolutionsServices() {

    return (
        <>
            <JsonLd
                id="enterprise-data-services-schema"
                schema={enterpriseDataServicesSchema}
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
                            <AboutusHireResource slug={"data-solutions-services"} type={1}/>
                            <Subservices/>
                            <Casestudy text="Real Data Solutions Results Across Industries"/>
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
