import Footer from "@/components/layout/footer/Footer";
import Header from "@/components/layout/header/Header";
import BackToTop from "@/components/shared/others/BackToTop";
import ClientWrapper from "@/components/shared/wrappers/ClientWrapper";
import Industries from "@/components/sections/subservice/Industries";
import JsonLd from "@/components/seo/JsonLd";
import {hireGraphicDesignersSchema} from "@/libs/schema/services/hireGraphicDesigners";
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

    title: "Hire Graphic Designers and Image Editors | Computyne",
    description:
        "Hire dedicated graphic designers and image editors from India. Branding, social media, eCommerce visuals, photo editing and print design. ISO 27001. From $5/hr. Free pilot.",

    keywords: [
        "hire graphic designers India",
        "hire image editors India", 
        "outsource graphic design India",
        "dedicated graphic designer",
        "hire photo editors",
        "eCommerce image editing outsourcing",
        "offshore graphic design team"
    ],

    alternates: {
        canonical: "https://www.computyne.com/hire-graphic-designers",
    },
};


export default function hireGraphicDesigners() {

    return (
        <>
            <JsonLd
                id="hire-graphic-designers-schema"
                schema={hireGraphicDesignersSchema}
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
                            <AboutusHireResource slug={"hire-graphic-designers"} type={1}/>
                            <Subservices/>
                            <Casestudy text="Impactful Results from Professional Graphic Design Services"/>
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
