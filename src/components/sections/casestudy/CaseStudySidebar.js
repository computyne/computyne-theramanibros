import CategoriesWidget from "./widgets/CategoriesWidget";

const CaseStudySidebar = ({type}) => {
    return (
        <aside className={`tj-main-sidebar ${type == 2 ? "p-0" : ""}`}>
            <CategoriesWidget/>
        </aside>
    );
};

export default CaseStudySidebar;
