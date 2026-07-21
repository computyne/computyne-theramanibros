import Footer from "@/components/layout/footer/Footer";
import Header from "@/components/layout/header/Header";
import BackToTop from "@/components/shared/others/BackToTop";
import ClientWrapper from "@/components/shared/wrappers/ClientWrapper";
import Aboutus from "@/components/sections/subservice/Aboutus";
import Subservices from "@/components/sections/subservice/Subservices";
import HeroBanner from "@/components/sections/subservice/HeroBanner";
import CounterHireResource from "@/components/sections/subservice/CounterHireResource";
import Whychooseus from "@/components/sections/subservice/Whychooseus";
import Faq from "@/components/sections/subservice/Faq";
import Industries from "@/components/sections/subservice/Industries";
import Casestudy from "@/components/sections/subservice/Casestudy";
import JsonLd from "@/components/seo/JsonLd";
import {realEstatePropertyListingServicesSchema} from "@/libs/schema/services/realEstatePropertyListingServicesSchema";
import SubFooter from "@/components/layout/footer/subFooter";
import Testimonials from "@/components/layout/common/Testimonials";
import PricingPlan from "@/components/pricing-plan/PricingPlan";
import Process from "@/components/sections/how-work/Process";
import RealEstatePropertyListingCoverage from "@/components/sections/subservice/RealEstatePropertyListingCoverage";

export const metadata = {
    metadataBase: new URL("https://www.computyne.com"),

    title: "Real Estate Property Listing Data Entry Services | MLS, IDX, Zillow, Rightmove and Portal Listing Management | Computyne",
    description:
        "Outsourced real estate property listing data entry from India. MLS data entry, IDX compliance, Zillow and Rightmove listing management, SEO-optimised descriptions, and CRM population. 99% accuracy. ISO 27001. Free pilot.",

    keywords: [
        "property listing data entry services",
        "MLS data entry services",
        "real estate listing data entry",
        "IDX data entry services",
        "Zillow listing data entry",
        "Rightmove listing management",
        "MLS listing management",
        "outsource property listing data entry",
        "real estate portal data entry",
        "MLS compliance data entry",
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

                            <HeroBanner dataSource="service"/>
                            <CounterHireResource dataSource="service"/>
                            <Aboutus slug={"real-estate-property-listing-services"} type={1}/>
                            <Subservices/>
                            <RealEstatePropertyListingCoverage/>
                            <Casestudy text="Proven Real Estate Listing Results"/>
                            <Whychooseus/>
                            <PricingPlan/>
                            <Process/>
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
