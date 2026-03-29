import services from "../../../public/data/service/hire-service-overview-data.json";

const getHireServiceData = (slug) => {
    if (!slug) return null;
    return services[slug] || null;
};

export default getHireServiceData;
