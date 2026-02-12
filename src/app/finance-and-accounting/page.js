import Footer from "@/components/layout/footer/Footer";
import Header from "@/components/layout/header/Header";
import BackToTop from "@/components/shared/others/BackToTop";
import ClientWrapper from "@/components/shared/wrappers/ClientWrapper";
import Aboutus from "@/components/sections/subservice/Aboutus";
import Subservices from "@/components/sections/subservice/Subservices";
import Banner from "@/components/sections/subservice/Banner";
import Counter from "@/components/sections/subservice/Counter";
import Whychooseus from "@/components/sections/subservice/Whychooseus";
import Faq from "@/components/sections/subservice/Faq";
import Casestudy from "@/components/sections/subservice/Casestudy";
import JsonLd from "@/components/seo/JsonLd";
import {multimodalAnnotationServicesSchema} from "@/libs/schema/services/multimodalAnnotationServicesSchema";
import SubFooter from "@/components/layout/footer/subFooter";
import Testimonials from "@/components/layout/common/Testimonials";
import {financeAndAccountingIndustrySchema} from "@/libs/schema/services/financeAndAccountingIndustrySchema";
export const metadata = {
    metadataBase: new URL("https://www.computyne.com"),

    title: "Finance and Accounting Outsourcing Services (F&A) | Computyne",
    description:
        "Streamline your financial operations with Computyne’s finance and accounting outsourcing services. We offer accounts payable, receivable, payroll, and compliance-ready reporting for sustainable cost efficiency.",

    keywords: [
        "Finance and accounting outsourcing services",
        "F&A outsourcing company",
        "Accounts payable outsourcing services",
        "Accounts receivable outsourcing services",
        "General ledger accounting outsourcing",
        "Payroll processing services",
        "Financial reporting outsourcing",
        "Outsourced accounting for businesses",
        "Compliance-ready accounting services",
        "Financial lifecycle management outsourcing",
    ],

    alternates: {
        canonical: "https://www.computyne.com/finance-and-accounting",
    },
};
export default function financeAndAccounting() {

    return (
        <>
            <JsonLd
                id="finance-accounting-industry-schema"
                schema={financeAndAccountingIndustrySchema}
            />
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
                            <Aboutus slug={"finance-and-accounting"} type={1}/>
                            <Subservices/>
                            <Whychooseus/>
                            <Casestudy text="Measurable Business Impact Through Finance and Accounting Outsourcing"/>
                            <Faq type={1}/>
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
