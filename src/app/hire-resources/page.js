import Footer from "@/components/layout/footer/Footer";
import Header from "@/components/layout/header/Header";
import BackToTop from "@/components/shared/others/BackToTop";
import ClientWrapper from "@/components/shared/wrappers/ClientWrapper";
import Subservices from "@/components/sections/subservice/Subservices";
import Whychooseus from "@/components/sections/subservice/Whychooseus";
import Faq from "@/components/sections/subservice/Faq";
import Industries from "@/components/sections/subservice/Industries";
import Casestudy from "@/components/sections/subservice/Casestudy";
import JsonLd from "@/components/seo/JsonLd";
import {virtualAssistantServicesSchema} from "@/libs/schema/services/virtualAssistantServicesSchema";
import SubFooter from "@/components/layout/footer/subFooter";
import Testimonials from "@/components/layout/common/Testimonials";
import HeroBanner from "@/components/sections/subservice/HeroBanner";
import CounterHireResource from "../../components/sections/subservice/CounterHireResource";
import AboutusHireResource from "@/components/sections/subservice/AboutusHireResource";
import ToolsAndTech from "@/components/sections/toolsandtech/ToolsAndTech";
import TeamComparison from "@/components/sections/TeamComparison";
import Benifits from "../../components/sections/hire-resources/Benifits";
import PricingPlan from "../../components/pricing-plan/PricingPlan";
import Process from "../../components/sections/hire-resources/Process";

export const metadata = {
    metadataBase: new URL("https://www.computyne.com"),

    title: "Hire Offshore Resources | Dedicated Staffing Solutions | Computyne",
    description:
        "Hire dedicated offshore resources by Computyne, including data professionals, researchers, and virtual assistants for scalable business operations.",

    keywords: [
        "hire offshore resources",
        "dedicated staffing solutions",
        "remote data professionals",
        "virtual assistants",
        "offshore team hiring",
        "business process outsourcing",
        "scalable staffing solutions",
    ],

    alternates: {
        canonical: "https://www.computyne.com/hire-resources",
    },
};


export default function hireVirtualAssistants() {

    return (
        <>
            <JsonLd
                id="virtual-assistant-services-schema"
                schema={virtualAssistantServicesSchema}
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
                            <AboutusHireResource slug={"hire-resources"} type={1}/>
                            <Subservices/>
                            <Casestudy/>
                            <Benifits/>
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
