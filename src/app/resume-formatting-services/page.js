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
import {resumeCvFormattingServicesSchema} from "@/libs/schema/services/resumeCvFormattingServicesSchema";
import JsonLd from "@/components/seo/JsonLd";
import SubFooter from "@/components/layout/footer/subFooter";
import Testimonials from "@/components/layout/common/Testimonials";


export const metadata = {
    metadataBase: new URL("https://www.computyne.com"),

    title: "Resume Formatting Services | Professional CV Formatting | Computyne",
    description:
        "Professional resume formatting services by Computyne to structure resumes and CVs for clarity, consistency, and ATS compatibility.",

    keywords: [
        "resume formatting services",
        "cv formatting services",
        "professional resume formatting",
        "ats compatible resume",
        "resume layout services",
        "cv standardization",
        "document formatting services",
    ],

    alternates: {
        canonical: "https://www.computyne.com/resume-formatting-services",
    },
};


export default function resumeFormattingServices() {
    return (
        <>
            <JsonLd
                id="resume-cv-formatting-services-schema"
                schema={resumeCvFormattingServicesSchema}
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
                            <Aboutus slug={"resume-formatting-services"} type={1}/>
                            <Subservices/>
                            <Casestudy text="Proven Results from Our Resume Services"/>
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
