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
import {enterpriseDataServicesSchema} from "@/libs/schema/services/enterpriseDataServicesSchema";
import JsonLd from "@/components/seo/JsonLd";
import SubFooter from "@/components/layout/footer/subFooter";
import Testimonials from "@/components/layout/common/Testimonials";


export const metadata = {
    metadataBase: new URL("https://www.computyne.com"),

    title: "Data Services and Solutions for Smarter Business Decisions | Computyne",
    description:
        "Explore complete business data solutions by Computyne to manage, refine, and prepare data that supports confident decisions across operations and analytics.",

    keywords: [
        "data services",
        "data solutions services",
        "business data solutions",
        "data management services",
        "data preparation services",
        "data refinement",
        "analytics data solutions",
        "outsourced data services",
    ],

    alternates: {
        canonical: "https://www.computyne.com/data-solutions-services",
    },
};


export default function dataSolutionsServices() {

    return (
        <>
            <JsonLd
                id="enterprise-data-services-schema"
                schema={enterpriseDataServicesSchema}
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
                            <Aboutus slug={"data-solutions-services"} type={1}/>
                            <Subservices/>
                            <Casestudy/>
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
