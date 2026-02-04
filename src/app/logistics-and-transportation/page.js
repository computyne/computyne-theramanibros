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
import {logisticAndTransportationIndustrySchema} from "@/libs/schema/services/logisticAndTransportationIndustrySchema";

export default function logisticsAndTransportation() {

    return (
        <>
            <JsonLd
                id="logistic-transportation-industry-schema"
                schema={logisticAndTransportationIndustrySchema}
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
                            <Aboutus slug={"logistics-and-transportation"} type={1}/>
                            <Subservices/>
                            <Whychooseus/>
                            <Casestudy text="Proven Results from Logistics BPO Engagements"/>
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
