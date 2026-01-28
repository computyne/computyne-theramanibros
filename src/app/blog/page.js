import Footer from "@/components/layout/footer/Footer";
import Header from "@/components/layout/header/Header";
import BlogsGridPrimary from "@/components/sections/blogs/BlogsGridPrimary";
import BackToTop from "@/components/shared/others/BackToTop";
import ClientWrapper from "@/components/shared/wrappers/ClientWrapper";
import HeroInnerMod from "@/components/sections/hero/HeroInnerMod";
import SubFooter from "@/components/layout/footer/subFooter";

export default function BlogRightSidebar() {
    return (
        <div>
            <BackToTop/>
            <Header headerType={5}/>
            <Header headerType={5} isStickyHeader={true}/>
            <div id="smooth-wrapper">
                <div id="smooth-content">
                    <main>
                        <div className="top-space-15"></div>
                        <HeroInnerMod title={"Our Blog"}
                                      text={"Our business process services - driven by data, technology, and people - help" +
                                          " clients save time, reduce costs, and improve operational efficiency worldwide."}/>
                        <BlogsGridPrimary/>
                        <SubFooter/>
                    </main>
                    <Footer/>
                </div>
            </div>
            <ClientWrapper/>
        </div>
    );
}
