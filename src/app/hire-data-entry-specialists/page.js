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
import {remoteDataEntrySchema} from "@/libs/schema/services/remoteDataEntrySchema";
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

    title: "Hire Remote Data Entry Specialists | CRM, eCommerce & Invoice | ISO 27001 | Computyne",
    description:
        "Hire dedicated remote data entry specialists from IndiaCRM, invoices, catalogs & document digitization. 99%+ accuracy. ISO 27001. Get a free quote.",

    keywords: [
        "hire data entry specialists",
        "dedicated data entry team",
        "remote data entry professionals",
        "high-volume data processing",
        "secure data entry services",
        "outsourced data entry",
        "data management support",
    ],

    alternates: {
        canonical: "https://www.computyne.com/hire-data-entry-specialists",
    },
};


export default function hireDataEntrySpecialists() {

    return (
        <>
            <JsonLd
                id="remote-data-entry-schema"
                schema={remoteDataEntrySchema}
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
                            <AboutusHireResource slug={"hire-data-entry-specialists"} type={1}/>
                            <Subservices/>
                            <Casestudy text="Trusted by Businesses for Remote Data Entry Excellence"/>
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
