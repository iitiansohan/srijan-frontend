export default function Seo({
    title = "Srijan | Official Website",
    description = "Srijan is the biggest socio-cultural fest of Eastern India organised by Indian Institute of Technology (Indian School of Mines) Dhanbad. Every year, this three-day event attracts more than 30,000 students from more than 200 institutions across the country. It offers young talents a grand stage where they can connect, develop, and bring out their skills, personality, and creativity",
    url = "https://srijan2026.vercel.app"
}) {
    return (
        <>
            <title>{title}</title>

            <meta name="description" content={description} />
            <meta name="viewport" content="width=device-width, initial-scale=1.0" />

            <meta property="og:title" content={title} />
            <meta property="og:description" content={description} />
            <meta property="og:url" content={url} />
            <meta property="og:type" content="website" />

            <meta name="twitter:card" content="summary_large_image" />
            <meta name="twitter:title" content={title} />
            <meta name="twitter:description" content={description} />
            <meta name="twitter:url" content={url} />
        </>
    );
}
