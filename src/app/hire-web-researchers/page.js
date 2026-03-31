import Footer from "@/components/layout/footer/Footer";
import Header from "@/components/layout/header/Header";
import BackToTop from "@/components/shared/others/BackToTop";
import ClientWrapper from "@/components/shared/wrappers/ClientWrapper";
import Industries from "@/components/sections/subservice/Industries";
import JsonLd from "@/components/seo/JsonLd";
import {webResearchServicesSchema} from "@/libs/schema/services/webResearchServicesSchema";
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

    title: "Hire Web Researchers | Dedicated Market & Competitor Research Team | India | Computyne",
    description:
        "Hire dedicated web researchers from India market research, competitor analysis, lead generation & B2B data. ISO 27001. Get a custom plan.",

    keywords: [
        "hire web researchers",
        "dedicated online research team",
        "remote research professionals",
        "business research services",
        "online data collection",
        "market research support",
        "research outsourcing services",
    ],

    alternates: {
        canonical: "https://www.computyne.com/hire-web-researchers",
    },
};


export default function hireWebResearchers() {

    return (
        <>
            <JsonLd
                id="web-research-services-schema"
                schema={webResearchServicesSchema}
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
                            <AboutusHireResource slug={"hire-web-researchers"} type={1}/>
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
