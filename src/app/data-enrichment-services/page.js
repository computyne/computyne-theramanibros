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
import {dataEnrichmentServicesSchema} from "@/libs/schema/services/dataEnrichmentServicesSchema";
import JsonLd from "@/components/seo/JsonLd";
import SubFooter from "@/components/layout/footer/subFooter";
import Testimonials from "@/components/layout/common/Testimonials";


export const metadata = {
    metadataBase: new URL("https://www.computyne.com"),

    title: "Data Enrichment Services: B2B & CRM Data Enrichment Company | Computyne",
    description:
        "Precise data enrichment services by Computyne to update, verify, and complete datasets for better targeting, segmentation, and informed business decision-making.",

    keywords: [
        "data enrichment services",
        "b2b data enrichment",
        "crm data enrichment",
        "data verification services",
        "data updating services",
        "data completion solutions",
        "business data enrichment",
    ],

    alternates: {
        canonical: "https://www.computyne.com/data-enrichment-services",
    },
};


export default function dataEnrichmentServices() {

    return (
        <>
            <JsonLd
                id="data-enrichment-services-schema"
                schema={dataEnrichmentServicesSchema}
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
                            <Aboutus type={1}/>
                            <Subservices/>
                            <Casestudy text="Proven Results from Our Data Enrichment Projects"/>
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
