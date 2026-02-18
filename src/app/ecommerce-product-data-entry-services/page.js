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
import SubFooter from "@/components/layout/footer/subFooter";
import Testimonials from "@/components/layout/common/Testimonials";
import JsonLd from "@/components/seo/JsonLd";
import {ecommerceProductdataentryServicesSchema} from "@/libs/schema/services/ecommerceProductdataentryServicesSchema";
export const metadata = {
    metadataBase: new URL("https://www.computyne.com"),

    title: "eCommerce Product Data Entry Services | Accurate Catalog Management",
    description:
        "Professional eCommerce product data entry services for accurate listings, SKU management, and bulk catalog updates. Improve conversions with clean, optimized product data.",

    keywords: [
        "ecommerce product data entry services",
        "product data entry for ecommerce",
        "ecommerce catalog data entry",
        "online product listing services",
        "bulk product upload services",
        "ecommerce catalog management services",
        "product listing data entry",
        "ecommerce data entry outsourcing",
        "product data management services",
        "ecommerce product upload services",
    ],

    alternates: {
        canonical: "https://www.computyne.com/ecommerce-product-data-entry-services",
    },
};
export default function ecommerceProductdataentryServices() {

    return (
        <>
            <JsonLd
                id="ecommerce-product-data-entry-services-schema"
                schema={ecommerceProductdataentryServicesSchema}

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
                            <Aboutus slug={"ecommerce-product-data-entry-services"} type={1}/>
                            <Subservices/>
                            <Casestudy text="How We Solve Complex Data Extraction Challenges"/>
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