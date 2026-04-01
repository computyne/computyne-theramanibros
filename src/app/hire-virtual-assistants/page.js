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
import AboutusHireResource from "../../components/sections/subservice/AboutusHireResource";
import PricingPlan from "@/components/pricing-plan/PricingPlan";
import ToolsAndTech from "@/components/sections/toolsandtech/ToolsAndTech";
import TeamComparison from "@/components/sections/TeamComparison";

export const metadata = {
    metadataBase: new URL("https://www.computyne.com"),

    title: "Hire Virtual Assistants from India | Admin, eCommerce & Research VAs | Computyne",
    description:
        "Hire dedicated virtual assistants from India admin, data entry, research, social media & eCommerce support. ISO 27001. From $X/hr. Get a free quote.",

    keywords: [
        "hire virtual assistants",
        "dedicated offshore virtual assistants",
        "remote administrative support",
        "virtual assistant services",
        "outsourced VA team",
        "business process support",
        "remote operational assistants",
    ],

    alternates: {
        canonical: "https://www.computyne.com/hire-virtual-assistants",
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
                            <AboutusHireResource slug={"hire-virtual-assistants"} type={1}/>
                            <Subservices/>
                            <Casestudy text="Client Success Stories with Dedicated Virtual Assistants"/>
                            <Whychooseus/>
                            <PricingPlan/>
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
