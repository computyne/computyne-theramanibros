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
import {dataMiningServicesSchema} from "@/libs/schema/services/dataMiningServicesSchema";
import JsonLd from "@/components/seo/JsonLd";
import SubFooter from "@/components/layout/footer/subFooter";
import Testimonials from "@/components/layout/common/Testimonials";

export const metadata = {
    metadataBase: new URL("https://www.computyne.com"),

    title: "Data Mining Services | Reliable Web Data Mining Company | Computyne",
    description:
        "Tailored data mining services by Computyne to uncover insights from large datasets, detect trends, and support business performance evaluation and strategic planning.",

    keywords: [
        "data mining services",
        "web data mining company",
        "big data mining",
        "data analysis services",
        "trend analysis",
        "business intelligence services",
        "data insights solutions",
    ],

    alternates: {
        canonical: "https://www.computyne.com/data-mining-services",
    },
};


export default function dataMiningServices() {

    return (
        <>
            <JsonLd
                id="data-mining-services-schema"
                schema={dataMiningServicesSchema}
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
                            <Aboutus slug={"data-mining-services"} type={1}/>
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
