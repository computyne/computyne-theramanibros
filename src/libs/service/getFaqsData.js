import faqs from "../../../public/data/service/faqs.json";

const getFaqsData = (slug) => {
    if (!slug) return null;
    return faqs[slug] || null;
};

export default getFaqsData;
