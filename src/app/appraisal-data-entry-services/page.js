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
import JsonLd from "@/components/seo/JsonLd";
import {appraisalValuationDataEntrySchema} from "@/libs/schema/services/appraisalValuationDataEntrySchema";
import SubFooter from "@/components/layout/footer/subFooter";
import Testimonials from "@/components/layout/common/Testimonials";

export const metadata = {
    metadataBase: new URL("https://www.computyne.com"),

    title: "Appraisal Data Entry Services | Property & Asset Data Processing | Computyne",
    description:
        "Professional appraisal data entry services by Computyne for capturing, organizing, and validating property and asset valuation records with accuracy and consistency.",

    keywords: [
        "appraisal data entry services",
        "property appraisal data processing",
        "asset valuation data entry",
        "real estate appraisal data",
        "property valuation services",
        "appraisal record management",
        "asset data processing",
    ],

    alternates: {
        canonical: "https://www.computyne.com/appraisal-data-entry-services",
    },
};


export default function appraisalDataEntryServices() {
    return (
        <>
            <JsonLd
                id="web-scraping-schema"
                schema={appraisalValuationDataEntrySchema}
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
                            <Aboutus slug={"appraisal-data-entry-services"} type={1}/>
                            <Subservices/>
                            <Casestudy text="Proven Results from Appraisal & Valuation Data Projects"/>
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
