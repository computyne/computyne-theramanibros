"use client";

import { submitContactForm } from "@/app/actions/contactAction";
import ButtonPrimaryLoading from "@/components/sections/contact-page/ButtonPrimaryLoading";
    import {useRef, useState, useTransition} from "react";

const ContactCard = () => {
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
        <section className="tj-contact-section-2 section-bottom-gap mt-minus-350">
            <div className="container">
                <div className="row">
                    <div className="col-lg-6">
                    </div>
                    <div className="col-lg-6">
                        <div className="contact-form wow fadeInUp" data-wow-delay=".1s">
                            <h3 className="title">
                                Let’s Talk With Our Data Specialist
                            </h3>
                            <form id="contact-form" action={handleSubmit}>
                                <div className="row">
                                    <div className="col-sm-6">
                                        <div className="form-input">
                                            <input
                                                type="text"
                                                name="cfName"
                                                placeholder="Full Name*"
                                            />
                                        </div>
                                    </div>
                                    <div className="col-sm-6">
                                        <div className="form-input">
                                            <input
                                                type="email"
                                                name="cfEmail"
                                                placeholder="Email Address*"
                                            />
                                        </div>
                                    </div>
                                    <div className="col-sm-6">
                                        <div className="form-input">
                                            <input
                                                type="tel"
                                                name="cfPhone"
                                                placeholder="Phone number*"
                                            />
                                        </div>
                                    </div>
                                    <div className="col-sm-6">
                                        <div className="form-input">
                                            <input
                                                type="text"
                                                name="cfSubject"
                                                placeholder="Subject*"
                                            />
                                        </div>
                                    </div>
                                    <div className="col-sm-12">
                                        <div className="form-input message-input">
											<textarea
                                                name="cfMessage"
                                                id="message"
                                                placeholder="Type message*"
                                            ></textarea>
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
                </div>
            </div>
        </section>
    );
};

export default ContactCard;
