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
import {realEstatePropertyListingServicesSchema} from "@/libs/schema/services/realEstatePropertyListingServicesSchema";
import SubFooter from "@/components/layout/footer/subFooter";
import Testimonials from "@/components/layout/common/Testimonials";

export const metadata = {
    metadataBase: new URL("https://www.computyne.com"),

    title: "Real Estate Property Listing Services | Listing Data Management | Computyne",
    description:
        "Professional real estate property listing services by Computyne to create, update, and manage accurate property listings across platforms and databases.",

    keywords: [
        "real estate property listing services",
        "property listing data management",
        "real estate listing management",
        "property database management",
        "MLS listing services",
        "property listing data entry",
        "real estate data services",
    ],

    alternates: {
        canonical: "https://www.computyne.com/real-estate-property-listing-services",
    },
};


export default function realEstatePropertyListingServices() {

    return (
        <>
            <JsonLd
                id="real-estate-property-listing-services-schema"
                schema={realEstatePropertyListingServicesSchema}
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
                            <Aboutus slug={"real-estate-property-listing-services"} type={1}/>
                            <Subservices/>
                            <Casestudy text="Property Listing Data Entry Case Studies Across Real Estate Segments"/>
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
