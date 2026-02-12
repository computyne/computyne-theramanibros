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
import {itesIndustrySchema} from "@/libs/schema/services/itesIndustrySchema";
export const metadata = {
    metadataBase: new URL("https://www.computyne.com"),

    title: "ITES & BPO Outsourcing Services | Computyne Global",
    description:
        "Boost performance with Computyne’s ITES solutions. We provide scalable customer support, technical assistance, data management, and BPO services designed to streamline operations and drive sustainable growth.",

    keywords: [
        "ITES services provider",
        "Customer support outsourcing",
        "Technical support services",
        "Business process outsourcing (BPO)",
        "Data management solutions",
        "IT infrastructure management",
        "ERP and cloud support",
        "HR outsourcing (HRO)",
        "Scalable outsourcing models",
        "Information technology enabled services",
    ],

    alternates: {
        canonical: "https://www.computyne.com/ites",
    },
};
export default function ites() {

    return (
        <>
            <JsonLd
                id="ites-industry-schema"
                schema={itesIndustrySchema}
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
                            <Aboutus slug={"ites"} type={1}/>
                            <Subservices/>
                            <Whychooseus/>
                            <Casestudy text="ITES BPO Case Studies Delivering Measurable Outcomes"/>
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
