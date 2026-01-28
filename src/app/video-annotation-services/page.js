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
import {videoAnnotationServicesSchema} from "@/libs/schema/services/videoAnnotationServicesSchema";
import SubFooter from "@/components/layout/footer/subFooter";
import Testimonials from "@/components/layout/common/Testimonials";


export const metadata = {
    metadataBase: new URL("https://computyne-one.vercel.app"),

    title: "Video Annotation Services | AI Training Data for Computer Vision | Computyne",
    description:
        "Professional video annotation services by Computyne for AI and machine learning — precise frame-level labeling, object tracking, and scene annotation to power computer vision models.",

    keywords: [
        "video annotation services",
        "ai training data for computer vision",
        "machine learning video labeling",
        "frame-level annotation",
        "object tracking annotation",
        "scene annotation services",
        "cv model training data",
    ],

    alternates: {
        canonical: "https://computyne-one.vercel.app/video-annotation-services",
    },
};


export default function videoAnnotationServices() {

    return (
        <>
            <JsonLd
                id="video-annotation-services-schema"
                schema={videoAnnotationServicesSchema}
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
                            <Casestudy />
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
