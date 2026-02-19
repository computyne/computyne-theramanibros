"use client";
import getTestimonials from "@/libs/getTestimonials";
import {Autoplay, Navigation} from "swiper/modules";
import {Swiper, SwiperSlide} from "swiper/react";
import TestimonialsCard from "./TestimonialsCard";
import ButtonPrimaryLoading from "@/components/sections/contact-page/ButtonPrimaryLoading";
import {useRef, useState, useTransition} from "react";
import {submitContactForm} from "@/app/actions/contactAction";

const Testimonials = () => {
    const testimonials = getTestimonials()?.slice(0, 3);
    const handleSelect = option => {
    };
    const [isPending, startTransition] = useTransition();
    const [status, setStatus] = useState(null);
    const formRef = useRef(null);

    function handleSubmit(formData) {
        setStatus(null);

        startTransition(async () => {
            const result = await submitContactForm(formData);

            if (result?.success) {
                setStatus("success");
                formRef.current?.reset();
            } else {
                setStatus("error");
            }
        });
    }
    return (
        <section className="tj-contact-section h4-contact-section section-gap section-gap-x">
            <div className="container">
                <div className="row">
                    <div className="col-lg-6">
                        <div
                            className="contact-form contact-form-mod style-3 wow fadeInUp"
                            data-wow-delay=".4s"
                        >
                            <div className="sec-heading style-4">
								<span className="sub-title">
									<i className="tji-box"></i>Get in Touch
								</span>
                                <h2 className="sec-title title-anim">Drop us a Line Here.</h2>
                            </div>
                            <form id="contact-form-3" action={handleSubmit}>
                                <div className="row wow fadeInUp" data-wow-delay=".5s">
                                    <div className="col-sm-6">
                                        <div className="form-input">
                                            <label className="cf-label">Full Name *</label>
                                            <input type="text" name="cfName"/>
                                        </div>
                                    </div>
                                    <div className="col-sm-6">
                                        <div className="form-input">
                                            <label className="cf-label">Email Address *</label>
                                            <input type="email" name="cfEmail"/>
                                        </div>
                                    </div>
                                    <div className="col-sm-6">
                                        <div className="form-input">
                                            <label className="cf-label">Phone number *</label>
                                            <input type="tel" name="cfPhone"/>
                                        </div>
                                    </div>
                                    <div className="col-sm-6">
                                        <div className="form-input">
                                            <label className="cf-label">Subject *</label>
                                            <input type="text" name="cfSubject"/>
                                        </div>
                                    </div>
                                    <div className="col-sm-12">
                                        <div className="form-input message-input">
                                            <label className="cf-label">Message here... *</label>
                                            <textarea name="cfMessage" id="message"></textarea>
                                        </div>
                                    </div>
                                    <div className="submit-btn">
                                        <ButtonPrimaryLoading
                                            type="submit"
                                            text="Submit Now"
                                            loading={isPending}
                                        />
                                    </div>
                                    {status === "success" && (
                                        <p className="form-success">
                                            Thank you! Your message has been sent successfully.
                                        </p>
                                    )}

                                    {status === "error" && (
                                        <p className="form-error">
                                            Something went wrong. Please try again.
                                        </p>
                                    )}
                                </div>
                            </form>
                        </div>
                    </div>
                    <div className="col-lg-6">
                        <div
                            className="testimonial-wrapper-3 h4-testimonial-wrapper  wow fadeInUp"
                            data-wow-delay=".5s"
                        >
                            <h3 className="tes-title">
                                Client Feedback
                            </h3>
                            <Swiper
                                spaceBetween={28}
                                slidesPerView={1}
                                loop={true}
                                speed={1500}
                                autoplay={{
                                    delay: 3000,
                                }}
                                navigation={{nextEl: ".slider-next", prevEl: ".slider-prev"}}
                                modules={[Autoplay, Navigation]}
                                className="testimonial-slider-2 h4-testimonial"
                            >
                                {testimonials?.length
                                    ? testimonials?.map((testimonial, idx) => (
                                        <SwiperSlide key={idx}>
                                            <TestimonialsCard testimonial={testimonial}/>
                                        </SwiperSlide>
                                    ))
                                    : ""}
                                <div className="testimonial-navigation d-flex">
                                    <div className="slider-prev" role="button">
										<span className="anim-icon">
											<i className="tji-arrow-left"></i>
											<i className="tji-arrow-left"></i>
										</span>
                                    </div>
                                    <div className="slider-next" role="button">
										<span className="anim-icon">
											<i className="tji-arrow-right"></i>
											<i className="tji-arrow-right"></i>
										</span>
                                    </div>
                                </div>
                            </Swiper>
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

export default Testimonials;
