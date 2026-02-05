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
import {textAnnotationServicesSchema} from "@/libs/schema/services/textAnnotationServicesSchema";
import SubFooter from "@/components/layout/footer/subFooter";
import Testimonials from "@/components/layout/common/Testimonials";

export const metadata = {
    metadataBase: new URL("https://computyne-one.vercel.app"),

    title: "Text Annotation Services | High-Quality NLP Data Labeling | Computyne",
    description:
        "Accurate text annotation services by Computyne for NLP and AI — expert labeling, entity tagging, sentiment marking, and structured text datasets to boost machine learning model performance.",

    keywords: [
        "text annotation services",
        "nlp data labeling",
        "machine learning text annotation",
        "entity tagging services",
        "sentiment labeling",
        "structured text datasets",
        "ai training data",
    ],

    alternates: {
        canonical: "https://computyne-one.vercel.app/text-annotation-services",
    },
};


export default function textAnnotationServices() {

    return (
        <>
            <JsonLd
                id="text-annotation-services-schema"
                schema={textAnnotationServicesSchema}
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
                            <Aboutus slug={"text-annotation-services"} type={1}/>
                            <Subservices isDefaultSubServiceCard={false}/>
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
