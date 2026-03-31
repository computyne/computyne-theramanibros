import Link from "next/link";

const ToolCategoriesWidget = ({ toolCategories = [] }) => {
    return (
        <div className="col-md-12">
            <div className="tj-sidebar-widget widget-tool-categories">
                <nav>
                    {toolCategories?.length
                        ? (
                            <div className="row">
                                {toolCategories?.map((category, idx) => (
                                    <div key={idx} className="col-md-4 col-sm-12 mb-3">
                                        <div className="card tool-category-card h-100">
                                            <div className="card-body d-flex flex-column">
                                                <h5 className="card-title category-title">{category.category}</h5>
                                                <div className="tagcloud">
                                                    {(category.tags || category.tools)?.map((item, itemIdx) => (
                                                        <span key={itemIdx} className="tool-tag">
                                                            {item}
                                                        </span>
                                                    ))}
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        )
                        : ""}
                </nav>
            </div>
        </div>
    );
};

export default ToolCategoriesWidget;
