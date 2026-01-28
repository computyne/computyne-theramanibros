import Header from "@/components/layout/header/Header";
import BackToTop from "@/components/shared/others/BackToTop";
import ClientWrapper from "@/components/shared/wrappers/ClientWrapper";
import Hero from "@/components/sections/home-page/Hero";
import Services from "@/components/sections/home-page/Services";
import About from "@/components/sections/home-page/About";
import Portfolios from "@/components/sections/home-page/Portfolios";
import Process from "@/components/sections/home-page/Process";
import Industries from "@/components/sections/home-page/Industries";
import Testimonials from "@/components/layout/common/Testimonials";
import Blogs from "@/components/sections/home-page/Blogs";
import Footer from "@/components/layout/footer/Footer";
import SubFooter from "@/components/layout/footer/subFooter";


/* ================================
   SEO META DATA (AUTO <head>)
================================ */
export const metadata = {
    metadataBase: new URL("https://www.computyne.com"),

    title: "Computyne: Global Outsourcing & Data Services Company",
    description:
        "Future-ready growth with Computyne. We deliver next-gen data services that enable smarter business decisions, boost productivity, and improve operational efficiency worldwide.",

    keywords: [
        "global outsourcing company",
        "data services provider",
        "next gen data services",
        "business process outsourcing",
        "data management solutions",
        "operational efficiency",
        "productivity improvement",
    ],

    alternates: {
        canonical: "https://www.computyne.com/",
    },
};


/* ================================
   PAGE COMPONENT
================================ */

export default function Home() {
    return (
        <div>
            <BackToTop/>
            <Header headerType={5}/>
            <Header headerType={5} isStickyHeader={true}/>
            <div id="smooth-wrapper">
                <div id="smooth-content">
                    <main>
                        <div className="top-space-15"></div>
                        <Hero/>
                        <Services/>
                        <About/>
                        <Portfolios/>
                        <Process/>
                        <Industries/>
                        <Testimonials/>
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
