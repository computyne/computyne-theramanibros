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
import SubFooter from "@/components/layout/footer/subFooter";
import Testimonials from "@/components/layout/common/Testimonials";
import JsonLd from "@/components/seo/JsonLd";
import {mortgageDataentrySupportSchema} from "@/libs/schema/services/mortgageDataentrySupportSchema";
export const metadata = {
    metadataBase: new URL("https://www.computyne.com"),

    title: "Mortgage Data Entry Support Services | Secure & Accurate Processing",
    description:
        "Professional mortgage data entry support for lenders and servicers. Ensure secure, accurate, and compliant loan data processing with scalable offshore teams.",

    keywords: [
        "mortgage data entry support",
        "mortgage data entry services",
        "loan data entry outsourcing",
        "mortgage processing support services",
        "mortgage back office services",
        "mortgage document data entry",
        "loan origination data entry",
        "mortgage data management services",
        "mortgage BPO services",
        "real estate data entry services",
    ],

    alternates: {
        canonical: "https://www.computyne.com/mortgage-data-entry-support",
    },
};
export default function mortgageDataentrySupport() {

    return (
        <>
            <JsonLd
                id="mortgage-data-entry-support-schema"
                schema={mortgageDataentrySupportSchema}

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
                            <Aboutus slug={"mortgage-data-entry-support"} type={1}/>
                            <Subservices/>
                            <Casestudy text="How We Solve Complex Data Extraction Challenges"/>
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