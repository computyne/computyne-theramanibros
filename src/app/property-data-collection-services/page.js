import Footer from "@/components/layout/footer/Footer";
import Header from "@/components/layout/header/Header";
import BackToTop from "@/components/shared/others/BackToTop";
import ClientWrapper from "@/components/shared/wrappers/ClientWrapper";
import Aboutus from "@/components/sections/subservice/Aboutus";
import Subservices from "@/components/sections/subservice/Subservices";
import HeroBanner from "@/components/sections/subservice/HeroBanner";
import Whychooseus from "@/components/sections/subservice/Whychooseus";
import Faq from "@/components/sections/subservice/Faq";
import Industries from "@/components/sections/subservice/Industries";
import Casestudy from "@/components/sections/subservice/Casestudy";
import {propertyDataCollectionServicesSchema} from "@/libs/schema/services/propertyDataCollectionServicesSchema";
import JsonLd from "@/components/seo/JsonLd";
import SubFooter from "@/components/layout/footer/subFooter";
import Testimonials from "@/components/layout/common/Testimonials";
import CounterHireResource from "@/components/sections/subservice/CounterHireResource";
import PricingPlan from "@/components/pricing-plan/PricingPlan";
import Process from "@/components/sections/how-work/Process";
import PropertyDataSourcesCoverage from "@/components/sections/subservice/PropertyDataSourcesCoverage";


export const metadata = {
    metadataBase: new URL("https://www.computyne.com"),

    title: "Property Data Collection Services | MLS, Ownership, Valuation and Real Estate Market Data | Computyne",
    description:
        "Outsourced property data collection from India. MLS listing data, ownership and title records, valuation and rental data, Land Registry, Zillow, Rightmove and CoStar. 99%+ accuracy. ISO 27001. Free pilot.",

    keywords: [
        "property data collection services",
        "real estate data collection services",
        "MLS data collection",
        "property listing data extraction",
        "real estate market data collection",
        "commercial real estate data collection",
        "property ownership data collection",
        "outsource real estate data collection",
        "Rightmove data scraping",
        "Zillow data extraction",
        "Land Registry data collection",
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
                            
                            <HeroBanner dataSource="service"/>
                            <CounterHireResource dataSource="service"/>
                            <Aboutus slug={"property-data-collection-services"} type={1}/>
                            <Subservices/>
                            <PropertyDataSourcesCoverage/>
                            <Casestudy text="Property Data Collection Results"/>
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
