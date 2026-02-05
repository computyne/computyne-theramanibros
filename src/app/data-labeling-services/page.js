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
import {dataLabelingAnnotationSchema} from "@/libs/schema/services/dataLabelingAnnotationSchema";
import SubFooter from "@/components/layout/footer/subFooter";
import Testimonials from "@/components/layout/common/Testimonials";


export const metadata = {
    metadataBase: new URL("https://computyne-one.vercel.app"),

    title: "Data Labeling Services | Accurate Training Data for AI & ML | Computyne",
    description:
        "Professional data labeling services by Computyne delivering high-quality annotated datasets for AI, machine learning, and analytics — ensuring accuracy, consistency, and optimal model performance.",

    keywords: [
        "data labeling services",
        "ai training data",
        "machine learning data annotation",
        "annotated datasets",
        "ml training data services",
        "data annotation for ai",
        "high-quality labeled data",
    ],

    alternates: {
        canonical: "https://computyne-one.vercel.app/data-labeling-services",
    },
};


export default function dataExtractionServices() {

    return (
        <>
            <JsonLd
                id="data-labeling-services-schema"
                schema={dataLabelingAnnotationSchema}
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
                            <Aboutus slug={"data-labeling-services"} type={1}/>
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
