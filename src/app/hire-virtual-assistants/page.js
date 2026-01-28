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
import {virtualAssistantServicesSchema} from "@/libs/schema/services/virtualAssistantServicesSchema";
import SubFooter from "@/components/layout/footer/subFooter";
import Testimonials from "@/components/layout/common/Testimonials";

export const metadata = {
    metadataBase: new URL("https://www.computyne.com"),

    title: "Hire Virtual Assistants | Dedicated Offshore Virtual Assistants | Computyne",
    description:
        "Hire professional virtual assistants by Computyne to manage administrative, data, and operational tasks efficiently, providing dedicated offshore support.",

    keywords: [
        "hire virtual assistants",
        "dedicated offshore virtual assistants",
        "remote administrative support",
        "virtual assistant services",
        "outsourced VA team",
        "business process support",
        "remote operational assistants",
    ],

    alternates: {
        canonical: "https://www.computyne.com/hire-virtual-assistants",
    },
};


export default function hireVirtualAssistants() {

    return (
        <>
            <JsonLd
                id="virtual-assistant-services-schema"
                schema={virtualAssistantServicesSchema}
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
                            <Aboutus type={1}/>
                            <Subservices/>
                            <Casestudy text="Client Success Stories with Dedicated Virtual Assistants"/>
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
