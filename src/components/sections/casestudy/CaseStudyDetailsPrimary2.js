"use client";
import CtaSidebar from "./CtaSidebar";

const CasestudyDetailsPrimary2 = ({option}) => {
    const {prevId, nextId, currentItem, isPrevItem, isNextItem} = option || {};
    const {img, title, id, content, clientWords, clientProfile} = currentItem || {};

    return (<section className="tj-blog-section section-gap">
        <div className="container">
            <div className="row rg-50">
                <div className="col-lg-8">
                    <div className="post-details-wrapper">
                        {Array.isArray(content) && content.map((item, index) => (
                            <div key={index} className="tj-sidebar-widget blog-item style-4">
                                <div className="blog-content-mod">
                                    <div className="title-area">

                                        {/* TITLE */}
                                        {item?.title && (<div className="project-text">
                                            <h3 className="title-casestudy">{item.title}</h3>
                                        </div>)}

                                        {/* SUB LINE */}
                                        {item?.subLine && (<p className="wow fadeInUp" data-wow-delay=".3s">
                                            {item.subLine}
                                        </p>)}

                                        {/* PARAGRAPH DATA (string) */}
                                        {typeof item?.data === "string" && (<div
                                            className="wow fadeInUp"
                                            data-wow-delay=".6s"
                                            dangerouslySetInnerHTML={{__html: item.data}}
                                        />)}
                                    </div>

                                </div>

                            </div>))}

                        <blockquote className="wow fadeInUp" data-wow-delay=".3s">
                            <div
                                className="wow fadeInUp"
                                data-wow-delay=".6s"
                                dangerouslySetInnerHTML={{__html: clientWords.data}}
                                style={{fontStyle: "italic"}}
                            />
                            <cite>{clientWords.by}</cite>
                        </blockquote>

                    </div>
                </div>
                <div className="col-lg-4">
                    <aside className="tj-main-sidebar">
                        {/* <!-- category --> */}
                        <div
                            className="tj-sidebar-widget widget-categories wow fadeInUp"
                            data-wow-delay=".1s"
                        >
                            <h4 className="widget-title">Project Info</h4>
                            {clientProfile.map((html, i) => (
                                <div key={i} dangerouslySetInnerHTML={{__html: html}}/>))}


                        </div>
                        {/* <!-- cta --> */}
                        <div
                            className="tj-sidebar-widget widget-feature-item wow fadeInUp"
                            data-wow-delay=".3s"
                        >
                            <CtaSidebar/>
                        </div>
                    </aside>
                </div>
            </div>
        </div>
    </section>);
};

export default CasestudyDetailsPrimary2;
