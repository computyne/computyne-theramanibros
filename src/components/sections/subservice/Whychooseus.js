"use client";
import {Autoplay, Navigation, Pagination} from "swiper/modules";
import {Swiper, SwiperSlide} from "swiper/react";
import WhychooseusCard from "./WhychooseusCard";
import {usePathname} from "next/navigation";
import getWhyChooseUsData from "@/libs/service/getWhyChooseUsData";

const Whychooseus = () => {
    // const showbleWhychooseus = getWhychooseus()?.slice(0, 3);
    // const whychooseusData = [...showbleWhychooseus, ...showbleWhychooseus];

    const pathname = usePathname();
    const slug = pathname.split("/").filter(Boolean).pop();

    const whyChooseUs = getWhyChooseUsData(slug);

    const getWhychooseusData =
        !whyChooseUs || Object.keys(whyChooseUs).length === 0
            ? getWhyChooseUsData("data-extraction-services")?.data.slice(0, 3)
            : whyChooseUs?.data.slice(0, 3);

    const whychooseusData = [...getWhychooseusData, ...getWhychooseusData];

    const getWhychooseusTitle =
        !whyChooseUs || Object.keys(whyChooseUs).length === 0
            ? getWhyChooseUsData("data-extraction-services")?.h2
            : whyChooseUs?.h2;

    return (
        <section className="tj-testimonial-section h7-testimonial section-gap section-gap-x">
            <div className="container">
                <div className="row justify-content-between">
                    <div className="col-12">
                        <div className="sec-heading style-2 style-7 sec-heading-centered-mod">
							<span className="sub-title wow fadeInUp" data-wow-delay=".3s">
								<i className="tji-box"></i> Why Choose Us
							</span>
                            <h2 className="sec-title text-anim">
                                {getWhychooseusTitle}
                            </h2>
                        </div>
                    </div>
                </div>

                <div className="row">
                    <div className="col-12">
                        <div
                            className="testimonial-wrapper  h7-testimonial-wrapper  wow fadeInRightBig"
                            style={{marginInline: 'auto'}}
                            data-wow-delay=".3s"
                        >
                            <Swiper
                                spaceBetween={15}
                                slidesPerView={1.2}
                                loop={true}
                                speed={1500}
                                centeredSlides={false}
                                pagination={{
                                    el: ".swiper-pagination-area",
                                    clickable: true,
                                }}
                                navigation={{nextEl: ".slider-next", prevEl: ".slider-prev"}}
                                autoplay={{
                                    delay: 3000,
                                }}
                                breakpoints={{
                                    576: {
                                        slidesPerView: 1.3,
                                        spaceBetween: 20,
                                    },
                                    768: {
                                        slidesPerView: 1.4,
                                        spaceBetween: 20,
                                    },
                                    992: {
                                        slidesPerView: 3,
                                        spaceBetween: 28,
                                        centeredSlides: true,
                                    },
                                    1200: {
                                        slidesPerView: 3,
                                        spaceBetween: 28,
                                        centeredSlides: true,
                                    },
                                }}
                                modules={[Pagination, Autoplay, Navigation]}
                                className="swiper-container testimonial-slider"
                            >
                                {whychooseusData?.length
                                    ? whychooseusData?.map((whychooseus, idx) => (
                                        <SwiperSlide key={idx}>
                                            <WhychooseusCard whychooseus={whychooseus}/>
                                        </SwiperSlide>
                                    ))
                                    : ""}
                                <div className="swiper-pagination-area"></div>
                            </Swiper>

                            <div className="slider-prev">
								<span className="anim-icon">
									<i className="tji-arrow-left"></i>
									<i className="tji-arrow-left"></i>
								</span>
                            </div>
                            <div className="slider-next">
								<span className="anim-icon">
									<i className="tji-arrow-right"></i>
									<i className="tji-arrow-right"></i>
								</span>
                            </div>
                            <div className="bg-shape-3">
                                <img src="/images/shape/h7-testimonial-shape-blur-mod.svg" alt=""/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="bg-shape-1">
                <img src="/images/shape/pattern-2.svg" alt=""/>
            </div>
            <div className="bg-shape-2">
                <img src="/images/shape/pattern-3.svg" alt=""/>
            </div>
        </section>
    );
};

export default Whychooseus;
