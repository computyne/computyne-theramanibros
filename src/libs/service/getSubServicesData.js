import subServices from "../../../public/data/service/sub-services.json";

const getSubServicesData = (slug) => {
    if (!slug) return null;
    return subServices[slug] || null;
};

export default getSubServicesData;
