const getHtmlStringData = async (slug) => {
    if (!slug) return null;

    try {
        const mod = await import(`@/data/blogHtmlData/${slug}.js`);
        return mod.default;
    } catch (err) {
        return null;
    }
};

export default getHtmlStringData;
