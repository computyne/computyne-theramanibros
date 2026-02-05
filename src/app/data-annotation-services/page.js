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
import {enterpriseDataAnnotationSchema} from "@/libs/schema/services/enterpriseDataAnnotationSchema";
import JsonLd from "@/components/seo/JsonLd";
import SubFooter from "@/components/layout/footer/subFooter";
import Testimonials from "@/components/layout/common/Testimonials";

export const metadata = {
    metadataBase: new URL("https://computyne-one.vercel.app"),

    title: "Data Annotation Services | Accurate AI Training Data Solutions | Computyne",
    description:
        "Professional data annotation services by Computyne for Machine Learning and AI — precise labeling, quality control, and structured training datasets to improve model accuracy and performance.",

    keywords: [
        "data annotation services",
        "ai training data solutions",
        "machine learning data labeling",
        "training dataset preparation",
        "data labeling services",
        "ai model accuracy",
        "structured training data",
    ],

    alternates: {
        canonical: "https://computyne-one.vercel.app/data-annotation-services",
    },
};


export default function dataAnnotationServices() {
    return (
        <>
            <JsonLd
                id="enterprise-data-annotation-schema"
                schema={enterpriseDataAnnotationSchema}
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
                            <Aboutus slug={"data-annotation-services"} type={1}/>
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
