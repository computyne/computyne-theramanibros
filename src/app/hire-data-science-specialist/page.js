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
import {hireDataScienceSpecialistsSchema} from "@/libs/schema/services/hireDataScienceSpecialistsSchema";
import SubFooter from "@/components/layout/footer/subFooter";
import Testimonials from "@/components/layout/common/Testimonials";

export const metadata = {
    metadataBase: new URL("https://www.computyne.com"),

    title: "Hire Data Science Specialist | Dedicated Data Scientists | Computyne",
    description:
        "Hire dedicated data science specialists by Computyne for analytics, machine learning, and advanced data modeling to drive smarter business decisions.",

    keywords: [
        "hire data science specialist",
        "dedicated data scientists",
        "data analytics team",
        "machine learning services",
        "advanced data modeling",
        "business intelligence specialists",
        "remote data science professionals",
    ],

    alternates: {
        canonical: "https://www.computyne.com/hire-data-science-specialist",
    },
};

export default function hireDataScienceSpecialists() {

    return (
        <>
            <JsonLd
                id="hire-data-science-specialists-schema"
                schema={hireDataScienceSpecialistsSchema}
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
