import Header from "@/components/layout/header/Header";
import BackToTop from "@/components/shared/others/BackToTop";
import ClientWrapper from "@/components/shared/wrappers/ClientWrapper";
import Hero from "@/components/sections/contact-page/Hero";
import ContactCard from "@/components/sections/contact-page/ContactCard";
import ContactLocation from "@/components/sections/contact-page/ContactLocation";
import Footer from "@/components/layout/footer/Footer";
import SubFooter from "@/components/layout/footer/subFooter";

export default function Contact() {
    return (
        <div>
            <BackToTop/>
            <Header headerType={5}/>
            <Header headerType={5} isStickyHeader={true}/>
            <div id="smooth-wrapper">
                <div id="smooth-content">
                    <main>
                        <div className="top-space-15"></div>
                        <Hero title={"Get In Touch"}
                              text={"Computyne is a specialized organization dedicated to delivering world-class business solutions with a focus on quality, efficiency, and innovation."}/>
                        <ContactCard/>
                        <ContactLocation/>
                        <SubFooter/>
                    </main>
                    <Footer/>
                </div>
            </div>
            <ClientWrapper/>
        </div>
    );
}
