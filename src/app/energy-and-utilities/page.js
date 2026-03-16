import Footer from "@/components/layout/footer/Footer";
import Header from "@/components/layout/header/Header";
import BackToTop from "@/components/shared/others/BackToTop";
import ClientWrapper from "@/components/shared/wrappers/ClientWrapper";
import Aboutus from "@/components/sections/subservice/Aboutus";
import Subservices from "@/components/sections/subservice/Subservices";
import Banner from "@/components/sections/subservice/Banner";
import Counter from "@/components/sections/subservice/Counter";
import Whychooseus from "@/components/sections/subservice/Whychooseus";
import Faq from "@/components/sections/subservice/Faq";
import Casestudy from "@/components/sections/subservice/Casestudy";
import JsonLd from "@/components/seo/JsonLd";
import {multimodalAnnotationServicesSchema} from "@/libs/schema/services/multimodalAnnotationServicesSchema";
import SubFooter from "@/components/layout/footer/subFooter";
import Testimonials from "@/components/layout/common/Testimonials";
import {energyAndUtilitiesIndustrySchema} from "@/libs/schema/services/energyAndUtilitiesIndustrySchema";
export const metadata = {
    metadataBase: new URL("https://www.computyne.com"),

    title: "Energy & Utilities BPO Services | Smart Meter, ESG & Billing Outsourcing | Computyne",
    description:
        "Energy & utilities BPO from India meter-to-cash, smart meter data, ESG reporting, billing & compliance. ISO 27001. Get a consultation.",

    keywords: [
        "Energy and utilities management",
        "Utility bill auditing services",
        "Energy consumption analysis",
        "Utility cost optimization",
        "Sustainability planning services",
        "Energy resource management",
        "Utility data processing",
        "Energy regulatory compliance",
        "Renewable energy integration support",
        "Utility operational efficiency",
    ],

    alternates: {
        canonical: "https://www.computyne.com/energy-and-utilities",
    },
};
export default function energyAndUtilities() {

    return (
        <>
            <JsonLd
                id="energy-utilities-industry-schema"
                schema={energyAndUtilitiesIndustrySchema}
            />
            <div>
                <BackToTop/>
                <Header headerType={5}/>
                <Header headerType={5} isStickyHeader={true}/>
                <div id="smooth-wrapper">
                    <div id="smooth-content">
                        <main>
                            <div className="top-space-15"></div>
                            
                            <Banner/>
                            <Counter/>
                            <Aboutus slug={"energy-and-utilities"} type={1}/>
                            <Subservices/>
                            <Whychooseus/>
                            <Casestudy text="BPO Success Across Energy and Utility Enterprises"/>
                            <Faq type={1}/>
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
