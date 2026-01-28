import whyChooseUs from "../../../public/data/service/why-choose-us.json";

const getWhyChooseUsData = (slug) => {
    if (!slug) return null;
    return whyChooseUs[slug] || null;
};

export default getWhyChooseUsData;
