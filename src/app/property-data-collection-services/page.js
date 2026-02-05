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
import {propertyDataCollectionServicesSchema} from "@/libs/schema/services/propertyDataCollectionServicesSchema";
import JsonLd from "@/components/seo/JsonLd";
import SubFooter from "@/components/layout/footer/subFooter";
import Testimonials from "@/components/layout/common/Testimonials";


export const metadata = {
    metadataBase: new URL("https://www.computyne.com"),

    title: "Property Data Collection Services | Real Estate Data Gathering | Computyne",
    description:
        "Structured property data collection services by Computyne to gather, verify, and maintain accurate real estate and property datasets for reliable business decisions.",

    keywords: [
        "property data collection services",
        "real estate data gathering",
        "property information collection",
        "real estate data services",
        "property data verification",
        "real estate data management",
        "property market data",
    ],

    alternates: {
        canonical: "https://www.computyne.com/property-data-collection-services",
    },
};


export default function propertyDataCollectionServices() {

    return (
        <>
            <JsonLd
                id="property-data-collection-services-schema"
                schema={propertyDataCollectionServicesSchema}
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
                            <Aboutus slug={"property-data-collection-services"} type={1}/>
                            <Subservices/>
                            <Casestudy text="Property Data Collection Success Stories Across Industries"/>
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
