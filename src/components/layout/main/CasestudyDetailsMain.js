import CasestudyDetailsPrimary2 from "@/components/sections/casestudy/CaseStudyDetailsPrimary2";
import getCaseStudy from "@/libs/getCaseStudies";
import getPreviousNextItem from "@/libs/getPreviousNextItem";
import HeroInnerCasestudy from "@/components/sections/hero/HeroInnerCasestudy";

const CasestudyDetailsMain = ({currentItem}) => {
    const items = getCaseStudy();
    // const currentId = currentItemId;
    // const option = getPreviousNextItem(items, currentId);
    // const { title } = option?.currentItem || {};

    const option = getPreviousNextItem(items, currentItem);

    const {title, img, detailsImg} = currentItem || {};
    return (
        <div>
            <HeroInnerCasestudy
                title={title ? title : "Casestudy Details"}
                text={title ? title : "Casestudy Details"}
                breadcrums={[{name: "Case Studies", path: "/case-studies"}]}
                bgImg={detailsImg}
            />
            <CasestudyDetailsPrimary2 option={option}/>
        </div>
    );
};

export default CasestudyDetailsMain;
