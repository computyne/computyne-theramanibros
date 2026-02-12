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
import Casestudy from "@/components/sections/subservice/Casestudy";
import JsonLd from "@/components/seo/JsonLd";
import {multimodalAnnotationServicesSchema} from "@/libs/schema/services/multimodalAnnotationServicesSchema";
import SubFooter from "@/components/layout/footer/subFooter";
import Testimonials from "@/components/layout/common/Testimonials";
import {eCommerceIndustrySchema} from "@/libs/schema/services/eCommerceIndustrySchema";
export const metadata = {
    metadataBase: new URL("https://www.computyne.com"),

    title: "eCommerce BPO Services & Back Office Outsourcing | Computyne",
    description:
        "Scale your online business with Computyne’s eCommerce BPO services. We provide expert catalog management, order processing, inventory support, and multi-channel customer service to optimize your operations.",

    keywords: [
        "eCommerce BPO services",
        "eCommerce outsourcing solutions",
        "eCommerce back office support",
        "Product catalog management services",
        "Order processing outsourcing",
        "Inventory management services",
        "Marketplace management services",
        "eCommerce customer support outsourcing",
        "SKU enrichment services",
        "Online retail process outsourcing",
    ],

    alternates: {
        canonical: "https://www.computyne.com/ecommerce",
    },
};
export default function ecommerce() {

    return (
        <>
            <JsonLd
                id="eCommerce-industry-schema"
                schema={eCommerceIndustrySchema}
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
                            <Aboutus slug={"ecommerce"} type={1}/>
                            <Subservices/>
                            <Whychooseus/>
                            <Casestudy text="Results-Driven eCommerce BPO Case Studies"/>
                            <Faq type={1}/>
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
