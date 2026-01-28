"use client";
import usePagination from "@/hooks/usePagination";
import getTeamMembers from "@/libs/getTeamMembers";
import TeamCard from "./TeamCard";
import ButtonPrimary from "./ButtonPrimary";
import Paginations from "./Paginations";

const Team = ({type}) => {
    const items = getTeamMembers();
    const limit = type === 2 ? 8 : 4;
    // get pagination details
    const {
        currentItems,
        currentpage,
        setCurrentpage,
        paginationItems,
        currentPaginationItems,
        totalPages,
        handleCurrentPage,
        firstItem,
        lastItem,
    } = usePagination(items, limit);
    const totalItems = items?.length;
    const totalItemsToShow = currentItems?.length;
    return (
        <section
            className={` ${
                type === 2
                    ? "tj-team-section section-gap"
                    : type === 3
                        ? "tj-team-section-3 section-gap section-gap-x"
                        : "tj-team-section section-separator"
            }`}
        >
            <div className="container">
                {type === 2 ? (
                    ""
                ) : (
                    <div className="row">
                        <div className="col-12">
                            <div
                                className={`sec-heading  ${
                                    type === 3 ? "" : "style-2"
                                }`}
                            >
								<span className="sub-title wow fadeInUp" data-wow-delay=".3s">
									{type === 3 ? <i className="tji-box"></i> : ""}
                                    Meet Our Team
								</span>
                                {type === 3 ? (
                                    <h2 className="sec-title title-anim">
                                        Our <span>Leadership</span>
                                    </h2>
                                ) : (
                                    <h2
                                        className={`sec-title ${
                                            type === 2 ? "title-anim" : "text-anim"
                                        }`}
                                    >
                                        People Behind <span>Bexon.</span>
                                    </h2>
                                )}
                            </div>
                        </div>
                    </div>
                )}

                <div className="row leftSwipeWrap">
                    {currentItems?.length
                        ? currentItems.map((item, idx) => (
                            <div key={idx} className="col-lg-4 col-sm-6">
                                <TeamCard teamMember={item}/>
                            </div>
                        ))
                        : ""}
                </div>
                {type === 2 ? (
                    ""
                ) : (
                    <div
                        className="team-btn d-md-none mt-40 text-center wow fadeInUp"
                        data-wow-delay="0.9s"
                    >
                        <ButtonPrimary text={"More member"} url={"/team"}/>
                    </div>
                )}
                {type === 2 && totalItemsToShow < totalItems ? (
                    <Paginations
                        paginationDetails={{
                            currentItems,
                            currentpage,
                            setCurrentpage,
                            paginationItems,
                            currentPaginationItems,
                            totalPages,
                            handleCurrentPage,
                            firstItem,
                            lastItem,
                        }}
                    />
                ) : (
                    ""
                )}
            </div>
        </section>
    );
};

export default Team;
