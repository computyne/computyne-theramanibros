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
import {imageDataEntryServicesSchema} from "@/libs/schema/services/imageDataEntryServicesSchema";
import SubFooter from "@/components/layout/footer/subFooter";
import Testimonials from "@/components/layout/common/Testimonials";

export const metadata = {
    metadataBase: new URL("https://www.computyne.com"),

    title: "Outsourced Image Data Entry & OCR Services | 98% Accuracy | UK & USA | Computyne",
    description:
        "Accurate image data entry services scanned docs, handwritten text, PDFs & charts. OCR + manual QA. 98% accuracy guaranteed. Get a free quote.",

    keywords: [
        "image data entry services",
        "image data processing",
        "scanned document data entry",
        "document digitization services",
        "optical character recognition services",
        "searchable digital data",
        "data conversion services",
    ],

    alternates: {
        canonical: "https://www.computyne.com/image-data-entry-services",
    },
};


export default function imageDataEntryServices() {

    return (
        <>
            <JsonLd
                id="image-data-entry-services-schema"
                schema={imageDataEntryServicesSchema}
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
                            <Aboutus slug={"image-data-entry-services"} type={1}/>
                            <Subservices/>
                            <Casestudy text="How Our Image Data Entry Services Solved Complex Data Challenges"/>
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
