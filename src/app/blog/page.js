import Footer from "@/components/layout/footer/Footer";
import Header from "@/components/layout/header/Header";
import BlogsGridPrimary from "@/components/sections/blogs/BlogsGridPrimary";
import BackToTop from "@/components/shared/others/BackToTop";
import ClientWrapper from "@/components/shared/wrappers/ClientWrapper";
import HeroInnerMod from "@/components/sections/hero/HeroInnerMod";
import SubFooter from "@/components/layout/footer/subFooter";


export const metadata = {
    metadataBase: new URL("https://www.computyne.com"),

    title: "BPO & Data Solutions Blog: Insights & Trends | Computyne",
    description:
        "Stay ahead with Computyne’s blog. Explore expert insights on BPO trends, data management, AI training, and back-office outsourcing to optimize your business operations.",

    keywords: [
        "BPO industry insights",
        "Data management trends",
        "Outsourcing best practices",
        "AI training data blog",
        "Back-office automation tips",
        "Business process outsourcing trends",
        "Healthcare BPO insights",
        "Real estate data solutions blog",
        "Logistics BPO updates",
        "Digital transformation for BPO",
    ],

    alternates: {
        canonical: "https://www.computyne.com/blog",
    },
};

export default function BlogRightSidebar() {
    return (
        <>
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
        </>
    );
}
