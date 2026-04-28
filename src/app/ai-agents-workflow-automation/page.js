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
import ToolsAndTech from "@/components/sections/toolsandtech/ToolsAndTech";
import TeamComparison from "@/components/sections/TeamComparison";
import Benifits from "../../components/sections/hire-resources/Benifits";
import PricingPlan from "../../components/pricing-plan/PricingPlan";
import AboutusHireResource from "../../components/sections/subservice/AboutusHireResource";
import Process from "../../components/sections/how-work/Process";
import AutomationToolsModels from "../../components/sections/subservice/AutomationToolsModels";

export const metadata = {
    metadataBase: new URL("https://www.computyne.com"),

    title: "AI Agents and Workflow Automation Services | n8n, MCP | Computyne",
    description: "Custom AI agent development and workflow automation using n8n, Make, Claude Code, and MCP integrations. Agentic AI built for your stack. ISO 27001 certified. Free pilot.",

    keywords: [
        "ai agent development services",
        "ai agents development company",
        "agentic ai services",
        "intelligent workflow automation",
        "workflow automation services",
        "automated workflow solutions",
        "custom ai agent development",
        "business process automation ai",
        "ai powered workflow automation",
        "ai workflow automation services",
        "agentic ai automation",
        "workflow automation for business",
        "intelligent process automation services",
        "n8n ai agent development",
        "mcp server integration services",
        "claude code enterprise",
        "langchain agent development",
        "llm integration services",
        "make.com automation services",
    ],

    alternates: {
        canonical: "https://www.computyne.com/ai-agents-workflow-automation",
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
                            <AboutusHireResource slug={"ai-agents-workflow-automation"} type={1}/>
                            <AutomationToolsModels/>
                            <Subservices/>
                            <Casestudy/>
                            <Whychooseus/>
                            <PricingPlan/>
                            <Process/>
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
