"use client";
import React from "react";
import ButtonPrimary from "./ButtonPrimary";
import getServiceData from "@/libs/service/getServiceData";
import {usePathname} from "next/navigation";

// const Banner = ({ title, text, bannerimage, isShowButton = false, buttonLabel, buttonLink }) => {
const Banner = () => {
    const pathname = usePathname();
    const slug = pathname.split("/").filter(Boolean).pop();
    const bannner = getServiceData(slug);


    const bannerData =
        !bannner || Object.keys(bannner).length === 0
            ? getServiceData("data-extraction-services")
            : bannner;
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
                    <div className="col-lg-12">
                        <div className="tj-page-header-content text-center">
                            <h1 className={`tj-page-title`}>{bannerData.banner.h1}</h1>
                            <div className="tagline mt-3 tj-page-header-tagline">
                                {bannerData.banner.tagline}
                            </div>
                            <div className="btn-area wow fadeInUp mt-4" data-wow-delay=".8s">
                                <ButtonPrimary text={bannerData.banner.cta} url={"/contact-us"}/>
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
export default Banner;
