import Header from "@/components/layout/header/Header";
import BackToTop from "@/components/shared/others/BackToTop";
import ClientWrapper from "@/components/shared/wrappers/ClientWrapper";
import Industries from "@/components/sections/subservice/Industries";
import Banner from "@/components/sections/subservice/Banner";
import Counter from "@/components/sections/subservice/Counter";
import Aboutus from "@/components/sections/subservice/Aboutus";
import Subservices from "@/components/sections/subservice/Subservices";
import Casestudy from "@/components/sections/subservice/Casestudy";
import Whychooseus from "@/components/sections/subservice/Whychooseus";
import Faq from "@/components/sections/subservice/Faq";
import Footer from "@/components/layout/footer/Footer";
import SubFooter from "@/components/layout/footer/subFooter";
import Testimonials from "@/components/layout/common/Testimonials";

export default function industriesPage() {
    return (
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
                        <Aboutus slug={"industries"} type={1}/>
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
    );
}
