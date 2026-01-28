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
import {multimodalAnnotationServicesSchema} from "@/libs/schema/services/multimodalAnnotationServicesSchema";
import SubFooter from "@/components/layout/footer/subFooter";
import Testimonials from "@/components/layout/common/Testimonials";

export const metadata = {
    metadataBase: new URL("https://computyne-one.vercel.app"),

    title: "Multimodal Annotation Services | AI & ML Training Data Experts | Computyne",
    description:
        "High-quality multimodal annotation services by Computyne for AI and machine learning — accurate labeling of text, image, audio, and video data to enhance model performance and insights.",

    keywords: [
        "multimodal annotation services",
        "ai training data experts",
        "ml training data services",
        "text image audio video annotation",
        "machine learning data labeling",
        "multimodal data annotation",
        "high-quality labeled datasets",
    ],

    alternates: {
        canonical: "https://computyne-one.vercel.app/multimodal-annotation-services",
    },
};


export default function multiModalAnnptationServices() {

    return (
        <>
            <JsonLd
                id="multimodal-annotation-services-schema"
                schema={multimodalAnnotationServicesSchema}
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
