const getSchemaByPathNdSlug = async (path, slug) => {
    if (!slug || !path) return null;
    console.log("SLUG ", slug, "PATH ", path)

    try {
        const mod = await import(`@/data/${path}/${slug}.js`);
        return mod.schema;
    } catch (err) {
        return null;
    }
};

export default getSchemaByPathNdSlug;
