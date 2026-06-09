export default function PageJsonLd({
  schemas,
}: {
  schemas: Record<string, unknown>[];
}) {
  const graph = {
    "@context": "https://schema.org",
    "@graph": schemas,
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(graph) }}
    />
  );
}
