"use client";
import Footer from "@/components/layout/footer/Footer";
import Header from "@/components/layout/header/Header";

import ErrorPrimary from "@/components/sections/error/ErrorPrimary";
import BackToTop from "@/components/shared/others/BackToTop";
import HeaderSpace from "@/components/shared/others/HeaderSpace";
import ClientWrapper from "@/components/shared/wrappers/ClientWrapper";
import SubFooter from "@/components/layout/footer/subFooter";
import HeroInnerMod from "@/components/sections/hero/HeroInnerMod";

export default function Error() {
    return (
        <div>
            <BackToTop/>
            <Header/>
            <Header isStickyHeader={true}/>
            <div id="smooth-wrapper">
                <div id="smooth-content">
                    <main>
                        <HeaderSpace/>
                        <HeroInnerMod title={"Error 404"} text={"Error 404"}/>
                        <ErrorPrimary/>
                        <SubFooter/>
                    </main>
                    <Footer/>
                </div>
            </div>
            <ClientWrapper/>
        </div>
    );
}
