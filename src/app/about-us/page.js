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
import Blogs from "@/components/sections/home-page/Blogs";

export const metadata = {
    metadataBase: new URL("https://www.computyne.com"),

    title: "About Computyne | Global BPO & Data Outsourcing Company",
    description:
        "Discover Computyne, a leader in global business process services. With 15+ years of experience, we provide scalable data processing, BPO, and AI-powered solutions to help MNCs and enterprises worldwide improve efficiency.",

    keywords: [
        "About Computyne",
        "Global BPO company",
        "Business process outsourcing firm",
        "Data processing experts",
        "Back-office outsourcing partner",
        "ISO 27001 certified BPO",
        "Scalable data solutions",
        "Enterprise outsourcing services",
        "BPO success and leadership",
        "Global delivery model BPO",
    ],

    alternates: {
        canonical: "https://www.computyne.com/about-us",
    },
};
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
                        <Blogs/>
                        <SubFooter/>
                    </main>
                    <Footer/>
                </div>
            </div>

            <ClientWrapper/>
        </div>
    );
}
