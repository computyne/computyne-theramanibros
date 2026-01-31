import Header from "@/components/layout/header/Header";
import BackToTop from "@/components/shared/others/BackToTop";
import ClientWrapper from "@/components/shared/wrappers/ClientWrapper";
import Hero from "@/components/sections/about-page/Hero";
import AboutCard from "@/components/sections/about-page/AboutCard";
import Features from "@/components/sections/about-page/Features";
import Funfact from "@/components/sections/about-page/Funfact";
import Faq from "@/components/sections/about-page/Faq";
import Team from "@/components/sections/about-page/Team";
import Footer from "@/components/layout/footer/Footer";
import SubFooter from "@/components/layout/footer/subFooter";
import HowWeWork from "@/components/sections/about-page/HowWeWork";

export default function About() {
    return (
        <div>
            <BackToTop/>
            <Header headerType={5}/>
            <Header headerType={5} isStickyHeader={true}/>
            <div id="smooth-wrapper">
                <div id="smooth-content">
                    <main>
                        <div className="top-space-15"></div>
                        <Hero title={"About Us"}
                              cta={"Ready to Scale? Contact Our Experts"}
                              text={"Empowering Your Business Growth Through Precise Data Solutions, Innovative Outsourcing, and Scalable Back-Office Excellence."}/>
                        <AboutCard type={1}/>
                        <Features type={2}/>
                        <Funfact/>
                        <Team type={3}/>
                        <HowWeWork/>
                        <SubFooter/>
                    </main>
                    <Footer/>
                </div>
            </div>

            <ClientWrapper/>
        </div>
    );
}
