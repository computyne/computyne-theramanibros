export default function JsonLd({id, schema}) {
    if (!schema) return null;

    return (
        <script
            id={id}
            type="application/ld+json"
            dangerouslySetInnerHTML={{
                __html: JSON.stringify(schema, null, 2)
            }}
        />
    );
}
