import Footer from "@/components/layout/footer/Footer";
import Header from "@/components/layout/header/Header";
import BackToTop from "@/components/shared/others/BackToTop";
import ClientWrapper from "@/components/shared/wrappers/ClientWrapper";
import Aboutus from "@/components/sections/subservice/Aboutus";
import Subservices from "@/components/sections/subservice/Subservices";
import Counter from "@/components/sections/subservice/Counter";
import Whychooseus from "@/components/sections/subservice/Whychooseus";
import Faq from "@/components/sections/subservice/Faq";
import Industries from "@/components/sections/subservice/Industries";
import Casestudy from "@/components/sections/subservice/Casestudy";
import {dataCollectionServicesSchema} from "@/libs/schema/services/dataCollectionServicesSchema";
import JsonLd from "@/components/seo/JsonLd";
import SubFooter from "@/components/layout/footer/subFooter";
import Testimonials from "@/components/layout/common/Testimonials";
import HeroBanner from "@/components/sections/subservice/HeroBanner";
import CounterHireResource from "../../components/sections/subservice/CounterHireResource";
import AboutusHireResource from "@/components/sections/subservice/AboutusHireResource";
import PricingPlan from "@/components/pricing-plan/PricingPlan";
import ToolsAndTech from "@/components/sections/toolsandtech/ToolsAndTech";
import TeamComparison from "@/components/sections/TeamComparison";
import Process from "@/components/sections/how-work/Process";


export const metadata = {
    metadataBase: new URL("https://www.computyne.com"),

    title: "Outsourced Data Collection Services | Accurate, Scalable, AI-Ready | Computyne",
    description:
        "Outsourced data collection services from India. Web scraping, data extraction, B2B list building, property data and AI training datasets. 99%+ accuracy. ISO 27001. Free pilot.",

    keywords: [
        "data collection services",
        "outsource data collection",
        "data collection outsourcing India",
        "web scraping services",
        "data extraction services",
        "B2B data collection",
        "AI training data collection",
        "property data collection",
    ],

    alternates: {
        canonical: "https://www.computyne.com/data-collection-services",
    },
};


export default function dataCollectionServices() {
    return (
        <>
            <JsonLd
                id="data-collection-services-schema"
                schema={dataCollectionServicesSchema}
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
                            <AboutusHireResource slug={"data-collection-services"} type={1}/>
                            <Subservices/>
                            <Casestudy text="Real Business Results Through Outsourced Data Collection"/>
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
