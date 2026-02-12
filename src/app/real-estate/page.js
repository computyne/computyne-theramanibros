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
import {realEstateIndustrySchema} from "@/libs/schema/services/realEstateIndustrySchema";
export const metadata = {
    metadataBase: new URL("https://www.computyne.com"),

    title: "Real Estate Outsourcing & Property Data Solutions | Computyne",
    description:
        "Streamline your property business with Computyne’s real estate outsourcing. We offer property data entry, MLS listing updates, photo editing, and market research to boost your operational efficiency.",

    keywords: [
        "Real estate outsourcing services",
        "Property data entry services",
        "MLS listing update services",
        "Real estate data management",
        "Property data collection",
        "Real estate photo editing services",
        "Real estate market research",
        "Appraisal data entry services",
        "Real estate back office support",
        "Property document digitization",
    ],

    alternates: {
        canonical: "https://www.computyne.com/real-estate",
    },
};
export default function realEstate() {

    return (
        <>
            <JsonLd
                id="real-estate-industry-schema"
                schema={realEstateIndustrySchema}
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
                            <Aboutus slug={"real-estate"} type={1}/>
                            <Subservices/>
                            <Whychooseus/>
                            <Casestudy text="Operational Excellence in Real Estate and Property Management"/>
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
