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
import {imageAnnotationServicesSchema} from "@/libs/schema/services/imageAnnotationServicesSchema";
import SubFooter from "@/components/layout/footer/subFooter";
import Testimonials from "@/components/layout/common/Testimonials";

export const metadata = {
    metadataBase: new URL("https://computyne-one.vercel.app"),

    title: "Image Annotation Services | Accurate AI Training Data | Computyne",
    description:
        "Professional image annotation services by Computyne for AI and machine learning — precise labeling, bounding boxes, segmentation, and tagging to train high-performance computer vision models.",

    keywords: [
        "image annotation services",
        "ai training data",
        "machine learning image labeling",
        "bounding boxes annotation",
        "image segmentation services",
        "computer vision training data",
        "high-quality labeled images",
    ],

    alternates: {
        canonical: "https://computyne-one.vercel.app/image-annotation-services",
    },
};


export default function imageAnnotationServices() {

    return (
        <>
            <JsonLd
                id="image-annotation-services-schema"
                schema={imageAnnotationServicesSchema}
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
