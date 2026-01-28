import Script from "next/script";

export default function JsonLd({id, schema}) {
    if (!schema) return null;

    return (
        <Script
            id={id}
            strategy="beforeInteractive"
            type="application/ld+json"
            dangerouslySetInnerHTML={{
                __html: JSON.stringify(schema, null, 2)
            }}
        />
    );
}
