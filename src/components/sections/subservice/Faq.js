"use client";
import ButtonPrimary from "./ButtonPrimary";
import BootstrapWrapper from "./BootstrapWrapper";
import FaqItem from "./FaqItem";
import {usePathname} from "next/navigation";
import getFaqsData from "@/libs/service/getFaqsData";

const Faq = () => {
    const items = [
        {
            "title": "What are resume/CV formatting services?",
            "desc": "Resume and CV formatting services focus on transforming candidate resumes into clean, branded, and ATS-compliant documents. They ensure consistency in layout, design, fonts, and structure so recruitment agencies can present professional, client-ready profiles quickly.",
            "initActive": true
        },
        {
            "title": "Why should recruitment or staffing agencies outsource resume formatting?",
            "desc": "Outsourcing resume formatting significantly reduces turnaround time, lowers internal workload, eliminates the need for in-house resources, and accelerates candidate submissions. It also ensures every resume meets agency branding, layout standards, and ATS compliance—leading to improved placement success."
        },
        {
            "title": "Are the formatted resumes ATS-friendly?",
            "desc": "Yes. All resumes are formatted using ATS-compatible templates, fonts, layouts, and keyword-ready structures to ensure files are easily parsed by Applicant Tracking Systems and recruitment platforms."
        },
        {
            "title": "What formats can resumes be delivered in?",
            "desc": "Formatted resumes are delivered in MS Word, PDF, or Google Docs. If required, scanned resumes (JPG/PDF) can be converted into fully editable Word formats."
        },
        {
            "title": "Do you support bulk resume formatting?",
            "desc": "Yes. High-volume resume formatting is available for bulk hiring campaigns, seasonal recruitment cycles, and urgent client submissions. Processing capacity can scale up to 10x depending on demand."
        },
        {
            "title": "Can you work on custom templates or create new ones?",
            "desc": "Yes. We can follow your existing resume templates or design fresh, branded layouts tailored to your recruitment agency’s guidelines or client-specific expectations."
        },
        {
            "title": "Do you also rewrite summaries or highlight skills during formatting?",
            "desc": "Yes. Optional add-on services include rewriting summaries, highlighting core skills, extracting key achievements, and tailoring the resume based on job descriptions or industry-specific roles."
        },
        {
            "title": "What is the turnaround time (TAT)?",
            "desc": "Standard delivery ranges from same-day to 24-hour turnaround depending on volume. Faster express delivery options are available upon request."
        },
        {
            "title": "How do you ensure data privacy and confidentiality?",
            "desc": "All resumes are handled under strict confidentiality. Secure file transfer methods, controlled access systems, and NDAs are applied to protect candidate and client data at every stage."
        },
        {
            "title": "Is there a minimum order requirement?",
            "desc": "No. Services can be scheduled for single-resume requests or large-volume recurring batches based on your operational needs."
        },
        {
            "title": "Do you provide white-label resume formatting services?",
            "desc": "Yes. All documents can be delivered fully white-labeled—showing only your agency’s logo, branding, and styling, with no third-party references included."
        },
        {
            "title": "How can we submit resumes for formatting?",
            "desc": "Resumes can be shared via email, shared drive, CRM/ATS integration, or a secure client portal—whichever workflow best fits your recruitment process."
        }
    ];

    const pathname = usePathname();
    const slug = pathname.split("/").filter(Boolean).pop();

    const faqs = getFaqsData(slug);

    const faqsData =
        !faqs || Object.keys(faqs).length === 0
            ? getFaqsData("data-extraction-services")
            : faqs;

    return (
        <section className="h7-faq section-gap slidebar-stickiy-container">
            <div className="container">
                <div className="row justify-content-between">
                    <div className="col-12 col-lg-4">
                        <div className="sec-heading style-2 style-7 slidebar-stickiy">
							<span className="sub-title wow fadeInUp" data-wow-delay=".3s">
								<i className="tji-box"></i> FAQs
							</span>
                            <h2 className="sec-title text-anim">
                                Frequently Asked Questions
                            </h2>
                            <div className="btn-area wow fadeInUp mt-30" data-wow-delay=".8s">
                                <ButtonPrimary text={faqsData.cta} url={"/contact-us"}/>
                            </div>
                        </div>
                    </div>
                    <div className="col-12 col-lg-8">
                        <BootstrapWrapper>
                            <div
                                className="accordion tj-faq style-2 h7-faq-wrapper"
                                id="faqTwo"
                            >
                                {faqsData.faq?.length
                                    ? faqsData.faq?.map((item, idx) => (
                                        <FaqItem key={idx} item={item} idx={idx}/>
                                    ))
                                    : ""}
                            </div>
                        </BootstrapWrapper>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Faq;
