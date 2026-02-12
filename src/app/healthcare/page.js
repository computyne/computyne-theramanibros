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
import {healthCareIndustrySchema} from "@/libs/schema/services/healthCareIndustrySchema";
export const metadata = {
    metadataBase: new URL("https://www.computyne.com"),

    title: "Healthcare BPO Services & Medical Billing Outsourcing | Computyne",
    description:
        "Optimize healthcare operations with Computyne’s HIPAA-compliant BPO services. We offer medical billing, RCM, claims processing, and healthcare data management to reduce costs and improve care.",

    keywords: [
        "Healthcare BPO services",
        "Medical billing outsourcing",
        "Revenue cycle management (RCM) services",
        "Healthcare process outsourcing",
        "HIPAA compliant BPO services",
        "Insurance claims processing outsourcing",
        "Healthcare data management services",
        "Medical records processing",
        "Provider credentialing services",
        "Healthcare back-office support",
    ],

    alternates: {
        canonical: "https://www.computyne.com/healthcare",
    },
};
export default function healthcare() {

    return (
        <>
            <JsonLd
                id="healthcare-industry-schema"
                schema={healthCareIndustrySchema}
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
                            <Aboutus slug={"healthcare"} type={1}/>
                            <Subservices/>
                            <Whychooseus/>
                            <Casestudy text="Proven Results from Our Healthcare BPO Engagements"/>
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
