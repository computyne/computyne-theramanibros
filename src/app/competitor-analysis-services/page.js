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
import Industries from "@/components/sections/subservice/Industries";
import Casestudy from "@/components/sections/subservice/Casestudy";
import {competitorAnalysisSchema} from "@/libs/schema/services/competitorAnalysisServicesSchema";
import JsonLd from "@/components/seo/JsonLd";
import SubFooter from "@/components/layout/footer/subFooter";
import Testimonials from "@/components/layout/common/Testimonials";


export const metadata = {
    metadataBase: new URL("https://www.computyne.com"),

    title: "Competitor Analysis Services | Market & Competitor Insights | Computyne",
    description:
        "Competitor analysis services by Computyne providing deep competitive insights to help businesses refine strategy, identify opportunities, and outperform competitors.",

    keywords: [
        "competitor analysis services",
        "market competitor analysis",
        "competitive intelligence services",
        "market insights",
        "business strategy analysis",
        "competitor research services",
        "competitive benchmarking",
    ],

    alternates: {
        canonical: "https://www.computyne.com/competitor-analysis-services",
    },
};


export default function competitorAnalysisServices() {
    return (
        <>
            <JsonLd
                id="competitor-analysis-schema"
                schema={competitorAnalysisSchema}
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
                            <Aboutus slug={"competitor-analysis-services"} type={1}/>
                            <Subservices/>
                            <Casestudy text="From Pricing Challenges to Growth: Competitor Analysis Case Studies"/>
                            <Whychooseus/>
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
