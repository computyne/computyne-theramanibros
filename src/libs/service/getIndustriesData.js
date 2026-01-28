import industries from "../../../public/data/service/industries.json";

const getIndustriesData = (slug) => {
    if (!slug) return null;
    return industries[slug] || null;
};

export default getIndustriesData;
