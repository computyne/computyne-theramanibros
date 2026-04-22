import process from "../../../public/data/service/process-data.json";

const getProcessData = (slug) => {
    if (!slug) return null;
    return process[slug] || null;
};

export default getProcessData;
