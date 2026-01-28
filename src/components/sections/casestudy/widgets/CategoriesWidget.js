import countDataLength from "@/libs/countDataLength";
import filterItems from "@/libs/filterItems";
import getCaseStudy from "@/libs/getCaseStudies";
import getCaseStudyCategories from "@/libs/getCaseStudyCategories";
import makePath from "@/libs/makePath";
import modifyNumber from "@/libs/modifyNumber";
import Link from "next/link";

const CategoriesWidget = () => {
    const categories = getCaseStudyCategories();
    const casestudy = getCaseStudy();
    return (
        <div className="tj-sidebar-widget widget-categories tj-sidebar-widget-custom">
            <ul className="filter-ul">
                {/* ALL */}
                <li>
                    <Link href="/case-studies">
                        <span className="title">All</span> <span
                        className="number">({modifyNumber(casestudy.length)})</span>
                    </Link>
                </li>
                {categories?.length
                    ? categories?.map((category, idx) => (
                        <li key={idx}>
                            <Link href={`/case-studies?category=${makePath(category.name)}`}>
                                <span className="title">{category.name}{" "}</span>
                                <span className="number">
										(
                                    {modifyNumber(
                                        countDataLength(
                                            filterItems(casestudy, "category", makePath(category.name))
                                        )
                                    )}
                                    )
									</span>
                            </Link>{" "}
                        </li>
                    ))
                    : ""}
            </ul>
        </div>
    );
};

export default CategoriesWidget;
