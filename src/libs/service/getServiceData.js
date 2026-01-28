import services from "../../../public/data/service/service-overview-data.json";

const getServiceData = (slug) => {
    if (!slug) return null;
    return services[slug] || null;
};

export default getServiceData;
