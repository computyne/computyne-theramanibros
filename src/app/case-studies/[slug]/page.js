import Footer from "@/components/layout/footer/Footer";
import Header from "@/components/layout/header/Header";
import CasestudyDetailsMain from "@/components/layout/main/CasestudyDetailsMain";
import BackToTop from "@/components/shared/others/BackToTop";
import HeaderSpace from "@/components/shared/others/HeaderSpace";
import ClientWrapper from "@/components/shared/wrappers/ClientWrapper";
import getCaseStudy from "@/libs/getCaseStudies";
import {notFound} from "next/navigation";
import SubFooter from "@/components/layout/footer/subFooter";
import getSchemaByPathNdSlug from "@/libs/getSchemaByPathNdSlug";
import JsonLd from "@/components/seo/JsonLd";

const items = getCaseStudy();

export async function generateMetadata({ params }) {
  const { slug } = await params;

  const currentItem = items.find((item) => item.slug === slug);

  if (!currentItem) return {};

  return {
    title: currentItem.meta.metaTitle,
    description: currentItem.meta.metaDescription,
    keywords: currentItem.meta.keywords,
    alternates: {
      canonical: `https://www.computyne.com/case-studies/${slug}`,
    },
  };
}


export default async function CaseeStudyDetails({params}) {
    const {slug} = await params;

    const currentItem = items.find((item) => item.slug === slug);

    const schema = await getSchemaByPathNdSlug(
        "casestudy-schema",
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
                <Header />
                <Header isStickyHeader={true} />
                <div id="smooth-wrapper">
                    <div id="smooth-content">
                        <main>
                            <HeaderSpace />
                            <CasestudyDetailsMain currentItem={currentItem} />
                            <SubFooter />
                        </main>
                        <Footer />
                    </div>
                </div>
                <ClientWrapper />
            </div>
        </>
    );
}

export async function generateStaticParams() {
    return items?.map(({id}) => ({id: id.toString()}));
}
