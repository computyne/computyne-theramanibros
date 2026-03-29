"use client";
import React from "react";
import ButtonPrimary from "./ButtonPrimary";
import getServiceData from "@/libs/service/getServiceData";
import {usePathname} from "next/navigation";
import getHireServiceData from "@/libs/service/getHireServiceData";

const HeroBanner = () => {
    const pathname = usePathname();
    const slug = pathname.split("/").filter(Boolean).pop();
    const banner = getHireServiceData(slug);


    const bannerData =
        !banner || Object.keys(banner).length === 0
            ? getServiceData("data-extraction-services")
            : banner;
    return (
        <section
            className="tj-page-header-mod section-gap-x"
            // style={{ backgroundImage: `url('${bannerData.banner.image}')` }}
            style={{
                backgroundImage: `url('${bannerData?.banner?.image?.trim() || "/images/service/banner/data-solution-banner.webp"
                }')`,
            }}
        >
            <div className="container">
                <div className="row">
                    <div className="col-lg-6">
                        <div className="tj-page-header-content">
                            <h1 className={`tj-page-title`}>{bannerData.banner.h1} <span className="text-orange">{bannerData.banner.h1_primary}</span></h1>
                            <div className="tagline-hireresouce mt-3 tj-page-header-tagline">
                                {bannerData.banner.tagline}
                            </div>
                            <div className="btn-area wow fadeInUp mt-4 d-flex gap-3 pt-5" data-wow-delay=".8s">
                                <ButtonPrimary text={bannerData.banner.primaryCta} url={"/contact-us"}/>
                                <ButtonPrimary text={bannerData.banner.secondaryCta} url={"/contact-us"} className="btn-secondary"/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div
                className="page-header-overlay"
                style={{backgroundImage: `linear-gradient(90deg, rgb(12, 29, 54) 2%, rgba(12, 29, 54, 0.65) 25%, rgba(12, 29, 54, 0.3) 70%, rgb(12, 29, 54) 100%)`}}
            ></div>
        </section>
    );
};
export default HeroBanner;
