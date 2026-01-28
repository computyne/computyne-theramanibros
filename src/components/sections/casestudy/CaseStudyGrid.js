"use client";
import Paginations from "@/components/shared/others/Paginations";
import usePagination from "@/hooks/usePagination";
import {useEffect} from "react";
import CaseStudyCard from "@/components/sections/casestudy/CaseStudyCard";
import CaseStudySidebar from "@/components/sections/casestudy/CaseStudySidebar";

const CaseStudyGrid = ({filteredItems, isSidebar = false}) => {
    // const items = useMemo(() => getCaseStudy());
    // const limit = 6;
    const items = [...filteredItems];
    const limit = 9;
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
    useEffect(() => {
        setCurrentpage(0);
    }, [totalItems]);
    return (
        <section className="tj-blog-section section-gap">
            <div className="container">
                <div className="row row-gap-5">

                    <div className="col-lg-12">
                        <CaseStudySidebar type={2}/>
                    </div>

                    <div className="col-lg-12">
                        <div className="row row-gap-4">
                            {currentItems?.length
                                ? currentItems?.map((casestudy, idx) => (
                                    <div
                                        key={idx}
                                        className={`col-md-4`}
                                    >
                                        <CaseStudyCard casestudy={casestudy} idx={idx}/>
                                    </div>
                                ))
                                : ""}
                        </div>
                        {filteredItems?.length >= 8 && (
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
                                type={isSidebar ? 2 : 1}
                            />
                        )}

                    </div>
                </div>
            </div>
        </section>
    );
};

export default CaseStudyGrid;
