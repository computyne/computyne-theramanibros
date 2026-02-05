import Footer from "@/components/layout/footer/Footer";
import Header from "@/components/layout/header/Header";
import BlogDetailsMain from "@/components/layout/main/BlogDetailsMain";
import BackToTop from "@/components/shared/others/BackToTop";
import HeaderSpace from "@/components/shared/others/HeaderSpace";
import ClientWrapper from "@/components/shared/wrappers/ClientWrapper";
import getBlogs from "@/libs/getBlogs";
import {notFound} from "next/navigation";
import SubFooter from "@/components/layout/footer/subFooter";

const items = getBlogs();

export default async function BlogDetails({params}) {
    const {slug} = await params;

    const currentItem = items.find((item) => item.slug === slug);

    if (!currentItem) {
        notFound();
    }

    return (
        <div>
            <BackToTop/>
            <Header headerType={5}/>
            <Header headerType={5} isStickyHeader={true}/>
            <div id="smooth-wrapper">
                <div id="smooth-content">
                    <main>
                        <div className="top-space-15"></div>
                        <BlogDetailsMain currentItem={currentItem}/>
                        <SubFooter/>
                    </main>
                    <Footer/>
                </div>
            </div>
            <ClientWrapper/>
        </div>
    );
}

// export async function generateStaticParams() {
// 	return items?.map(({ id }) => ({ id: id.toString() }));
// }
export async function generateStaticParams() {
    return items.map(({slug}) => ({
        slug,
    }));
}
