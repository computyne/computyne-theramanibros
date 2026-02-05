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
import {freightAuditSchema} from "@/libs/schema/services/freightAuditSchema";
import SubFooter from "@/components/layout/footer/subFooter";
import Testimonials from "@/components/layout/common/Testimonials";

export const metadata = {
    metadataBase: new URL("https://www.computyne.com"),

    title: "Freight Audit Services | Freight Bill Auditing & Recovery | Computyne",
    description:
        "Professional freight audit services by Computyne to verify freight invoices, identify billing errors, and recover overcharges for efficient logistics operations.",

    keywords: [
        "freight audit services",
        "freight bill auditing",
        "freight invoice verification",
        "logistics audit services",
        "freight cost recovery",
        "transportation auditing",
        "shipping audit services",
    ],

    alternates: {
        canonical: "https://www.computyne.com/freight-audit-services",
    },
};


export default function freightAuditServices() {

    return (
        <>
            <JsonLd
                id="freight-audit-schema"
                schema={freightAuditSchema}
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
                            <Aboutus slug={"freight-audit-services"} type={1}/>
                            <Subservices/>
                            <Casestudy text="Proven Results from Our Freight Audit Services"/>
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
