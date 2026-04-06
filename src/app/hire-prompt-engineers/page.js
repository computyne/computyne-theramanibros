import Footer from "@/components/layout/footer/Footer";
import Header from "@/components/layout/header/Header";
import BackToTop from "@/components/shared/others/BackToTop";
import ClientWrapper from "@/components/shared/wrappers/ClientWrapper";
import Industries from "@/components/sections/subservice/Industries";
import JsonLd from "@/components/seo/JsonLd";
import {hirePromptEngineersSchema} from "@/libs/schema/services/hirePromptEngineers";
import SubFooter from "@/components/layout/footer/subFooter";
import Testimonials from "@/components/layout/common/Testimonials";
import Whychooseus from "../../components/sections/subservice/Whychooseus";
import Casestudy from "../../components/sections/subservice/Casestudy";
import CounterHireResource from "../../components/sections/subservice/CounterHireResource";
import HeroBanner from "../../components/sections/subservice/HeroBanner";
import Subservices from "../../components/sections/subservice/Subservices";
import PricingPlan from "../../components/pricing-plan/PricingPlan";
import AboutusHireResource from "../../components/sections/subservice/AboutusHireResource";
import ToolsAndTech from "../../components/sections/toolsandtech/ToolsAndTech";
import TeamComparison from "../../components/sections/TeamComparison";
import Faq from "../../components/sections/subservice/Faq";

export const metadata = {
    metadataBase: new URL("https://www.computyne.com"),

    title: "Hire Prompt Engineers from India | LLM, GPT and AI Prompt Specialists | Computyne",
    description:
        "Hire dedicated prompt engineers from India. Custom prompt design, LLM fine-tuning, GPT integration and AI workflow automation. ISO 27001. From $12/hr. Free consultation.",

    keywords: [
        "hire prompt engineers",
        "hire prompt engineers India",
        "prompt engineering services",
        "LLM prompt specialists",
        "GPT prompt engineers",
        "AI prompt optimization",
        "outsource prompt engineering",
    ],

    alternates: {
        canonical: "https://www.computyne.com/hire-prompt-engineers",
    },
};


export default function hirePromptEngineers() {

    return (
        <>
            <JsonLd
                id="hire-prompt-engineers-schema"
                schema={hirePromptEngineersSchema}
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
                            <AboutusHireResource slug={"hire-prompt-engineers"} type={1}/>
                            <Subservices/>
                            <Casestudy text="Impactful Results from Professional Web Research Services"/>
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
