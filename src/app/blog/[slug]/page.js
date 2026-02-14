import Footer from "@/components/layout/footer/Footer";
import Header from "@/components/layout/header/Header";
import BlogDetailsMain from "@/components/layout/main/BlogDetailsMain";
import BackToTop from "@/components/shared/others/BackToTop";
import HeaderSpace from "@/components/shared/others/HeaderSpace";
import ClientWrapper from "@/components/shared/wrappers/ClientWrapper";
import getBlogs from "@/libs/getBlogs";
import { notFound } from "next/navigation";
import SubFooter from "@/components/layout/footer/subFooter";
import getSchemaByPathNdSlug from "@/libs/getSchemaByPathNdSlug";
import JsonLd from "@/components/seo/JsonLd";

const items = getBlogs();

export async function generateMetadata({ params }) {
  const { slug } = await params;

  const currentItem = items.find((item) => item.slug === slug);

  if (!currentItem) return {};

  return {
    title: currentItem.meta.metaTitle,
    description: currentItem.meta.metaDescription,
    keywords: currentItem.meta.keywords,
    alternates: {
      canonical: currentItem.meta.canonical,
    },
  };
}


export default async function BlogDetails({ params }) {
    const { slug } = await params;

    const currentItem = items.find((item) => item.slug === slug);

      const schema = await getSchemaByPathNdSlug(
        "blog-schema",
        slug
    );


    if (!currentItem) {
        notFound();
    }

   return (
       <>
           <JsonLd
               id={`${slug}-schema`}
               schema={schema}
           />
           <div>
               <BackToTop />
               <Header headerType={5} />
               <Header headerType={5} isStickyHeader={true} />
               {/* <div id="smooth-wrapper">
                <div id="smooth-content">
                    <main>
                        <div className="top-space-15"></div>
                        <BlogDetailsMain currentItem={currentItem}/>
                        <SubFooter/>
                    </main>
                    <Footer/>
                </div>
            </div> */}
               <main>
                   <div className="top-space-15"></div>
                   <BlogDetailsMain currentItem={currentItem} />
                   <SubFooter />
               </main>
               <Footer />

               <ClientWrapper />
           </div>
       </>
    );
}

// export async function generateStaticParams() {
// 	return items?.map(({ id }) => ({ id: id.toString() }));
// }
export async function generateStaticParams() {
    return items.map(({ slug }) => ({
        slug,
    }));
}
